import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.a`
  display: inline-block;
  padding: 10px 1.8rem;
  font-size: 16px;
  font-weight: 500;
  color: var(--color--white);
  border: 1px solid var(--color--white);
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;
  border-radius: 12px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color--blue);
    transform: translateX(-100%);
    transition: all 0.3s;
    z-index: -1;
    border-radius: 12px;
  }

  &:hover::before {
    transform: translateX(0);
  }
`;

const Button03 = ({ href, children }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    if (href.startsWith("#")) {
      // Scroll para âncora
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 200; // Ajuste de -100px

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // Navegação para outra página
      navigate(href);
    }
  };

  return (
    <Button href={href} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default Button03;
