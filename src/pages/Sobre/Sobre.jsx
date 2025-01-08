import React from "react";
import styled from "styled-components";

import { BsArrowUpRight, BsAward } from "react-icons/bs";
import Button04 from "../../components/buttons/Button04";


const SobreAll = styled.section`
    width: 97.5%;
    max-width: 1280px;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    top: -2.5vh;
    z-index: 1;
    height: auto;
    background: var(--color--white);
    border-radius: 80px;
    padding: 7.5% 5% 15% 5%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 125px;
`

const SobreTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SobreCard = styled.div`
    width: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const SobreCardTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    & > div:nth-child(1){
        width: 70px;
        height: 70px;
        background-color: var(--color--blue);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 15px 0 15px 0px;
        
        &::before{
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            position: absolute;
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
            background-color: #1c8fc0;
            border-radius: 0 0 15px 0;
        }

        & > svg {
            width: 30px;
            height: 30px;
            color: var(--color--white);
            position: relative;
            z-index: 2;
        }
    }

    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        gap: 5px;

        & > h6{
            font-size: 16px;
            color: var(--color--black);
            font-weight: 300;
        }

        & > h1 {
            font-size: 22px;
            font-weight: 600;
            color: var(--color--black);
        }
    }
`

const SobreCardBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;

    & > p{
        font-size: 16px;
        line-height: 110%;
        width: 95%;
        font-weight: 500;
        color: var(--color--black);
    }

    & > a {
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        gap: 15px;
        color: var(--color--blue);

        & > svg {
            width: 14px;
            height: 14px;
        }
    }
`

const SobreCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    width: 100%;

    & > div:nth-child(1){

        & > img {
        }
    }

    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 30px;

        & > span {
            font-size: 16px;
            color: var(--color--blue);
            font-weight: 300;
        }

        & > h1 {
            font-size: 28px;
            line-height: 110%;
            font-weight: 400;
            margin-top: -15px;

            & > b {
                font-weight: 500;
                color: var(--color--blue);
            }
        }

        & > p {
            font-weight: 300;
            width: 85%;
            margin-top: -5px;
        }

        & > div {
            padding: 5% 5%;
            background-color: #f3f3f3;
            position: relative;
            border-left: 10px solid var(--color--blue);

            & > p {
                width: 95%;
            }
        }
    }
`

const Sobre = () => {
    return (
        <>
            <SobreAll>
                <SobreTop>
                    <SobreCard>

                        <SobreCardTop>
                            <div>
                                <BsAward />
                            </div>
                            <div>
                                <h6>Por que</h6>
                                <h1>Somos os melhores</h1>
                            </div>
                        </SobreCardTop>

                        <SobreCardBottom>
                            <p>Colocar os motivos pelos quais somos os melhores para se comprar perfis de steel frame e drywall bem objetivo</p>
                            <a href="#">
                                Comprar da fábrica
                                <BsArrowUpRight />
                            </a>
                        </SobreCardBottom>

                    </SobreCard>

                    <SobreCard>

                        <SobreCardTop>
                            <div>
                                <BsAward />
                            </div>
                            <div>
                                <h6>Por que</h6>
                                <h1>Somos os melhores</h1>
                            </div>
                        </SobreCardTop>

                        <SobreCardBottom>
                            <p>Colocar os motivos pelos quais somos os melhores para se comprar perfis de steel frame e drywall bem objetivo</p>
                            <a href="#">
                                Comprar da fábrica
                                <BsArrowUpRight />
                            </a>
                        </SobreCardBottom>

                    </SobreCard>

                    <SobreCard>

                        <SobreCardTop>
                            <div>
                                <BsAward />
                            </div>
                            <div>
                                <h6>Por que</h6>
                                <h1>Somos os melhores</h1>
                            </div>
                        </SobreCardTop>

                        <SobreCardBottom>
                            <p>Colocar os motivos pelos quais somos os melhores para se comprar perfis de steel frame e drywall bem objetivo</p>
                            <a href="#">
                                Comprar da fábrica
                                <BsArrowUpRight />
                            </a>
                        </SobreCardBottom>

                    </SobreCard>

                </SobreTop>

                <SobreCenter>
                    <div>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8651a872-0b00-4e3e-4c14-ff48b6463d00/public" />
                    </div>
                    <div>
                        <span>Bem vindo a Nova Metálica</span>
                        <h1>Conheça a <b>Nova Metálica</b>, a melhor Fábrica de Steel Frame e Drywall</h1>
                        <p>Colocar uma descrição curta falando sobre os materiais que vendemos, bem curta e objetiva</p>

                        <div>
                            <p>Colocar uma descrição curta falando sobre os materiais que vendemos, bem curta e objetiva, Colocar uma descrição curta.</p>
                        </div>

                        <Button04 children="Conhecer a fábrica"/>
                    </div>
                </SobreCenter>
            </SobreAll>
        </>
    )
}

export default Sobre;