import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BREAKPOINT_MOBILE = 768;

/* Container global */
const All = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
`;

/**
 * Cabeçalho fixo:
 * - No topo da página (scrollY === 0):
 *   -> Desktop: 500px 
 *   -> Mobile: 250px
 *   -> z-index = 2
 * - Ao rolar a página (scrollY > 0):
 *   -> Desktop: 350px 
 *   -> Mobile: 175px
 *   -> z-index = 999
 */
const Topo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.height}px;
  background: #f1f1f180;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 5%;
  gap: 20px;
  transition: height 0.4s ease;
  z-index: ${(props) => props.zIndex};

  /* Imagem e título */
  & > img {
    width: 100px;
    @media (max-width: ${BREAKPOINT_MOBILE}px) {
      width: 70px;
    }
  }

  & > h1 {
    font-size: 3rem;
    color: #333;
    font-weight: 500;
    margin: 0;
    @media (max-width: ${BREAKPOINT_MOBILE}px) {
      font-size: 2rem;
    }
  }
`;

/* Contêiner principal com margem para não ficar escondido atrás do cabeçalho */
const ContentContainer = styled.div`
  max-width: 1280px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 350px;
  padding: 5% 5%;
  background-color: #ffffff;
  border-radius: 8px;

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    margin-top: 280px;
    padding: 3% 5%;
  }
`;

/* Títulos e parágrafos */
const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--color--blue);
  font-size: 1.8rem;

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    font-size: 1.4rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: var(--color--black);
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    font-size: 0.95rem;
  }
`;

const TermosECondicoes = () => {
  const [headerHeight, setHeaderHeight] = useState(500);
  const [topoZIndex, setTopoZIndex] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= BREAKPOINT_MOBILE;
      if (window.scrollY === 0) {
        // No topo: cabeçalho maior
        setHeaderHeight(isMobile ? 250 : 350);
        setTopoZIndex(2);
      } else {
        // Ao rolar: cabeçalho reduzido
        setHeaderHeight(isMobile ? 175 : 250);
        setTopoZIndex(999);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <All>
      <Topo height={headerHeight} zIndex={topoZIndex}>
        <img
          src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public"
          alt="logo da nova metalica"
          loading="lazy"
        />
        <h1>Termos e Condições</h1>
      </Topo>

      <ContentContainer>
        <Paragraph>
          Bem-vindo(a) aos nossos <strong>Termos e Condições</strong>. Este documento estabelece as regras e diretrizes para o uso dos nossos serviços, garantindo transparência e segurança em nossas relações com os usuários.
        </Paragraph>

        <Title>1. Aceitação dos Termos</Title>
        <Paragraph>
          Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos presentes Termos e Condições. Caso não concorde com alguma parte destes termos, por favor, interrompa o uso dos nossos serviços.
        </Paragraph>

        <Title>2. Modificações</Title>
        <Paragraph>
          Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio. As alterações serão publicadas nesta página e entrarão em vigor imediatamente. É responsabilidade do usuário verificar periodicamente as atualizações.
        </Paragraph>

        <Title>3. Descrição dos Serviços</Title>
        <Paragraph>
          Nosso site oferece acesso a conteúdos, produtos e serviços diversos, destinados a facilitar a comunicação e a interação entre os usuários. Os detalhes específicos dos serviços estão descritos em páginas individuais do site.
        </Paragraph>

        <Title>4. Obrigações do Usuário</Title>
        <Paragraph>
          O usuário se compromete a utilizar os serviços de forma ética, legal e respeitosa. É vedado:
        </Paragraph>
        <ul>
          <li>Utilizar o site para fins ilícitos ou que violem direitos de terceiros;</li>
          <li>Interferir no funcionamento ou na segurança dos serviços;</li>
          <li>Distribuir conteúdo que possa ser considerado ofensivo ou prejudicial.</li>
        </ul>

        <Title>5. Propriedade Intelectual</Title>
        <Paragraph>
          Todo o conteúdo disponibilizado neste site, incluindo textos, imagens, logos e designs, é de propriedade exclusiva dos respectivos detentores e está protegido pelas leis de direitos autorais. É proibida a reprodução, distribuição ou modificação de qualquer material sem a devida autorização.
        </Paragraph>

        <Title>6. Limitação de Responsabilidade</Title>
        <Paragraph>
          Em nenhuma hipótese seremos responsáveis por danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da incapacidade de uso dos serviços, mesmo que tenhamos sido avisados da possibilidade de tais danos.
        </Paragraph>

        <Title>7. Lei Aplicável e Jurisdição</Title>
        <Paragraph>
          Estes Termos e Condições são regidos pelas leis brasileiras. Quaisquer disputas ou controvérsias decorrentes deste acordo serão solucionadas nos tribunais competentes do Brasil.
        </Paragraph>

        <Title>8. Contato</Title>
        <Paragraph>
          Caso tenha dúvidas ou necessite de esclarecimentos adicionais, entre em contato conosco:
        </Paragraph>
        <ul>
          <li>Email: <em>contato@exemplo.com</em></li>
          <li>Telefone: <em>(XX) XXXX-XXXX</em></li>
          <li>Endereço: <em>Rua X, nº 123, Cidade, Estado</em></li>
        </ul>

        <Paragraph>
          <em>Última atualização: 01 de Janeiro de 2025</em>
        </Paragraph>
      </ContentContainer>
    </All>
  );
};

export default TermosECondicoes;
