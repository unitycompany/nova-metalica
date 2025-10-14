// Vercel Serverless Function: RSS feed for Nova Metálica Blog
// Fetches Firestore documents via REST and emits an RSS 2.0 feed

export const config = { runtime: 'edge' };

const PROJECT_ID = 'novametalica-bb05f';
// Fallback to the public API key in repo if env var not set
const API_KEY = process.env.FIREBASE_API_KEY || 'AIzaSyCm0N9VNANfmzK_GfJxx1regbzmmHJt2jo';
const SITE_URL = 'https://novametalica.com.br';

const collections = ['Artigos', 'Blog'];

const slugify = (text) => {
  if (!text || typeof text !== 'string') return '';
  return text
    .normalize('NFD')
    // remove diacritics using explicit unicode range for combining marks
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

const parseDate = (str) => {
  // expects DD/MM/YYYY, fallback to now
  if (!str || typeof str !== 'string') return new Date();
  const m = str.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!m) return new Date();
  const [_, dd, mm, yyyy] = m;
  return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
};

const getString = (field) => {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (field.stringValue) return field.stringValue;
  return '';
};

const mapDoc = (doc) => {
  const fields = doc.fields || {};
  const titulo = getString(fields.titulo) || getString(fields.title);
  const description = getString(fields.description) || getString(fields.descricao) || '';
  const autor = getString(fields.autor) || '';
  const topico = getString(fields.topico) || '';
  const dataStr = getString(fields.data) || '';
  const slug = getString(fields.slug) || getString(fields.link) || slugify(titulo) || (doc.name?.split('/').pop() || '');
  const pubDate = parseDate(dataStr);
  const url = `${SITE_URL}/blog/${slug}`;
  return { titulo, description, autor, topico, pubDate, url, slug };
};

const fetchCollection = async (collection) => {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${encodeURIComponent(collection)}?key=${API_KEY}`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Firestore fetch failed: ${resp.status}`);
  const data = await resp.json();
  const docs = data.documents || [];
  return docs.map(mapDoc);
};

const buildRss = (items) => {
  const escape = (s) => String(s || '').replace(/[&<>]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
  const rssItems = items.map((it) => `\n    <item>\n      <title>${escape(it.titulo)}</title>\n      <link>${escape(it.url)}</link>\n      <guid>${escape(it.url)}</guid>\n      <pubDate>${new Date(it.pubDate).toUTCString()}</pubDate>\n      <description>${escape(it.description)}</description>\n    </item>`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Nova Metálica — Blog</title>\n    <link>${SITE_URL}</link>\n    <description>Artigos sobre Steel Frame e construção.</description>\n    <language>pt-BR</language>${rssItems}\n  </channel>\n</rss>`;
};

export default async function handler() {
  try {
    const results = await Promise.allSettled(collections.map((c) => fetchCollection(c)));
    const all = results
      .filter((r) => r.status === 'fulfilled')
      .flatMap((r) => r.value)
      .filter((x) => x && x.titulo && x.url);

    // sort desc by date
    all.sort((a, b) => b.pubDate - a.pubDate);

    const rss = buildRss(all);
    return new Response(rss, {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=60, s-maxage=300'
      }
    });
  } catch (err) {
    console.error('RSS error:', err);
    // serve minimal, non-empty feed to avoid "fonte vazia"
    const fallback = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Nova Metálica — Blog</title>\n    <link>${SITE_URL}</link>\n    <description>Feed temporariamente indisponível.</description>\n    <language>pt-BR</language>\n  </channel>\n</rss>`;
    return new Response(fallback, {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'no-store'
      }
    });
  }
}
