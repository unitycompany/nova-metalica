import React, { useState } from "react";
import styled from "styled-components";

import { BsArrowDownShort, BsTruck} from "react-icons/bs";


const HomeAll = styled.section`
    width: 100%;
`

const HomeFaixa = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff0000;
  position: fixed;
  z-index: 999;
  box-shadow: 0 0 5px #ffffff;
  overflow: hidden; /* Para garantir que o efeito de luz não vaze */

  @media (max-width: 768px){
    
  }
  
  &::before {
    content: "";
    position: absolute;
    width: 200px; /* Ajuste conforme necessário */
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -200px;
    opacity: 0.6;
    animation: shine 4.5s ease-out infinite;
  }

  & > h1 {
    font-weight: 400;
    font-size: 16px;
    color: var(--color--white);
    position: relative; /* Para manter o texto acima do efeito */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px){
        display: inline-block;
        align-items: center;
        justify-content: center;
    }

    & > svg {
        font-size: 24px;

        @media (max-width: 768px){
            display: none;
        }
    }

    @media (max-width: 768px) {
      text-align: center;
      font-size: 14px;
    }

    & > b {
      font-weight: 600;
    }

    & > span {
      font-weight: 800;
      color: #FFCC00;
      font-size: 20px;
      margin: 0 5px;
      animation: pulse 3s ease-out infinite;

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
  }

  @keyframes shine {
    0% {
      left: -200px;
    }
    60% {
      left: 100%;
    }
    to {
      left: 100%;
    }
  }

  @keyframes pulse {
    0% {
        transform: scale(1.0);
    }
    50% {
        transform: scale(1.1) rotate(-2deg);
    }
  }
`;

const HomeContainer = styled.div` 
    width: 100%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    position: relative;
    transform: translateX(-50%);
    height: auto;
    padding: 3% 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @media (max-width:768px){
        flex-direction: column-reverse;
        gap: 20px;
    }
`

const HomeLeft = styled.div`
    width: 50%;
    padding-left: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    @media (max-width:768px){
        width: 100%;
        padding: 0 5%;
        gap: 30px;
    }
`

const HomeTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
    padding: 5% 0;

    @media (max-width:768px){
        padding: 0;
    }

    & > h1 {
        font-size: 36px;
        font-weight: 300;

        @media (max-width:768px){
            font-size: 28px;
        }

        & > b {
            font-weight: 500;
            color: var(--color--blue);
        }
    }

    & > h6 {
        font-size: 18px;
        font-weight: 300;

        @media (max-width:768px){
            font-size: 16px;
        }

        & > b {
            font-weight: 500;
            color: var(--color--blue);
        }
    }
`

const HomeForm = styled.form`  
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;

    @media (max-width:768px){
        margin-bottom: 30px;
    }

    & > div:nth-child(1), & > div:nth-child(2), & > div:nth-child(3){
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 15px;

        label {
        position: relative;
        display: block;
        font-size: 1rem;
        font-weight: 500;
        width: 100%;
        }

        label input {
        width: 100%;
        padding: 10px 12px;
        font-size: 1rem;
        font-weight: 400;
        border: 1px solid #00000020;
        }

        label span {
        position: absolute;
        top: 12px;
        left: 12px;
        color: #00000030;
        font-size: 0.9rem;
        background-color: #fff; /* Ajuste conforme necessário */
        padding: 0 4px;
        transition: 0.3s ease;
        pointer-events: none;
        top: -5px;
        left: 8px;
        font-size: 0.75rem;
        color: #333;
        }

        label input:focus + span,
        label input:not(:placeholder-shown) + span {
        top: -8px;
        left: 8px;
        font-size: 0.75rem;
        color: #333;
        }
    }

    & > button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background-color: var(--color--black);
        color: var(--color--white);
        font-weight: 500;
        cursor: pointer;
        border: 1px solid var(--color--black);
        transition: all .1s ease;

        &:hover {
            background-color: transparent;
            color: var(--color--black);
            border: 1px solid var(--color--black);
            z-index: 10;
        }
    }

    & > p {
        font-size: 14px;
        color: #00000040;
        font-style: italic;
    }
`

