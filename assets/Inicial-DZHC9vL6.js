import{d as s,a as u,j as i,i as g}from"./index-g8WeP5XZ.js";import{B as h}from"./Button05-LXOdtVjZ.js";import{B as x,F as j}from"./Form-C3c2119C.js";const v=s.section`
  width: 100%;
  transform: translateX(-50%);
  ${({padding:o})=>o==="padding-left"?"padding-left: 5%;":"padding-right: 5%;"} /* Posição dinâmica */
  left: 50%;
  top: 0;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({direction:o})=>o||"row"}; /* Flex direction dinâmico */
  gap: 50px;
  background: #353535;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 25% 0;
    padding-left: 0%;
    padding-right: 0%;
    height: auto;
    width: 97.5%;
    margin-right: 2.5%;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1081687f-ba98-453b-c651-444af1325800/public');
    background-position: center;
    background-size: cover;
    opacity: 0.4;

    @media (max-width: 768px){
      opacity: 0.2;
    }
  }
`,w=s.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 5%;
  }

  & > span {
    background-color: var(--color--white);
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    
    @media (max-width: 768px) {
      
    }

    & > svg {
      fill: var(--color--dark--blue);

      @media (max-width: 768px){
        font-size: 12px;
      }
    }

    & > p {    
      font-weight: 600;
      background: linear-gradient(90deg, var(--color--black), var(--color--blue));
      color: transparent;
      -webkit-background-clip: text;

      @media (max-width: 768px){
        font-size: 14px;
      }
    }
  }

  & > h1 {
    font-size: 36px;
    color: var(--color--white);
  }

  & > p {
    color: var(--color--white);
    font-size: 16px;
    line-height: 110%;

    @media (max-width: 768px){
      font-size: 14px;
      width: 100%;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`,y=s.div`
  width: 50%;
  height: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 768px){
    z-index: 1;
    opacity: 0.5;
    display: none;
  }

  @media (max-width: 768px){
    width: 100%;
  }

  & > img {
    width: 80%;
    height: auto;
    object-fit: contain;
    position: absolute;
    ${({position:o})=>o==="left"?"left: 0;":"right: 0;"} /* Posição dinâmica */
    bottom: 0;

    @media (max-width: 768px){
      width: 65%;
      display: none;
    }
  }
`,e=({titleCardTop:o,title:a,description:r,subDescription:d,image:n,direction:p,clipPath:l,padding:c,position:m,link:b})=>{const f=u();return i.jsxs(v,{direction:p,clipPath:l,padding:c,children:[i.jsxs(w,{children:[i.jsxs("span",{children:[i.jsx("p",{children:o}),i.jsx(g,{})]}),i.jsx("h1",{children:a}),i.jsxs("p",{children:[r,i.jsx("br",{})," ",i.jsx("br",{}),d]}),i.jsxs("div",{children:[i.jsx(x,{children:"Saber mais",onClick:()=>f(b||"/produtos")}),i.jsx(h,{children:"Solicitar orçamento",onClick:()=>{const t=document.getElementById("Form");t&&t.scrollIntoView({behavior:"smooth"})}})]})]}),i.jsx(y,{position:m,children:i.jsx("img",{src:n,alt:"Produto"})})]})},k=s.section`
    width: 100%;
    padding: 0% 0% 2.5% 0%;
    max-width: 1280px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: auto;
    gap: 30px;
    
`,C=()=>i.jsx(i.Fragment,{children:i.jsxs(k,{children:[i.jsx(e,{titleCardTop:"Perfil 100% Normatizados",title:"Steel Frame",description:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida.",subDescription:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis.",image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7991b741-023c-461d-7e61-509b7e768000/public",padding:"padding-left",link:"/produtos/steel-frame"}),i.jsx(e,{titleCardTop:"Qualidade 100% Garantida",title:"Drywall",description:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida.",subDescription:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis.",image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6c5c94de-a5ad-424e-17a6-3e5ea91cbc00/public",padding:"padding-right",position:"left",direction:"row-reverse",clipPath:"polygon(0 0, 2.5% 0, 2.5% 100%, 0 100%);",link:"/produtos/drywall"}),i.jsx(e,{titleCardTop:"Sistema 100% Aprovado",title:"Telhados Industriais",description:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida.",subDescription:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis.",image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5665bd67-d11b-4522-2f91-54ce0558fb00/public",padding:"padding-left",link:"/produtos/telhados-industriais"}),i.jsx(e,{titleCardTop:"Perfil 100% Normatizados",title:"Drywall",description:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida.",subDescription:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis.",image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d086625e-8598-49b1-653b-173f4335b300/public",padding:"padding-right",position:"left",direction:"row-reverse",clipPath:"polygon(0 0, 2.5% 0, 2.5% 100%, 0 100%);",link:"/produtos/galpoes-industriais"}),i.jsx(e,{titleCardTop:"Sistema 100% Aprovado",title:"Fachadas Engenheiradas",description:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida.",subDescription:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis.",image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e760f765-c8d2-4fb5-f2ce-b893382a4800/public",padding:"padding-left",link:"/produtos/fachadas-engenheiradas"}),i.jsx(j,{})]})}),z=()=>i.jsx(i.Fragment,{children:i.jsx(C,{})});export{z as default};
