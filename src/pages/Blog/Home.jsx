import React from "react";
import styled from "styled-components";
import Button05 from "../../components/buttons/Button05";

const HomeAll = styled.section`
    width: 100%;
    height: 100vh;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 10% 0 5% 0;
`

const HomeLeft = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 40px;
    border-radius: 0px 15px 15px 0px;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cef8b191-587e-4d10-2225-47b90e631200/public');
    filter: contrast(120%);
    background-position: center;
    background-size: cover;
    border-image: 0 fill linear-gradient(90deg, #00000050, #0000);

    & > div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
        justify-content: center;

        & > h1 {
            font-size: 28px;
            font-weight: 600;
            background: linear-gradient(130deg, var(--color--white), var(--color--gray));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent; 
            line-height: 120%;
        }

        & > p {
            font-size: 16px;
            font-weight: 400;
            opacity: 1;
            color: var(--color--white);
        }

        & > span {
            font-size: 12px;
            font-style: italic;
            opacity: .8;
            color: var(--color--white);

            & > b{
                font-weight: 500;
                color: var(--color--white);
            }
        }
    }
`

const HomeRight = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div:nth-child(1){
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 60%;
        border-radius: 0px 15px 15px 0px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 30px;
        border-image: 0 fill linear-gradient(90deg, #00000050, #0000);

            & > div {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 24px;
                font-weight: 600;
                background: linear-gradient(130deg, var(--color--white), var(--color--gray));
                -webkit-background-clip: text;  
                background-clip: text; 
                color: transparent; 
                line-height: 120%;
            }

            & > p {
                font-size: 14px;
                font-weight: 300;
                opacity: 1;
                color: var(--color--white);
            }

            & > span {
                font-size: 10px;
                opacity: .8;
                font-style: italic;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }
        }
    }

    & > div:nth-child(2){
        height: 40%;
        width: 100%;
        border-radius: 0px 15px 15px 0px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 30px;
        background-color: var(--color--white);
        position: relative;
        z-index: 1;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbea8596-157f-401b-c346-8c9da797ee00/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        border-image: 0 fill linear-gradient(90deg, #00000050, #0000);
        overflow: hidden;

            & > div {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 20px;
                font-weight: 600;
                background: linear-gradient(130deg, var(--color--white), var(--color--gray));
                -webkit-background-clip: text;  
                background-clip: text; 
                color: transparent; 
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
                font-style: italic;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }
        }
    }
`

const Home = () => {
    return (
        <>
            <HomeAll>
                <HomeLeft>
                    <div>
                        <h1>O que é Steel Frame</h1>
                        <span>Escrito por: <b>Nome da autora</b> | 24 de novembro de 2023</span>
                        <Button05 
                        text="Saber mais sobre esse artigo"
                        />
                    </div>
                </HomeLeft>
                <HomeRight>
                    <div>
                        <div>
                            <h1>Diferença entre Steel Frame e Alvenaria</h1>
                            <span>Escrito por: <b>Nome da autora</b> | 24 de novembro de 2023</span>
                            <Button05 
                            text="Saber mais sobre esse artigo"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Como o Steel Frame está revolucionando a Construção Civil?</h1>
                            <span>Escrito por: <b>Nome da autora</b> | 24 de novembro de 2023</span>
                            <Button05 
                            text="Saber mais sobre esse artigo"
                            />
                        </div>
                    </div>
                </HomeRight>
            </HomeAll>
        </>
    )
}

export default Home;