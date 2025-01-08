import{d as t,j as i,i as d,k as r,l as v,r as c,m as h,n as j,o as y}from"./index-hD3kJ41R.js";import{B as f}from"./Button05-nrZ_DgS2.js";import{S as z,a as k}from"./swiper-CItyuC2j.js";import{F as C}from"./Form-BQ5-aIJg.js";const G=t.section`
    position: relative;
    width: 100%;
`,S=t.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    padding: 10% 5% 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    background: #353535;

    @media (max-width: 768px){
        height: 90vh;
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1081687f-ba98-453b-c651-444af1325800/public');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
    }
`,$=t.div`
    padding-top: 12.5%;
    padding-bottom: 10%;
    height: auto;
    position: relative;
    z-index: 3;
    max-width: 1280px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1280px){
        padding-top: 10%;
    }

    @media (max-width: 768px){
        padding-top: 20%;
    }
`,A=t.div`
    width: 55%;
    height: 450px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    gap: 10px;
    position: relative;

    @media (max-width: 768px){
        width: 90%;
        height: 400px;
    }

    @media (min-width: 768px) and (max-width: 1280px){
        height: 400px;
    }
`,B=t.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: auto;

    @media (max-width: 768px){
        width: 120px;
        top: 5%;
    }

    & > img {
        width: 100%;
        object-fit: contain;
    }
`,q=t.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 25px;
    width: 90%;
    color: var(--color--white);

    & > h1 {
        font-size: 32px;
        line-height: 110%;
        font-weight: 500;

        @media (max-width: 768px){
            font-size: 24px;
        }

        @media (min-width: 768px) and (max-width: 1280px){
            font-size: 28px;
        }

        & > b {
            color: var(--color--blue);
            font-weight: 600;
        }
    }

    & > p {
        font-size: 18px;
        line-height: 120%;
        width: 85%;
        font-weight: 300;

        @media (max-width: 768px){
            width: 100%;
            font-size: 16px;
        }

        @media (min-width: 768px) and (max-width: 1280px){
            font-size: 16px;
        }
    }
`,D=t.div`
    background-color: var(--color--blue);
    width: 50%;
    height: 80%;
    position: absolute;
    right: 0;
    bottom: 0;
    clip-path: polygon(0% 0%, 0 30%, 3% 30%, 3% 3%, 97% 3%, 97% 97%, 0 97%, 0 100%, 100% 100%, 100% 0);

    @media (max-width: 768px){
        height: 75%;
        bottom: 3.5%;
        clip-path: polygon(0% 0%, 0 20%, 4% 20%, 4% 2.5%, 96% 2.5%, 96% 97.5%, 0 97.5%, 0 100%, 100% 100%, 100% 0);
    }
`,F=()=>i.jsx(i.Fragment,{children:i.jsxs(G,{children:[i.jsx(S,{}),i.jsx($,{children:i.jsxs(A,{children:[i.jsx(B,{children:i.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b440dfa1-5f27-48ad-a0a6-8de8dd71c700/public",alt:"logo da nova metálica branca"})}),i.jsxs(q,{children:[i.jsxs("h1",{children:["Conheça a ",i.jsx("b",{children:"Nova Metálica"}),", a melhor Fábrica de Steel Frame e Drywall"]}),i.jsx("p",{children:"Colocar uma descrição curta falando sobre os materiais que vendemos, bem curta e objetiva"}),i.jsx(f,{text:"Conhecer a fábrica"})]}),i.jsx(D,{})]})})]})}),I=t.section`
    width: 97.5%;
    max-width: 1280px;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    top: -2.5vh;
    z-index: 1;
    height: auto;
    background: var(--color--white);
    border-radius: 80px;
    padding: 7.5% 5% 15% 5%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 125px;

    @media (max-width: 768px){
        border-radius: 30px;
        padding: 5% 5% 35% 5%;
        gap: 80px;
    }

    @media (min-width: 768px) and (max-width: 1280px){
        border-radius: 50px;
    }
