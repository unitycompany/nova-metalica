import React from "react";
import styled from "styled-components";
import Button05 from "../../components/buttons/Button05"; // Suponho que esse seja o componente do botão

const CardAll = styled.div`
    width: 100%!important;
    height: auto;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    border: 1px solid var(--color--black);
    padding: 5px;
    position: relative;

    &:hover::before{
        width: 100%;
    }

    &::before{
        content: '';
        width: 0;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: var(--color--blue);
        opacity: 0.05;
        z-index: -1;
        border-radius: 25px;
        transition: all .5s linear;
        border-color: var(--color--blue);
    }

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 10px;
        padding: 5px;
        border: 1px solid var(--color--black);
        border-radius: 20px;
    }

    & > div:nth-child(1) {
        width: 50%;
        min-height: 270px;
        height: 100%;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #00000010;

        @media (max-width: 768px){
            height: 200px;
            width: 100%;
        }

        & > img {
            width: 100%;
            object-fit: cover;
            min-height: 270px;
            height: 100% auto;
            border-radius: 20px;
            transition: all .5s linear;

            &:hover {
                filter: brightness(105%) contrast(105%);
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 20px 0;
        gap: 15px;
        height: 100%;

        @media (max-width: 768px){
            width: 100%;
            padding: 10px;
        }

        & > span{
            font-size: 12px;
            color: var(--color--blue);
            cursor: pointer;
        }

        & > h1 {
            font-size: 20px;
            font-weight: 500;
            background: linear-gradient(-130deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent;  
        }

        & > p {
            font-size: 14px;
            opacity: .6;
            color: var(--color--black);
        }

        & > div{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 5px;

            & > span{
                padding: 5px;
                font-size: 10px;
                border-radius: 5px;
                background-color: #00000010;
                font-weight: 400;
                color: var(--color--black);
            }
        }

        & > button {
            font-size: 12px;
            padding: 10px 15px;
        }

        & > h6 {
            font-size: 10px;
            font-weight: 400;
            font-style: italic;
            color: var(--color--black);
        }
    }
`;

const CardExample = ({ topico, titulo, description, hashtag, autor, data, image }) => {
    return (
        <CardAll>
            <div>
                <img 
                    src={image} 
                    alt={`Imagem do post`}
                    loading="lazy"
                />
            </div>
            <div>
                <span>{topico}</span> {/* Topico dinâmico */}
                <h1>{titulo}</h1> {/* Titulo dinâmico */}
                <p>{description}</p> {/* Descrição dinâmica */}
                <div>
                    {hashtag.map((tag, index) => (
                        <span key={index}>#{tag}</span> // Hashtags dinâmicas
                    ))}
                </div>
                <Button05 children="Ler mais" /> {/* Botão "Saber mais" */}
                <h6>Escrito por <a href=""> {autor} </a> | {data}</h6> {/* Autor e data dinâmicos */}
            </div>
        </CardAll>
    );
};

export default CardExample;
