import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowDown } from "react-icons/bs";
import ButtonLP2 from "../../components/buttons/Button08";
import ButtonLP from "../../components/buttons/Button07";

const FaqContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  background-color: #1d1d1b;
  color: var(--color--white);
  padding-bottom: 3%;

  @media (max-width:768px){
    padding-bottom: 5vh;
  }
`;

const FaqAll = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 7.5% 0;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: flex-start;

  @media (max-width:768px){
    flex-direction: column;
    padding: 10% 0;
    gap: 20px;
  }
`;

const FaqLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 5%;

  @media (max-width:768px){
    padding: 0 5%;
  }

  & > button {
    width: 50%;
    color: var(--color--black);

    @media (max-width:768px){
      width: 80%;
    }
  }
`;

const FaqSobre = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > h1 {
    font-size: 30px;
    font-weight: 400;

    @media (max-width:768px){
      font-size: 26px;
    }
  }

  & > p {
    font-size: 18px;
    font-weight: 300;

    @media (max-width:768px){
      font-size: 16px;
    }
  }
`;

const FaqPerguntas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const FaqPergunta = styled.div`
  border-radius: 8px;
  padding: 10px 0;
  transition: background 0.3s ease;

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-bottom: 1px solid #fff;
    padding: 10px 0;

    & > span {
      font-size: 16px;
      font-weight: 500;
    }

    & > svg {
      transition: transform 0.3s ease;
      transform: ${(props) => (props.isActive ? "rotate(0deg)" : "rotate(-90deg)")};
    }
  }

  & > div:last-child {
    margin-top: 10px;
    max-height: ${(props) => (props.isActive ? "100px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease;
    p {
      font-size: 14px;
      line-height: 1.5;
      opacity: 0.8;
    }
  }
`;

const FaqRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  max-width: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width:768px){
    display: none;
  }

  @media (max-width:768px){
    height: 300px;
    width: 90%;
  }

  img {
    width: 100%;
    height: auto;
    position: absolute;
    transition: opacity 0.5s ease, transform 0.5s ease;
    opacity: ${(props) => (props.isVisible ? "1" : "0")};
    transform: ${(props) => (props.isVisible ? "scale(1)" : "scale(0.95)")};
  }
`;

const Footer = styled.div`
    width: 90%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color--white);
    padding: 15px 20px;

    @media (max-width:768px){
      justify-content: center;
      margin-top: 0vh;
    }
    
    & > p {
        font-size: 14px;
        color: var(--color--black);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        @media (max-width:768px){
          text-align: center;
        }

        &:nth-child(1){
          @media (max-width:768px){
            display: none;
          }
        }

    }

    & > p > a{
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width:768px){
          display: block!important;
          align-items: center;
        }
    }

    & > p > a > img {
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const questions = [
    {
      id: 0,
      question: "Desenvolvemos projetos?",
      answer: "Não, mas desenvolvemos o projeto estrutural em Steel Frame para clientes que já possuem o projeto arquitetônico da construção.",
      image: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/848448da-cfb4-41e0-2173-0258a4f17200/public",
    },
    {
      id: 1,
      question: "Fornecemos mão de obra?",
      answer: "Não, mas indicamos empresas parceiras para execução da construção.",
      image: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/12ba2ae0-8735-43c3-aac8-4b90a454d100/public",
    },
    {
      id: 2,
      question: "Com quais materiais de construção trabalhamos?",
      answer: "Apenas perfis para Steel Frame e Drywall normatizados.",
      image: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5193d37c-6e5b-4723-7649-e20522bccb00/public",
    },
    {
      id: 3,
      question: "Com que tipo de aço nós trabalhamos?",
      answer: "Trabalhamos apenas com aço leve galvanizado e nacional, não fazemos o uso de aço chinês.",
      image: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/57530941-dac0-42ce-59d9-ca6968839000/public",
    },
  ];

  return (
    <>
    <FaqContainer>
      <FaqAll>
        <FaqLeft>
          <FaqSobre>
            <h1 data-aos="fade-up-right" data-aos-delay="100">Ficou com dúvidas ainda?</h1>
            <p data-aos="fade-up-right" data-aos-delay="100">Abaixo listamos as nossas perguntas mais frequentes</p>
          </FaqSobre>

          <FaqPerguntas data-aos="fade-up" data-aos-delay="100">
            {questions.map((q, index) => (
              <FaqPergunta
                key={q.id}
                isActive={activeQuestion === index}
                onClick={() => setActiveQuestion(index)}
              >
                <div>
                  <span>{q.question}</span>
                  <BsArrowDown />
                </div>
                <div>
                  <p>{q.answer}</p>
                </div>
              </FaqPergunta>
            ))}
          </FaqPerguntas>

          <ButtonLP />
        </FaqLeft>

        <FaqRight>
          <ImageContainer data-aos="fade-up-left" data-aos-delay="100">
            {questions.map((q, index) => (
              <img
                key={q.id}
                src={q.image}
                alt={`Imagem relacionada a ${q.question}`}
                style={{
                  opacity: activeQuestion === index ? 1 : 0,
                  transform: activeQuestion === index ? "scale(1)" : "scale(0.95)",
                }}
              />
            ))}
          </ImageContainer>
        </FaqRight>
      </FaqAll>
      
        <Footer data-aos="fade-down" data-aos-delay="100">
            <p>Todos os direitos reservados |  CNPJ: 45.989.824/0001-74 - Nova Metálica</p>
            <p>Desenvolvido por <a href="https://alephsramos.com.br/" target="_blank"><img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/aa412b31-1015-40a2-cfd6-ab7afce75500/public" alt="logo do desenvolvedor web Aleph Ramos" loading="lazy" /></a></p>
        </Footer>
    </FaqContainer>
    </>
  );
};

export default FAQ;