`,_=t.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 50px;
    }
`,l=t.div`
    width: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
    @media (max-width: 768px){
        width: 100%;
        border-bottom: 1px solid var(--color--blue);
        padding-bottom: 2.5%;
    }
`,p=t.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    & > div:nth-child(1){
        width: 70px;
        height: 70px;
        background-color: var(--color--blue);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 15px 0 15px 0px;

        @media (max-width: 768px){
            width: 60px;
            height: 60px;
            border-radius: 10px 0 10px 0;
        }

        @media (min-width: 768px) and (max-width: 1280px){
            width: 60px;
            height: 60px;
        }
        
        &::before{
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            position: absolute;
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
            background-color: #1c8fc0;
            border-radius: 0 0 15px 0;
        }

        & > svg {
            width: 30px;
            height: 30px;
            color: var(--color--white);
            position: relative;
            z-index: 2;

            @media (max-width: 768px){
                width: 20px;
                height: 20px;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                width: 25px;
                height: 25px;
            }
        }
    }

    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        gap: 5px;

        & > h6{
            font-size: 16px;
            color: var(--color--black);
            font-weight: 300;

            @media (max-width: 768px){
                font-size: 14px;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                font-size: 14px;
            }
        }

        & > h1 {
            font-size: 22px;
            font-weight: 600;
            color: var(--color--black);

            @media (max-width: 768px){
                font-size: 20px;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                font-size: 18px;
            }
        }
    }
`,x=t.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;

    @media (max-width: 768px){
        gap: 15px;
    }

    & > p{
        font-size: 16px;
        line-height: 110%;
        width: 95%;
        font-weight: 500;
        color: var(--color--black);

        @media (max-width: 768px){
            font-size: 14px;
            width: 100%;
        }

        @media (min-width: 768px) and (max-width: 1280px){
            font-size: 14px;
        }
    }

    & > a {
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        gap: 15px;
        color: var(--color--blue);

        @media (max-width: 768px){
            font-size: 12px;
            gap: 10px;
            justify-content: space-between;
            width: 100%;
            gap: 0;
        }

        @media (min-width: 768px) and (max-width: 1280px){
            font-size: 14px;
        }

        & > svg {
            width: 14px;
            height: 14px;

            @media (max-width: 768px){
                width: 8px;
                height: 8px;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                width: 12px;
                height: 12px;
            }
        }
    }
`,H=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    width: 100%;

    @media (max-width: 768px){
        flex-direction: column;
        width: 100%;
        gap: 50px;
    }

    @media (min-width: 768px) and (max-width: 1280px){
        gap: 70px;
    }

    & > div:nth-child(1){

        @media (max-width: 768px){
            width: 100%;
        }

        @media (min-width: 768px) and (max-width: 1280px){
            width: 50%;
        }

        & > img {

            @media (max-width: 768px){
                width: 100%;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                width: 100%;
            }
            
        }
    }

    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 30px;

        @media (min-width: 768px) and (max-width: 1280px){
            width: 50%;
        }

        & > span {
            font-size: 16px;
            color: var(--color--blue);
            font-weight: 300;

            @media (max-width: 768px){
                font-size: 14px;
            }
        }

        & > h1 {
            font-size: 28px;
            line-height: 110%;
            font-weight: 400;
            margin-top: -15px;

            @media (max-width: 768px){
                font-size: 22px;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                font-size: 24px;
            }

            & > b {
                font-weight: 500;
                color: var(--color--blue);
            }
        }

        & > p {
            font-weight: 300;
            width: 85%;
            margin-top: -5px;

            @media (max-width: 768px){
                font-size: 14px;
                width: 100%;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                margin-top: -10px;
            }
        }

        & > div {
            padding: 5% 5%;
            background-color: #f3f3f3;
            position: relative;
            border-left: 10px solid var(--color--blue);

            & > p {
                width: 95%;

                @media (max-width: 768px){
                    font-size: 14px;
                }
            }
        }
    }
