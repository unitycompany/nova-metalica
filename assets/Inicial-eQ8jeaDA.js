import{d as i,u as g,j as e,B as f}from"./index-DJQ_yTgJ.js";import{S as b,a as v}from"./swiper-oV3yh3ei.js";const j=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,y=i.div`
  position: relative;
  display: inline-block;
`,x=i.button`
  position: relative;
  padding: 1px;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  background-color: var(--color--black);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  font-size: 12px;

  &:hover {
    transform: scale(1.05) translateX(5px);
  }

  &:active {
    transform: scale(0.95);
  }
`,k=i.span`
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 1px;
  opacity: 0;
  transition: opacity 0.5s;

  ${x}:hover & {
    opacity: 1;
  }
`,G=i.span`
  position: relative;
  z-index: 10;
  display: block;
  padding: 0.4rem 1rem;
  border-radius: 12px;
  background-color: var(--color--dark--blue);
`,z=i.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,C=i.svg`
  width: 1rem;
  height: 1rem;
  transition: transform 0.5s;

  ${x}:hover & {
    transform: translateX(0.25rem);
  }
`,d=({href:t,children:o})=>{const r=g(),a=l=>{if(l.preventDefault(),t.startsWith("#")){const s=document.querySelector(t);if(s){const c=s.getBoundingClientRect().top+window.pageYOffset-200;window.scrollTo({top:c,behavior:"smooth"})}}else r(t)};return e.jsx(j,{children:e.jsx(y,{children:e.jsxs(x,{onClick:a,children:[e.jsx(k,{}),e.jsx(G,{children:e.jsxs(z,{children:[e.jsx("span",{className:"transition-all duration-500",children:o}),e.jsx(C,{"data-slot":"icon","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{clipRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",fillRule:"evenodd"})})]})})]})})})},A=i.section`
    width: 100%;
    height: 95vh;
    max-width: 1280px;
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 10%;
    padding-bottom: 5%;
    display: flex;
    gap: 50px;

    @media (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
        height: auto;
        padding: 15% 5% 10% 5%;
    }
`,F=i.div`
    width: 50%;
    height: 100%;
    padding-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;

    @media (max-width: 768px){
        width: 100%;
        gap: 20px;
        padding-top: 15%;
        padding-left: 0;
    }

    & > span{
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        gap: 4px;
        font-size: 14px;
        color: var(--color--blue);
        opacity: .6;
        font-style: italic;

        & > hr {
            width: 50px;
            bottom: 1px;
            position: relative;
        }
    }

    & > h1{
        font-size: 40px;
        font-weight: 600;
        line-height: 110%;

        @media (max-width: 768px){
            font-size: 36px;
            line-height: 100%;
        }

        & > b{
            font-weight: 700;
            color: var(--color--blue);
        }
    }

    & > p{
        font-size: 14px;
        font-weight: 400;
        color: var(--color--black);
        opacity: .7;
        line-height: 110%;
        width: 90%;

        & > b{
            font-weight: 600;
        }
    }
`,S=i.div`
    width: 50%;
    height: 100%;
    position: relative;

    @media (max-width: 768px){
        width: 80%;
        opacity: 0.05;
        top: 0;
        z-index: -1;
        right: 0;
        height: 350px;
        position: absolute;
        clip-path: polygon(25% 0%, 100% 0, 100% 100%, 75% 100%, 25% 100%, 0% 50%);
    }

    & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 18px 0 0 18px;
        filter: contrast(110%) brightness(110%);
        box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.2);

        @media (max-width: 768px){
            border-radius: 0 0 0 50px;
            box-shadow: none;
        }
    }
`,q=()=>e.jsx(e.Fragment,{children:e.jsxs(A,{children:[e.jsxs(F,{children:[e.jsxs("span",{children:[e.jsx("hr",{}),"A solução para a sua empresa"]}),e.jsxs("h1",{children:["Sua Parceira ",e.jsx("b",{children:"N°1"})," em Soluções para Steel Frame"]}),e.jsxs("p",{children:["Na Nova Metálica, somos ",e.jsx("b",{children:"líderes em oferecer os melhores perfis de Steel Frame do mercado"})," para a construção de estruturas metálicas. Nossa dedicação à qualidade, durabilidade excepcional e inovação constante nos diferencia."]}),e.jsxs("p",{children:["Escolha a ",e.jsx("b",{children:"Nova Metálica para elevar seus projetos"})," a um novo patamar de excelência!"]}),e.jsx(d,{href:"#Form",children:"Solicitar orçamento"})]}),e.jsx(S,{children:e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4e5edc4f-f411-4f7a-5f47-9fa8ab3e6d00/public",alt:"imagem de uma casa de steel frame pela nova metalica",loading:"lazy"})})]})}),_=i.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
    position: relative;
    z-index: 1;
    background-color: var(--color--white);
    padding: 5px 5px 20px 5px;
    border-radius: 12px;

    @media (max-width: 768px){
        width: 100%;
        height: auto;
        gap: 20px;
        border-radius: 20px;
    }

    & > img{
        width: 100%;
        height: 65%;
        object-fit: cover;
        border-radius: 12px;

        @media (max-width: 768px){
            border-radius: 15px;
        }
    }

    & > h2{
        color: var(--color--blue);
        font-size: 18px;
        padding: 0px 10px;
        font-weight: 500;
        line-height: 100%;
    }

    & > p{
        font-size: 14px;
        color: var(--color--black);
        opacity: .6;
        padding: 0px 10px;
    }
`,p=({image:t,descricaoImage:o,title:r,descricao:a})=>e.jsxs(_,{children:[e.jsx("img",{src:t,alt:o}),e.jsx("h2",{children:r}),e.jsx("p",{children:a})]}),P=i.div`
    width: 32%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 5px;
    border-radius: 20px;
    background-color: var(--color--blue);
    gap: 10px;

    @media (max-width: 768px){
        width: 100%;
        padding: 10px;
    }

    & > div:nth-child(1){
        width: 40%;
        height: 100%;
        background-color: #fff;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){
            width: 60%;
            height: 140px;
            padding: 10px;
        }

        & > img{
            width: 60%;
            height: 100%;
            object-fit: contain;

            @media (max-width: 768px){
                width: 80%;
            }
        }
    }

    & > div:nth-child(2){
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;

        @media (max-width: 768px){
            width: 100%;
            padding: 5px;
        }
        

        & > h2{
            color: var(--color--white);
            font-weight: 500;
            font-size: 20px;

            @media (max-width: 768px){
                text-align: left;
            }
        }

        & > p{
            font-size: 14px;
            color: var(--color--white);
            opacity: .6;
            width: 90%;

            @media (max-width: 768px){
                width: 100%;
                font-size: 12px;
                text-align: left;
                opacity: 0.8;
                line-height: 110%;
            }
        }
    }
`,n=({image:t,descricaoImage:o,title:r,descricao:a})=>e.jsx(e.Fragment,{children:e.jsxs(P,{children:[e.jsx("div",{children:e.jsx("img",{src:t,alt:o})}),e.jsxs("div",{children:[e.jsx("h2",{children:r}),e.jsx("p",{children:a})]})]})}),T=i.section`
    width: 97.5%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    height: auto;
    padding: 5% 5% 2.5% 5%;
    display: flex;
    flex-direction: column;
    gap: 50px;

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        position: absolute;
        background-color: var(--color--black);
        border-radius: 30px;
        padding-bottom: 55px;
    }
`,E=i.div`
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 20px;
    }
`,B=i.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        flex-direction: column-reverse;
    }

    & > div:nth-child(1){
        color: var(--color--white);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 15px;

        @media (max-width: 768px){
            align-items: center;
            gap: 15px;
        }

        & > h1{
            font-size: 40px;
            font-weight: 500;
            line-height: 100%;

            @media (max-width: 768px){
                font-size: 32px;
            }
        }

        & > p{
            font-size: 16px;
            opacity: .6;
            width: 80%;

            @media (max-width: 768px){
                width: 100%;
                text-align: center;
                opacity: 0.8;
            }
        }
    }

    & > div:nth-child(2){

        & > img{
            width: 150px;
        }
    }
`,h=i.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 768px){
        border: 2px solid red;
        height: auto;
        gap: 10px;
        margin-bottom: -45px;
    }

    
`,X=()=>e.jsx(e.Fragment,{children:e.jsxs(T,{children:[e.jsxs(E,{children:[e.jsx(p,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/87a0a7c1-73c9-47ff-e0bb-59c72fbc9a00/public",descricaoImage:"Foto de fundo para sobre nós",title:"Sobre nós",descricao:"A Nova Metálica é uma empresa inovadora e referência no segmento de construção metálica, especializada em soluções de Steel Frame."}),e.jsx(p,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8ac46440-2a94-4396-f4eb-5b9bba1a2700/public",descricaoImage:"Imagem Exemplo",title:"Visão",descricao:"Ser reconhecida por entregar todos os projetos de Steel Frame dentro do prazo, com máxima qualidade e eficiência em cada etapa."}),e.jsx(p,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3bb56937-dc5e-48b9-1b59-f51889f13d00/public",descricaoImage:"Imagem Exemplo",title:"Missão",descricao:"Evoluir a construção civil promovendo o Steel Frame como a melhor alternativa à alvenaria tradicional, elevando o padrão da indústria."})]}),e.jsxs(B,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Nossos valores"}),e.jsx("p",{children:"Entenda sobre nossos pontos fortes e nossas melhores qualidades"})]}),e.jsx("div",{children:e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b440dfa1-5f27-48ad-a0a6-8de8dd71c700/public",alt:"logo da nova metalica"})})]}),e.jsxs(h,{children:[e.jsx(n,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/992069d8-d5ab-4522-11d8-04cb49714b00/public",title:"Inovação",descricao:"Buscamos incessantemente novas tecnologias e métodos para desafiar os padrões estabelecidos da construção civil."}),e.jsx(n,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/66eecf95-d765-4d16-7e4c-c13bea3cde00/public",title:"Qualidade",descricao:"Comprometemo-nos com a excelência em todos os nossos produtos e serviços, assegurando a satisfação plena dos nossos clientes."}),e.jsx(n,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3381d730-6783-4b29-ec37-0c3848d9d000/public",title:"Sustentabilidade",descricao:"Adotamos práticas que reduzem o impacto ambiental de nossas operações, comprometidos com a responsabilidade ecológica."})]}),e.jsxs(h,{children:[e.jsx(n,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ec88ac56-8147-4f89-f0b2-e7dcdc44b900/public",title:"Velocidade",descricao:"Entregamos seus projetos de Steel Frame no prazo, garantindo agilidade e eficiência em todas as etapas."}),e.jsx(n,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a3c4b281-55ad-4774-a81a-8477fae72f00/public",title:"Equipe",descricao:"Valorizamos a diversidade e o trabalho em equipe, integrando colaboradores, parceiros e comunidades."}),e.jsx(n,{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cc0601c8-e556-4ccc-641d-fb3d74f66d00/public",title:"Persitência",descricao:"Superamos desafios com determinação, focados em alcançar resultados que atendam às necessidades dos nossos clientes."})]})]})}),N=i.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 40px;
    position: relative;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 20px;
    }

    & > div:nth-child(1){
        width: 60%;
        height: 100%;
        border-radius: 0 20px 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 5%;
        border: 1px solid var(--color--dark--blue);
        border-left: none;

        @media (max-width: 768px){
            width: 100%;
            padding: 30px;
            height: 200px;
            border-radius: 20px;
            border-left: 1px solid var(--color--dark--blue);
            position: relative;
        }
    }

    & > div:nth-child(2){
        width: 40%;
        height: 100%;
        border-radius: 20px 0 0 20px;
        position: relative;
        padding: 5%;
        background-color: var(--color--dark--blue);
    
        @media (max-width: 768px){
            width: 100%;
            height: 200px;
            border-radius: 20px;
            position: relative;
        }
    }
`,I=i.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px){
        width: 100%;
        gap: 20px;
        position: relative;
        align-items: center;
    }

    & > h1{
        font-size: 26px;
        color: var(--color--dark--blue);
        font-weight: 500;

        @media (max-width: 768px){
            text-align: center;
            font-size: 24px;
        }
    }

    & > p{
        font-size: 16px;
        line-height: 110%;
        opacity: .6;
        color: var(--color--black);

        @media (max-width: 768px){
            text-align: center;
        }
    }
`,M=i.div`
    width: 30%;
    position: relative;

    @media (max-width: 768px){
        position: absolute;
        z-index: -1;
        opacity: 0.1;
        width: 150px;
        left: 50%;
        transform: translateX(-50%);
    }

    & > img {
        width: 180px;

        @media (max-width: 768px){
            width: 100%;
        }
    }
`,V=i.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px){
        gap: 20px;
    }

    & > h1{
        font-size: 26px;
        color: var(--color--white);
        font-weight: 500;

        @media (max-width: 768px){
            font-size: 22px;
            text-align: center;
            width: 100%;
        }
    }

    & > p{
        font-size: 14px;
        opacity: .6;
        color: var(--color--white);

        @media (max-width: 768px){
            text-align: center;
            font-size: 14px;
            opacity: 0.8;
        }
    }
`,$=i.div`
    width: 30%;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);

    @media (max-width: 768px){
        width: 120px;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        position: absolute;
    }

    & > img {
        width: 200px;
        filter: brightness(500%) invert(100%);

        @media (max-width: 768px){
            width: 100%;
        }
    }
`,O=()=>e.jsx(e.Fragment,{children:e.jsxs(N,{children:[e.jsxs("div",{children:[e.jsxs(I,{children:[e.jsx("h1",{children:"Produtos Nacionais"}),e.jsx("p",{children:"Asseguramos que todos os nossos perfis de Steel Frame são 100% normatizados e fabricados exclusivamente com materiais de siderúrgicas brasileiras, sem o uso de aço importado."})]}),e.jsx(M,{children:e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c2a46a4-fc03-4da7-87be-3bbba03b5700/public",alt:"foto do mapa do brasil"})})]}),e.jsxs("div",{children:[e.jsxs(V,{children:[e.jsx("h1",{children:"Soluções Eficientes"}),e.jsx("p",{children:"Oferecemos a menor taxa de aço do mercado, resultando em estruturas de Steel Frame mais leves e econômicas. "})]}),e.jsx($,{children:e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c050183b-0686-4310-6235-ec02c4323400/public",alt:"foto do mapa do brasil"})})]})]})}),D=i.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 40px;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        gap: 20px;
        margin-top: -30px;
    }

    & > div:nth-child(2){
        width: 60%;
        height: 100%;
        border-radius: 20px 0px 0px 20px;
        padding-left: 5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--color--dark--blue);
        border-right: none;

        @media (max-width: 768px){
            width: 100%;
            padding: 30px;
            height: 200px;
            border-radius: 20px;
            border-right: 1px solid var(--color--dark--blue);
            position: relative;
        }
    }

    & > div:nth-child(1){
        width: 40%;
        height: 100%;
        border-radius: 0px 20px 20px 0px;
        position: relative;
        padding: 5%;
        background-color: var(--color--dark--blue);

        @media (max-width: 768px){
            width: 100%;
            height: 200px;
            border-radius: 20px;
            position: relative;
        }
    }
