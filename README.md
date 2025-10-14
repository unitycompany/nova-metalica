# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Suporte a LLMs (Notebook e ai.txt)

Este projeto expõe um documento em formato de “notebook” para facilitar a indexação e compreensão por LLMs/agentes:

- Notebook: `/site-notebook.ipynb` (também linkado via `<link rel="alternate" type="application/x-ipynb+json">` no `index.html`).
- Política de IA: `/ai.txt` com informações de contato e diretrizes de uso.
- `robots.txt` atualizado com apontamento para `ai.txt` e permissão explícita a crawlers de IA.

Como testar localmente (opcional):

1. Inicie o projeto (npm run dev).
2. Abra `http://localhost:5173/site-notebook.ipynb` para ver o JSON do notebook.
3. Verifique `http://localhost:5173/ai.txt` e `http://localhost:5173/robots.txt`.

Observações:

- O site é um SPA (Vite + React Router) com rewrites para `index.html`. Bots devem solicitar diretamente as rotas (ex.: `/sobre`) para obter o HTML e extrair conteúdo.
- Ajuste o conteúdo de `public/site-notebook.ipynb` conforme novas páginas e campanhas forem lançadas.