`,P=()=>i.jsx(i.Fragment,{children:i.jsxs(I,{children:[i.jsxs(_,{children:[i.jsxs(l,{children:[i.jsxs(p,{children:[i.jsx("div",{children:i.jsx(d,{})}),i.jsxs("div",{children:[i.jsx("h6",{children:"Por que"}),i.jsx("h1",{children:"Somos os melhores"})]})]}),i.jsxs(x,{children:[i.jsx("p",{children:"Colocar os motivos pelos quais somos os melhores para se comprar perfis de steel frame e drywall bem objetivo"}),i.jsxs("a",{href:"#",children:["Comprar da fábrica",i.jsx(r,{})]})]})]}),i.jsxs(l,{children:[i.jsxs(p,{children:[i.jsx("div",{children:i.jsx(d,{})}),i.jsxs("div",{children:[i.jsx("h6",{children:"Por que"}),i.jsx("h1",{children:"Somos os melhores"})]})]}),i.jsxs(x,{children:[i.jsx("p",{children:"Colocar os motivos pelos quais somos os melhores para se comprar perfis de steel frame e drywall bem objetivo"}),i.jsxs("a",{href:"#",children:["Comprar da fábrica",i.jsx(r,{})]})]})]}),i.jsxs(l,{children:[i.jsxs(p,{children:[i.jsx("div",{children:i.jsx(d,{})}),i.jsxs("div",{children:[i.jsx("h6",{children:"Por que"}),i.jsx("h1",{children:"Somos os melhores"})]})]}),i.jsxs(x,{children:[i.jsx("p",{children:"Colocar os motivos pelos quais somos os melhores para se comprar perfis de steel frame e drywall bem objetivo"}),i.jsxs("a",{href:"#",children:["Comprar da fábrica",i.jsx(r,{})]})]})]})]}),i.jsxs(H,{children:[i.jsx("div",{children:i.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8651a872-0b00-4e3e-4c14-ff48b6463d00/public"})}),i.jsxs("div",{children:[i.jsx("span",{children:"Bem vindo a Nova Metálica"}),i.jsxs("h1",{children:["Conheça a ",i.jsx("b",{children:"Nova Metálica"}),", a melhor Fábrica de Steel Frame e Drywall"]}),i.jsx("p",{children:"Colocar uma descrição curta falando sobre os materiais que vendemos, bem curta e objetiva"}),i.jsx("div",{children:i.jsx("p",{children:"Colocar uma descrição curta falando sobre os materiais que vendemos, bem curta e objetiva, Colocar uma descrição curta."})}),i.jsx(v,{children:"Conhecer a fábrica"})]})]})]})}),X=t.section`
    position: relative;
    width: 100%;
`,N=t.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    background: #353535;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1081687f-ba98-453b-c651-444af1325800/public');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        opacity: 0.2;
    }
`,M=t.div`
    height: auto;
    position: relative;
    z-index: 3;
    max-width: 1280px;
    margin-top: -12.5vh;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 5%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    padding-bottom: 7.5%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`,R=t.div`
    width: 100%;
    height: auto;
    position: relative;
    margin-top: -2.5vh;
    z-index: 10 !important;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: none;
    }
`,m=t.div`
    background-color: ${({active:e})=>e?"var(--color--blue)":"var(--color--white)"};
    width: ${({active:e})=>e?"200px":"160px"};
    height: ${({active:e})=>e?"200px":"160px"};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;

    @media (max-width: 768px){
        width: ${({active:e})=>e?"100%":"80%"};
        height: ${({active:e})=>e?"200px":"180px"};
        left: 50%;
        transform: translateX(-50%);
        flex-direction: row;
        padding: 0 10%;
        gap: 30px;
    }

    @media (min-width: 768px) and (max-width: 1280px){
        width: ${({active:e})=>e?"170px":"140px"};
        height: ${({active:e})=>e?"170px":"140px"};
    }

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: #1c8fc0;
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        z-index: 1;
        display: ${({active:e})=>e?"block":"none"};
        border-radius: 10px;
    }

    &::after {
        content: 'Selecionar opção';
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.2);
        color: var(--color--white);
        padding: 5px 15px;
        border-radius: 5px;
        font-size: 12px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
        z-index: 5;
    }

    &:hover::after {
        opacity: ${({active:e})=>e?0:1};
        visibility: ${({active:e})=>e?"hidden":"visible"};
    }

    & > span {
        position: absolute;
        right: 15px;
        top: 15px;
        color: ${({active:e})=>e?"var(--color--white)":"var(--color--black)"};
        font-size: 14px;
        z-index: 2;
    }

    & > svg {
        color: ${({active:e})=>e?"var(--color--white)":"var(--color--black)"};
        font-size:  ${({active:e})=>e?"44px":"40px"};
        position: relative;
        z-index: 2;

        @media (max-width: 768px){
            font-size:  ${({active:e})=>e?"70px":"66px"};
        }

        @media (min-width: 768px) and (max-width: 1280px){
            font-size: ${({active:e})=>e?"36px":"32px"};
        }
    }

    & > p {
        font-size: ${({active:e})=>e?"20px":"16px"};
        color: ${({active:e})=>e?"var(--color--white)":"var(--color--black)"};
        font-weight: ${({active:e})=>e?"500":"400"};;
        text-align: center;
        position: relative;
        z-index: 2;
        width: 80%;

        @media (max-width: 768px){
            width: 40%;
            text-align: left;
            font-size: ${({active:e})=>e?"22px":"18px"}
        }

        @media (min-width: 768px) and (max-width: 1280px){
            font-size: ${({active:e})=>e?"18px":"14px"};
        }
    }
`,T=t(z)`
    width: 100%;
    padding: 0 5%;
    display: none !important;

    @media (max-width: 768px) {
        display: block !important;
        display: flex!important;
        align-items: flex-end!important;
        justify-content: flex-end!important;
        width: 100%;
    }
`,E=t(k)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`,L=t.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 50px;
        height: auto;
    }

    @media (min-width: 768px) and (max-width: 1280px){
        height: 400px;
    }

    & > img {
        width: 50%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;

        @media (max-width: 768px){
            width: 100%;
            height: 200px;
            border-radius: 15px;
        }
    }

    & > div {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        @media (max-width: 768px){
            width: 100%;
        }

        & > h2 {
        font-size: 24px;
        margin-bottom: 10px;
        color: var(--color--white);

        @media (max-width: 768px){
            font-size: 20px;
        }
        }

        & > p {
        font-size: 16px;
        color: var(--color--white);

        @media (max-width: 768px){
            font-size: 14px;
        }
        }
    }

`,Q=t.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;

    button {
        background-color: var(--color--white);
        color: var(--color--black);
        border: none;
        font-size: 24px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;

        &:hover {
            background-color: #353535;
            color: var(--color--white);
            transform: scale(0.90);
        }

        &:disabled {
            background-color: var(--color--gray);
            color: var(--color--black);
            cursor: not-allowed;
            display: none;

            & > svg {
                display: none;
            }
        }
    }