`,R=i.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px){
        width: 100%;
        gap: 20px;
        position: relative;
        align-items: center;
    }

    & > h1{
        font-size: 26px;
        color: var(--color--dark--blue);
        font-weight: 500;

        @media (max-width: 768px){
            text-align: center;
            font-size: 24px;
        }
    }

    & > p{
        font-size: 14px;
        opacity: .6;
        color: var(--color--black);

        
        @media (max-width: 768px){
            text-align: center;
        }
    }
`,H=i.div`
    position: relative;

    @media (max-width: 768px){
        position: absolute;
        z-index: -1;
        opacity: 0.1;
        width: 150px;
        left: 50%;
        transform: translateX(-50%);
    }

    & > img {
        width: 180px;

        @media (max-width: 768px){
            width: 100%;
        }
    }
`,Y=i.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px){
        gap: 20px;
    }

    & > h1{
        font-size: 26px;
        color: var(--color--white);
        font-weight: 500;

        @media (max-width: 768px){
            font-size: 22px;
            text-align: center;
            width: 100%;
        }
    }

    & > p{
        font-size: 14px;
        opacity: .6;
        color: var(--color--white);

        @media (max-width: 768px){
            text-align: center;
            font-size: 14px;
            opacity: 0.8;
        }
    }
`,L=i.div`
    width: 30%;
    position: absolute;
    top: 50%;
    right: 25%;
    transform: translateY(-50%);

    @media (max-width: 768px){
        width: 120px;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        position: absolute;
    }

    & > img {
        width: 200px;
        filter: brightness(500%) invert(100%);

        @media (max-width: 768px){
            width: 100%;
        }
    }
