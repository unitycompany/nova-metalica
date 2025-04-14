import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaCheck, FaClock } from "react-icons/fa";
import { BsCheck2, BsCheckCircleFill, BsExclamationLg, BsFillExclamationCircleFill } from "react-icons/bs";
import { LuLoader } from "react-icons/lu";
import { use } from "react";

// Função para validar o campo e retornar o ícone de check se válido
const renderValidationIcon = (field, value) => {
    let isValid = false;
    if (field === "name") {
      isValid = value.trim().length > 2;
    } else if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    } else if (field === "tel") {
      const digits = value.replace(/\D/g, "");
      isValid = digits.length === 11;
    }
  
    return isValid ? (
      <IconWrapper>
        <span>Tudo certo!</span>
        <BsCheckCircleFill color="green"/>
      </IconWrapper>
    ) : 
        <IconWrapper>
            <span>Digite o {field} válido</span>
            <BsFillExclamationCircleFill color="orange"/>
        </IconWrapper>;
  };

const FormAll = styled.div`
    width: 100%;
    height: auto;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 15% 5% 5% 5%;
    }
`

const FormTexts = styled.div`
    width: 55%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 35px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > img {
        width: 150px;   
        
        @media (max-width: 768px){
            width: 120px;
        }
    }

    & > h1{
        font-size: 32px;
        font-weight: 500;
        color: var(--color--dark--blue);
        width: 70%;

        @media (max-width: 768px){
            white-space: wrap;
            font-size: 28px;
            width: 80%;
            text-align: center;
            line-height: 100%;
        }
    }

    & > p {
        width: 85%;
        font-size: 16px;
        font-weight: 300;
        opacity: .6;

        @media (max-width: 768px){
            text-align: center;
            opacity: 0.8;
            width: 100%;
        }

        & > a{
            color: var(--color--blue);
            text-decoration: underline;
            cursor: pointer;
            transition: all .2s ease;

            &:hover {
                color: var(--color--green);
            }
        }
    }
`

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;     /* ajuste conforme necessário */
  top: 70%;
  transform: translateY(-50%);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  cursor: help;

  & svg {
    transition: all .2s ease-in-out;
  }

  &:hover svg {
    opacity: 0.5;
    transform: scale(0.95);
  }

    &:hover span {
        top: -40px;
        right: -10px;
        transform: scale(1);
    }

  & span {
    position: absolute;
    top: -10px;
    right: 0px;
    width: max-content;
    font-size: 10px;
    font-weight: 300;
    line-height: 100%;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid #000000;
    transform: scale(0);
    transition: all .2s ease-in-out;

    @media (max-width: 768px){
        transform: scale(1);
        top: -40px;
        right: -10px;
        opacity: 0.3;
    }
  }
`;

const ContactForm = styled.form`
    width: 45%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;
    border-radius: 20px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    transition: all .5s linear!important;

    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2), -3px 3px 0px var(--color--blue);
        transform: skew(0.5deg)!important;
        border-radius: 23px;
    }

    @media (max-width: 768px){
        width: 100%;
    }

    & > h1 {
        font-size: 28px;
        text-align: left;
        padding-left: 5%;
        font-weight: 500;
        color: var(--color--black);

        @media (max-width: 768px){
            font-size: 24px;
            padding-left: 7.5%;
        }
    }

    & > p {
        font-size: 14px;
        color: var(--color--black);
        width: 90%;
        margin-top: -35px;
        opacity: 0.7;
        padding-left: 5%;

        @media (max-width: 768px){
            padding-left: 7.5%;
        }
    }

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        background: linear-gradient (45deg, var(--color--white), var(--color--black));
        width: 100%;
        height: 60%;
        padding: 25px;
        border-radius: 10px;
    }

    & > div > label {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        font-weight: 400;
        color: var(--color--black);
        position: relative;

        & span {
            font-weight: 600;
        }
    }

    & > div > label > input {
        border: 1px solid #00000020;
        border-radius: 10px;
        width: 100%;
        padding: 10px 15px;
        font-weight: 500;
        color: transparent;
        background: linear-gradient(90deg, var(--color--blue), var(--color--green), var(--color--orange));
        -webkit-background-clip: text;
        transition: all .2s linear!important;

        &:focus{
            border: none;
            box-shadow: 5px 5px 10px #179dd615, -5px -5px 10px #ff5b0010;

            & span {
                color: red;
            }

            &::placeholder{
                opacity: 0.6;
            }
        }

        &::placeholder{
            font-size: 14px;
            opacity: .3;
            color: var(--color--dark--blue);
            transition: all .2s linear!important;
        }
    }

    & > div > button {
    padding: 15px;
    background-color: var(--color--blue);
    font-weight: 500;
    width: 100%;
    border-radius: 15px;
    color: var(--color--white);
    cursor: pointer;
    transition: all .3s ease-in-out;
    position: relative;

    &::before{
      content: '';
      width: 0%;
      left: 0;
      top: 0;
      height: 100%;
      background-color: var(--color--green);
      position: absolute;
      color: var(--color--black);
      transition: all .3s ease-in-out;
      z-index: -1;
      border-radius: 15px;
    }

    &:hover::before{
      width: 100%;
    }

    }

    & > div > button:hover {
        transform: scale(0.95);
        background-color: transparent;
        box-shadow: 0 0 50px rgba(179, 255, 0, 0.3);
    }


