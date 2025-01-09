import{d,r as l,j as e,q as v,f as u,g as b,s as y,t as j,h as m,w as B,v as S,a as C}from"./index-DQu0KJge.js";import{B as f}from"./Button05-B3VT13Gu.js";const A=d.section`
    width: 100%;
    height: 100vh;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 10% 0 5% 0;
`,G=d.div`
    width: 55%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 40px;
    border-radius: 0px 15px 15px 0px;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cef8b191-587e-4d10-2225-47b90e631200/public');
    filter: contrast(120%);
    background-position: center;
    background-size: cover;
    border-image: 0 fill linear-gradient(90deg, #00000050, #0000);

    & > div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
        justify-content: center;

        & > h1 {
            font-size: 28px;
            font-weight: 600;
            background: linear-gradient(130deg, var(--color--white), var(--color--gray));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent; 
            line-height: 120%;
        }

        & > p {
            font-size: 16px;
            font-weight: 400;
            opacity: 1;
            color: var(--color--white);
        }

        & > span {
            font-size: 12px;
            font-style: italic;
            opacity: .8;
            color: var(--color--white);

            & > b{
                font-weight: 500;
                color: var(--color--white);
            }
        }
    }
`,E=d.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div:nth-child(1){
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 60%;
        border-radius: 0px 15px 15px 0px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 30px;
        border-image: 0 fill linear-gradient(90deg, #00000050, #0000);

            & > div {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 24px;
                font-weight: 600;
                background: linear-gradient(130deg, var(--color--white), var(--color--gray));
                -webkit-background-clip: text;  
                background-clip: text; 
                color: transparent; 
                line-height: 120%;
            }

            & > p {
                font-size: 14px;
                font-weight: 300;
                opacity: 1;
                color: var(--color--white);
            }

            & > span {
                font-size: 10px;
                opacity: .8;
                font-style: italic;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }
        }
    }

    & > div:nth-child(2){
        height: 40%;
        width: 100%;
        border-radius: 0px 15px 15px 0px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 30px;
        background-color: var(--color--white);
        position: relative;
        z-index: 1;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbea8596-157f-401b-c346-8c9da797ee00/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        border-image: 0 fill linear-gradient(90deg, #00000050, #0000);
        overflow: hidden;

            & > div {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 20px;
                font-weight: 600;
                background: linear-gradient(130deg, var(--color--white), var(--color--gray));
                -webkit-background-clip: text;  
                background-clip: text; 
                color: transparent; 
                line-height: 120%;
            }

            & > p {
                font-size: 12px;
                font-weight: 400;
                opacity: 1;
                color: var(--color--white);
            }

            & > span {
                font-size: 10px;
                opacity: .8;
                font-style: italic;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }
        }
    }