`,W=()=>e.jsx(e.Fragment,{children:e.jsxs(D,{children:[e.jsxs("div",{children:[e.jsxs(Y,{children:[e.jsx("h1",{children:"Tecnologia de Ponta"}),e.jsx("p",{children:"Equipados com tecnologia CNC Framecad e máquinas de fabricação de telhas termoacústicas, garantimos precisão e inovação em cada perfil de Steel Frame."})]}),e.jsx(L,{children:e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/608dfa80-7aa9-4c16-8241-0ca1544bad00/public",alt:"foto do mapa do brasil"})})]}),e.jsxs("div",{children:[e.jsxs(R,{children:[e.jsx("h1",{children:"Soluções Eficientes"}),e.jsx("p",{children:"Colaboramos com gigantes como CSN Siderúrgica, Arcellor Mital, Saint-Gobain e STO Brasil para oferecer soluções de Steel Frame de qualidade inigualável."})]}),e.jsx(H,{children:e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7b2e17de-668a-47d2-212c-04548992f700/public",alt:"foto do mapa do brasil"})})]})]})}),Q=i.section`
    height: auto;
    width: 100%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    margin-top: 45px;
    padding: 0 5%;

    @media (max-width: 768px){
        margin-top: 55px;
    }
`,K=i.div`
    width: 100%;
    padding: 5% 0 2.5% 0;

    @media (max-width: 768px){
        padding: 15% 0 2.5% 0;
    }

    & > h1{
        font-size: 40px;
        line-height: 100%;
        width: 50%;
        font-weight: 500;
        color: var(--color--gray);

        @media (max-width: 768px){
            font-size: 32px;
            width: 100%;
            text-align: center;
        }

        & > b{
            font-weight: 500;
            color: var(--color--dark--blue);
        }
    }
