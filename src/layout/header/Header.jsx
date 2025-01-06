import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button04 from "../../components/buttons/Button04";
import { BsTelephone, BsEnvelopeCheck, BsGeo, BsBook, BsCartCheck, BsHouse, BsX, BsGrid3X3GapFill, BsArrowRight } from "react-icons/bs";

// Estilos do header
const HeaderAll = styled.section`
  width: 98.5%;
  height: 15vh;
  position: fixed;
  max-width: 1280px;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  display: block;
  transition: top 1s ease;
  top: 0;

  @media (max-width: 768px) {
    height: 10vh;
    width: 100%;
  }
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
  padding: 1.2% 7.5%;
  gap: 50px;
  border-radius: 0 0 20px 20px;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding: 1% 7.5%;
  }
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

  @media (max-width: 768px) {
    top: 1vh;
    width: 95%;
    left: 2.5%;
    border-radius: 15px;
    padding: 0 5% 0 5%;
    height: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding: 25px 2.5%;
    border-radius: 15px;
  }

  & > div:nth-child(1) {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: auto;
    }

    & > img {
      width: 100%;
      height: auto;

      @media (max-width: 768px) {
        width: 100px;
      }
    }
  }

  & > div:nth-child(2) {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px) {
      display: none;
    }

    & > a {
      font-size: 12px;
      padding: 8px 10px;
      color: var(--color--black);
      font-weight: 400;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      border-radius: 8px;
    }

    & > .active {
      background-color: var(--color--dark--blue);
      color: var(--color--white);
    }

    & > a:hover {
      background-color: var(--color--dark--blue);
      border-radius: 8px;
      color: var(--color--white);
    }
  }

  & > div:nth-child(3){
    @media (max-width: 768px){
      display: none;
    }
  }
`;

const MenuButton = styled.button`
  background: none;
  width: auto;
  border: none;
  font-size: 14px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 14px;
    background-color: var(--color--black);
    border-radius: 8px;
    font-weight: 500;
    color: var(--color--white);
  }

  & > svg{
    font-size: 12px;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-100%")};
  width: 70%;
  top: 2.5vh;
  height: auto;
  background-color: var(--color--white);
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  display: flex!important;
  flex-direction: column!important;
  align-items: center;
  justify-content: space-between!important;
  gap: 40px;
  padding: 30px 20px;
  transition: right 0.3s ease;
  z-index: 1000;
  border-radius: 20px 0 0 20px;
  overflow: hidden;
`;

const SidebarTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > img {
    width: 100px;
  }
`

const CloseButton = styled.button`
  & > svg{
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--color--dark--blue);
    color: var(--color--white);
    border: none;
    font-size: 28px;
    cursor: pointer;
  }
`;

const SidebarLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;

  a {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-decoration: none;
    background-color: var(--color--black);
    border: 1px solid var(--color--black);
    color: var(--color--white);
    padding: 8px 15px;
    transition: all .3s ease;
    border-radius: 10px;

    & > svg {
      font-size: 24px;
      background-color: var(--color--white);
      padding: 5px;
      color: var(--color--black);
      border-radius: 50%;
      transform: rotate(-25deg);
      transition: all .3s ease;
    }

    &:hover{
      background-color: var(--color--white);
      border: 1px solid var(--color--black);
      color: var(--color--black);

      & > svg {
        font-size: 24px;
        background-color: var(--color--black);
        padding: 5px;
        color: var(--color--white);
        border-radius: 50%;
        transform: rotate(0deg);
      } 

      & > hr {
        width: 40%;
        height: 1px;
        background-color: var(--color--black);
        border-color: var(--color--black);
        border-radius: 50%;
      }
    }
  }
`;

const SidebarContato = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    color: var(--color--black);
    gap: 5px;
    width: 100%;
    border: 1px solid var(--color--black);
    padding: 5px;
    transition: all .2s ease;

    &:hover{
      background-color: var(--color--black);

      & > a {
        color: var(--color--white);
      }

      & > svg {
        fill: var(--color--white)!important;
      }
    }

    & > a {
      font-size: 14px;
      color: var(--color--black);
    }

    & > svg {
      width: 25px;
      height: 25px;
      padding: 5px;
    }
  }
`

const SidebarIcons = styled.div`
  width: 100%;
  display: none;
  justify-content: space-evenly;

  .IconLink{
    padding: 10px;
    border-radius: 50%;
    background-color: var(--color--black);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
`

const SidebarFooter = styled.div`
  margin-top: auto;
`;

const Header = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!isSidebarOpen) {
        if (window.scrollY > lastScrollY) {
          setScrollingDown(true);
        } else {
          setScrollingDown(false);
        }
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);

  return (
    <HeaderAll
      style={{
        top: scrollingDown ? "-15vh" : "0",
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
          <NavLink to="/blog" activeClassName="active">
            <BsBook color="var(--color--white)" />
            <span>Blog</span>
          </NavLink>
          <NavLink to="/produtos" activeClassName="active">
            <BsCartCheck color="var(--color--white)" />
            <span>Loja</span>
          </NavLink>
          <NavLink to="/" activeClassName="active">
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
          <NavLink to="/" activeClassName="active">
            Início
          </NavLink>
          <NavLink to="/sobre" activeClassName="active">
            Sobre nós
          </NavLink>
          <NavLink to="/produtos" activeClassName="active">
            Produtos
          </NavLink>
          <NavLink to="/parcerias" activeClassName="active">
            Parcerias
          </NavLink>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </div>
        <div>
          <Button04 href="#Form">Solicitar orçamento</Button04>
        </div>
        <MenuButton onClick={() => setSidebarOpen(true)}>
          Menu
          <BsGrid3X3GapFill />
        </MenuButton>
      </HeaderWhite>

      <Sidebar isOpen={isSidebarOpen}>
        <SidebarTop>
          <CloseButton onClick={() => setSidebarOpen(false)}>
            <BsX />
          </CloseButton>
          <img
            src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public"
            alt="logo da nova metalica"
            loading="lazy"
          />
        </SidebarTop>
        <SidebarLinks>
          <NavLink to="/">Início <BsArrowRight /></NavLink>
          <NavLink to="/sobre">Sobre nós <BsArrowRight /></NavLink>
          <NavLink to="/produtos">Produtos <BsArrowRight /></NavLink>
          <NavLink to="/parcerias">Parcerias <BsArrowRight /></NavLink>
          <NavLink to="/blog">Blog <BsArrowRight /></NavLink>
        </SidebarLinks>

        <SidebarContato>
          <div>
            <BsEnvelopeCheck color="var(--color--black)" />
            <a href="#">contato@novametalica.com.br</a>
          </div>
          <div>
            <BsTelephone color="var(--color--black)" />
            <a href="#">+55 (21) 99288-2282</a>
          </div>
          <div>
            <BsGeo color="var(--color--black)" />
            <a href="#">Veja onde estamos localizados</a>
          </div>
        </SidebarContato>

        <SidebarIcons>
          <NavLink to="/blog" activeClassName="active" className={"IconLink"}>
            <BsBook />
          </NavLink>
          <NavLink to="/produtos" activeClassName="active" className={"IconLink"}>
            <BsCartCheck />
          </NavLink>
          <NavLink to="/" activeClassName="active" className={"IconLink"}>
            <BsHouse />
          </NavLink>
        </SidebarIcons>

        <SidebarFooter>
          <Button04 href="#Form">Solicitar orçamento</Button04>
        </SidebarFooter>
      </Sidebar>
    </HeaderAll>
  );
};

export default Header;