const FormSelectWrapper = styled.div`
  width: 100%;
  position: relative;

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 0px;
    font-size: 0.8rem;
  }

  div {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    opacity: ${({ selected }) => (selected ? "0.5" : "1")};
    margin-top: 10px;
    padding: 8px 12px;
    border: 1px solid #00000030;   
    font-size: 14px;
    color: ${({ selected }) => (selected ? "#000" : "#00000080")};

    & > svg {
      font-size: 20px;
    }
  }

  span {
    display: block;
    padding: 5px 0;
  }

  .dropdown {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
    width: 100%;
    opacity: 1;
    padding: 0 5px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    & > span {
      margin: 10px 0;
      font-size: 14px;
      padding: 5px;
      width: 100%;
      opacity: 0.9; /* Opacidade padrão */
      transition: opacity 0.2s, color 0.2s;

      &:last-child {
        color: #00000050;
      }

      & > input {
        border-left: 1px solid var(--color--black);
        margin-left: 5px;
        font-size: 14px;
        width: auto;
        width: 60%;

        &::placeholder {
          padding-left: 5px;
          color: var(--color--black);
          opacity: 0.8;
        }
      }

      &:hover {
        background: #f5f5f5;
      }
    }
  }

  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 10px 0;
  }
`;

const HomeRight = styled.div`
    width: 50%;
    position: relative;
    height: 700px;

    @media (max-width:768px){
        width: 90%;
        height: auto;
        margin-top: 10vh;
    }

    & > div {
        position: absolute;
        right: 0;
        top: 50px;

        @media (max-width:768px){
            display: none;
        }

        & > img {
            width: 250px;
            padding: 20px;
        }
    }

    & > div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: relative;
        top: 0;
        right: 0;

        &::before{
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            position: absolute;
            background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6e52a162-0a72-4e7d-5be1-228921228700/public');
            background-position: right;
            background-size: contain;
            background-repeat: no-repeat;
            opacity: 0.8;
            z-index: -1;
        }

        & > div {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width:768px){
                width: 100%;
                height: auto;
            }

            &::before{
                content: '';
                width: 450px;
                height: 250px;
                top: 52.5%;
                transform: translateY(-50%) translateX(-50%);
                left: 52.5%;
                position: absolute;
                z-index: -1;
                border: 1px solid var(--color--blue);

                @media (max-width:768px){
                    width: 95%;
                    height: 210px;
                    left: 49%;
                    top: 50%;
                }
            }

                & > iframe {
                width: 450px;
                height: 250px;
                border-left: 10px solid var(--color--black);
                position: relative;

                @media (max-width:768px){
                    width: 100%;
                    height: 200px;
                }
            }
        }

    }
`

