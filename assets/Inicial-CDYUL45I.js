import{d as t,j as e,x as X}from"./index-B3YCQzk0.js";import{B as f}from"./Button05-Ca5JJDii.js";import{g as G,S as H,a as c}from"./swiper-C4VhgaT8.js";function W(z){let{swiper:i,extendParams:Y,on:l,emit:n,params:u}=z;i.autoplay={running:!1,paused:!1,timeLeft:0},Y({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let g,C,E=u&&u.autoplay?u.autoplay.delay:3e3,j=u&&u.autoplay?u.autoplay.delay:3e3,r,b=new Date().getTime(),T,y,x,D,A,s,q;function L(a){!i||i.destroyed||!i.wrapperEl||a.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",L),!(q||a.detail&&a.detail.bySwiperTouchMove)&&p())}const I=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?T=!0:T&&(j=r,T=!1);const a=i.autoplay.paused?r:b+j-new Date().getTime();i.autoplay.timeLeft=a,n("autoplayTimeLeft",a,a/E),C=requestAnimationFrame(()=>{I()})},J=()=>{let a;return i.virtual&&i.params.virtual.enabled?a=i.slides.filter(o=>o.classList.contains("swiper-slide-active"))[0]:a=i.slides[i.activeIndex],a?parseInt(a.getAttribute("data-swiper-autoplay"),10):void 0},k=a=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(C),I();let d=typeof a>"u"?i.params.autoplay.delay:a;E=i.params.autoplay.delay,j=i.params.autoplay.delay;const o=J();!Number.isNaN(o)&&o>0&&typeof a>"u"&&(d=o,E=o,j=o),r=d;const v=i.params.speed,N=()=>{!i||i.destroyed||(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(v,!0,!0),n("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,v,!0,!0),n("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(v,!0,!0),n("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,v,!0,!0),n("autoplay")),i.params.cssMode&&(b=new Date().getTime(),requestAnimationFrame(()=>{k()})))};return d>0?(clearTimeout(g),g=setTimeout(()=>{N()},d)):requestAnimationFrame(()=>{N()}),d},B=()=>{b=new Date().getTime(),i.autoplay.running=!0,k(),n("autoplayStart")},w=()=>{i.autoplay.running=!1,clearTimeout(g),cancelAnimationFrame(C),n("autoplayStop")},h=(a,d)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(g),a||(s=!0);const o=()=>{n("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",L):p()};if(i.autoplay.paused=!0,d){A&&(r=i.params.autoplay.delay),A=!1,o();return}r=(r||i.params.autoplay.delay)-(new Date().getTime()-b),!(i.isEnd&&r<0&&!i.params.loop)&&(r<0&&(r=0),o())},p=()=>{i.isEnd&&r<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(b=new Date().getTime(),s?(s=!1,k(r)):k(),i.autoplay.paused=!1,n("autoplayResume"))},P=()=>{if(i.destroyed||!i.autoplay.running)return;const a=G();a.visibilityState==="hidden"&&(s=!0,h(!0)),a.visibilityState==="visible"&&p()},F=a=>{a.pointerType==="mouse"&&(s=!0,q=!0,!(i.animating||i.autoplay.paused)&&h(!0))},M=a=>{a.pointerType==="mouse"&&(q=!1,i.autoplay.paused&&p())},K=()=>{i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",F),i.el.addEventListener("pointerleave",M))},U=()=>{i.el&&typeof i.el!="string"&&(i.el.removeEventListener("pointerenter",F),i.el.removeEventListener("pointerleave",M))},Z=()=>{G().addEventListener("visibilitychange",P)},$=()=>{G().removeEventListener("visibilitychange",P)};l("init",()=>{i.params.autoplay.enabled&&(K(),Z(),B())}),l("destroy",()=>{U(),$(),i.autoplay.running&&w()}),l("_freeModeStaticRelease",()=>{(x||s)&&p()}),l("_freeModeNoMomentumRelease",()=>{i.params.autoplay.disableOnInteraction?w():h(!0,!0)}),l("beforeTransitionStart",(a,d,o)=>{i.destroyed||!i.autoplay.running||(o||!i.params.autoplay.disableOnInteraction?h(!0,!0):w())}),l("sliderFirstMove",()=>{if(!(i.destroyed||!i.autoplay.running)){if(i.params.autoplay.disableOnInteraction){w();return}y=!0,x=!1,s=!1,D=setTimeout(()=>{s=!0,x=!0,h(!0)},200)}}),l("touchEnd",()=>{if(!(i.destroyed||!i.autoplay.running||!y)){if(clearTimeout(D),clearTimeout(g),i.params.autoplay.disableOnInteraction){x=!1,y=!1;return}x&&i.params.cssMode&&p(),x=!1,y=!1}}),l("slideChange",()=>{i.destroyed||!i.autoplay.running||(A=!0)}),Object.assign(i.autoplay,{start:B,stop:w,pause:h,resume:p})}const ee=t.section`
    width: 100%;
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1140px;
    transform: translateX(-50%);
    position: relative;
    left: 50%;
    top: 0;
    gap: 25px;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 0%;
        flex-direction: column-reverse;
        gap: 10px;
    }
