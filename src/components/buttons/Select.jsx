import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const DropdownContainer = styled.div`
  position: relative;
  width: auto;
  font-family: Arial, sans-serif;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  width: auto;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--color--black);

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    padding: 10px 14px;
    gap: 10px;
  }

  &:hover {
    border-color: var(--color--black);
  }
`;

const DropdownList = styled.div`
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? "calc(100% + 0.5rem)" : "calc(100% + 0.5rem)")};
  left: 0;
  width: 200px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  transition: transform 0.3s ease, max-height 0.3s ease;
`;

const DropdownItem = styled.div`
  padding: 14px;
  cursor: pointer;
  font-size: 12px;
  color: var(--color--black);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color--black);
    color: #fff;
  }
`;

const DropdownArrow = styled.span`
  font-size: 16px;
  color: #666;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isOpen }) => isOpen && `transform: rotate(180deg);`}
`;

const RedirectDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const options = [
    { label: "Steel Frame", path: "/produtos/steel-frame" },
    { label: "Drywall", path: "/produtos/drywall" },
    { label: "Baixar Catálogo", path: "download" },
  ];

  const handleSelect = (option) => {
    setIsOpen(false);
    if (option.path === "download") {
      const link = document.createElement('a');
      link.href = "caminho/para/seu-catalogo.pdf"; // Substitua pelo caminho correto
      link.download = "catalogo.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      navigate(option.path);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        Produtos
        <DropdownArrow isOpen={isOpen}>
          <IoIosArrowDown />
        </DropdownArrow>
      </DropdownHeader>
      <DropdownList isOpen={isOpen}>
        {options.map((option) => (
          <DropdownItem
            key={option.label}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default RedirectDropdown;