`,m=i.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px){
        height: auto;
    }
`,Z=()=>e.jsx(e.Fragment,{children:e.jsxs(Q,{children:[e.jsx(K,{children:e.jsxs("h1",{children:["Porque escolher a ",e.jsx("b",{children:"Nova Metálica?"})]})}),e.jsx(m,{children:e.jsx(O,{})}),e.jsx(m,{children:e.jsx(W,{})})]})}),J=i.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    position: relative;
    transform: translateX(-50%);
    left: 50%;
    top: 0;

    @media (max-width: 768px) {
        padding: 5%;
    }   
`,U=i.div`
    width: 100%;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 768px) {
        padding: 0%;
        gap: 15px;
        display: none;
    }

    & > h1{
        font-size: 40px;
        color: var(--color--blue);
        font-weight: 500;

        @media (max-width: 768px) {
            font-size: 32px;
            text-align: center;
        }
    }

    & > p{
        font-size: 16px;
        color: var(--color--black);
        opacity: .8;

        @media (max-width: 768px) {
            text-align: center;
        }
    }
`,ee=i.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        position: relative;
        margin-top: 10%;
    }

    & > div{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;

        @media (max-width: 768px) {
            width: 100%;
            align-items: center;
            text-align: center;
        }

        & > img{
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 30px 0 0 30px;
            position: relative;
            
            @media (max-width: 768px) {
                height: 40px;
                border-radius: 0;
                z-index: -1;
                position: absolute;
                top: 0;
                left: 0;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 60% 0);
            }
        }

        & > div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 30px;
            padding: 0 5% 0 10%;

            @media (max-width: 768px){
                padding: 0 0;
            }

            & > h2 {
                font-size: 32px;
                font-weight: 500;
                color: var(--color--blue);

                @media (max-width: 768px) {
                    font-size: 28px;
                    height: 40px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            & > p{
                font-size: 16px;
                width: 85%;
                font-weight: 400;
                color: var(--color--black);
                opacity: .8;
                line-height: 110%;

                @media (max-width: 768px) {
                    width: 100%;
                    text-align: left;
                }   
            }
        }
    }
`,ie=i.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        position: relative;
        margin-top: 15%;
    }

    & > div{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;

        @media (max-width: 768px) {
            width: 100%;
            align-items: center;
            text-align: center;
        }

        & > img{
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 0px 30px 30px 0px;

            @media (max-width: 768px) {
                height: 40px;
                border-radius: 0;
                z-index: -1;
                position: absolute;
                top: 0;
                left: 0;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 55% 100%, 45% 0);
            }
        }

        & > div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 30px;
            padding: 0 5% 0 10%;

            @media (max-width: 768px){
                padding: 0 0;
            }

            & > h2 {
                font-size: 32px;
                font-weight: 500;
                color: var(--color--blue);

                @media (max-width: 768px) {
                    font-size: 28px;
                    height: 40px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            & > p{
                font-size: 16px;
                width: 85%;
                font-weight: 400;
                color: var(--color--black);
                opacity: .8;
                line-height: 110%;

                @media (max-width: 768px) {
                    width: 100%;
                    text-align: left;
                }   
            }
        }
    }
