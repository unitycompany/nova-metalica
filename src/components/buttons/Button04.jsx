import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled.button`
  background: transparent;
  position: relative;
  padding: 3px 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid var(--color--dark--blue);
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: var(--color--dark--blue);
  transition: color 0.3s 0.1s ease-out;
  text-align: center;
  justify-content: center;

  &:hover {
    color: var(--color--white);
    border: 1px solid var(--color--dark--blue);

    &::before {
      box-shadow: inset 0 0 0 10em var(--color--dark--blue);
    }
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: '';
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    text-align: center;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }

  span {
    margin: 8px;
  }
`;

const Button04 = ({ onClick, children }) => {

  return (
    <StyledButton onClick={onClick} data-aos="fade-up" data-aos-delay="100">
      <span>{children}</span>
      <FaArrowRight size={14} />
    </StyledButton>
  );
};

export default Button04;
