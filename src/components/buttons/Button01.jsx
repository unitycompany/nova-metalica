import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs'; // Importando o ícone Bootstrap

// Criando o botão estilizado
const Button = styled.button`
  background-color: var(--color--white);
  text-align: center;
  width: 200px;
  height: 40px;
  border-radius: 12px;
  position: relative;
  border: 2px solid var(--color--white);
  color: black;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  &:hover div {
    width: 100%;
  }

  & > a{
    color: var(--color--blue);
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  background-color: var(--color--blue); 
  border-radius: 12px;
  height: 100%;
  width: 20%;
  display: grid;
  place-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  transition: width 0.3s;
`;

const Icon = styled(BsArrowRight)`
  width: 25px;
  height: 25px;
  fill: var(--color--white);
`;

const Text = styled.p`
  transform: translateX(1rem); /* Para afastar o texto da borda */
`;

const GoBackButton = ({ link, text }) => {
  return (
    <Button>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <a href={link}>
        <Text>{text}</Text>
      </a>
    </Button>
  );
};

export default GoBackButton;