`,te=()=>e.jsx(e.Fragment,{children:e.jsxs(J,{children:[e.jsxs(U,{children:[e.jsx("h1",{children:"Construção a Seco"}),e.jsx("p",{children:"Agilize suas obras com a qualidade superior e menos resíduos que o Steel Frame proporciona."})]}),e.jsxs(ee,{children:[e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("h2",{children:"Steel Frame"}),e.jsx("p",{children:"O Steel Frame é uma revolução no setor da construção civil. Com perfis de aço galvanizado, essa técnica oferece uma estrutura leve, durável e resistente. A montagem rápida e precisa reduz significativamente o tempo de construção, enquanto a sustentabilidade e o conforto térmico e acústico tornam essa solução ideal para diversos tipos de edificações."}),e.jsx(d,{href:"#Form",children:"Solicitar orçamento"})]})}),e.jsx("div",{children:e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b790bac9-6a8a-402f-734b-0ab292815b00/public",alt:"steel frame"})})]}),e.jsxs(ie,{children:[e.jsx("div",{children:e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d1000bbb-40dd-427d-a012-ce2c42bf7200/public",alt:"drywall"})}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("h2",{children:"Drywall"}),e.jsx("p",{children:"O Drywall oferece praticidade e eficiência para a construção moderna, com excelente desempenho acústico e térmico. É a escolha perfeita para projetos residenciais e comerciais que buscam qualidade e agilidade na construção."}),e.jsx(d,{href:"#Form",children:"Solicitar orçamento"})]})})]})]})}),ae=i.section`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1280px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    padding: 10% 5%;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        gap: 50px;
    }   
