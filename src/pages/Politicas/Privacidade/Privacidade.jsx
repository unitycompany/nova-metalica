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

/* Wrapper de tabela, com scroll horizontal no mobile */
const TableWrapper = styled.div`
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

    @media (min-width: ${BREAKPOINT_MOBILE + 1}px) {
      display: none; /* some em telas maiores */
    }
  }
`;

const StyledTable = styled.table`
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

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    display: block;
    white-space: nowrap;
    font-size: 0.9rem;
  }
`;

const PoliticaDePrivacidade = () => {
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
        <h1>Política de Privacidade</h1>
      </Topo>

      <ContentContainer>
        <Paragraph>
          Bem-vindo(a) à nossa <strong>Política de Privacidade</strong>. Aqui você
          encontra informações detalhadas sobre como coletamos, utilizamos e
          protegemos seus dados, em conformidade com a{' '}
          <em>Lei Geral de Proteção de Dados (LGPD)</em>. Nosso compromisso é
          manter a máxima transparência e segurança em cada etapa do tratamento
          de dados.
        </Paragraph>

        <Title>1. Introdução</Title>
        <Paragraph>
          Esta Política de Privacidade descreve as práticas adotadas pela nossa
          empresa em relação à coleta, utilização e proteção de informações
          pessoais. Ao acessar nosso site ou utilizar nossos serviços, você
          concorda com os termos aqui apresentados.
        </Paragraph>

        <Title>2. Coleta de Informações</Title>
        <Paragraph>
          Podemos coletar informações que você nos fornece diretamente, tais
          como nome, e-mail, telefone e quaisquer outros dados necessários para
          executar nossos serviços. Também podemos receber dados de terceiros
          ou fontes públicas, sempre em conformidade com a LGPD.
        </Paragraph>

        <Title>3. Uso das Informações</Title>
        <Paragraph>
          As informações coletadas são utilizadas para prestação de serviços,
          comunicação com o usuário, melhorias em nosso site ou aplicativo e
          envio de conteúdo promocional (quando permitido). Não vendemos ou
          compartilhamos suas informações pessoais com terceiros para fins
          comerciais sem o seu consentimento expresso.
        </Paragraph>

        <Title>4. Direitos do Usuário</Title>
        <Paragraph>
          Em consonância com a LGPD, você tem direito ao acesso, correção,
          atualização e exclusão de suas informações pessoais armazenadas por
          nós. Para solicitar qualquer uma dessas ações, basta entrar em contato
          conosco pelos canais disponibilizados em nosso site.
        </Paragraph>

        <Title>5. Segurança dos Dados</Title>
        <Paragraph>
          Adotamos medidas técnicas e organizacionais para proteger seus dados,
          incluindo uso de criptografia, controles de acesso e sistemas de
          monitoramento. Essas ações são revistas regularmente para garantir a
          segurança contínua das informações.
        </Paragraph>

        <Title>6. Compartilhamento de Informações</Title>
        <Paragraph>
          Seus dados podem ser compartilhados com parceiros de confiança ou
          autoridades competentes, mas somente quando necessário para cumprir
          obrigações legais, contratuais ou quando houver seu consentimento
          expresso.
        </Paragraph>

        <Title>7. Retenção de Dados</Title>
        <Paragraph>
          Manteremos seus dados apenas pelo tempo necessário para atender às
          finalidades descritas nesta política, salvo se houver exigência legal
          que imponha período de armazenamento superior.
        </Paragraph>

        <Title>8. Transferência Internacional de Dados</Title>
        <Paragraph>
          Se for necessária a transferência de dados para fora do país,
          asseguraremos que essas transferências sigam os requisitos de
          proteção exigidos pela legislação vigente, adotando cláusulas
          contratuais apropriadas.
        </Paragraph>

        <Title>9. Cookies e Tecnologias Semelhantes</Title>
        <Paragraph>
          Utilizamos cookies e tecnologias semelhantes para melhorar sua
          experiência de navegação, analisar o tráfego e personalizar conteúdo.
          Você pode gerenciar suas preferências de cookies a qualquer momento em
          seu navegador ou nas configurações do aplicativo.
        </Paragraph>

        <Title>10. Alterações Nesta Política</Title>
        <Paragraph>
          Podemos atualizar esta <strong>Política de Privacidade</strong>{' '}
          periodicamente para refletir mudanças em nossas práticas ou na
          legislação aplicável. Qualquer modificação significativa será
          comunicada em nossos canais oficiais, para que você esteja sempre
          informado.
        </Paragraph>

        <Paragraph>
          Em caso de dúvidas sobre nossa Política de Privacidade ou sobre como
          seus dados estão sendo tratados, entre em contato. Estamos à
          disposição para fornecer esclarecimentos adicionais, visando a melhor
          experiência possível, com total respeito aos seus direitos e
          privacidade.
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

export default PoliticaDePrivacidade;