const Home = () => {
     // Estados para o primeiro FormSelect
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [showOtherInput, setShowOtherInput] = useState(false);
    const [otherInput, setOtherInput] = useState("");

    // Estados para o segundo FormSelect
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedOption2, setSelectedOption2] = useState("");
    const [showOtherInput2, setShowOtherInput2] = useState(false);
    const [otherInput2, setOtherInput2] = useState("");

    // Handlers para o primeiro FormSelect
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOtherInput(false);
        setOtherInput("");
        setIsOpen(false);
    };

    const handleOtherInput = (e) => {
        if (e.key === "Enter") {
        setSelectedOption(`Outro: ${otherInput}`);
        setIsOpen(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        // Coleta os valores dos campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const whatsapp = document.getElementById('tel').value.trim();
        const cidade = document.getElementById('cidade').value.trim();
        const estado = document.getElementById('estado').value.trim();
      
        // Verifica os valores dos estados para os campos de seleção
        const sistema = selectedOption || '';
      
        // Validação básica
        if (!name || !email || !whatsapp || !cidade || !estado || !sistema) {
          alert('Por favor, preencha todos os campos corretamente.');
          return;
        }
      
        // Coleta de UTMs (se necessário)
        const utms = new URLSearchParams(window.location.search);
        const utmSource = utms.get('utm_source') || 'organico';
        const utmMedium = utms.get('utm_medium') || '';
        const utmCampaign = utms.get('utm_campaign') || '';
        const utmContent = utms.get('utm_content') || '';
        const utmTerm = utms.get('utm_term') || '';
        const pageReferrer = window.location.href || 'URL não encontrada';
      
        // Data e hora
        const dataAtual = new Date().toLocaleDateString('pt-BR');
        const horaAtual = new Date().toLocaleTimeString('pt-BR');
      
        // Payload para o PipeRun
        const payload = {
          rules: {
            update: 'false',
            filter_status_update: 'open',
            equal_pipeline: 'true',
            status: 'open',
            validate_cpf: 'false',
          },
          leads: [
            {
              id: 'form-sistemas-steel-frame-asr',
              user: name,
              email: email,
              name: name,
              personal_phone: whatsapp,
              mobile_phone: whatsapp,
              cidade: cidade,
              estado: estado,
              sistema: sistema,
              last_conversion: {
                source: utmSource,
                data: dataAtual,
                hora: horaAtual,
              },
              custom_fields: {
                uniqueId: new Date().getTime().toString(),
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
      
        // Envio dos dados
        fetch('https://app.pipe.run/webservice/integradorJson?hash=56c50ba8-44e9-42fd-ba51-93207130106f', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
          .then((response) => {
            if (!response.ok) throw new Error(`Erro ao enviar ao PipeRun. Status: ${response.status}`);
            return response.json();
          })
          .then(() => {
            alert('Formulário enviado com sucesso!!!');
            document.getElementById('contactForm').reset();
          })
          .catch((error) => {
            console.error('Erro:', error);
            alert('Houve um erro ao enviar o formulário.');
          });
      };
      

    return (
        <>
            <HomeAll id="form">
                {/* <HomeFaixa data-aos="fade-down" data-aos-delay="100">
                    <h1>
                        <BsTruck /> <b>VENDAS NO ATACADO</b> COM PEDIDO MÍNIMO DE <span>1500 PEÇAS</span> DIRETO DA FÁBRICA
                    </h1>    
                </HomeFaixa>     */}

                <HomeContainer>
                    <HomeLeft>
                        <HomeTitle>
                            <h1 data-aos="fade-left" data-aos-delay="100">
                                Perfis normatizados <b>direto da fábrica</b> para sua obra
                            </h1>
                            <h6 data-aos="fade-up-right" data-aos-delay="100">
                                Steel Frame certificado com preço de fábrica e entrega em todo Brasil.
                            </h6>
                        </HomeTitle>
                        <HomeForm id="contactForm" data-aos="fade-up" data-aos-delay="100" onSubmit={handleSubmit}>
                        <div>
                            <label>
                                <input type="text" id="name" placeholder=" " required />
                                <span>Nome</span>
                            </label>
                            <label>
                                <input type="tel" id="tel" placeholder=" " required />
                                <span>WhatsApp</span>
                            </label>
                        </div>

                        <div>
                            <label>
                                <input type="email" id="email" placeholder=" " required />
                                <span>E-mail</span>
                            </label>
                        </div>
                        
                        <div>
                            <label>
                                <input type="text" id="cidade" placeholder=" " required />
                                <span>Cidade</span>
                            </label>
                            <label>
                                <input type="text" id="estado" placeholder=" " required />
                                <span>Estado</span>
                            </label>
                        </div>

                            <FormSelectWrapper isOpen={isOpen}>
                                <label>
                                Qual sistema você procura?
                                <div onClick={() => setIsOpen((prev) => !prev)}>
                                    <span>{selectedOption || "Selecione uma opção"}</span>
                                    <BsArrowDownShort />
                                </div>

                                </label>
                                <div className="dropdown">
                                <span onClick={() => handleOptionClick("Steel Frame")}>
                                    Steel Frame
                                </span>
                                <span onClick={() => handleOptionClick("Drywall")}>
                                    Drywall
                                </span>
                                <span onClick={() => handleOptionClick("Steel Frame e Drywall")}>
                                    Steel Frame e Drywall
                                </span>
                                
                                </div>
                            </FormSelectWrapper>

                            <button type="submit" id="buttonEnviarForm">
                                Solicitar orçamento!
                            </button>

                            <p>
                                *As suas informações serão utilizadas apenas para responder à sua solicitação. Confidencialidade garantida.
                            </p>

                        </HomeForm>
                    </HomeLeft>

                    <HomeRight>
                        <div data-aos="fade-up-left" data-aos-delay="100">
                            <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public" alt="logo da nova metalica" />
                        </div>
                        <div>
                            <div>
                                <iframe
                                    src="https://customer-g3gc6xcdls9bgs9k.cloudflarestream.com/bb55b730584a791554abea0ab2d9c596/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-g3gc6xcdls9bgs9k.cloudflarestream.com%2Fbb55b730584a791554abea0ab2d9c596%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                                    loading="lazy"
                                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                    allowfullscreen="true"
                                    data-aos="fade-up" data-aos-delay="100"
                                ></iframe>
                            </div>
                        </div>
                    </HomeRight>
                </HomeContainer>


            </HomeAll>        
        </>
    )
}

export default Home;