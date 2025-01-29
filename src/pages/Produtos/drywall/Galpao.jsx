import React from "react";
import styled, { keyframes } from "styled-components";
import ButtonLP2 from "../../../components/buttons/Button08";

const GalpaoContainer = styled.section`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 0 0 5%;
  gap: 30px;
  margin: 100px 0;

  @media (max-width: 768px){
    flex-direction: column-reverse;
    margin: 60px 0;
    padding: 0 5%;
  }
`;

const GalpaoLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 50%;

  @media (max-width: 768px){
        width: 100%;
    }

  & > h1 {
    font-size: 32px;
    font-weight: 400;

    @media (max-width: 768px){
        font-size: 26px;
    }

    & > b {
      font-weight: 500;
      color: var(--color--blue);
    }
  }

  & > p {
    font-size: 18px;
    color: var(--color--black);
    font-weight: 300;

    @media (max-width: 768px){
        font-size: 16px;
    }
  }

  & > h4 {
    font-size: 24px;
    font-weight: 400;
    margin-top: 30px;

    @media (max-width: 768px){
        margin-top: 20px;
        font-size: 22px;
    }

    & > b {
      font-weight: 500;
      color: var(--color--blue);
    }
  }

  & > div {
    background: #f1f1f1;
    padding: 15px 20px;
    width: 100%;

    @media (max-width: 768px){
        width: 100%;
        padding: 20px;
    }

    & > p {
      font-size: 16px;
      color: var(--color--black);
      font-weight: 400;
    }
  }

  & > button {
    width: 50%;

    @media (max-width: 768px){
        width: 75%;
    }
  }
`;

const GalpaoRight = styled.div`
  width: 45%;
  height: 700px;
  display: flex;
  align-items: center;
  gap: 20px;
  overflow: hidden;

  @media (max-width: 768px){
    width: 100%;
    height: 500px;
    }

  & > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const Galpao = () => {

  return (
    <GalpaoContainer>
      <GalpaoLeft>
        <h1>
          <b>Kit Galpão:</b> Solução Completa e Versátil para Grandes Estruturas
        </h1>
        <p>
          O Kit Galpão da Nova Metálica é a para quem busca praticidade,
          eficiência e qualidade em grandes projetos. Com alta resistencia e com
          ótimo desempenho termoacústico.
        </p>
        <h4>
          O que compõe o <b>Kit Galpão?</b>
        </h4>
        <div>
          <p>
            2 unidades de treliça de 40 cm + 2 unidades de treliça de 20 cm:
            Estruturas robustas que garantem resistência e estabilidade.
          </p>
        </div>
        <div>
          <p>
            Além das treliças o sistema também é composto por Lã de rocha como
            isolante termo acústico da Gesla, trazendo isolamento superior,
            garantindo conforto e eficiência energética.
          </p>
        </div>
        <ButtonLP2 />
      </GalpaoLeft>

      <GalpaoRight>
        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1aaaf355-63ae-4530-7ab2-1a5de0f98300/public" />
      </GalpaoRight>
    </GalpaoContainer>
  );
};

export default Galpao;
