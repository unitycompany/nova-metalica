import React from "react";
import styled from "styled-components";

import { BsArrowUpRight, BsAward } from "react-icons/bs";


const SobreAll = styled.section`
    width: 97.5%;
    max-width: 1280px;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    top: -2.5vh;
    z-index: 5;
    height: 100vh;
    background: var(--color--white);
    border-radius: 80px 80px 0 0;
    padding: 5%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
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
            </SobreAll>
        </>
    )
}

export default Sobre;