`,ie=t.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    padding-left: 5%;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        padding-left: 0;
        height: 50vh;
        padding: 0 5%;
    }

    & > img {
        width: 150px;

        @media (max-width: 768px){
            width: 100px;
        }
    }

    & > h1 {
        font-size: 40px;
        font-weight: 400;
        color: var(--color--black);

        @media (max-width: 768px){
            font-size: 28px;
            text-align: center;
        }

        & > b {
            font-weight: 400;
            background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent;         
        }
    }

    & > p {
        color: var(--color--black);
        opacity: .6;
        font-size: 16px;
        width: 85%;

        @media (max-width: 768px){
            width: 100%;
            text-align: center;
        }
    }
`,te=t.div`
    width: 50%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fa5b4dbb-d095-4384-6e13-87b1a483f400/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 768px){
        height: 50vh;
        width: 100%;
    }

    & > div{
        width: 80%;
        height: 40%;
        border-radius: 12px;
        background-color: var(--color--blue);
        color: var(--color--white);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);

        @media (max-width: 768px){
            height: 50%;
        }

        @media (min-width:769px) and (max-width: 1240px){
            height: 50%;
        }
    }
`,ae=()=>e.jsx(e.Fragment,{children:e.jsxs(ee,{children:[e.jsxs(ie,{children:[e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public",alt:"logo da nova metalica"}),e.jsxs("h1",{children:["Seja um ",e.jsx("b",{children:"parceiro"})," da Nova Metálica"]}),e.jsx("p",{children:"Dizer bem resumido o porque ele deve ser um parceiro da Nova Metálica, Dizer bem resumido o porque ele deve ser um parceiro da Nova Metálica."}),e.jsx(f,{text:"Virar um parceiro agora!"})]}),e.jsx(te,{children:e.jsx("div",{children:"Video sobre a Nova Metálica"})})]})}),oe=t.section`
    width: 100%;
    height: 30vh;
    border-radius: 30px;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f344273-4c43-4154-5462-b710d2b8e800/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
    flex-direction: column;
    z-index: 2;

    @media (max-width: 768px){
        height: 35vh;
        padding: 0 5%;
        width: 95%;
    }

    @media (min-width:769px) and (max-width: 1240px){
        width: 98.5%;
        height: 35vh;
    }

    & > p{
        color: var(--color--white);
        width: 65%;
        line-height: 140%;
        text-align: center;
        font-weight: 300;
        font-size: 16px;

        @media (max-width: 768px){
            width: 100%;
            font-size: 14px;
        }

        & > b {
            font-weight: 500;
        }
    }
`,re=()=>e.jsx(e.Fragment,{children:e.jsxs(oe,{children:[e.jsxs("p",{children:[e.jsx("b",{children:"AVISO:"})," Fazer a aplicação não é certeza de que você será aceito."]}),e.jsxs("p",{children:["Eu respeito o seu tempo e o meu, por conta disso, só entrará na ",e.jsx("b",{children:"MENTORIA SCALE"})," quem realmente estiver preparado para tirar o máximo proveito desse acompanhamento."]})]})}),ne=t.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    z-index: 1;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 10% 5%;
        height: auto;
    }
`,de=t.div`
    width: 50%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 30px;
    background-color: var(--color--white);
    border-radius: 0 30px 30px 0;
    position: relative;
    z-index: 2;
    padding-left: 5%;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        gap: 30px;
        padding-left: 0%;
    }

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        top: 10px;
        left: 10px;
        background-color: #00000005;
        position: absolute;
        border-radius: 0 30px 30px 0;
        z-index: -1;
    }

    & > h1{
        font-size: 32px;
        width: 80%;
        font-weight: 300;
        color: var(--color--black);

        @media (max-width: 768px){
            text-align: center;
            font-size: 26px;
            margin-left: 5vh;
        }

        & > b{
            font-weight: 400;
            background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent;  
        }
    }

    & > p{
        font-size: 16px;
        width: 80%;
        line-height: 160%;
        color: var(--color--black);
        font-weight: 300;
        
        @media (max-width: 768px){
            font-size: 14px;
            text-align: center;
            width: 90%;
            margin-left: 5vh;
        }
    }

    & >  button {
        @media (max-width: 768px){
            margin-left: 5vh;
        }
    }

    & > img {
        position: absolute;
        z-index: 2;
        border: 1px solid red;
    }
`,le=t.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-right: 5%;

    @media (max-width: 768px){
        width: 100%;
    }
`,S=t.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px;
    padding: 10px;
    gap: 15px;
    background-color: #00000010;

    @media (max-width: 768px){
        width: 100%;
        flex-direction: column;
        padding: 20px;
    }
    
    & > div{
        width: 30%;
        height: 100%;
        border-radius: 25px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color--white);

        @media (max-width: 768px){
            width: 100%;
            background-color: transparent;
            justify-content: flex-start;
        }

        & > img{
            width: 80%;

            @media (max-width: 768px){
                width: 20%;
                margin-left: 10px;
                border-radius: 10px;
            }
        }
    }

    & > div:nth-child(2){
        width: 70%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        padding: 10px;
        background-color: transparent;

        @media (max-width: 768px){
            width: 100%;
        }

        & > h2{
            font-size: 20px;
            font-weight: 500;
            background: linear-gradient(45deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent;  
        }

        & > p{
            font-size: 12px;
            line-height: 120%;
            font-weight: 300;
            color: var(--color--dark--blue);
        }
    }
`,se=()=>e.jsx(e.Fragment,{children:e.jsxs(ne,{children:[e.jsxs(de,{children:[e.jsxs("h1",{children:["Para quem é a ",e.jsx("b",{children:"Nova Metálica?"})]}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, ad. Eaque asperiores in est temporibus, dicta facere earum perferendis assumenda alias. Iure commodi natus aperiam animi! Aut quod corrupti quae."}),e.jsx(f,{text:"Solicitar meu orçamento agora!"})]}),e.jsxs(le,{children:[e.jsxs(S,{children:[e.jsx("div",{children:e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/91a5a914-898d-44d6-3910-5410c95e6500/public",alt:"icon"})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Montadores"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus eligendi nulla, tempora cum non pariatur, possimus fugit minima iure ex, veniam dolore! Tempore quos fugiat nihil dolorum repellendus voluptatum."})]})]}),e.jsxs(S,{children:[e.jsx("div",{children:e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/49f6844f-b4b0-4699-695b-7439f7354400/public",alt:"icon"})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Empreiteiros"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus eligendi nulla, tempora cum non pariatur, possimus fugit minima iure ex, veniam dolore! Tempore quos fugiat nihil dolorum repellendus voluptatum."})]})]}),e.jsxs(S,{children:[e.jsx("div",{children:e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09527f06-a4af-4a15-1d71-f0acc4b7f100/public",alt:"icon"})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Empresas de Engenharia"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus eligendi nulla, tempora cum non pariatur, possimus fugit minima iure ex, veniam dolore! Tempore quos fugiat nihil dolorum repellendus voluptatum."})]})]})]})]})}),ce=t.button`
    color: var(--color--dark--blue);
    background: linear-gradient(45deg, var(--color--white), var(--color--blue));
    padding: 12px 20px;
    border-radius: 12px;
    font-weight: 400;
    cursor: pointer;
    font-size: 14px;
`,pe=({text:z})=>e.jsx(e.Fragment,{children:e.jsx(ce,{onClick:()=>document.getElementById("contactForm").scrollIntoView({behavior:"smooth"}),children:z})}),ue=t.section`
    width: 100%;
    height: 70vh;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a3bf147b-2bdc-48e3-043f-56241fe02700/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 0 5%;
    gap: 25px;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 5%;
        width: 95%;
        gap: 50px;
    }

    @media (min-width:769px) and (max-width: 1240px){
        width: 98.5%;
        padding: 2.5% 5%;
    }
`,xe=t.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 20%;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }

    & > h1 {
        font-size: 32px;
        color: var(--color--white);
        font-weight: 400;
        width: 40%;

        @media (max-width: 768px){
            width: 100%;
            text-align: center;
            font-size: 26px;
        }

        & > b{
            font-weight: 500;
            background: linear-gradient(130deg, var(--color--blue), var(--color--gray));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent; 
        }
    }
