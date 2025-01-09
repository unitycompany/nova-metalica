import React from "react";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import Button05 from "../../components/buttons/Button05";
import Button03 from "../../components/buttons/Button03";
import { useNavigate } from "react-router-dom";

const CardAll = styled.section`
  width: 100%;
  transform: translateX(-50%);
  ${({ padding }) => (padding === "padding-left" ? "padding-left: 5%;" : "padding-right: 5%;")} /* Posição dinâmica */
  left: 50%;
  top: 0;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction || "row"}; /* Flex direction dinâmico */
  gap: 50px;
  background: #353535;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 25% 0;
    padding-left: 0%;
    padding-right: 0%;
    height: auto;
    width: 97.5%;
    margin-right: 2.5%;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1081687f-ba98-453b-c651-444af1325800/public');
    background-position: center;
    background-size: cover;
    opacity: 0.4;

    @media (max-width: 768px){
      opacity: 0.2;
    }
  }
`;

const CardLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 5%;
  }

  & > span {
    background-color: var(--color--white);
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    
    @media (max-width: 768px) {
      
    }

    & > svg {
      fill: var(--color--dark--blue);

      @media (max-width: 768px){
        font-size: 12px;
      }
    }

    & > p {    
      font-weight: 600;
      background: linear-gradient(90deg, var(--color--black), var(--color--blue));
      color: transparent;
      -webkit-background-clip: text;

      @media (max-width: 768px){
        font-size: 14px;
      }
    }
  }

  & > h1 {
    font-size: 36px;
    color: var(--color--white);
  }

  & > p {
    color: var(--color--white);
    font-size: 16px;
    line-height: 110%;

    @media (max-width: 768px){
      font-size: 14px;
      width: 100%;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

const CardRight = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 768px){
    z-index: 1;
    opacity: 0.5;
    display: none;
  }

  @media (max-width: 768px){
    width: 100%;
  }

  & > img {
    width: 80%;
    height: auto;
    object-fit: contain;
    position: absolute;
    ${({ position }) => (position === "left" ? "left: 0;" : "right: 0;")} /* Posição dinâmica */
    bottom: 0;

    @media (max-width: 768px){
      width: 65%;
      display: none;
    }
  }
`;

const CardProdutos = ({ titleCardTop, title, description, subDescription, image, direction, clipPath, padding, position, link }) => {

  const navigate = useNavigate();

  return (
    <CardAll direction={direction} clipPath={clipPath} padding={padding}>
      <CardLeft>
        <span>
          <p>{titleCardTop}</p>
          <BsStarFill />
        </span>
        <h1>{title}</h1>
        <p>
          {description}<br /> <br />
          {subDescription}
        </p>
        <div>
          <Button03 
          children="Saber mais"
          onClick={() => navigate (link || '/produtos')}
          />
          <Button05 
          children="Solicitar orçamento"
          onClick={() => {
            const formSection = document.getElementById('Form');
            if (formSection) {
              formSection.scrollIntoView({ behavior : 'smooth' });
            }
          }}
          />
        </div>
      </CardLeft>
      <CardRight position={position}>
        <img src={image} alt="Produto" />
      </CardRight>
    </CardAll>
  );
};

export default CardProdutos;
