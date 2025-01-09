import{d as n,r as t,j as e}from"./index-g8WeP5XZ.js";const i=768,u=n.section`
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
`,p=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${r=>r.height}px;
  background: #f1f1f180;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 5%;
  gap: 20px;
  transition: height 0.4s ease;
  z-index: ${r=>r.zIndex};

  /* Imagem e título */
  & > img {
    width: 100px;
    @media (max-width: ${i}px) {
      width: 70px; /* Imagem menor no mobile */
    }
  }

  & > h1 {
    font-size: 3rem;
    color: #333;
    font-weight: 500;
    margin: 0;

    @media (max-width: ${i}px) {
      font-size: 2rem; /* Tamanho reduzido no mobile */
    }
  }
`,x=n.div`
  max-width: 1280px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 350px;
  padding: 5% 5%;
  background-color: #ffffff;
  border-radius: 8px;

  @media (max-width: ${i}px) {
    /* Ajuste para mobile */
    margin-top: 280px;
    padding: 3% 5%;
  }
`,s=n.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--color--blue);
  font-size: 1.8rem;

  @media (max-width: ${i}px) {
    font-size: 1.4rem;
  }
`,o=n.p`
  margin-bottom: 1rem;
  color: var(--color--black);
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: ${i}px) {
    font-size: 0.95rem;
  }
`,f=()=>{const[r,d]=t.useState(500),[m,c]=t.useState(2);return t.useEffect(()=>{const a=()=>{const l=window.innerWidth<=i;window.scrollY===0?(d(l?250:500),c(2)):(d(l?175:350),c(999))};return a(),window.addEventListener("scroll",a),window.addEventListener("resize",a),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[]),e.jsxs(u,{children:[e.jsxs(p,{height:r,zIndex:m,children:[e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public",alt:"logo da nova metalica",loading:"lazy"}),e.jsx("h1",{children:"Termos e Condições"})]}),e.jsxs(x,{children:[e.jsxs(o,{children:["Bem-vindo(a) aos nossos ",e.jsx("strong",{children:"Termos e Condições"}),". Estes termos regulam o uso do nosso site e de quaisquer serviços ou produtos fornecidos. Ao utilizar nossos serviços, você concorda em cumprir todos os pontos descritos abaixo."]}),e.jsx(s,{children:"1. Definições"}),e.jsxs(o,{children:[e.jsx("strong",{children:"Site:"})," refere-se ao nosso website e a todos os recursos disponibilizados por meio dele.",e.jsx("br",{}),e.jsx("strong",{children:"Serviços:"})," qualquer oferta ou funcionalidade provida por nós, seja de forma gratuita ou paga.",e.jsx("br",{}),e.jsx("strong",{children:"Usuário:"})," qualquer pessoa que acesse nosso site ou utilize nossos serviços."]}),e.jsx(s,{children:"2. Aceitação dos Termos"}),e.jsx(o,{children:"Ao navegar em nosso site e utilizar nossos serviços, você confirma que leu, entendeu e concorda com os presentes Termos e Condições. Caso não concorde com qualquer parte, não utilize o nosso site ou serviços."}),e.jsx(s,{children:"3. Modificações"}),e.jsx(o,{children:"Podemos atualizar estes Termos periodicamente para refletir alterações em nossos serviços ou na legislação. Qualquer mudança substancial será comunicada por meio de avisos em nosso site ou por canais oficiais. A responsabilidade de verificar periodicamente se há atualizações também é do usuário."}),e.jsx(s,{children:"4. Uso Adequado dos Serviços"}),e.jsx(o,{children:"Você se compromete a utilizar os serviços apenas para fins legais, respeitando toda a legislação aplicável. É proibido utilizar o site para promover atividades ilícitas, violar direitos de terceiros ou tentar obter acesso não autorizado a sistemas, servidores ou dados."}),e.jsx(s,{children:"5. Propriedade Intelectual"}),e.jsx(o,{children:"Todos os conteúdos, marcas e logotipos exibidos em nosso site são de nossa propriedade ou licenciados por terceiros. Qualquer uso sem autorização prévia e expressa é estritamente proibido."}),e.jsx(s,{children:"6. Limitação de Responsabilidade"}),e.jsx(o,{children:"Não somos responsáveis por danos diretos, indiretos ou consequentes resultantes do uso ou incapacidade de uso de nossos serviços, na máxima extensão permitida pela lei aplicável. Você concorda que o uso de qualquer informação obtida por meio do site é de sua total responsabilidade."}),e.jsx(s,{children:"7. Garantias e Avisos Legais"}),e.jsx(o,{children:"Fornecemos o site e os serviços “no estado em que se encontram”. Não oferecemos garantias expressas ou implícitas sobre a precisão, confiabilidade, disponibilidade ou adequação dos serviços para qualquer finalidade específica."}),e.jsx(s,{children:"8. Lei Aplicável e Foro"}),e.jsx(o,{children:"Estes Termos e Condições são regidos pelas leis do Brasil. Quaisquer disputas ou controvérsias decorrentes da interpretação ou execução destes termos serão submetidas ao foro da comarca em que se encontra nossa sede."}),e.jsx(s,{children:"9. Dúvidas e Contato"}),e.jsx(o,{children:"Se você tiver qualquer dúvida sobre estes Termos e Condições ou necessitar de esclarecimentos adicionais, entre em contato pelos canais indicados em nosso site."}),e.jsx(o,{children:e.jsxs("em",{children:["Última atualização: ",e.jsx("strong",{children:"01 de Janeiro de 2025"})]})})]})]})};export{f as default};