`,he=t.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: 50vh;
    }
`,m=t.div`
  width: 100%;
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px){
    height: 50vh;
  }

  & > div{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background-color: var(--color--white);
    border-radius: 20px;
    height: 90%;

    @media (max-width: 768px){
        height: 100%;
    }

    & > div {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color--dark--blue);
        border-radius: 20px;
        color: var(--color--white);
    }

    & > h2{
        font-size: 20px;
        font-weight: 500;
        background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
        -webkit-background-clip: text;  
        background-clip: text; 
        color: transparent;      
    }

    & > p {
        font-size: 14px;
        color: var(--color--black);
        font-weight: 300;
    } 
  }

  & > div:nth-child(2){
    border: none;
    width: 100%;
    background-color: transparent;
    padding: 10px 0;
    height: 10%;

    & > button{
        width: 100%;
    }
  }
`,me=()=>e.jsx(e.Fragment,{children:e.jsxs(ue,{children:[e.jsxs(xe,{children:[e.jsxs("h1",{children:["Benefícios em ser um ",e.jsx("b",{children:"Lojista Parceiro"})]}),e.jsx("div",{children:e.jsx(pe,{text:"Virar um parceiro agora"})})]}),e.jsx(he,{children:e.jsxs(H,{modules:[W],autoplay:{delay:3e3,disableOnInteraction:!1},spaceBetween:10,slidesPerView:1,centeredSlides:!0,loop:!0,breakpoints:{768:{slidesPerView:1},1024:{slidesPerView:2}},children:[e.jsx(c,{children:e.jsx(m,{children:e.jsxs("div",{children:[e.jsx("div",{children:"Icon"}),e.jsx("h2",{children:"Beneficio"}),e.jsx("p",{children:"Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio"})]})})}),e.jsx(c,{children:e.jsx(m,{children:e.jsxs("div",{children:[e.jsx("div",{children:"Icon"}),e.jsx("h2",{children:"Beneficio"}),e.jsx("p",{children:"Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio"})]})})}),e.jsx(c,{children:e.jsx(m,{children:e.jsxs("div",{children:[e.jsx("div",{children:"Icon"}),e.jsx("h2",{children:"Beneficio"}),e.jsx("p",{children:"Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio"})]})})}),e.jsx(c,{children:e.jsx(m,{children:e.jsxs("div",{children:[e.jsx("div",{children:"Icon"}),e.jsx("h2",{children:"Beneficio"}),e.jsx("p",{children:"Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio"})]})})}),e.jsx(c,{children:e.jsx(m,{children:e.jsxs("div",{children:[e.jsx("div",{children:"Icon"}),e.jsx("h2",{children:"Beneficio"}),e.jsx("p",{children:"Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio"})]})})}),e.jsx(c,{children:e.jsx(m,{children:e.jsxs("div",{children:[e.jsx("div",{children:"Icon"}),e.jsx("h2",{children:"Beneficio"}),e.jsx("p",{children:"Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio"})]})})})]})})]})}),fe=t.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1140px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    flex-direction: column;
    padding: 0 5%;
    gap: 20px;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 5%;
    }
