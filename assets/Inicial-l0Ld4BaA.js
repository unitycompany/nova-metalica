import{p as c,d as i,j as e,s as p}from"./index-DmuCLzzL.js";import{B as h}from"./Button05-BDENx0df.js";const f=c`
    0% {
        transform: translateY(-5px) scale(1);
    }

    50% {
        transform: translateY(50px) scale(1.05);
    }
`,m=i.section`
    width: 100%;
    height: 100vh;
    width: 1140px;
    left: 50%;
    top: 0;
    padding: 0 0 5% 0;
    transform: translateX(-50%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    gap: 150px;

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
        text-align: center;

        & > h1 {
            font-size: 40px;
            font-weight: 300;
        }

        & > p {
            width: 70%;
            font-weight: 300;
            font-size: 20px;
        }
    }

    & > div:nth-child(2){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;
        animation: ${f} 5s linear infinite;

        & > a {

            color: var(--color--black);
            transition: all .2s ease;

            &:hover{
            transform: scale(1.1);
            color: var(--color--blue);
            }
        }
        
    }
`,u=()=>e.jsx(e.Fragment,{children:e.jsxs(m,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Produtos direto da fábrica"}),e.jsx("p",{children:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida."})]}),e.jsx("div",{children:e.jsx("a",{href:"#produtos",children:e.jsx(p,{size:40})})})]})}),b=i.div`
    width: 100%;
    height: auto;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;

        & > h1 {
            font-size: 24px;
            font-weight: 400;
        }
    }

    & > div:nth-child(2){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2.5% 5%;
        background-color: var(--color--dark--blue);
        border-radius: 20px;
        gap: 20px;

        & > a {
            padding: 12px 20px;
            border-radius: 12px;
            background-color: var(--color--white);
            color: var(--color--dark--blue);
            font-weight: 400;
            font-size: 14px;
            transition: all .3s ease-in-out;

            &:hover{
                background-color: var(--color--blue);
                color: var(--color--white);
                transform: scale(.95);
            }
        }
    }
`,x=()=>e.jsx(e.Fragment,{children:e.jsxs(b,{id:"produtos",children:[e.jsx("div",{children:e.jsx("h1",{children:"Filtre sua busca, vá direto para o que desejas"})}),e.jsxs("div",{children:[e.jsx("a",{href:"#",children:"Steel Frame"}),e.jsx("a",{href:"#",children:"Drywall"}),e.jsx("a",{href:"#",children:"Telhados Engenheirados"}),e.jsx("a",{href:"#",children:"Fachadas Engenheiradas"}),e.jsx("a",{href:"#",children:"Galpões Industriais"})]})]})}),g=i.section`
  width: 100%;
  max-width: 1140px;
  margin: 50px 0;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  position: relative;
  height: 60vh;
  display: flex;
  align-items: center;
  border-radius: 30px;
  justify-content: space-between;
  background-color: ${o=>o.background?o.background:"transparent"};
  flex-direction: ${o=>o.reverse?"row-reverse":"row"};
  gap: 30px;
  transition: all .5s ease-in-out;

  &:hover{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  & > div:nth-child(1){
    width: 55%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img{
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 30px;
    }
  }

  & > div:nth-child(2){
    width: 45%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    padding-left: ${o=>o.padding?o.padding:"0%"};

    & > h1{
      font-size: 26px;
      color: ${o=>o.color?o.color:"var(--color--black)"};
      font-weight: 400;
    }

    & > p{
      opacity: 0.8;
      font-size: 14px;
      color: ${o=>o.color?o.color:"var(--color--black)"}; /* Aqui também */
      width: 90%;
    }
  }
`,r=({image:o,title:s,description:a,reverse:t,background:n,color:d,padding:l})=>e.jsxs(g,{reverse:t,background:n,color:d,padding:l,children:[e.jsx("div",{children:e.jsx("img",{src:o,alt:"imagem do produto"})}),e.jsxs("div",{children:[e.jsx("h1",{children:s}),e.jsx("p",{children:a}),e.jsx(h,{text:"Saber mais"})]})]});i.section`
    width: 100%;
    padding: 0 5%;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    position: relative;
    height: auto;
    border: 1px solid red;
    
`;const v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public",title:"Steel Frame",description:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida.",background:"var(--color--dark--blue)",color:"var(--color--white)"}),e.jsx(r,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public",title:"Drywall",description:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida.",background:"#00000010",color:"var(--color--black)",reverse:!0,padding:"5%"}),e.jsx(r,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public",title:"Telhados Engenheirados",description:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida.",background:"var(--color--blue)",color:"var(--color--white)"}),e.jsx(r,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public",title:"Fachadas Engenheiradas",description:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida.",background:"var(--color--black)",color:"var(--color--white)",reverse:!0,padding:"5%"}),e.jsx(r,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public",title:"Galpões Industriais",description:"Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida.",background:"#00000005",color:"var(--color--black)"})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx(x,{}),e.jsx(v,{})]});export{y as default};