`,oe=i.div`
    width: 45%;
    height: 400px;

    @media (max-width: 768px){
        width: 100%;
        height: 250px;
    }

    @media (min-width: 768px) and (max-width: 1280px){
        height: 350px;
    }

    & > iframe {
        width: 100%;
        height: 100%;
        border-radius: 20px;

        @media (max-width: 768px){
            border-radius: 12px;
        }
    }
`,re=i.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    width: 55%;
    z-index: 0; /* Garantir que o texto fique atrás do iframe */
    transition: opacity 1s ease;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > h1 {
        font-size: 26px;
        font-weight: 500;

        @media (max-width: 768px){
            font-size: 24px;
            text-align: center;
        }
    }

    & > h6 {
        font-size: 20px;
        font-weight: 400;
        margin-top: -20px;
        opacity: .8;

        @media (max-width: 768px){
            font-size: 14px;
            text-align: center;
            width: 100%;
            margin-top: -10px;
        }
    }

    & > p {
        font-size: 16px;
        opacity: .6;
        text-align: justify;
        width: 80%;

        @media (max-width: 768px){
            width: 100%;
        }
    }

    & > button {
        padding: 10px;
        background-color: var(--color--black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        & > svg {
            fill: var(--color--white);
            width: 30px;
            height: 30px;
        }
    }
`,ne=()=>e.jsxs(ae,{children:[e.jsxs(re,{children:[e.jsx("h1",{children:"Como Fabricamos Nossos Perfis"}),e.jsx("h6",{children:"A F325iT em Ação"}),e.jsx("p",{children:"A F325iT é uma máquina de última geração, equipada com um rolo calibrador automático, um avançado sistema hidráulico de fluxo variável e ferramentas adicionais de perfuração. Essa combinação permite ajustar com precisão os perfis de aço, otimizar o desempenho da máquina e oferecer flexibilidade na criação de cortes personalizados. Como resultado, o F325iT se destaca como a solução mais eficiente e versátil da FRAMECAD para fabricação de estruturas em Steel Frame."}),e.jsx(d,{href:"#Form",children:"Solicitar orçamento"})]}),e.jsx(oe,{children:e.jsx("iframe",{src:"https://www.youtube.com/embed/KVCquOX5toQ?autoplay=1",title:"FRAMECAD F325iT - Ideal for residential and light commercial construction projects",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})})]}),se=i.a`
  display: inline-block;
  padding: 10px 1.8rem;
  font-size: 16px;
  font-weight: 500;
  color: var(--color--white);
  border: 1px solid var(--color--white);
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;
  border-radius: 12px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color--blue);
    transform: translateX(-100%);
    transition: all 0.3s;
    z-index: -1;
    border-radius: 12px;
  }

  &:hover::before {
    transform: translateX(0);
  }
`,u=({href:t,children:o})=>{const r=g(),a=l=>{if(l.preventDefault(),t.startsWith("#")){const s=document.querySelector(t);if(s){const c=s.getBoundingClientRect().top+window.pageYOffset-200;window.scrollTo({top:c,behavior:"smooth"})}}else r(t)};return e.jsx(se,{href:t,onClick:a,children:o})},de=i.section`
    width: 97.5%;
    height: auto;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    background-color: var(--color--dark--blue);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5% 5%;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 10% 5%;
        gap: 10px;
    }
`,le=i.div`
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px){
        width: 100%;
    }
`,ce=i.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    color: var(--color--white);

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > h1{
        font-weight: 400;
        font-size: 28px;
        width: 80%;

        @media (max-width: 768px){
            width: 100%;
            text-align: center;
        }
    }

    & > p{
        font-size: 14px;
        width: 80%;
        font-weight: 300;

        @media (max-width: 768px){
            text-align: center;
            width: 90%;
        }
    }
