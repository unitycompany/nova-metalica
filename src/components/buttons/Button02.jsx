import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Estilos com styled-components
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.button`
  position: relative;
  padding: 1px;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  background-color: var(--color--black);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  font-size: 12px;

  &:hover {
    transform: scale(1.05) translateX(5px);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const GradientBackground = styled.span`
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 1px;
  opacity: 0;
  transition: opacity 0.5s;

  ${Button}:hover & {
    opacity: 1;
  }
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 10;
  display: block;
  padding: 0.4rem 1rem;
  border-radius: 12px;
  background-color: var(--color--dark--blue);
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Icon = styled.svg`
  width: 1rem;
  height: 1rem;
  transition: transform 0.5s;

  ${Button}:hover & {
    transform: translateX(0.25rem);
  }
`;

const Button02 = ({ href, children }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    if (href.startsWith('#')) {
      // Scroll para âncora
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 200; // Ajuste de -100px

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      // Navegação para outra página
      navigate(href);
    }
  };

  return (
    <Wrapper>
      <ButtonContainer>
        <Button onClick={handleClick}>
          <GradientBackground />
          <ButtonText>
            <TextContainer>
              <span className="transition-all duration-500">{children}</span>
              <Icon
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fillRule="evenodd"
                />
              </Icon>
            </TextContainer>
          </ButtonText>
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Button02;