`,q=()=>{const[i,a]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const r=v(u(b,"Blog"),y("data","desc"),j(3)),s=(await m(r)).docs.map(t=>({id:t.id,...t.data()}));a(s)}catch(r){console.error("Erro ao buscar os últimos blogs:",r)}})()},[]),e.jsx(A,{children:i.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(G,{style:{backgroundImage:`url(${i[0].image})`},children:e.jsxs("div",{children:[e.jsx("h1",{children:i[0].titulo}),e.jsxs("span",{children:["Escrito por: ",e.jsx("b",{children:i[0].autor})," | ",i[0].data]}),e.jsx(f,{text:"Saber mais sobre esse artigo"})]})}),e.jsx(E,{children:i.slice(1).map(o=>e.jsx("div",{style:{backgroundImage:`url(${o.image})`},children:e.jsxs("div",{children:[e.jsx("h1",{children:o.titulo}),e.jsxs("span",{children:["Escrito por: ",e.jsx("b",{children:o.autor})," | ",o.data]}),e.jsx(f,{text:"Saber mais sobre esse artigo"})]})},o.id))})]})})},L=d.div`
    width: 100%;
    height: 100vh;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
    background-color: var(--color--dark--blue);

    & > div:nth-child(1){
        height: 40%;
        width: 100%;
        border-radius: 20px;
        display: flex;
        align-items: flex-end;
        padding: 15px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cef8b191-587e-4d10-2225-47b90e631200/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        border-image: 0 fill linear-gradient(90deg, #0d142b95, #0000);

        & > div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 18px;
                font-weight: 600;
                color: var(--color--white);
            }

            & > p {
                font-size: 12px;
                font-weight: 400;
                opacity: 1;
                color: var(--color--white);
            }

            & > span {
                font-size: 10px;
                opacity: .8;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }

            & > button {
                font-size: 12px;
            }
        }
    }

    & > div:nth-child(2){
        height: 35%;
        width: 100%;
        border-radius: 20px;
        display: flex;
        align-items: flex-end;
        padding: 15px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        border-image: 0 fill linear-gradient(90deg, #0d142b95, #0000);

        & > div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 16px;
                font-weight: 600;
                color: var(--color--white);
                line-height: 120%;
            }

            & > p {
                font-size: 12px;
                font-weight: 400;
                opacity: 1;
                color: var(--color--white);
            }

            & > span {
                font-size: 10px;
                opacity: .8;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }

            & > button {
                font-size: 10px;
                padding: 10px 15px;
            }
        }
    }

    & > div:nth-child(3){
        height: 25%;
        width: 100%;
        border-radius: 20px;
        display: flex;
        align-items: flex-end;
        padding: 15px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbea8596-157f-401b-c346-8c9da797ee00/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        border-image: 0 fill linear-gradient(90deg, #0d142b95, #0000);

        & > div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 14px;
                line-height: 120%;
                color: var(--color--white);
                font-weight: 600;
            }

            & > p {
                font-size: 12px;
                font-weight: 400;
                opacity: 1;
                color: var(--color--white);
            }

            & > span {
                font-size: 8px;
                opacity: .8;
                font-style: italic;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }

            & > button {
                font-size: 10px;
                padding: 10px 15px;
            }
        }
    }

`,T=()=>{const[i,a]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const r=v(u(b,"Blog"),y("data","desc"),j(3)),s=(await m(r)).docs.map(t=>({id:t.id,...t.data()}));a(s)}catch(r){console.error("Erro ao buscar os últimos blogs:",r)}})()},[]),e.jsx(L,{children:i.map((o,r)=>e.jsx("div",{style:{backgroundImage:`url(${o.image})`},children:e.jsxs("div",{children:[e.jsx("h1",{children:o.titulo}),e.jsxs("span",{children:["Escrito por: ",e.jsx("b",{children:o.autor})," | ",o.data]}),e.jsx(f,{text:"Saber mais"})]})},o.id))})},_=d.div`
    width: 100%!important;
    height: 10%!important;
    display: flex!important;
    align-items: center!important;
    justify-content: space-between!important;
    flex-direction: row!important;
    gap: 20px;
    padding: 15px;
    background-color: var(--color--dark--blue);
    overflow: hidden!important;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

    & > div:nth-child(1) {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        & > input {
            padding: 10px;
            width: 85%;
            border-radius: 12px;
            background-color: var(--color--white);

            &::placeholder {
                font-size: 14px;
            }
        }

        & > button {
            width: 15%;
            padding: 10px;
            border-radius: 12px;
            cursor: pointer;
            background-color: var(--color--white);
        }
    }

    & > div:nth-child(2) {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 10px;

        & > button {
            background-color: var(--color--white);
            padding: 10px;
            font-size: 10px;
            border-radius: 10px;
            cursor: pointer;
        }

        & > button.active {
            background-color: var(--color--blue);
            color: var(--color--white);
        }
    }
