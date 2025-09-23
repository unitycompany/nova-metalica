import React, { useState, useEffect } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button04 from "../../components/buttons/Button04";
import { BsTelephone, BsEnvelopeCheck, BsGeo, BsBook, BsCartCheck, BsHouse, BsX, BsGrid3X3GapFill, BsArrowRight } from "react-icons/bs";
import { HiBars3, HiOutlineBars4 } from "react-icons/hi2";
import RedirectDropdown from "../../components/buttons/Select";

// Estilos do header
const HeaderAll = styled.section`
  width: 98.5%;
  height: 15vh;
  position: fixed;
  max-width: 1320px;
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
  background-color: #000;
  z-index: -1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.2% 7.5%;
  gap: 50px;
  border-radius: 0 0 10px 10px;
  display: none;

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
  width: 100%;
  height: 9vh;
  position: relative;
  top: 0px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5%;
  background-color: #ffffff;
  border-radius: 0 0 20px 20px;

  @media (max-width: 768px) {
    top: 0;
    width: 100%;
    border-radius: 0px;
    padding: 0 5% 0 5%;
    height: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0);
  }

  @media (min-width: 768px) and (max-width: 1180px) {
    padding: 30px 2.5%;
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

    & > a{
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > a > img {
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
    gap: 5px;
    height: 100%;

    @media (max-width: 768px) {
      display: none;
    }

    & > a {
      font-size: 14px;
      padding: 15px 20px;
      color: var(--color--black);
      font-weight: 500;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        width: 0;
        height: 300%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--color--dark--blue);
        transition: 0.5s ease;
        display: block;
        z-index: -1;
      }

      &.active {
      border-bottom: 2px solid var(--color--dark--blue);
      color: var(--color--dark--blue);
      transform: scale(1.05);

    }

      &:hover::before {
      width: 120%;
      padding: 30px 10px;
    }

    &:hover {
      color: var(--color--white);
      font-weight: 500;
    }

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
    font-weight: 500;
    color: var(--color--white);
  }

  & > svg{
    font-size: 28px;
    fill: var(--color--black);
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-150%")};
  width: 70%;
  top: 10vh;
  background-color: #f0f0f0;
  height: 90vh;
  border-top: 1px solid #00000050;
  border-right: 0;
  background-color: var(--color--white);
  display: flex!important;
  flex-direction: column!important;
  align-items: center;
  justify-content: space-between!important;
  gap: 40px;
  padding: 30px 15px;
  transition: right 1s ease;
  z-index: 1000;
  overflow: hidden;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transition: left 1s ease;
  left: ${(props) => (props.isOpen ? "-70%" : "-100%")};
  top: 0;
  z-index: -1;
  display: none;

  @media (max-width: 768px){
    display: block;
  }
`

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

  @media (max-width: 768px){
    & > div {
      width: 100%;
    }
  }

  a {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-decoration: none;
    color: var(--color--black);
    padding: 5px 0;
    transition: all .3s ease;

    &:hover {
      color: var(--color--blue);
    }

    & > svg {
      display: none;
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
    box-shadow:  3px 3px 5px #d9d9d9,
             -3px -3px 5px #ffffff;
    gap: 5px;
    width: 100%;
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
      font-size: 12px;
      color: var(--color--black);
    }

    & > svg {
      width: 25px;
      height: 25px;
      padding: 5px;
    }
  }
`

const SidebarFooter = styled.div`
  margin-top: auto;
