import{d as t,j as e}from"./index-B3YCQzk0.js";const r=t.button`
  padding: 12px 20px;
  border-radius: 10px;
  border: 2px solid var(--color--black);
  font-weight: 500;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  font-size: 16px;
  transition: 0.3s;
  z-index: 1;
  font-family: inherit;
  color: var(--color--black);
  cursor: pointer;

  &::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: var(--color--blue);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  &:hover::before {
    width: 120%;
    padding: 30px 160px;
  }

  &:hover {
    color: var(--color--white);
    font-weight: 500;
  }
`,s=({children:i,onClick:o})=>e.jsx(r,{onClick:o,children:i}),a=t.div`
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
`,n=t.div`
    width: 55%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 25px;

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
`,d=t.form`
    width: 45%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 20px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px){
        width: 100%;
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
        opacity: .6;
        color: var(--color--dark--blue);
    }

    & > div > button {
    padding: 15px;
    background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
    width: 100%;
    border-radius: 5px;
    color: var(--color--white);
    cursor: pointer;
    transition: all .1s ease-in-out;
    }

    & > div > button:hover {
        transform: scale(0.98);
    }


`,c=()=>e.jsx(e.Fragment,{children:e.jsxs(a,{id:"Form",children:[e.jsxs(n,{children:[e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public",alt:"logo da nova metalica"}),e.jsx("h1",{children:"Entre em contato agora"}),e.jsx("p",{children:"Estamos à disposição para esclarecer suas dúvidas e ajudá-lo a encontrar a melhor solução para seu projeto."}),e.jsxs("p",{children:["Ao enviar esse formulário você está de acordo com a nossa ",e.jsx("a",{href:"#",children:"politica de dados"}),", e nosso ",e.jsx("a",{href:"#",children:"termo e condições"}),"."]})]}),e.jsx(d,{id:"contactForm",children:e.jsxs("div",{children:[e.jsxs("label",{children:["Nome",e.jsx("input",{type:"text",id:"name",placeholder:"Anna Fernandes"})]}),e.jsxs("label",{children:["E-mail",e.jsx("input",{type:"email",id:"email",placeholder:"annafernandes@gmail.com"})]}),e.jsxs("label",{children:["Seu WhatsApp",e.jsx("input",{type:"tel",id:"tel",placeholder:"24981234567"})]}),e.jsx("button",{type:"submit",children:"Enviar"})]})})]})});export{s as B,c as F};