`,$=({setFilteredArticles:i})=>{const[a,o]=l.useState(""),[r,p]=l.useState("Todos");l.useEffect(()=>{s(a,r)},[a,r]);const s=async(n,h)=>{try{let g=u(b,"Blog");h!=="Todos"&&(g=v(g,B("topico","==",h)));const k=(await m(g)).docs.map(x=>({id:x.id,...x.data()})).filter(x=>{const w=n.toLowerCase();return x.titulo.toLowerCase().includes(w)||x.hashtag.some(z=>z.toLowerCase().includes(w))});i(k)}catch(g){console.error("Erro ao buscar artigos:",g)}},t=n=>{o(n.target.value)},c=n=>{p(n)};return e.jsxs(_,{children:[e.jsxs("div",{children:[e.jsx("input",{type:"search",placeholder:"Qual artigo você está buscando?",value:a,onChange:t}),e.jsx("button",{type:"button",onClick:()=>s(a,r),children:e.jsx(S,{})})]}),e.jsx("div",{children:["Steel Frame","Drywall","Telhados","Todos"].map(n=>e.jsx("button",{className:r===n?"active":"",onClick:()=>c(n),children:n},n))})]})},F=d.div`
    width: 100%!important;
    height: 30vh;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    & > div:nth-child(1) {
        width: 50%;
        height: 100%;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #00000010;

        & > img {
            width: 100%;

            object-fit: cover;
            height: 100%;
            border-radius: 20px;
        }
    }

    & > div:nth-child(2){
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 15px 0;
        gap: 15px;
        height: 100%;

        & > span{
            font-size: 12px;
            color: var(--color--blue);
            cursor: pointer;
        }

        & > h1 {
            font-size: 20px;
            font-weight: 500;
            background: linear-gradient(-130deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent;  
        }

        & > p {
            font-size: 14px;
            opacity: .6;
            color: var(--color--black);
        }

        & > div{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 5px;

            & > span{
                padding: 5px;
                font-size: 10px;
                border-radius: 5px;
                background-color: #00000010;
                font-weight: 400;
                color: var(--color--black);
            }
        }

        & > button {
            font-size: 12px;
            padding: 10px 15px;
        }

        & > h6 {
            font-size: 10px;
            font-weight: 400;
            font-style: italic;
            color: var(--color--black);
        }
    }
`,H=({topico:i,titulo:a,description:o,hashtag:r,autor:p,data:s,image:t})=>e.jsxs(F,{children:[e.jsx("div",{children:e.jsx("img",{src:t,alt:"Imagem do post",loading:"lazy"})}),e.jsxs("div",{children:[e.jsx("span",{children:i})," ",e.jsx("h1",{children:a})," ",e.jsx("p",{children:o})," ",e.jsx("div",{children:r.map((c,n)=>e.jsxs("span",{children:["#",c]},n))}),e.jsx(f,{text:"Saber mais"})," ",e.jsxs("h6",{children:["Escrito por: ",e.jsxs("a",{href:"#",children:[" ",p," "]})," | ",s]})," "]})]}),I=d.section`
  width: 100%;
  max-width: 1140px;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 5vh;

  & > div:nth-child(1) {
    width: 30%;
  }

  & > div:nth-child(2) {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    & > div {
      width: 100%;
      overflow-y: scroll;
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 30px;
    }
  }
`,N=d.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: var(--color--dark--blue);
  color: var(--color--white);
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(0.95);
  }
`,D=()=>{const[i,a]=l.useState([]),[o,r]=l.useState(5),p=C();l.useEffect(()=>{(async()=>{try{const c=await m(u(b,"Blog"));if(c.empty)console.warn("Nenhum documento na coleção 'Blog'."),a([]);else{const n=c.docs.map(h=>({id:h.id,...h.data()}));console.log("Documentos encontrados:",n),a(n),console.log("Estado atualizado:",n)}}catch(c){console.error("Erro ao buscar blogs:",c)}})()},[]);const s=t=>{p(`/blog/${t}`)};return e.jsxs(I,{children:[e.jsx("div",{children:e.jsx(T,{})}),e.jsxs("div",{children:[e.jsx($,{setFilteredArticles:a,allArticles:i}),e.jsxs("div",{children:[i.length>0?i.slice(0,o).map(t=>e.jsx("div",{onClick:()=>s(t.link),style:{cursor:"pointer"},children:e.jsx(H,{topico:t.topico,titulo:t.titulo,description:t.description,hashtag:t.hashtag,autor:t.autor,data:t.data,image:t.image})},t.id)):e.jsx("p",{children:"Nenhum artigo encontrado."}),o<i.length&&e.jsx(N,{onClick:()=>r(o+5),children:"Ver mais blogs"})]})]})]})},M=()=>e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx(D,{})]});export{M as default};
