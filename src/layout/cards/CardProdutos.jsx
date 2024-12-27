import React from "react";
import styled from "styled-components";
import Button05 from "../../components/buttons/Button05";

const CardAll = styled.section`
  width: 100%;
  max-width: 1140px;
  margin: 50px 0;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  position: relative;
  height: 60vh;
  display: flex;
  align-items: center;
  border-radius: 30px;
  justify-content: space-between;
  background-color: ${(props) => props.background ? props.background : 'transparent'};
  flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
  gap: 30px;
  transition: all .5s ease-in-out;

  &:hover{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  & > div:nth-child(1){
    width: 55%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img{
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 30px;
    }
  }

  & > div:nth-child(2){
    width: 45%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    padding-left: ${(props) => props.padding ? props.padding : '0%'};

    & > h1{
      font-size: 26px;
      color: ${(props) => props.color ? props.color : 'var(--color--black)'};
      font-weight: 400;
    }

    & > p{
      opacity: 0.8;
      font-size: 14px;
      color: ${(props) => props.color ? props.color : 'var(--color--black)'}; /* Aqui também */
      width: 90%;
    }
  }
`;

const CardProdutos = ({ image, title, description, reverse, background, color, padding }) => {
  return (
    <CardAll reverse={reverse} background={background} color={color} padding={padding}>
      <div>
        <img src={image} alt="imagem do produto" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button05 text="Saber mais" />
      </div>
    </CardAll>
  );
};

export default CardProdutos;