`,ge=t.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 10%;
`,be=t.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    height: 70%;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
    }
`,we=t.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px){
        width: 100%;
    }

    & > div{
        height: 30%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        @media (max-width: 768px){
            align-items: center;
            text-align: center;
            margin-top: 25px;
        }

        & > h1{
            font-size: 36px;
            font-weight: 400;
            width: 75%;

            @media (max-width: 768px){
                width: 100%;
                font-size: 26px;
            }

            & > b {
                font-weight: 500;
                background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
                -webkit-background-clip: text;  
                background-clip: text; 
                color: transparent;
            }
        }

        & > p {
            font-size: 16px;
            color: var(--color--black);
            opacity: .6;
            font-weight: 400;
            width: 85%;

            @media (max-width: 768px){
                width: 100%;
            }
        }
    }

    & > div:nth-child(2){
        height: 70%;
        width: 100%;
        flex-direction: row;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        @media (max-width: 768px){
            height: 40vh;
        }

        & > div {
            width: 30%;
            border-radius: 15px;
            color: var(--color--white);

            @media (max-width: 768px){
                border-radius: 30px;
            }
        }

        & > div:nth-child(1){
            background-color: var(--color--dark--blue);
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`,ve=t.div`
    width: 45%;
    height: 100%;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
    
    & > div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 20px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4e5edc4f-f411-4f7a-5f47-9fa8ab3e6d00/public');
        background-position: center;
        background-size: cover;
        border-radius: 30px;
    }
`,je=()=>e.jsx(e.Fragment,{children:e.jsxs(fe,{children:[e.jsx(ge,{children:e.jsx(X,{size:35,color:"var(--color--gray)"})}),e.jsxs(be,{children:[e.jsxs(we,{children:[e.jsxs("div",{children:[e.jsxs("h1",{children:["Quem ",e.jsx("b",{children:"é a Nova Metálica?"})]}),e.jsx("p",{children:"O nosso objetivo em oferecer o programa de parceiros é garantir que pequenos e médios empreiteiros tenham a oportunidade e tenham um lucro maior..."})]}),e.jsx("div",{children:e.jsx("div",{children:"Vídeo da nova metálica produzindo"})})]}),e.jsx(ve,{children:e.jsx("div",{children:e.jsx(f,{text:"Virar um parceiro agora!"})})})]})]})}),ye=t.section`
    width: 100%;
    max-width: 1140px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    height: 80vh;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6331a68e-fbe1-4e74-c482-d4ee69226b00/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 30px;
    padding: 0 5%;
    gap: 20px;

    @media (max-width: 768px){
        width: 95%;
        flex-direction: column;
        height: auto;
        padding: 10% 5%;
    }

    @media (min-width:769px) and (max-width: 1240px){
        width: 98.5%;
    }
`,ke=t.div`
    width: 45%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }
    
    gap: 25px;

    & > h1 {
        font-size: 32px;
        font-weight: 400;
        color: var(--color--white);

        @media (max-width: 768px){
            font-size: 26px;
            text-align: center;
        }

        & > b {
            font-weight: 500;
            background: linear-gradient(190deg, var(--color--blue), var(--color--white));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent; 
        }
    }

    & > p {
        font-size: 16px;
        color: var(--color--white);
        font-weight: 400;
        opacity: .8;
        line-height: 120%;
        width: 90%;
        margin-bottom: 50px;

        @media (max-width: 768px){
            text-align: center;
            font-size: 14px;
            margin-bottom: 25px;
        }
    }
`,ze=t.div`
    width: 55%;
    height: 75%;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 20px;

    @media (max-width: 768px){
        width: 100%;
    }
`,O=t.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 55vh;
    width: 100%;
    gap: 20px;

    @media (max-width: 768px){
        height: 70vh;
        flex-direction: column;
    }