`;

const Header = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();

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

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  return (
    <HeaderAll
      style={{
        top: scrollingDown ? "0vh" : "0",
      }}
    >
      <HeaderDivBlack data-aos="fade-down" data-aos-delay="0">
        <HeaderContact>
          <div>
            <BsEnvelopeCheck color="var(--color--white)" />
            <a href="mailto:contato@novametalica.com.br" target="_blank">contato@novametalica.com.br</a>
          </div>
          <div>
            <BsTelephone color="var(--color--white)" />
            <a href="https://api.whatsapp.com/send?phone=5521992882282&text=Ol%C3%A1,%20vim%20do%20site!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank">+55 (21) 99288-2282</a>
          </div>
          <div>
            <BsGeo color="var(--color--white)" />
            <a href="https://www.google.com/maps/place/BR-040,+Rio+de+Janeiro/@-21.7695806,-43.442561,17z/data=!3m1!4b1!4m7!3m6!1s0x94ac4abe39278459:0x550b83a54f48120!8m2!3d-21.7695857!4d-43.4376901!15sCkdSdWEgRW5nZW5oZWlybyBXYXRlcmxleSAgQ2lkYWRlIEphcmRpbSBNYXJham9hcmEsIEphcGVyaS9SSiAtIDI2NDEzLTA0MJIBCWhpZ2h3YXlfMeABAA!16s%2Fm%2F04k9y71?coh=219816&entry=tts&g_ep=EgoyMDI0MDgxNC4xKgBIAVAD" target="_blank">Veja onde estamos localizados</a>
          </div>
        </HeaderContact>
        <HeaderIcons>
          <NavLink to="/blog" activeClassName="active">
            <BsBook color="var(--color--white)" />
            <span>Blog</span>
          </NavLink>
          <NavLink to="/produtos/steel-frame" activeClassName="active">
            <BsCartCheck color="var(--color--white)" />
            <span>Loja</span>
          </NavLink>
          <NavLink to="/" activeClassName="active">
            <BsHouse color="var(--color--white)" />
            <span>Home</span>
          </NavLink>
        </HeaderIcons>
      </HeaderDivBlack>

      <HeaderWhite data-aos="fade-down" data-aos-delay="500">
        <div>
          <a onClick={() => Navigate('/')}>
            <img
              src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public"
              alt="logo da nova metalica"
              loading="lazy"
            />
          </a>
        </div>
        <div>
          <NavLink to="/" activeClassName="active">
            Início
          </NavLink>
          <NavLink to="/sobre" activeClassName="active">
            Sobre nós
          </NavLink>
          <NavLink to="/steelframe" activeClassName="active">
            Steel Frame
          </NavLink>
          
          {/* <div>
            <RedirectDropdown />
          </div> */}

          {/* <NavLink to="/parcerias" activeClassName="active">
            Parcerias
          </NavLink> */}
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </div>
        <div>
        <Button04 
  children="Solicitar orçamento"
  onClick={() => {
    const formSection = document.getElementById('Form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = "/#Form";
      setTimeout(() => {
        const formAfterNav = document.getElementById('Form');
        if (formAfterNav) {
          formAfterNav.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Aguarda meio segundo para garantir que a página carregou
    }
  }}
/>

        </div>
        <MenuButton onClick={() => setSidebarOpen(true)}>
          <HiBars3 />
        </MenuButton>
      </HeaderWhite>

      <Overlay isOpen={isSidebarOpen} onClick={() => setSidebarOpen(false)}></Overlay>
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarTop>
          <CloseButton onClick={() => setSidebarOpen(false)}>
            <BsX />
          </CloseButton>
          <img
            onClick={() => Navigate('/')}
            src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public"
            alt="logo da nova metalica"
            loading="lazy"
          />
        </SidebarTop>
        <SidebarLinks>
          <NavLink to="/" activeClassName="active">Início <BsArrowRight /></NavLink>
          <NavLink to="/sobre" activeClassName="active">Sobre nós <BsArrowRight /></NavLink>
          <NavLink to="/steelframe" activeClassName="active">Steel Frame <BsArrowRight /></NavLink>
          {/* <div>
            <RedirectDropdown />
          </div> */}
          {/* <NavLink to="/parcerias" activeClassName="active">Parcerias <BsArrowRight /></NavLink> */}
          <NavLink to="/blog" activeClassName="active">Blog <BsArrowRight /></NavLink>
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

        <SidebarFooter>
          <Button04 
          children="Solicitar orçamento"
          onClick={() => { setSidebarOpen(false)
            const formSection = document.getElementById('Form');
            if ( formSection ){
              formSection.scrollIntoView({ behavior : 'smooth' })
            }
          }}></Button04>
        </SidebarFooter>
      </Sidebar>
    </HeaderAll>
  );
};

export default Header;
