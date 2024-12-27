import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"; 
import styled from "styled-components";
import Button04 from "../../components/buttons/Button04";

import { 
  BsTelephone, 
  BsEnvelopeCheck, 
  BsGeo, 
  BsBook, 
  BsCartCheck, 
  BsHouse 
} from "react-icons/bs";

/* ========== Estilos do Header ========== */
const HeaderAll = styled.section`
  width: 100%;
  height: 15vh;
  position: fixed;
  max-width: 1140px;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  display: block;
  transition: top 1s ease;
  top: 0;
`;

const HeaderDivBlack = styled.div`
  position: relative;
  width: 100%;
  height: 10vh;
  background-color: var(--color--black);
  z-index: -1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5% 7.5%;
  gap: 50px;
  border-radius: 0 0 20px 20px;
`;

const HeaderContact = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & > a {
      font-size: 10px;
      color: var(--color--white);
      font-weight: 200;
      transition: all 0.2s ease;
    }

    & > a:hover {
      color: var(--color--gray);
      text-decoration: underline;
    }
  }
`;

const HeaderIcons = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  white-space: nowrap;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-decoration: none;
    transition: padding 0.3s ease;
  }

  & a span {
    opacity: 0;
    color: var(--color--blue);
    font-size: 9px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(0px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    white-space: nowrap;
  }

  & a:hover span {
    opacity: 1;
    transform: translateX(-50%) translateY(5px);
  }

  & a:hover svg {
    transition: transform 0.3s ease, fill 0.3s ease;
    transform: scale(1.1);
    fill: var(--color--blue);
  }
`;

const HeaderWhite = styled.div`
  width: 90%;
  height: 7.5vh;
  position: relative;
  top: -3.75vh;
  left: 5%;
  z-index: 1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5%;
  box-shadow: 0 0 2.5px rgba(0, 0, 0, 0.4);
  background-color: var(--color--white);

  & > div:nth-child(1) {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      width: 100%;
      height: auto;
    }
  }

  & > div:nth-child(2) {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    /* Ajuste de NavLink no React Router v6 */
    & > a {
      font-size: 12px;
      padding: 8px 10px;
      color: var(--color--black);
      font-weight: 400;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      border-radius: 8px;
      text-decoration: none; /* Para remover sublinhado */
    }

    /* Classe .active que definimos via isActive */
    & > a.active {
      background-color: var(--color--dark--blue);
      color: var(--color--white);
    }

    & > a:hover {
      background-color: var(--color--dark--blue);
      color: var(--color--white);
    }
  }
`;

const Header = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const location = useLocation(); // Obtém a URL atual

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true); // Scrolling down
      } else {
        setScrollingDown(false); // Scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Exemplo de uso se precisarmos saber se estamos na rota /blog
  const isBlogPage = location.pathname === "/blog";

  return (
    <HeaderAll
      style={{
        top: scrollingDown ? "-15vh" : "0", // A navbar sai de cena para cima ao scrollar
      }}
    >
      <HeaderDivBlack>
        <HeaderContact>
          <div>
            <BsEnvelopeCheck color="var(--color--white)" />
            <a href="#">contato@novametalica.com.br</a>
          </div>
          <div>
            <BsTelephone color="var(--color--white)" />
            <a href="#">+55 (21) 99288-2282</a>
          </div>
          <div>
            <BsGeo color="var(--color--white)" />
            <a href="#">Veja onde estamos localizados</a>
          </div>
        </HeaderContact>
        <HeaderIcons>
          {/* Ajuste de NavLink para React Router v6 */}
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <BsBook color="var(--color--white)" />
            <span>Blog</span>
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <BsCartCheck color="var(--color--white)" />
            <span>Loja</span>
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <BsHouse color="var(--color--white)" />
            <span>Home</span>
          </NavLink>
        </HeaderIcons>
      </HeaderDivBlack>

      <HeaderWhite>
        <div>
          <img
            src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public"
            alt="logo da nova metalica"
            loading="lazy"
          />
        </div>
        <div>
          {/* Menu principal */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Início
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Sobre nós
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Produtos
          </NavLink>
          <NavLink
            to="/parcerias"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Parcerias
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Blog
          </NavLink>
        </div>
        <div>
          <Button04 href="#Form">Solicitar orçamento</Button04>
        </div>
      </HeaderWhite>
    </HeaderAll>
  );
};

export default Header;
