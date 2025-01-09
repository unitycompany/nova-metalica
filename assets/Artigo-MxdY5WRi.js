import{d as o,u as q,a as E,r as l,j as t,B as P,b as I,c as F,e as L,f as w,g as j,q as v,w as y,h as k}from"./index-DQu0KJge.js";import{S as C,a as X}from"./swiper-D1AgYzxQ.js";import{B as _}from"./Button05-B3VT13Gu.js";const $=o.section`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 10% 0% 5% 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
  height: auto;
`,N=o.div`
    width: 70%;
    height: 100vh;
    overflow-y: scroll;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    padding-right: 1.5%;

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        height: 80vh;
        gap: 20px;

        & > h1 {
            font-size: 32px;
            font-weight: 400;
            color: var(--color--black);
        }

        & > span {
            font-size: 12px;
            margin-top: -10px;
            opacity: .8;
            font-weight: 400;
            color: var(--color--black);

            & > b {
                font-weight: 500;
                color: var(--color--dark--blue);
            }
        }

        & > img {
            width: 100%;
            height: 70%;
            object-fit: cover;
            border-radius: 30px;
        }

        & > h6 {
            font-weight: 300;
            font-size: 10px;
            font-style: italic;
            padding-left: 30px;
        }
    }

    & > div:nth-child(2){
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 20px;

        & > p{
            font-size: 14px;
            font-weight: 400;
            line-height: 120%;
            opacity: .6;
        }

        & > h2{
            font-size: 24px;
            font-weight: 400;
            color: var(--color--black);
        }
    }

    & > div:nth-child(n + 3){
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 30px;

        & > h6 {
            font-weight: 300;
            font-size: 10px;
            font-style: italic;
            padding-left: 30px;
        }

        & > img{
            width: 100%;
            height: 50vh;
            object-fit: cover;
            border-radius: 30px;
        }

        & > h1{
            font-size: 30px;
            font-weight: 400;
            background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent; 
        }

        & > p{
            font-size: 14px;
            opacity: .8;
            color: var(--color);
        }
    }

    & > article {
        width: 100%;
        height: auto;
        padding: 40px;
        background-color: var(--color--dark--blue);
        border-radius: 30px;
        
        & > div{
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            gap: 20px;  
            color: var(--color--white);

            & > h1 {
                font-size: 24px;
                font-weight: 400;
            }

            & > p {
                font-size: 14px;
                opacity: .8;
            }

            & > form {
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;
                width: 100%;
                gap: 15px;

                & > input {
                    padding: 12px;
                    background-color: var(--color--white);
                    width: 100%;
                    border-radius: 12px;

                    &::placeholder{
                        font-size: 14px;
                    }
                }

                & > button {
                    background-color: var(--color--green);
                    padding: 15px;
                    width: 100%;
                    border-radius: 12px;
                    cursor: pointer;
                }
            }
        }
    }
`,D=o.div`
    width: 30%;
    height: 90vh;
    margin-right: 0%;
    background-color: #00000010;
    border-radius: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    
    & > div:nth-child(1){
        width: 100%;
        height: 40%;
        border-radius: 25px;
        background-color: var(--color--white);
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 10px;

        & > h3{
            font-weight: 500;
            font-size: 18px;
            background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent;
        }

        & > ol {
            padding-left: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: 14px;
            opacity: .6;

            & > li {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 5px;
                transition: transform .1s ease;
                cursor: pointer;

                &:hover{
                    transform: translateX(5px);
                    color: var(--color--blue);
                }

                & > a {
                    color: var(--color--black);
                    line-height: 120%;
                }
            }
        }
    }

    & > div:nth-child(2){
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color--white);
        border-radius: 20px;
        gap: 20px;

        & > a {
            color: var(--color--black);
            font-size: 24px;
            transition: all .1s ease;

            &:hover{
                color: var(--color--blue);
                transform: scale(.95);
            }
        }
    }
`,O=o.div`
    height: 25%;
    width: 100%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & > a > img {
        border: 1px solid red;
        object-fit: contain;
    }
`,V=o.div`
    height: 25%;
    width: 100%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    position: relative;
    background-color: var(--color--white);

    & > div{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;

        & > h2{
            font-size: 16px;
            font-weight: 500;
            margin: 5px 0;
        }

        & > p {
            font-size: 12px;
            font-weight: 400;
            opacity: calc().8;
        }

        & > button{
            font-size: 12px;
            padding: 10px 15px;
        }
    }
`;o.section`
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    margin: 2.5% 0 5% 0;
    max-width: 1140px;
    left: 50%;
    top: 0;
    position: relative;
    transform: translateX(-50%);
`;o.div`
  padding: 25px;
  height: 40vh;
  border-radius: 12px;
  background-color: #00000010;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  gap: 20px;

    & > h1 {
        font-size: 20px;
        font-weight: 400;
    }

    & > p {
        font-size: 12px;
        font-weight: 400;
        opacity: .6;
    }

    & > span {
        font-size: 10px;
        opacity: .4;
        font-style: italic;
        font-weight: 400;

        & > b{
            font-weight: 500;
            color: var(--color--blue);
        }
    }

    & > button {
        font-size: 12px;
        padding: 10px 15px;
    }
`;o.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    background-color: var(--color--dark--blue);
    max-width: 1140px;
    left: 50%;
    top: 0;
    position: relative;
    transform: translateX(-50%);
    border-radius: 20px;

    & > h1 {
        font-size: 24px;
        font-weight: 300;
        color: var(--color--white);
    }
