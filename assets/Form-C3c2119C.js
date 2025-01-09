import{d as o,j as e,a as r}from"./index-g8WeP5XZ.js";const d=o.a`
    outline: none;
    cursor: pointer;
    border: none;
    padding: 15px 25px;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    border-radius: 10px;
    overflow: hidden;
    background: var(--color--white);
    color: var(--color--white);

    & span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    }

    &:hover span {
    color: var(--color--black);
    }

    &::before,
    &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    }

    &::before {
    content: "";
    background: var(--color--blue);
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
    }

    &:hover::before {
    transform: translate3d(100%, 0, 0);
    }
`,p=({children:a,href:t,onClick:i})=>e.jsx(d,{href:t,onClick:i,"data-aos":"fade-up","data-aos-delay":"100",children:e.jsx("span",{children:a})}),n=o.div`
    width: 100%;
    height: auto;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 15% 5% 5% 5%;
    }
`,l=o.div`
    width: 55%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 35px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > img {
        width: 150px;   
        
        @media (max-width: 768px){
            width: 120px;
        }
    }

    & > h1{
        font-size: 32px;
        font-weight: 500;
        color: var(--color--dark--blue);
        width: 70%;
        white-space: nowrap;

        @media (max-width: 768px){
            white-space: wrap;
            font-size: 28px;
            width: 80%;
            text-align: center;
            line-height: 100%;
        }
    }

    & > p {
        width: 85%;
        font-size: 16px;
        font-weight: 300;
        opacity: .6;

        @media (max-width: 768px){
            text-align: center;
            opacity: 0.8;
            width: 100%;
        }

        & > a{
            color: var(--color--blue);
            text-decoration: underline;
        }
    }
`,s=o.form`
    width: 45%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;
    border-radius: 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px){
        width: 100%;
    }

    & > h1 {
        font-size: 28px;
        text-align: left;
        padding-left: 5%;
        font-weight: 500;
        color: var(--color--black);

        @media (max-width: 768px){
            font-size: 24px;
            padding-left: 7.5%;
        }
    }

    & > p {
        font-size: 14px;
        color: var(--color--black);
        width: 90%;
        margin-top: -35px;
        opacity: 0.7;
        padding-left: 5%;

        @media (max-width: 768px){
            padding-left: 7.5%;
        }
    }

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        background: linear-gradient (45deg, var(--color--white), var(--color--black));
        width: 100%;
        height: 60%;
        padding: 25px;
        border-radius: 10px;
    }

    & > div > label {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        font-weight: 400;
        color: var(--color--black);
    }

    & > div > label > input {
        border: 1px solid #00000020;
        border-radius: 5px;
        width: 100%;
        padding: 10px 15px;
        color: var(--color--dark--blue);
    }

    & > div > label > input:focus{
        border: 1px solid var(--color--dark--blue);
    }

    & > div > label > input::placeholder{
        font-size: 14px;
        opacity: .2;
        color: var(--color--dark--blue);
    }

    & > div > button {
    padding: 15px;
    background-color: var(--color--blue);
    font-weight: 500;
    width: 100%;
    border-radius: 5px;
    color: var(--color--white);
    cursor: pointer;
    transition: all .1s ease-in-out;

    }

    & > div > button:hover {
        transform: scale(0.98);
    }


`,x=()=>{const a=r();return e.jsx(e.Fragment,{children:e.jsxs(n,{id:"Form",children:[e.jsxs(l,{children:[e.jsx("img",{"data-aos":"fade-up-left","data-aos-delay":"100",src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public",alt:"logo da nova metalica"}),e.jsx("h1",{"data-aos":"fade-up-left","data-aos-delay":"200",children:"Entre em contato agora"}),e.jsx("p",{"data-aos":"fade-up-left","data-aos-delay":"300",children:"Estamos à disposição para esclarecer suas dúvidas e ajudá-lo a encontrar a melhor solução para seu projeto."}),e.jsxs("p",{"data-aos":"fade-up-left","data-aos-delay":"400",children:["Ao enviar esse formulário você está de acordo com a nossa ",e.jsx("a",{onClick:()=>a("/politica-de-dados"),children:"politica de dados"}),", e nosso ",e.jsx("a",{onClick:()=>a("/termos-de-condicoes"),children:"termo e condições"}),"."]})]}),e.jsxs(s,{id:"contactForm","data-aos":"fade-up-right","data-aos-delay":"200",children:[e.jsx("h1",{children:"Solicite seu orçamento"}),e.jsx("p",{children:"Essas informações serão usadas apenas para fins de contato, ao enviar você concorda com isso."}),e.jsxs("div",{children:[e.jsxs("label",{children:["Nome",e.jsx("input",{type:"text",id:"name",placeholder:"Anna Fernandes"})]}),e.jsxs("label",{children:["E-mail",e.jsx("input",{type:"email",id:"email",placeholder:"annafernandes@gmail.com"})]}),e.jsxs("label",{children:["Seu WhatsApp",e.jsx("input",{type:"tel",id:"tel",placeholder:"24981234567"})]}),e.jsx("button",{type:"submit",children:"Enviar formulário"})]})]})]})})};export{p as B,x as F};
