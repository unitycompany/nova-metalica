import{d as i,r as n,j as e}from"./index-g8WeP5XZ.js";const a=768,h=i.section`
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
    @media (max-width: ${a}px) {
      width: 70px; /* Imagem menor no mobile */
    }
  }

  & > h1 {
    font-size: 3rem;
    color: #333;
    font-weight: 500;
    margin: 0;

    @media (max-width: ${a}px) {
      font-size: 2rem; /* Tamanho reduzido no mobile */
    }
  }
`,j=i.div`
  max-width: 1280px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 350px;
  padding: 5% 5%;
  background-color: #ffffff;
  border-radius: 8px;

  @media (max-width: ${a}px) {
    /* Ajuste para mobile */
    margin-top: 280px;
    padding: 3% 5%;
  }
`,o=i.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--color--blue);
  font-size: 1.8rem;

  @media (max-width: ${a}px) {
    font-size: 1.4rem;
  }
`,s=i.p`
  margin-bottom: 1rem;
  color: var(--color--black);
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: ${a}px) {
    font-size: 0.95rem;
  }
`,m=i.div`
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

    @media (min-width: ${a+1}px) {
      display: none; /* some em telas maiores */
    }
  }
`,p=i.table`
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

  @media (max-width: ${a}px) {
    display: block;
    white-space: nowrap;
    font-size: 0.9rem;
  }