`;const K=()=>{var u,m,b;const{slug:p}=q(),z=E(),[r,A]=l.useState(null),[x,S]=l.useState([]),[R,B]=l.useState(!0),[g,f]=l.useState(null);return l.useEffect(()=>{const e=async()=>{try{const a=w(j,"Artigos"),n=v(a,y("slug","==",p)),s=await k(n);if(s.empty)f("Artigo não encontrado.");else{const h=s.docs[0],c={id:h.id,...h.data()};A(c),i(c.tags)}}catch(a){console.error("Erro ao buscar artigo:",a),f("Ocorreu um erro ao carregar o artigo.")}finally{B(!1)}},i=async a=>{try{const n=w(j,"Artigos"),s=v(n,y("tags","array-contains-any",a)),c=(await k(s)).docs.map(d=>({id:d.id,...d.data()})).filter(d=>d.slug!==p);S(c)}catch(n){console.error("Erro ao buscar artigos relacionados:",n)}};e()},[p]),R?t.jsx("p",{children:"Carregando artigo..."}):g?t.jsx("p",{children:g}):r?t.jsx("div",{children:t.jsxs($,{children:[t.jsxs(N,{children:[t.jsxs("div",{children:[t.jsx("h1",{children:r.title}),t.jsxs("span",{children:["Escrito por: ",t.jsx("b",{children:r.autor})," | ",r.data]}),t.jsx("img",{src:r.imagemPrincipal,alt:"Imagem do blog"}),t.jsx("h6",{children:r.bibliografiaImagemPrincipal})]}),(u=r.sumario)==null?void 0:u.map((e,i)=>t.jsxs("div",{id:e.id,children:[t.jsx("h1",{children:e.title}),t.jsx("p",{children:e.content})]},i))]}),t.jsxs(D,{children:[t.jsxs("div",{children:[t.jsx("h3",{children:"Sumário"}),t.jsx("ol",{children:(m=r.sumario)==null?void 0:m.map((e,i)=>t.jsx("li",{children:t.jsxs("a",{href:`#${e.id}`,children:[t.jsx(P,{})," ",t.jsx("span",{children:e.title})]})},i))})]}),t.jsxs("div",{children:[t.jsx("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:t.jsx(I,{})}),t.jsx("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:t.jsx(F,{})}),t.jsx("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",children:t.jsx(L,{})})]}),t.jsx(O,{children:t.jsx(C,{spaceBetween:10,slidesPerView:1,navigation:!0,loop:!0,children:(b=r.carrosselImagens)==null?void 0:b.map((e,i)=>t.jsx(X,{children:t.jsx("a",{href:e.link,children:t.jsx("img",{src:e.src,alt:`Imagem do carrossel ${i+1}`,style:{width:"100%",borderRadius:"15px",height:"100%",objectFit:"contain"}})})},i))})}),t.jsxs(V,{children:[t.jsx("h3",{children:"Artigos Relacionados"}),x.length>0?x.map((e,i)=>t.jsxs("div",{children:[t.jsx("h2",{children:e.title}),t.jsx("p",{children:e.description}),t.jsx(_,{text:"Leia mais",onClick:()=>z(`/blog/${e.slug}`)})]},i)):t.jsx("p",{children:"Nenhum artigo relacionado encontrado."})]})]})]})}):t.jsx("p",{children:"Artigo não encontrado."})};export{K as default};