`,pe=i.img`
    width: 100%;
    height: 50vh;
    object-fit: contain;
    border-radius: 15px;
    transition: transform 0.3s ease; /* Adicionando transição suave */
    
    &:hover {
        transform: scale(1.05); /* Aumenta a imagem ao passar o mouse */
    }
`,xe=()=>{const t=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public"],o="#";return e.jsxs(de,{children:[e.jsx(le,{children:e.jsx(b,{spaceBetween:30,slidesPerView:1,loop:!0,onMouseEnter:()=>(void 0).swiper.swiper.autoplay.stop(),onMouseLeave:()=>(void 0).swiper.swiper.autoplay.start(),children:t.map((r,a)=>e.jsx(v,{children:e.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:e.jsx(pe,{src:r,alt:`Produto ${a+1}`})})},a))})}),e.jsxs(ce,{children:[e.jsxs("h1",{children:["Eleve seus projetos com ",e.jsx("b",{children:"nossos produtos"})]}),e.jsx("p",{children:"Na Nova Metálica, oferecemos mais do que produtos. Oferecemos soluções completas para suas construções."}),e.jsx(u,{href:"/produtos",children:"Ver produtos"})]})]})},he=i.section`
    width: 97.5%;
    height: auto;
    max-width: 1280px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    gap: 50px;
    background-color: #e9e9e9;
    border-radius: 30px;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
    padding: 10px;

    @media (max-width: 768px){
       flex-direction: column-reverse;
       padding: 5% 5% 10% 5%;
    }
`,me=i.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    padding-left: 5%;
    margin-left: -10px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > h1{
        font-size: 32px;
        font-weight: 500;
        color: var(--color--black);

        @media (max-width: 768px){
            font-size: 28px;
        }

        & > b{
            color: var(--color--blue);
            font-weight: 500;
        }
    }

    & > p{
        font-size: 16px;
        font-weight: 400;
        opacity: .6;
        color: var(---color--black);

        @media (max-width: 768px){
            text-align: center;
        }
    }

    & > div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        gap: 20px;


        & > div{
            width: 50%;
            height: 10vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 2px;
            background-color: var(--color--dark--blue);
            padding: 15px;
            border-radius: 12px;

            @media (max-width: 768px){
                height: 120px;
                gap: 10px;
            }

            & > span{
                font-size: 30px;
                font-weight: 600;
                color: var(--color--blue);
            }

            & > p{
                font-size: 12px;
                opacity: .6;
                color: var(--color--white);
            }
        }
    }
`,ge=i.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;

    @media (max-width: 768px){
        width: 100%;
    }

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
    }
`,fe=()=>e.jsx(e.Fragment,{children:e.jsxs(he,{children:[e.jsxs(me,{children:[e.jsxs("h1",{children:["Seja nosso ",e.jsx("b",{children:"parceiro"})]}),e.jsx("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sequi magni porro quibusdam a. Laudantium modi, maiores possimus accusantium enim exercitationem delectus ex voluptas molestias magni, facilis voluptatibus reiciendis a!"}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("span",{children:"100%"}),e.jsx("p",{children:"Todos os perfis normatizados"})]}),e.jsxs("div",{children:[e.jsx("span",{children:"100%"}),e.jsx("p",{children:"Todos os perfis normatizados"})]})]}),e.jsx(f,{href:"/parcerias",children:"Ser parceiro"})]}),e.jsx(ge,{children:e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b790bac9-6a8a-402f-734b-0ab292815b00/public",alt:"foto de perfis de steel frame"})})]})}),ue=i.section`
    width: 97.5%;
    height: auto;
    max-width: 1280px;
    left: 50%;
    top: 0%;
    transform: translateX(-50%);
    position: relative;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 5%;
    background-color: var(--color--dark--blue);
    border-radius: 30px;

    @media (max-width: 768px){
        flex-direction: column ;
        padding: 10% 5%;
    }
