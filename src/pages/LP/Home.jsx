import React, { useState } from "react";
import styled from "styled-components";

import { BsArrowDownShort } from "react-icons/bs";


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

    & > h1 {
        font-weight: 400;
        font-size: 16px;
        color: var(--color--white);

        @media (max-width:768px){
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

            @media (max-width:768px){
                font-size: 18px;
            }
        }
    }
`

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
        padding: 8px 12px;
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
    font-size: 0.9rem;
  }

  div {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    opacity: 0.4;
    margin-top: 10px;
    padding: 8px 12px;
    border: 1px solid #00000050;   
    font-size: 14px;
    color: #00000080;

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

        &:last-child{
            color: #00000050;
        }

        & > input {
            border-left: 1px solid var(--color--black);
            margin-left: 5px;
            font-size: 14px;
            width: auto;
            width: 60%;

            &::placeholder{
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

        & > iframe {
            width: 450px;
            height: 250px;

            @media (max-width:768px){
                width: 100%;
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

    // Handlers para o segundo FormSelect
    const handleOptionClick2 = (option) => {
        setSelectedOption2(option);
        setShowOtherInput2(false);
        setOtherInput2("");
        setIsOpen2(false);
    };

    const handleOtherInput2 = (e) => {
        if (e.key === "Enter") {
        setSelectedOption2(`Outro: ${otherInput2}`);
        setIsOpen2(false);
        }
    };

    return (
        <>
            <HomeAll>
                <HomeFaixa data-aos="fade-down" data-aos-delay="100">
                    <h1>
                        <b>VENDAS NO ATACADO</b> COM PEDIDO MÍNIMO DE <span>1500 PEÇAS</span> DIRETO DA FÁBRICA
                    </h1>    
                </HomeFaixa>    

                <HomeContainer>
                    <HomeLeft>
                        <HomeTitle>
                            <h1 data-aos="fade-left" data-aos-delay="100">
                                Reduza os custos e <b>otimize</b> os seus projetos:
                            </h1>
                            <h6 data-aos="fade-up-right" data-aos-delay="100">
                                Fabricamos perfis de <b>Steel Frame</b> sob medida, com qualidade de ponta e benefícios exclusivos para você.
                            </h6>
                        </HomeTitle>
                        <HomeForm id="contactForm" data-aos="fade-up" data-aos-delay="100">
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
                                Em que área você atua?
                                <div onClick={() => setIsOpen((prev) => !prev)}>
                                    <span>{selectedOption || "Selecione uma opção"}</span>
                                    <BsArrowDownShort />
                                </div>

                                </label>
                                <div className="dropdown">
                                <span onClick={() => handleOptionClick("Revendedor (busco estoque para revenda)")}>
                                    Revendedor (busco estoque para revenda)
                                </span>
                                <span onClick={() => handleOptionClick("Engenheiro ou arquiteto (uso em projetos profissionais)")}>
                                    Engenheiro ou arquiteto (uso em projetos profissionais)
                                </span>
                                <span onClick={() => handleOptionClick("Construtor (uso em obras e projetos próprios)")}>
                                    Construtor (uso em obras e projetos próprios)
                                </span>
                                <span onClick={() => setShowOtherInput(true)}>
                                    Outro (especifique):
                                    {showOtherInput && (
                                    <input
                                        type="text"
                                        placeholder="Digite sua área e pressione Enter"
                                        value={otherInput}
                                        onChange={(e) => setOtherInput(e.target.value)}
                                        onKeyDown={handleOtherInput}
                                    />
                                    )}
                                </span>
                                </div>
                            </FormSelectWrapper>

                            <FormSelectWrapper isOpen={isOpen2}>
                                <label>
                                Qual motivo do seu contato?
                                <div onClick={() => setIsOpen2((prev) => !prev)}>
                                    <span>{selectedOption2 || "Selecione uma opção"}</span>
                                    <BsArrowDownShort />
                                </div>

                                </label>
                                <div className="dropdown">
                                <span onClick={() => handleOptionClick2("Estou buscando um fornecedor para pedidos no atacado")}>
                                    Estou buscando um fornecedor para pedidos no atacado
                                </span>
                                <span onClick={() => handleOptionClick2("Quero solicitar um orçamento para revenda")}>
                                    Quero solicitar um orçamento para revenda
                                </span>
                                <span onClick={() => handleOptionClick2("Tenho interesse em conhecer os produtos e condições para parceria.")}>
                                    Tenho interesse em conhecer os produtos e condições para parceria.
                                </span>
                                <span onClick={() => handleOptionClick2("Gostaria de saber mais informações antes de tomar uma decisão.")}>
                                    Gostaria de saber mais informações antes de tomar uma decisão.
                                </span>
                                <span onClick={() => setShowOtherInput2(true)}>
                                    Outro (especifique):
                                    {showOtherInput2 && (
                                    <input
                                        type="text"
                                        placeholder="Digite seu motivo e pressione Enter"
                                        value={otherInput2}
                                        onChange={(e) => setOtherInput2(e.target.value)}
                                        onKeyDown={handleOtherInput2}
                                    />
                                    )}
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
                            <iframe
                                src="https://customer-g3gc6xcdls9bgs9k.cloudflarestream.com/e46e6388d3cf6d794418c81c2c22c3aa/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-g3gc6xcdls9bgs9k.cloudflarestream.com%2Fe46e6388d3cf6d794418c81c2c22c3aa%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                                loading="lazy"
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                allowfullscreen="true"
                                data-aos="fade-up" data-aos-delay="100"
                            ></iframe>
                            </div>

                    </HomeRight>
                </HomeContainer>


            </HomeAll>        
        </>
    )
}

export default Home;