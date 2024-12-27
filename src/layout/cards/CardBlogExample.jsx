import React from "react";
import styled from "styled-components";
import Button05 from "../../components/buttons/Button05"; // Suponho que esse seja o componente do botão

const CardAll = styled.div`
    width: 100%!important;
    height: 30vh;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    & > div:nth-child(1) {
        width: 50%;
        height: 100%;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #00000010;

        & > img {
            width: 100%;

            object-fit: cover;
            height: 100%;
            border-radius: 20px;
        }
    }

    & > div:nth-child(2){
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 15px 0;
        gap: 15px;
        height: 100%;

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
                <Button05 text="Saber mais" /> {/* Botão "Saber mais" */}
                <h6>Escrito por: <a href="#"> {autor} </a> | {data}</h6> {/* Autor e data dinâmicos */}
            </div>
        </CardAll>
    );
};

export default CardExample;
