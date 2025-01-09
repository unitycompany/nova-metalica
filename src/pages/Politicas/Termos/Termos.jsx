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
 * Topo fixo:
 * - Se estiver no topo da página (scrollY === 0):
 *   -> Desktop: 500px 
 *   -> Mobile: 250px (metade)
 *   -> z-index = 2
 * - Se estiver rolando a página (scrollY > 0):
 *   -> Desktop: 350px 
 *   -> Mobile: 175px (metade)
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
      width: 70px; /* Imagem menor no mobile */
    }
  }

  & > h1 {
    font-size: 3rem;
    color: #333;
    font-weight: 500;
    margin: 0;

    @media (max-width: ${BREAKPOINT_MOBILE}px) {
      font-size: 2rem; /* Tamanho reduzido no mobile */
    }
  }
`;

/* 
  Contêiner principal com margem para não ficar 
  escondido atrás do cabeçalho fixo 
*/
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
    /* Ajuste para mobile */
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

/* Componente principal de Termos e Condições */
const TermosECondicoes = () => {
  const [headerHeight, setHeaderHeight] = useState(500); // Desktop: topo "cheio"
  const [topoZIndex, setTopoZIndex] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= BREAKPOINT_MOBILE;

      // Se está no topo (scrollY == 0) -> cabeçalho maior
      if (window.scrollY === 0) {
        // Desktop: 500  |  Mobile: 250
        setHeaderHeight(isMobile ? 250 : 500);
        setTopoZIndex(2);
      } else {
        // Rolando -> cabeçalho reduzido
        // Desktop: 350 | Mobile: 175
        setHeaderHeight(isMobile ? 175 : 350);
        setTopoZIndex(999);
      }
    };

    // Executa a checagem no primeiro render para ajustar ao estado inicial
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
          Bem-vindo(a) aos nossos <strong>Termos e Condições</strong>. Estes
          termos regulam o uso do nosso site e de quaisquer serviços ou produtos
          fornecidos. Ao utilizar nossos serviços, você concorda em cumprir
          todos os pontos descritos abaixo.
        </Paragraph>

        <Title>1. Definições</Title>
        <Paragraph>
          <strong>Site:</strong> refere-se ao nosso website e a todos os
          recursos disponibilizados por meio dele.
          <br />
          <strong>Serviços:</strong> qualquer oferta ou funcionalidade
          provida por nós, seja de forma gratuita ou paga.
          <br />
          <strong>Usuário:</strong> qualquer pessoa que acesse nosso site ou
          utilize nossos serviços.
        </Paragraph>

        <Title>2. Aceitação dos Termos</Title>
        <Paragraph>
          Ao navegar em nosso site e utilizar nossos serviços, você confirma
          que leu, entendeu e concorda com os presentes Termos e Condições.
          Caso não concorde com qualquer parte, não utilize o nosso site ou
          serviços.
        </Paragraph>

        <Title>3. Modificações</Title>
        <Paragraph>
          Podemos atualizar estes Termos periodicamente para refletir alterações
          em nossos serviços ou na legislação. Qualquer mudança substancial será
          comunicada por meio de avisos em nosso site ou por canais oficiais.
          A responsabilidade de verificar periodicamente se há atualizações
          também é do usuário.
        </Paragraph>

        <Title>4. Uso Adequado dos Serviços</Title>
        <Paragraph>
          Você se compromete a utilizar os serviços apenas para fins legais,
          respeitando toda a legislação aplicável. É proibido utilizar o site
          para promover atividades ilícitas, violar direitos de terceiros ou
          tentar obter acesso não autorizado a sistemas, servidores ou dados.
        </Paragraph>

        <Title>5. Propriedade Intelectual</Title>
        <Paragraph>
          Todos os conteúdos, marcas e logotipos exibidos em nosso site são
          de nossa propriedade ou licenciados por terceiros. Qualquer uso sem
          autorização prévia e expressa é estritamente proibido.
        </Paragraph>

        <Title>6. Limitação de Responsabilidade</Title>
        <Paragraph>
          Não somos responsáveis por danos diretos, indiretos ou consequentes
          resultantes do uso ou incapacidade de uso de nossos serviços, na
          máxima extensão permitida pela lei aplicável. Você concorda que o uso
          de qualquer informação obtida por meio do site é de sua total
          responsabilidade.
        </Paragraph>

        <Title>7. Garantias e Avisos Legais</Title>
        <Paragraph>
          Fornecemos o site e os serviços “no estado em que se encontram”. Não
          oferecemos garantias expressas ou implícitas sobre a precisão,
          confiabilidade, disponibilidade ou adequação dos serviços para
          qualquer finalidade específica.
        </Paragraph>

        <Title>8. Lei Aplicável e Foro</Title>
        <Paragraph>
          Estes Termos e Condições são regidos pelas leis do Brasil. Quaisquer
          disputas ou controvérsias decorrentes da interpretação ou execução
          destes termos serão submetidas ao foro da comarca em que se encontra
          nossa sede.
        </Paragraph>

        <Title>9. Dúvidas e Contato</Title>
        <Paragraph>
          Se você tiver qualquer dúvida sobre estes Termos e Condições ou
          necessitar de esclarecimentos adicionais, entre em contato pelos
          canais indicados em nosso site.
        </Paragraph>

        <Paragraph>
          <em>
            Última atualização: <strong>01 de Janeiro de 2025</strong>
          </em>
        </Paragraph>
      </ContentContainer>
    </All>
  );
};

export default TermosECondicoes;
