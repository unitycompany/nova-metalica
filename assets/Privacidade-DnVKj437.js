import{d as i,r as t,j as e}from"./index-g8WeP5XZ.js";const s=768,p=i.section`
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
`,u=i.div`
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
    @media (max-width: ${s}px) {
      width: 70px; /* Imagem menor no mobile */
    }
  }

  & > h1 {
    font-size: 3rem;
    color: #333;
    font-weight: 500;
    margin: 0;

    @media (max-width: ${s}px) {
      font-size: 2rem; /* Tamanho reduzido no mobile */
    }
  }
`,h=i.div`
  max-width: 1280px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 350px;
  padding: 5% 5%;
  background-color: #ffffff;
  border-radius: 8px;

  @media (max-width: ${s}px) {
    /* Ajuste para mobile */
    margin-top: 280px;
    padding: 3% 5%;
  }
`,a=i.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--color--blue);
  font-size: 1.8rem;

  @media (max-width: ${s}px) {
    font-size: 1.4rem;
  }
`,o=i.p`
  margin-bottom: 1rem;
  color: var(--color--black);
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: ${s}px) {
    font-size: 0.95rem;
  }
`;i.div`
  margin: 2rem 0;
  position: relative;
  overflow-x: auto; 
  &::after {
    content: 'Arraste para o lado →';
    position: absolute;
    top: -20px;
    right: 10px;
    background: #f1f1f150;
    backdrop-filter: blur(1px);
    color: #666;
    padding: 0.3rem 0.6rem;
    font-size: 0.55rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    pointer-events: none;
    opacity: 0.9;

    @media (min-width: ${s+1}px) {
      display: none; /* some em telas maiores */
    }
  }
`;i.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;

  thead {
    background-color: #f1f1f1;
  }

  th,
  td {
    padding: 1rem;
    border: 1px solid #ddd;
    text-align: left;
    vertical-align: middle;
  }

  th {
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #fafafa;
  }

  @media (max-width: ${s}px) {
    display: block;
    white-space: nowrap;
    font-size: 0.9rem;
  }
`;const f=()=>{const[r,d]=t.useState(500),[m,c]=t.useState(2);return t.useEffect(()=>{const n=()=>{const l=window.innerWidth<=s;window.scrollY===0?(d(l?250:500),c(2)):(d(l?175:350),c(999))};return n(),window.addEventListener("scroll",n),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}},[]),e.jsxs(p,{children:[e.jsxs(u,{height:r,zIndex:m,children:[e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public",alt:"logo da nova metalica",loading:"lazy"}),e.jsx("h1",{children:"Política de Privacidade"})]}),e.jsxs(h,{children:[e.jsxs(o,{children:["Bem-vindo(a) à nossa ",e.jsx("strong",{children:"Política de Privacidade"}),". Aqui você encontra informações detalhadas sobre como coletamos, utilizamos e protegemos seus dados, em conformidade com a"," ",e.jsx("em",{children:"Lei Geral de Proteção de Dados (LGPD)"}),". Nosso compromisso é manter a máxima transparência e segurança em cada etapa do tratamento de dados."]}),e.jsx(a,{children:"1. Introdução"}),e.jsx(o,{children:"Esta Política de Privacidade descreve as práticas adotadas pela nossa empresa em relação à coleta, utilização e proteção de informações pessoais. Ao acessar nosso site ou utilizar nossos serviços, você concorda com os termos aqui apresentados."}),e.jsx(a,{children:"2. Coleta de Informações"}),e.jsx(o,{children:"Podemos coletar informações que você nos fornece diretamente, tais como nome, e-mail, telefone e quaisquer outros dados necessários para executar nossos serviços. Também podemos receber dados de terceiros ou fontes públicas, sempre em conformidade com a LGPD."}),e.jsx(a,{children:"3. Uso das Informações"}),e.jsx(o,{children:"As informações coletadas são utilizadas para prestação de serviços, comunicação com o usuário, melhorias em nosso site ou aplicativo e envio de conteúdo promocional (quando permitido). Não vendemos ou compartilhamos suas informações pessoais com terceiros para fins comerciais sem o seu consentimento expresso."}),e.jsx(a,{children:"4. Direitos do Usuário"}),e.jsx(o,{children:"Em consonância com a LGPD, você tem direito ao acesso, correção, atualização e exclusão de suas informações pessoais armazenadas por nós. Para solicitar qualquer uma dessas ações, basta entrar em contato conosco pelos canais disponibilizados em nosso site."}),e.jsx(a,{children:"5. Segurança dos Dados"}),e.jsx(o,{children:"Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo uso de criptografia, controles de acesso e sistemas de monitoramento. Essas ações são revistas regularmente para garantir a segurança contínua das informações."}),e.jsx(a,{children:"6. Compartilhamento de Informações"}),e.jsx(o,{children:"Seus dados podem ser compartilhados com parceiros de confiança ou autoridades competentes, mas somente quando necessário para cumprir obrigações legais, contratuais ou quando houver seu consentimento expresso."}),e.jsx(a,{children:"7. Retenção de Dados"}),e.jsx(o,{children:"Manteremos seus dados apenas pelo tempo necessário para atender às finalidades descritas nesta política, salvo se houver exigência legal que imponha período de armazenamento superior."}),e.jsx(a,{children:"8. Transferência Internacional de Dados"}),e.jsx(o,{children:"Se for necessária a transferência de dados para fora do país, asseguraremos que essas transferências sigam os requisitos de proteção exigidos pela legislação vigente, adotando cláusulas contratuais apropriadas."}),e.jsx(a,{children:"9. Cookies e Tecnologias Semelhantes"}),e.jsx(o,{children:"Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência de navegação, analisar o tráfego e personalizar conteúdo. Você pode gerenciar suas preferências de cookies a qualquer momento em seu navegador ou nas configurações do aplicativo."}),e.jsx(a,{children:"10. Alterações Nesta Política"}),e.jsxs(o,{children:["Podemos atualizar esta ",e.jsx("strong",{children:"Política de Privacidade"})," ","periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. Qualquer modificação significativa será comunicada em nossos canais oficiais, para que você esteja sempre informado."]}),e.jsx(o,{children:"Em caso de dúvidas sobre nossa Política de Privacidade ou sobre como seus dados estão sendo tratados, entre em contato. Estamos à disposição para fornecer esclarecimentos adicionais, visando a melhor experiência possível, com total respeito aos seus direitos e privacidade."}),e.jsx(o,{children:e.jsxs("em",{children:["Última atualização: ",e.jsx("strong",{children:"01 de Janeiro de 2025"})]})})]})]})};export{f as default};