`,V=t.div`
    width: 50%;
    height: 100%;
    background-color: #d3d3d3; /* Placeholder para a imagem */
    border-radius: 20px;

    @media (max-width: 768px){
        width: 100%;
    }
`,_=t.div`
    width: 50%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px){
        height: 45vh;
        width: 100%;
    }

    & > div {
        display: flex;
        gap: 20px;
        flex-direction: column;
    }
`,Q=t.h2`
    font-size: 26px;
    margin-bottom: 10px;
    font-weight: 400;
    background: linear-gradient(140deg, var(--color--blue), var(--color--dark--blue));
    -webkit-background-clip: text;  
    background-clip: text; 
    color: transparent; 

    @media (max-width: 768px){
        font-size: 22px;
        text-align: center;
    }
`,R=t.p`
    font-size: 16px;
    color: var(--color--black);
    font-style: italic;
    opacity: .6;
    margin-bottom: 20px;

    @media (max-width: 768px){
        font-size: 14px;
        text-align: center;
    }
    
`,Ce=()=>e.jsx(e.Fragment,{children:e.jsxs(ye,{children:[e.jsxs(ke,{children:[e.jsxs("h1",{children:["Nossos ",e.jsx("b",{children:"parceiros"})]}),e.jsx("p",{children:"O nosso objetivo em oferecer o programa de parceiros é garantir que pequenos e médios empreiteiros tenham a oportunidade e tenham um lucro maior..."}),e.jsx(X,{color:"var(--color--white)",size:35})]}),e.jsx(ze,{children:e.jsxs(H,{modules:[W],autoplay:{delay:5e3,disableOnInteraction:!1},spaceBetween:50,slidesPerView:1,loop:!0,pagination:{clickable:!0},navigation:!0,children:[e.jsx(c,{children:e.jsxs(O,{children:[e.jsx(V,{}),e.jsxs(_,{children:[e.jsxs("div",{children:[e.jsx(Q,{children:"Nome do parceiro"}),e.jsx(R,{children:'"Alguma coisa que ele falou, Alguma coisa que ele falou, Alguma coisa que ele falou, Alguma coisa que ele falou"'})]}),e.jsx(f,{text:"Virar um parceiro agora"})]})]})}),e.jsx(c,{children:e.jsxs(O,{children:[e.jsx(V,{}),e.jsxs(_,{children:[e.jsxs("div",{children:[e.jsx(Q,{children:"Nome do parceiro"}),e.jsx(R,{children:'"Alguma coisa que ele falou, Alguma coisa que ele falou, Alguma coisa que ele falou, Alguma coisa que ele falou"'})]}),e.jsx(f,{text:"Virar um parceiro agora"})]})]})})]})})]})}),Ee=t.section`
    width: 100%;
    max-width: 1140px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 10% 5%;
        margin-top: 5vh;
        height: auto;
    }