`,we=i.div`
    width: 50%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 15px;
    background-color: var(--color--white);
    gap: 25px;

    @media (max-width: 768px){
        width: 100% ;
        height: auto;
        flex-direction: column;
    }

    & > div:nth-child(1){
        width: 50%;
        height: 100%;
        border-radius: 20px;
        background-color: var(--color--dark--blue);
        
        @media (max-width: 768px){
            width: 100%;
        }

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;

            @media (max-width: 768px){
                height: 200px;
            }
        }
    }

    & > div:nth-child(2){
        color: var(--color--white);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 50%;
        gap: 15px;
        color: var(--color--dark--blue);

        @media (max-width: 768px){
            width: 100%;
        }

        & > h4{
            font-size: 26px;
            font-weight: 500;
        }

        & > p{
            font-size: 14px;
            opacity: 0.6;
        }

        & > div {
            width: 100%;
            flex-wrap: wrap; 
            display: flex;
            gap: 5px 10px;
            cursor: pointer;

            & > span {
                background-color: var(--color--dark--blue);
                padding: 5px 10px;
                border-radius: 5px;
                color: var(--color--white);
                font-size: 12px;
            }
        }
    }
`,be=i.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    color: var(--color--white);

    @media (max-width: 768px){
        width: 100%;
        padding: 5% 0;
        align-items: center;
        gap: 30px;
    }

    & > h1{
        font-size: 28px;
        font-weight: 500;
        width: 80%;

        @media (max-width: 768px){
            text-align: center;
            width: 100%;
            font-size: 24px;
        }
    }

    & > p{
        font-size: 16px;
        opacity: .8;

        @media (max-width: 768px){
            font-size: 14px;
        }
    }
`,ve=({imageBlog:t,titulo:o,descricao:r,hashtag:a})=>e.jsx(e.Fragment,{children:e.jsxs(ue,{children:[e.jsxs(we,{children:[e.jsx("div",{children:e.jsx("img",{src:t})}),e.jsxs("div",{children:[e.jsxs("h4",{children:[o,"Titulo"]}),e.jsxs("p",{children:[r,"Descrição"]}),e.jsxs("div",{children:[e.jsxs("span",{children:[a,"#steelframe"]}),e.jsxs("span",{children:[a,"#drywall"]}),e.jsxs("span",{children:[a,"#novametalica"]}),e.jsxs("span",{children:[a,"#massa"]})]}),e.jsx(f,{})]})]}),e.jsxs(be,{children:[e.jsx("h1",{children:"Confira nosso blog e fique por dentro de tudo"}),e.jsx("p",{children:"Novos posts nos dias 15 e 30 de cada mês"}),e.jsx(u,{})]})]})}),je=i.div`
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
`,ye=i.div`
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
`,ke=i.form`
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


`,Ge=()=>e.jsx(e.Fragment,{children:e.jsxs(je,{id:"Form",children:[e.jsxs(ye,{children:[e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public",alt:"logo da nova metalica"}),e.jsx("h1",{children:"Entre em contato agora"}),e.jsx("p",{children:"Estamos à disposição para esclarecer suas dúvidas e ajudá-lo a encontrar a melhor solução para seu projeto."}),e.jsxs("p",{children:["Ao enviar esse formulário você está de acordo com a nossa ",e.jsx("a",{href:"#",children:"politica de dados"}),", e nosso ",e.jsx("a",{href:"#",children:"termo e condições"}),"."]})]}),e.jsx(ke,{id:"contactForm",children:e.jsxs("div",{children:[e.jsxs("label",{children:["Nome",e.jsx("input",{type:"text",id:"name",placeholder:"Anna Fernandes"})]}),e.jsxs("label",{children:["E-mail",e.jsx("input",{type:"email",id:"email",placeholder:"annafernandes@gmail.com"})]}),e.jsxs("label",{children:["Seu WhatsApp",e.jsx("input",{type:"tel",id:"tel",placeholder:"24981234567"})]}),e.jsx("button",{type:"submit",children:"Enviar"})]})})]})}),Ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx(X,{}),e.jsx(Z,{}),e.jsx(te,{}),e.jsx(ne,{}),e.jsx(xe,{}),e.jsx(fe,{}),e.jsx(Ge,{}),e.jsx(ve,{})]});export{Ae as default};
