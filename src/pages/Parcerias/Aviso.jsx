import React from "react";
import styled from "styled-components";

const AvisoAll = styled.section`
    width: 100%;
    height: 30vh;
    border-radius: 30px;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f344273-4c43-4154-5462-b710d2b8e800/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
    flex-direction: column;
    z-index: 2;

    @media (max-width: 768px){
        height: 35vh;
        padding: 0 5%;
        width: 95%;
    }

    @media (min-width:769px) and (max-width: 1240px){
        width: 98.5%;
        height: 35vh;
    }

    & > p{
        color: var(--color--white);
        width: 65%;
        line-height: 140%;
        text-align: center;
        font-weight: 300;
        font-size: 16px;

        @media (max-width: 768px){
            width: 100%;
            font-size: 14px;
        }

        & > b {
            font-weight: 500;
        }
    }
`

const Aviso = () => {
    return (
        <>
            <AvisoAll>
                <p><b>AVISO:</b> Fazer a aplicação não é certeza de que você será aceito.</p>
                <p>Eu respeito o seu tempo e o meu, por conta disso, só entrará na <b>MENTORIA SCALE</b> quem realmente estiver preparado para tirar o máximo proveito desse acompanhamento.</p>
            </AvisoAll>
        </> 
    )
}

export default Aviso;