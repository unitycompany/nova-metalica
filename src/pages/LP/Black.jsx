import React from "react";
import styled from "styled-components";

const All = styled.section`
    width: 100%;
    height: auto;
    position: relative;
    z-index: -1;
`

const BlackBackground = styled.div`
    width: 100%;
    background: linear-gradient(90deg, #6e6e6e, #000000);
    position: absolute;
    height: 100%;
`

const BlackContainer = styled.div`
    max-width: 1280px;
    left: 50%;
    position: relative;
    top: 0;
    transform: translateX(-50%);
    padding: 5% 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    color: var(--color--white);

    @media (max-width:768px){
        gap: 20px;
        padding: 10% 0;
    }

    & > h1 {
        padding-left: 5%;
        font-size: 32px;
        font-weight: 500;
        width: 80%;
        line-height: 110%;

        @media (max-width:768px){
            font-size: 24px;
            width: 100%;
            padding: 0 5%;
        }
    }

    & > p {
        padding-left: 5%;
        font-size: 16px;
        line-height: 120%;
        width: 90%;
        font-weight: 300;

        @media (max-width:768px){
            font-size: 14px;
            width: 100%;
            padding: 0 5%;
        }
    }
`

const Black = () => {

    return (
        <>
            <All>
                <BlackBackground> </BlackBackground>
                <BlackContainer>
                    <h1 data-aos="fade-up-right" data-aos-delay="100">
                        Na Nova Metálica, você garante o melhor preço e condições comerciais do mercado!
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="100">
                        Trabalhamos com perfis normatizados de altíssima qualidade, oferecendo preços altamente competitivos para pedidos no atacado. Além disso, oferecemos serviços de cálculo estrutural para Steel Frame – basta fornecer o projeto arquitetônico. 
                        Seja você revendedor, arquiteto, engenheiro ou construtor, nossa equipe está pronta para ajudar o seu negócio a crescer!
                    </p>
                </BlackContainer>
            </All>
        </>
    )
}

export default Black;