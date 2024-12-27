import React from "react";
import styled from "styled-components";

const FormAll = styled.div`
    width: 100%;
    height: 60vh;
    max-width: 1140px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
`

const FormTexts = styled.div`
    width: 55%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding-left: 5%;

    & > img {
        width: 150px;
    }

    & > h1{
        font-size: 32px;
        font-weight: 500;
        color: var(--color--dark--blue);
        width: 70%;
        white-space: nowrap;
    }

    & > p {
        width: 85%;
        font-size: 14px;
        opacity: .6;

        & > a{
            color: var(--color--blue);
            text-decoration: underline;
        }
    }
`

const ContactForm = styled.form`
    width: 45%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 30px 0 0 30px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        background: linear-gradient (45deg, var(--color--white), var(--color--black));
        width: 80%;
        height: 60%;
        padding: 25px;
        border-radius: 10px;
    }

    & > div > input {
        border: 1px solid #00000020;
        border-radius: 10px;
        width: 100%;
        padding: 10px 15px;
        color: var(--color--dark--blue);
    }

    & > div > input:focus{
        border: 1px solid var(--color--dark--blue);
    }

    & > div > input::placeholder{
        font-size: 14px;
        opacity: .6;
        color: var(--color--dark--blue);
    }

    & > div > button {
    padding: 15px;
    background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    width: 100%;
    border-radius: 15px;
    color: var(--color--white);
    cursor: pointer;
    transition: all .1s ease-in-out;
    }

    & > div > button:hover {
        transform: scale(1.02);
        box-shadow: 0 0 15px rgba(0, 0, 0, .3);
    }


`

const Form = () => {
    return (
        <>
            <FormAll id="Form"> 
                <FormTexts>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public" alt="logo da nova metalica" />
                    <h1>Entre em contato agora</h1>
                    <p>Estamos à disposição para esclarecer suas dúvidas e ajudá-lo a encontrar a melhor solução para seu projeto.</p>
                    <p>Ao enviar esse formulário você está de acordo com a nossa <a href="#">politica de dados</a>, e nosso <a href="#">termo e condições</a>.</p>
                </FormTexts>
                <ContactForm id="contactForm">
                    <div>
                        <input type="text" id="name" placeholder="Nome" />
                        <input type="email" id="email" placeholder="E-mail" />
                        <input type="tel" id="tel" placeholder="WhatsApp" />
                        <button type="submit">Enviar</button>
                    </div>
                </ContactForm>

            </FormAll>
        </>
    )
}

export default Form