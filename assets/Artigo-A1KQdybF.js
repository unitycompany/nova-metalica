import{d as s,c as u,r as c,j as e,e as x,f as g,g as m,h as b}from"./index-CBDhQ6rM.js";import{S as d,a}from"./swiper-BAKajYhl.js";import{B as r}from"./Button05-BOUPDbNk.js";const f=s.section`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 10% 0% 5% 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
  height: auto;
`,j=s.div`
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
`,v=s.div`
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
`,y=s.div`
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
`,w=s.div`
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
`,k=s.section`
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
`,l=s.div`
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
`,T=s.div`
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
`,z=()=>{const{slug:n}=u(),[i,p]=c.useState(null);return c.useEffect(()=>{const o=[{slug:"como-o-steel-frame",title:"Como o Steel Frame está revolucionando a construção",autor:"Alice Pereira de Jesus",data:"24 de novembro de 2023",imagemPrincipal:"https://via.placeholder.com/500",bibliografiaImagemPrincipal:"https://alephsramos.com.br/",t1Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga <a href='https://alephsramos.github.io/lpnovametalica/'>voluptates soluta</a> quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",t1Pergunta1:"O que é steel frame?",t1Resposta1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",t1Pergunta2:"O que é Drywall",t1Resposta2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",image:"https://via.placeholder.com/800x400",t1Image:"https://via.placeholder.com/500",topico1:"Pergunta 01",t1RespostaTopic:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",bibliografiaT1:"https://alephsramos.com.br",t2Image:"https://via.placeholder.com/500",topico2:"Pergunta 02",t2RespostaTopic:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",bibliografiaT2:"https://alephsramos.com.br",t3Image:"https://via.placeholder.com/500",topico3:"Pergunta 03",t3RespostaTopic:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",bibliografiaT3:"https://alephsramos.com.br",t4Image:"https://via.placeholder.com/500",topico4:"Pergunta 04",t4RespostaTopic:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",bibliografiaT4:"https://alephsramos.com.br",t5Image:"https://via.placeholder.com/500",topico5:"Pergunta 05",t5RespostaTopic:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",bibliografiaT5:"https://alephsramos.com.br",tags:["steel frame","construção","inovação"],sumario:[{id:"topico1",title:"Introdução ao Steel Frame"},{id:"topico2",title:"Vantagens do Steel Frame"},{id:"topico3",title:"Exemplos de Construções com Steel Frame"}],carrosselImagens:[{src:"https://via.placeholder.com/100",link:"/"},{src:"https://via.placeholder.com/100",link:"/produtos"},{src:"https://via.placeholder.com/100",link:"/sobre"}],related:[{title:"Artigo relacionado 1",description:"Descrição do artigo relacionado"}]}].find(h=>h.slug===n);p(o)},[n]),e.jsx("div",{children:i?e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsxs(j,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:i.title}),e.jsxs("span",{children:["Escrito por: ",e.jsx("b",{children:i.autor})," | ",i.data]}),e.jsx("img",{src:i.imagemPrincipal,alt:"Imagem do blog"}),e.jsx("h6",{children:i.bibliografiaImagemPrincipal})]}),e.jsxs("div",{children:[e.jsx("p",{dangerouslySetInnerHTML:{__html:i.t1Description}}),e.jsx("h2",{children:i.t1Pergunta1}),e.jsx("p",{dangerouslySetInnerHTML:{__html:i.t1Resposta1}}),e.jsx("h2",{children:i.t1Pergunta2}),e.jsx("p",{dangerouslySetInnerHTML:{__html:i.t1Resposta2}})]}),e.jsxs("div",{children:[e.jsx("img",{src:i.t1Image}),e.jsx("h6",{children:i.bibliografiaT1}),e.jsx("h1",{id:"topico2",children:i.topico1}),e.jsx("p",{dangerouslySetInnerHTML:{__html:i.t1RespostaTopic}})]}),e.jsxs("div",{children:[e.jsx("img",{src:i.t2Image}),e.jsx("h6",{children:i.bibliografiaT2}),e.jsx("h1",{id:"topico2",children:i.topico2}),e.jsx("p",{dangerouslySetInnerHTML:{__html:i.t2RespostaTopic}})]}),e.jsxs("div",{children:[e.jsx("img",{src:i.t3Image}),e.jsx("h6",{children:i.bibliografiaT3}),e.jsx("h1",{id:"topico3",children:i.topico3}),e.jsx("p",{dangerouslySetInnerHTML:{__html:i.t3RespostaTopic}})]}),e.jsxs("div",{children:[e.jsx("img",{src:i.t4Image}),e.jsx("h6",{children:i.bibliografiaT4}),e.jsx("h1",{id:"topico4",children:i.topico4}),e.jsx("p",{dangerouslySetInnerHTML:{__html:i.t4RespostaTopic}})]}),e.jsxs("div",{children:[e.jsx("img",{src:i.t5Image}),e.jsx("h6",{children:i.bibliografiaT5}),e.jsx("h1",{id:"topico5",children:i.topico5}),e.jsx("p",{dangerouslySetInnerHTML:{__html:i.t5RespostaTopic}})]}),e.jsx("article",{children:e.jsxs("div",{children:[e.jsx("h1",{children:"Fique por dentro de tudo!"}),e.jsx("p",{children:"Por favor, preencha seus dados para nossa equipe entrar em contato com você."}),e.jsxs("form",{children:[e.jsx("input",{type:"text",id:"name",placeholder:"Nome"}),e.jsx("input",{type:"email",id:"email",placeholder:"E-mail"}),e.jsx("input",{type:"tel",id:"tel",placeholder:"WhatsApp"}),e.jsx("button",{type:"submit",children:"Enviar"})]})]})})]}),e.jsxs(v,{children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Sumário"}),e.jsx("ol",{children:i.sumario.map((t,o)=>e.jsx("li",{children:e.jsxs("a",{href:`#${t.id}`,children:[e.jsx(x,{})," ",e.jsx("span",{children:t.title})]})},o))})]}),e.jsxs("div",{children:[e.jsx("a",{href:"#",children:e.jsx(g,{})}),e.jsx("a",{href:"#",children:e.jsx(m,{})}),e.jsx("a",{href:"#",children:e.jsx(b,{})})]}),e.jsx(y,{children:e.jsx(d,{spaceBetween:10,slidesPerView:1,navigation:!0,loop:!0,children:i.carrosselImagens.map((t,o)=>e.jsx(a,{children:e.jsx("a",{href:t.link,children:e.jsx("img",{src:t.src,alt:`Imagem do carrossel ${o+1}`,style:{width:"100%",borderRadius:"15px",height:"100%",objectFit:"contain"}})})},o))})}),e.jsx(w,{children:i.related.map((t,o)=>e.jsxs("div",{children:[e.jsx("h2",{children:t.title}),e.jsx("p",{children:t.description}),e.jsx(r,{text:"Saber mais"})]},o))})]})]}),e.jsx(T,{children:e.jsx("h1",{children:" Confira nossos blogs mais buscados"})}),e.jsx(k,{children:e.jsxs(d,{spaceBetween:30,slidesPerView:3,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,children:[e.jsx(a,{children:e.jsxs(l,{children:[e.jsx("h1",{children:"Nome do titulo do blog"}),e.jsx("p",{children:"Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual."}),e.jsxs("span",{children:["Escrito por: ",e.jsx("b",{children:"Nome da autora"})," | 24 de novembro de 2023"]}),e.jsx(r,{text:"Saber mais"})]})}),e.jsx(a,{children:e.jsxs(l,{children:[e.jsx("h1",{children:"Nome do titulo do blog"}),e.jsx("p",{children:"Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual."}),e.jsxs("span",{children:["Escrito por: ",e.jsx("b",{children:"Nome da autora"})," | 24 de novembro de 2023"]}),e.jsx(r,{text:"Saber mais"})]})}),e.jsx(a,{children:e.jsxs(l,{children:[e.jsx("h1",{children:"Nome do titulo do blog"}),e.jsx("p",{children:"Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual."}),e.jsxs("span",{children:["Escrito por: ",e.jsx("b",{children:"Nome da autora"})," | 24 de novembro de 2023"]}),e.jsx(r,{text:"Saber mais"})]})}),e.jsx(a,{children:e.jsxs(l,{children:[e.jsx("h1",{children:"Nome do titulo do blog"}),e.jsx("p",{children:"Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual."}),e.jsxs("span",{children:["Escrito por: ",e.jsx("b",{children:"Nome da autora"})," | 24 de novembro de 2023"]}),e.jsx(r,{text:"Saber mais"})]})}),e.jsx(a,{children:e.jsxs(l,{children:[e.jsx("h1",{children:"Nome do titulo do blog"}),e.jsx("p",{children:"Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual."}),e.jsxs("span",{children:["Escrito por: ",e.jsx("b",{children:"Nome da autora"})," | 24 de novembro de 2023"]}),e.jsx(r,{text:"Saber mais"})]})})]})})]}):e.jsx("p",{children:"Artigo não encontrado."})})};export{z as default};