`

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonText, setButtonText] = useState("Enviar formulário");
  useEffect(() => {
      if (location.hash === "#Form") {
          setTimeout(() => {
              const formSection = document.getElementById("Form");
              if (formSection) {
                  formSection.scrollIntoView({ behavior: "smooth" });
              }
          }, 300);
      }
  }, [location]);

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      tel: "",
  });

  const [loading, setLoading] = useState(false);
  const [pageName, setPageName] = useState("Home");

  useEffect(() => {
      let path = window.location.pathname.replace(/\//g, "");
      path = path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home";
      setPageName(path);
  }, []);

  // Função para formatar o telefone (24) 98141-4141
  const formatPhone = (value) => {
      value = value.replace(/\D/g, ""); // Remove tudo que não for número
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses no DDD
      value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Coloca hífen no número
      return value;
  };

  const handleChange = (e) => {
      const { id, value } = e.target;
      
      // Aplica a formatação apenas no campo de telefone
      const newValue = id === "tel" ? formatPhone(value) : value;

      setFormData((prevState) => ({
          ...prevState,
          [id]: newValue,
      }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const { name, email, tel } = formData;

      if (!name || !email || !tel) {
          alert("Por favor, preencha todos os campos corretamente.");
          return;
      }

      setLoading(true);

      const utms = getUTMs();
      const utmSource = utms.utm_source || "orgânico";
      const utmMedium = utms.utm_medium || "";
      const utmCampaign = utms.utm_campaign || "";
      const utmContent = utms.utm_content || "";
      const utmTerm = utms.utm_term || "";
      const pageReferrer = window.location.href || "URL não encontrada";

      const customId = `FORMULARIO - ${pageName} - ${name}`;
      const customSource = `FORMULARIO - ${pageName}`;

      const payload = {
          rules: {
              update: "false",
              filter_status_update: "open",
              equal_pipeline: "true",
              status: "open",
              validate_cpf: "false",
          },
          leads: [
              {
                  id: customId,
                  user: name,
                  email: email,
                  name: name,
                  personal_phone: tel.replace(/\D/g, ""), // Enviar apenas os números
                  mobile_phone: tel.replace(/\D/g, ""),
                  last_conversion: {
                      source: customSource,
                  },
                  custom_fields: {
                      uniqueId: customId,
                      utm_source: utmSource,
                      utm_medium: utmMedium,
                      utm_campaign: utmCampaign,
                      utm_content: utmContent,
                      utm_term: utmTerm,
                      page_referrer: pageReferrer,
                  },
              },
          ],
      };

      try {
          const response = await fetch(
              "https://app.pipe.run/webservice/integradorJson?hash=56c50ba8-44e9-42fd-ba51-93207130106f",
              {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify(payload),
              }
          );

          const data = await response.json();
          console.log("Success:", data);
          alert("Formulário enviado com sucesso!");
          
          setButtonText("Você já enviou!") ;
          setFormData({ name: "", email: "", tel: "" });
      } catch (error) {
          console.error("Error:", error);
          alert("Houve um erro ao enviar o formulário.");
          setButtonText("Tente novamente")
      } finally {
          setLoading(false);
      }
  };

  const getUTMs = () => {
      const urlParams = new URLSearchParams(window.location.search);
      return {
          utm_source: urlParams.get("utm_source"),
          utm_medium: urlParams.get("utm_medium"),
          utm_campaign: urlParams.get("utm_campaign"),
          utm_content: urlParams.get("utm_content"),
          utm_term: urlParams.get("utm_term"),
      };
  };

  return (
      <>
          <FormAll id="Form"> 
              <FormTexts>
                  <img data-aos="fade-up-left" data-aos-delay="100" src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public" alt="logo da nova metalica" />
                  <h1 data-aos="fade-up-left" data-aos-delay="200">Entre em contato conosco agora mesmo</h1>
                  <p data-aos="fade-up-left" data-aos-delay="300">Estamos à disposição para esclarecer suas dúvidas e ajudá-lo a encontrar a melhor solução para seu projeto.</p>
                  <p data-aos="fade-up-left" data-aos-delay="400">
                      Ao enviar esse formulário, você está de acordo com a nossa <a onClick={() => navigate('/politica-de-dados')}>política de dados</a> e nosso <a onClick={() => navigate('/termos-de-condicoes')}>termo e condições</a>.
                  </p>
              </FormTexts>
              <ContactForm id="contactForm" onSubmit={handleSubmit} data-aos="fade-up-right" data-aos-delay="200">
                  <h1>Solicite seu orçamento</h1>
                  <p>Suas informações serão usadas apenas para fins de contato.</p>
                  <div>
                      <label>
                          <span>Nome</span>
                          <input type="text" id="name" placeholder="Nova Metálica" value={formData.name} onChange={handleChange} required/>
                          {renderValidationIcon("name", formData.name)}
                      </label>
                      <label>
                            <span>E-mail</span>
                          <input type="email" id="email" placeholder="contato@novametalica.com.br" value={formData.email} onChange={handleChange} required/>
                          {renderValidationIcon("email", formData.email)}
                      </label>
                      <label>
                            <span>Seu WhatsApp</span>
                          <input type="tel" id="tel" placeholder="(21) 96932-0223" value={formData.tel} onChange={handleChange} maxLength="15" required/>
                          {renderValidationIcon("tel", formData.tel)}
                      </label>
                      <button id="buttonForm" type="submit" disabled={loading}>{loading ? <LuLoader /> : buttonText }</button>
                  </div>
              </ContactForm>
          </FormAll>
      </>
  );
};


export default Form;