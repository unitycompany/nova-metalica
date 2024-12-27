import React from "react";
import styled from "styled-components";
import Button05 from "../../../components/buttons/Button05";

const FormAll = styled.section`
    width: 100%;
    max-width: 1140px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 10% 5%;
        margin-top: 5vh;
        height: auto;
    }
`
const FormTexts = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    padding-left: 5%;

    @media (max-width: 768px){
        width: 100%;
        padding-left: 0;
        align-items: center;
        height: 30vh;
    }

    & > img {
        width: 150px;

        @media (max-width: 768px){
            width: 100px;
        }
    }

    & > h1 {
        font-size: 40px;
        font-weight: 400;
        color: var(--color--black);

        @media (max-width: 768px){
            font-size: 28px;
            text-align: center;
        }

        & > b {
            font-weight: 400;
            background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent;         
        }
    }

    & > p {
        color: var(--color--black);
        opacity: .6;
        font-size: 16px;
        width: 85%;

        @media (max-width: 768px){
            font-size: 14px;
            width: 100%;
            text-align: center;
        }
    }
`

const ContactForm = styled.form`
    width: 50%;
    border: 1px solid var(--color--dark--blue);
    height: 60%;
    position: relative;
    background-color: var(--color--white);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
    right: 1%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        width: 100%;
        right: 0;
        height: 70vh;
    }

    @media (min-width:769px) and (max-width: 1240px){
        height: 75%;
        right: 2.5%;
    }

    &::before{
        content: '';
        width: 105%;
        height: 90%;
        background-color: var(--color--dark--blue);
        top: 50%;
        transform: translateY(-50%);
        border-radius: 30px;
        right: -2.5%;
        position: absolute;
        z-index: -1;
    }

    & > input {
        border-radius: 12px;
        width: 80%;
        padding: 15px;
        margin: 5px;
        background-color: #ffffff95;
        box-shadow: 0 0 3px rgba(0, 195, 255, 0.15);

        &::placeholder{
            font-size: 14px;
            opacity: 1;
            color: var(--color--dark--blue);
            font-weight: 300;
        }

        &:focus{
            background-color: #ffffff;
        }
    }

    & > div{
        display: flex;
        justify-content: space-between;
        width: 82%;

        & > input{
            border-radius: 12px;
            width: 50%;
            padding: 15px;
            margin: 5px;
            background-color: #ffffff95;
            box-shadow: 0 0 3px rgba(0, 195, 255, 0.15);

            &::placeholder{
                font-size: 14px;
                opacity: 1;
                color: var(--color--dark--blue);
                font-weight: 300;
            }

            &:focus{
                background-color: #ffffff;
            }
        }
    }

    & > select{
        width: 80%;
        padding: 16px;
        border-radius: 12px;
        margin: 5px;
        font-size: 14px;
        background-color: #ffffff95;
        box-shadow: 0 0 3px rgba(0, 195, 255, 0.15);
        font-weight: 300;
    }

    & > button {
        width: 80%;
        margin-top: 5px;
        padding: 15px;
    }
`

const Form = () => {
    return (
        <>
            <FormAll>
                <FormTexts>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public" alt="logo da nova metalica" />
                    <h1>Preencha o formulário para <b>virar um parceiro</b></h1>
                    <p>Dizer aqui que todos os seus dados estão seguros e serão usados apenas para fins de contato</p>
                </FormTexts>
                <ContactForm id="contactForm">
                    <input type="text" id="name" placeholder="Seu nome" />
                    <input type="e-mail" id="email" placeholder="Seu e-mail" />
                    <input type="tel" id="tel" placeholder="Seu WhatsApp" />
                    <div>
                        <input type="text" id="cidade" placeholder="Cidade" />
                        <input type="text" id="estado" placeholder="Estado" />
                    </div>
                    <input type="text" id="empresa" placeholder="Nome da sua Empresa" />
                    <select>
                        <option disabled selected>Segmento</option>
                        <option>Montador</option>
                        <option>Empreiteira</option>
                        <option>Empresa de Engenharia</option>
                    </select> 
                    <Button05 
                    text="Enviar"
                    />
                </ContactForm>

            </FormAll>
        </> 
    )
}

export default Form;