`,g=()=>{const[r,t]=n.useState(500),[x,c]=n.useState(2);return n.useEffect(()=>{const d=()=>{const l=window.innerWidth<=a;window.scrollY===0?(t(l?250:350),c(2)):(t(l?175:250),c(999))};return d(),window.addEventListener("scroll",d),window.addEventListener("resize",d),()=>{window.removeEventListener("scroll",d),window.removeEventListener("resize",d)}},[]),e.jsxs(h,{children:[e.jsxs(u,{height:r,zIndex:x,children:[e.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public",alt:"logo da nova metalica",loading:"lazy"}),e.jsx("h1",{children:"Política de Dados"})]}),e.jsxs(j,{children:[e.jsxs(s,{children:["Bem-vindo(a) à nossa ",e.jsx("strong",{children:"Política de Dados"}),". Aqui você encontra informações detalhadas sobre como coletamos, utilizamos e protegemos seus dados, em conformidade com a"," ",e.jsx("em",{children:"Lei Geral de Proteção de Dados (LGPD)"}),". Nosso compromisso é manter a máxima transparência e segurança em cada etapa do tratamento de dados."]}),e.jsx(o,{children:"1. Definições Importantes"}),e.jsxs(s,{children:[e.jsx("strong",{children:"Dados pessoais:"})," qualquer informação relacionada a uma pessoa física identificada ou identificável, como nome, e-mail ou CPF.",e.jsx("br",{}),e.jsx("strong",{children:"Titular dos dados:"})," a pessoa a quem os dados se referem.",e.jsx("br",{}),e.jsx("strong",{children:"Controlador:"})," a quem compete tomar as decisões sobre o tratamento de dados pessoais.",e.jsx("br",{}),e.jsx("strong",{children:"Operador:"})," a quem compete realizar o tratamento de dados pessoais em nome do controlador."]}),e.jsx(o,{children:"2. Exemplos de Coleta e Uso de Dados"}),e.jsx(s,{children:"Coletamos dados fornecidos voluntariamente por você ao entrar em contato conosco, se cadastrar em nossos serviços ou utilizar funcionalidades específicas em nosso site. Além disso, podemos obter dados do seu dispositivo (como IP e tipo de navegador) para melhorar a experiência do usuário."}),e.jsx(m,{children:e.jsxs(p,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Tipo de Dado"}),e.jsx("th",{children:"Exemplo"}),e.jsx("th",{children:"Finalidade"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Identificação"}),e.jsx("td",{children:"Nome, CPF, RG"}),e.jsx("td",{children:"Criar cadastro e validar identidade para fins de segurança e envio de comunicações."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Contato"}),e.jsx("td",{children:"E-mail, Telefone"}),e.jsx("td",{children:"Enviar notificações, suporte, marketing (caso autorizado) e responder dúvidas."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Navegação"}),e.jsx("td",{children:"Endereço IP, Cookies, Sessão"}),e.jsx("td",{children:"Analisar estatísticas de uso, autenticação de login e melhoria de performance."})]})]})]})}),e.jsxs(s,{children:[e.jsx("strong",{children:"Observação:"})," Caso sejam coletados dados bancários ou financeiros, estes serão utilizados estritamente para processamento de pagamentos e sempre com mecanismos de criptografia adequados."]}),e.jsx(s,{children:"Os dados coletados podem ser usados para:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Aprimorar nossos serviços e atendimento;"}),e.jsx("li",{children:"Enviar ofertas relevantes sobre nossos produtos (mediante consentimento prévio);"}),e.jsx("li",{children:"Manter registros internos, como histórico de solicitações;"}),e.jsx("li",{children:"Cumprir obrigações legais e regulatórias."})]}),e.jsx(o,{children:"3. Armazenamento e Segurança"}),e.jsxs(s,{children:["Implementamos ",e.jsx("strong",{children:"medidas de segurança físicas"})," (ex. salas com acesso controlado), ",e.jsx("strong",{children:"eletrônicas"})," (ex. firewalls e criptografia) e ",e.jsx("strong",{children:"administrativas"})," (ex. políticas de acesso restrito) para prevenir acessos não autorizados, uso indevido ou divulgação indevida. Nosso compromisso é garantir a"," ",e.jsx("strong",{children:"confidencialidade"})," e a ",e.jsx("strong",{children:"integridade"})," de suas informações."]}),e.jsx(s,{children:"Abaixo, apresentamos uma tabela com alguns exemplos de medidas de segurança que adotamos:"}),e.jsx(m,{children:e.jsxs(p,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Medida"}),e.jsx("th",{children:"Descrição"}),e.jsx("th",{children:"Benefício"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Criptografia"}),e.jsx("td",{children:"Dados sensíveis (ex: senhas) são armazenados e transmitidos de forma criptografada."}),e.jsx("td",{children:"Protege contra interceptação ou vazamento de informação."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Controle de Acesso"}),e.jsx("td",{children:"Sistemas de autenticação de múltiplos fatores e permissões específicas para cada área."}),e.jsx("td",{children:"Evita que colaboradores não autorizados acessem informações sigilosas."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Backup Regular"}),e.jsx("td",{children:"Realizamos cópias periódicas dos dados em local seguro e isolado."}),e.jsx("td",{children:"Previne perda de dados em caso de incidentes ou falhas."})]})]})]})}),e.jsx(o,{children:"4. Compartilhamento de Dados"}),e.jsx(s,{children:"Não compartilhamos ou vendemos seus dados pessoais a terceiros para fins comerciais. Compartilhamos dados apenas nos seguintes casos:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Obrigação legal ou regulatória:"})," quando há necessidade de atender a requisitos legais, como ordens judiciais."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Serviços terceirizados:"})," contratamos parceiros de TI para hospedagem de dados ou envio de e-mails, sempre com cláusulas de confidencialidade."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Consentimento expresso:"})," quando o titular concorda com o compartilhamento para fins específicos (ex: promoções conjuntas)."]})]}),e.jsx(o,{children:"5. Direitos do Titular"}),e.jsx(s,{children:"Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de seus dados, de acordo com a LGPD. Além disso, pode revogar consentimentos concedidos previamente e requisitar informações sobre qualquer compartilhamento realizado. Para exercer esses direitos, entre em contato conosco por meio de:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["E-mail: ",e.jsx("em",{children:"contato@exemplo.com"})]}),e.jsxs("li",{children:["Telefone: ",e.jsx("em",{children:"(XX) XXXX-XXXX"})]}),e.jsxs("li",{children:["Presencialmente em nossa sede: ",e.jsx("em",{children:"Rua X, nº 123, Cidade, Estado"})]})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Importante:"})," Em algumas situações, poderemos manter determinados dados pessoais mesmo após solicitação de exclusão, por motivos de cumprimento legal, resolução de disputas ou execução de contratos."]}),e.jsx(o,{children:"6. Retenção de Dados"}),e.jsx(s,{children:"Mantemos seus dados somente pelo tempo necessário para cumprir as finalidades para as quais foram coletados ou conforme exigido por lei. Após esse período, os dados são descartados de forma segura, minimizando riscos de vazamento ou uso indevido."}),e.jsx(o,{children:"7. Transferência Internacional de Dados"}),e.jsx(s,{children:"Caso seja necessária qualquer transferência de dados para fora do território nacional (por exemplo, servidores em outros países), garantimos a conformidade com a LGPD, adotando cláusulas contratuais específicas e certificações que assegurem um nível de proteção adequado."}),e.jsx(o,{children:"8. Alterações Nesta Política"}),e.jsxs(s,{children:["Podemos atualizar esta ",e.jsx("strong",{children:"Política de Dados"})," periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. Qualquer alteração significativa será comunicada em nossos canais oficiais, para que você esteja sempre ciente de como tratamos suas informações."]}),e.jsx(s,{children:"Em caso de dúvidas sobre nossa Política de Dados ou sobre como seus dados estão sendo tratados, entre em contato. Estamos à disposição para fornecer informações adicionais e garantir a melhor experiência possível, com total respeito aos seus direitos e privacidade."}),e.jsx(s,{children:e.jsxs("em",{children:["Última atualização: ",e.jsx("strong",{children:"01 de Janeiro de 2025"})]})})]})]})};export{g as default};
