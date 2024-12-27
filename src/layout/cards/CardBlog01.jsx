import React from "react";
import styled from "styled-components";
import Button05 from "../../components/buttons/Button05";

const CardAll = styled.div`
    width: 100%;
    height: 100vh;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
    background-color: var(--color--dark--blue);

    & > div:nth-child(1){
        height: 40%;
        width: 100%;
        border-radius: 20px;
        display: flex;
        align-items: flex-end;
        padding: 15px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cef8b191-587e-4d10-2225-47b90e631200/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        border-image: 0 fill linear-gradient(90deg, #0d142b95, #0000);

        & > div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 18px;
                font-weight: 600;
                color: var(--color--white);
            }

            & > p {
                font-size: 12px;
                font-weight: 400;
                opacity: 1;
                color: var(--color--white);
            }

            & > span {
                font-size: 10px;
                opacity: .8;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }

            & > button {
                font-size: 12px;
            }
        }
    }

    & > div:nth-child(2){
        height: 35%;
        width: 100%;
        border-radius: 20px;
        display: flex;
        align-items: flex-end;
        padding: 15px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        border-image: 0 fill linear-gradient(90deg, #0d142b95, #0000);

        & > div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 16px;
                font-weight: 600;
                color: var(--color--white);
                line-height: 120%;
            }

            & > p {
                font-size: 12px;
                font-weight: 400;
                opacity: 1;
                color: var(--color--white);
            }

            & > span {
                font-size: 10px;
                opacity: .8;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }

            & > button {
                font-size: 10px;
                padding: 10px 15px;
            }
        }
    }

    & > div:nth-child(3){
        height: 25%;
        width: 100%;
        border-radius: 20px;
        display: flex;
        align-items: flex-end;
        padding: 15px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbea8596-157f-401b-c346-8c9da797ee00/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        border-image: 0 fill linear-gradient(90deg, #0d142b95, #0000);

        & > div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 14px;
                line-height: 120%;
                color: var(--color--white);
                font-weight: 600;
            }

            & > p {
                font-size: 12px;
                font-weight: 400;
                opacity: 1;
                color: var(--color--white);
            }

            & > span {
                font-size: 8px;
                opacity: .8;
                font-style: italic;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }

            & > button {
                font-size: 10px;
                padding: 10px 15px;
            }
        }
    }

`

const CardLeftBlog = () => {
    return (
        <>
            <CardAll>
                <div>
                    <div>
                        <h1>O que é Steel Frame</h1>
                        <span>Escrito por: <b>Nome da autora</b> | 24 de novembro de 2023</span>
                        <Button05 
                        text="Saber mais"
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Diferença entre Steel Frame e Alvenaria</h1>
                        <span>Escrito por: <b>Nome da autora</b> | 24 de novembro de 2023</span>
                        <Button05 
                        text="Saber mais"
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Como o Steel Frame está revolucionando a Construção Civil?</h1>
                        <span>Escrito por: <b>Nome da autora</b> | 24 de novembro de 2023</span>
                        <Button05
                        text="Saber mais"
                        />
                    </div>
                </div>
            </CardAll>
        </>
    )
}

export default CardLeftBlog;