`,U=()=>{const[e,s]=c.useState(0),g=c.useRef(null),a=[{title:"Como fabricamos?",image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1081687f-ba98-453b-c651-444af1325800/public",description:"Descrição sobre como fabricamos."},{title:"Como construímos?",image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1081687f-ba98-453b-c651-444af1325800/public",description:"Descrição sobre como construímos."},{title:"Nossos diferenciais",image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1081687f-ba98-453b-c651-444af1325800/public",description:"Descrição sobre nossos diferenciais."},{title:"Soluções inteligentes",image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1081687f-ba98-453b-c651-444af1325800/public",description:"Descrição sobre soluções inteligentes."},{title:"Por que nos escolher?",image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1081687f-ba98-453b-c651-444af1325800/public",description:"Descrição sobre por que nos escolher."},{title:"Somos sustentaveis?",image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1081687f-ba98-453b-c651-444af1325800/public",description:"Descrição sobre sustentabilidade."}],w=()=>{e<a.length-1&&s(e+1)},b=()=>{e>0&&s(e-1)},u=n=>{s(n.activeIndex)};return i.jsx(i.Fragment,{children:i.jsxs(X,{children:[i.jsx(N,{}),i.jsxs(M,{children:[i.jsx(R,{children:a.map((n,o)=>i.jsxs(m,{active:o===e,onClick:()=>s(o),children:[i.jsx("span",{children:`0${o+1}`}),i.jsx(h,{}),i.jsx("p",{children:n.title})]},o))}),i.jsx(T,{modules:!1,navigation:!1,spaceBetween:50,slidesPerView:1,onSlideChange:u,onSwiper:n=>g.current=n,children:a.map((n,o)=>i.jsx(E,{children:i.jsxs(m,{active:o===e,onClick:()=>s(o),children:[i.jsx("span",{children:`0${o+1}`}),i.jsx(h,{}),i.jsx("p",{children:n.title})]})},o))}),i.jsxs(L,{children:[i.jsx("img",{src:a[e].image,alt:a[e].title}),i.jsxs("div",{children:[i.jsx("h2",{children:a[e].title}),i.jsx("p",{children:a[e].description}),i.jsx(f,{text:"Solicitar orçamento"}),i.jsxs(Q,{children:[i.jsx("button",{onClick:b,disabled:e===0,children:i.jsx(j,{})}),i.jsx("button",{onClick:w,disabled:e===a.length-1,children:i.jsx(y,{})})]})]})]})]})]})})},W=()=>i.jsxs(i.Fragment,{children:[i.jsx(F,{}),i.jsx(P,{}),i.jsx(U,{}),i.jsx(C,{})]});export{W as default};
