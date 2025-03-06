import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
        white-space: nowrap;

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

const ContactForm = styled.form`
    width: 45%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;
    border-radius: 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

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
    }

    & > div > label > input {
        border: 1px solid #00000020;
        border-radius: 5px;
        width: 100%;
        padding: 10px 15px;
        color: var(--color--dark--blue);
    }

    & > div > label > input:focus{
        border: 1px solid var(--color--dark--blue);
    }

    & > div > label > input::placeholder{
        font-size: 14px;
        opacity: .2;
        color: var(--color--dark--blue);
    }

    & > div > button {
    padding: 15px;
    background-color: var(--color--blue);
    font-weight: 500;
    width: 100%;
    border-radius: 5px;
    color: var(--color--white);
    cursor: pointer;
    transition: all .1s ease-in-out;

    }

    & > div > button:hover {
        transform: scale(0.98);
    }


`

const Form = () => {
    const navigate = useNavigate();

    const location = useLocation();

  useEffect(() => {
    if (location.hash === "#Form") {
      setTimeout(() => {
        const formSection = document.getElementById("Form");
        if (formSection) {
          formSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Aguarda um pouco para garantir que a página carregou
    }
  }, [location]);


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
      });
      const [loading, setLoading] = useState(false);
      const [pageName, setPageName] = useState("Home"); // Nome da página padrão
    
      useEffect(() => {
        // Obtém o nome da página a partir da URL
        let path = window.location.pathname.replace(/\//g, ""); // Remove barras
        path = path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home"; // Capitaliza a primeira letra
        setPageName(path);
      }, []);
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [id]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { name, email, tel } = formData;
    
        // Validação básica
        if (!name || !email || !tel) {
          alert("Por favor, preencha todos os campos corretamente.");
          return;
        }
    
        setLoading(true);
    
        // Captura de UTM
        const utms = getUTMs();
        const utmSource = utms.utm_source || "orgânico";
        const utmMedium = utms.utm_medium || "";
        const utmCampaign = utms.utm_campaign || "";
        const utmContent = utms.utm_content || "";
        const utmTerm = utms.utm_term || "";
        const pageReferrer = window.location.href || "URL não encontrada";
    
        // Montagem do novo ID
        const customId = `FORMULARIO - ${pageName} - ${name}`;
        const customSource = `FORMULARIO - ${pageName}`;
    
        // Montagem do payload
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
              id: customId, // Aqui entra o ID personalizado
              user: name,
              email: email,
              name: name,
              personal_phone: tel,
              mobile_phone: tel,
              last_conversion: {
                source: customSource,
              },
              custom_fields: {
                uniqueId: customId, // Também pode ser usado no uniqueId se quiser
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
          setFormData({ name: "", email: "", tel: "" });
        } catch (error) {
          console.error("Error:", error);
          alert("Houve um erro ao enviar o formulário.");
        } finally {
          setLoading(false);
        }
      };
    
      // Função para capturar UTMs
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
                    <h1 data-aos="fade-up-left" data-aos-delay="200">Entre em contato agora</h1>
                    <p data-aos="fade-up-left" data-aos-delay="300">Estamos à disposição para esclarecer suas dúvidas e ajudá-lo a encontrar a melhor solução para seu projeto.</p>
                    <p data-aos="fade-up-left" data-aos-delay="400">Ao enviar esse formulário você está de acordo com a nossa <a onClick={() => navigate ('/politica-de-dados')}>politica de dados</a>, e nosso <a onClick={() => navigate ('/termos-de-condicoes')}>termo e condições</a>.</p>
                </FormTexts>
                <ContactForm id="contactForm" onSubmit={handleSubmit} data-aos="fade-up-right" data-aos-delay="200">
                    <h1>
                        Solicite seu orçamento
                    </h1>
                    <p>
                        Essas informações serão usadas apenas para fins de contato, ao enviar você concorda com isso.
                    </p>
                    <div>
                        <label>
                            Nome
                            <input type="text" id="name" placeholder="Anna Fernandes" value={formData.name} onChange={handleChange}/>
                        </label>
                        <label>
                            E-mail
                            <input type="email" id="email" placeholder="annafernandes@gmail.com" value={formData.email} onChange={handleChange} />
                        </label>
                        <label>
                            Seu WhatsApp
                            <input type="tel" id="tel" placeholder="24981234567" value={formData.tel} onChange={handleChange}/>
                        </label>
                        <button type="submit" disabled={loading}>{loading ? "Enviando..." : "Enviar formulário"}</button>
                    </div>
                </ContactForm>

            </FormAll>
        </>
    )
}

export default Form;