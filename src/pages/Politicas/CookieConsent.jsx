import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CookieContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%!important;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px){
    width: 95%!important;
    background: rgba(0, 0, 0, 0.9);
  }

  & p {
    width: 80%;
    text-align: left;
    line-height: 120%;
  }

  a {
    color: var(--color--blue);
    text-decoration: underline;
    margin: 0 5px;
  }

  button {
    padding: 8px 15px;
    background: var(--color--blue);
    color: var(--color--white);
    font-weight: 400;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid transparent;

    &:hover {
      background: transparent;
      border: 1px solid var(--color--white);
    }
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 10px;
    max-width: 90%;
  }
`;

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieConsent");
    if (!cookieAccepted) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <CookieContainer>
      <p>
        Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{" "}
        <a href="/politica-de-dados">Política de Dados</a>,{" "}
        <a href="/politica-de-privacidade">Política de Privacidade</a> e{" "}
        <a href="/termos-de-condicoes">Termos e Condições</a>.
      </p>
      <button onClick={acceptCookies}>Aceitar</button>
    </CookieContainer>
  );
};

export default CookieConsent;