`,Te=t.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    padding-left: 5%;

    @media (max-width: 768px){
        width: 100%;
        padding-left: 0;
        align-items: center;
        height: 30vh;
    }

    & > img {
        width: 150px;

        @media (max-width: 768px){
            width: 100px;
        }
    }

    & > h1 {
        font-size: 40px;
        font-weight: 400;
        color: var(--color--black);

        @media (max-width: 768px){
            font-size: 28px;
            text-align: center;
        }

        & > b {
            font-weight: 400;
            background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent;         
        }
    }

    & > p {
        color: var(--color--black);
        opacity: .6;
        font-size: 16px;
        width: 85%;

        @media (max-width: 768px){
            font-size: 14px;
            width: 100%;
            text-align: center;
        }
    }
`,Ae=t.form`
    width: 50%;
    border: 1px solid var(--color--dark--blue);
    height: 60%;
    position: relative;
    background-color: var(--color--white);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
    right: 1%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        width: 100%;
        right: 0;
        height: 70vh;
    }

    @media (min-width:769px) and (max-width: 1240px){
        height: 75%;
        right: 2.5%;
    }

    &::before{
        content: '';
        width: 105%;
        height: 90%;
        background-color: var(--color--dark--blue);
        top: 50%;
        transform: translateY(-50%);
        border-radius: 30px;
        right: -2.5%;
        position: absolute;
        z-index: -1;
    }

    & > input {
        border-radius: 12px;
        width: 80%;
        padding: 15px;
        margin: 5px;
        background-color: #ffffff95;
        box-shadow: 0 0 3px rgba(0, 195, 255, 0.15);

        &::placeholder{
            font-size: 14px;
            opacity: 1;
            color: var(--color--dark--blue);
            font-weight: 300;
        }

        &:focus{
            background-color: #ffffff;
        }
    }

    & > div{
        display: flex;
        justify-content: space-between;
        width: 82%;

        & > input{
            border-radius: 12px;
            width: 50%;
            padding: 15px;
            margin: 5px;
            background-color: #ffffff95;
            box-shadow: 0 0 3px rgba(0, 195, 255, 0.15);

            &::placeholder{
                font-size: 14px;
                opacity: 1;
                color: var(--color--dark--blue);
                font-weight: 300;
            }

            &:focus{
                background-color: #ffffff;
            }
        }
    }

    & > select{
        width: 80%;
        padding: 16px;
        border-radius: 12px;
        margin: 5px;
        font-size: 14px;
        background-color: #ffffff95;
        box-shadow: 0 0 3px rgba(0, 195, 255, 0.15);
        font-weight: 300;
    }

    & > button {
        width: 80%;
        margin-top: 5px;
        padding: 15px;
    }
`,qe=()=>e.jsx(e.Fragment,{children:e.jsxs(Ee,{children:[e.jsxs(Te,{children:[e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public",alt:"logo da nova metalica"}),e.jsxs("h1",{children:["Preencha o formulário para ",e.jsx("b",{children:"virar um parceiro"})]}),e.jsx("p",{children:"Dizer aqui que todos os seus dados estão seguros e serão usados apenas para fins de contato"})]}),e.jsxs(Ae,{id:"contactForm",children:[e.jsx("input",{type:"text",id:"name",placeholder:"Seu nome"}),e.jsx("input",{type:"e-mail",id:"email",placeholder:"Seu e-mail"}),e.jsx("input",{type:"tel",id:"tel",placeholder:"Seu WhatsApp"}),e.jsxs("div",{children:[e.jsx("input",{type:"text",id:"cidade",placeholder:"Cidade"}),e.jsx("input",{type:"text",id:"estado",placeholder:"Estado"})]}),e.jsx("input",{type:"text",id:"empresa",placeholder:"Nome da sua Empresa"}),e.jsxs("select",{children:[e.jsx("option",{disabled:!0,selected:!0,children:"Segmento"}),e.jsx("option",{children:"Montador"}),e.jsx("option",{children:"Empreiteira"}),e.jsx("option",{children:"Empresa de Engenharia"})]}),e.jsx(f,{text:"Enviar"})]})]})}),Le=()=>e.jsxs(e.Fragment,{children:[e.jsx(ae,{}),e.jsx(re,{}),e.jsx(se,{}),e.jsx(me,{}),e.jsx(je,{}),e.jsx(Ce,{}),e.jsx(qe,{})]});export{Le as default};
