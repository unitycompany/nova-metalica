import React from "react";
import styled from "styled-components";

import { BsArrowUpRight, BsAward, BsCrosshair, BsBagCheck, BsCapslock, BsChatSquareQuote, BsEye } from "react-icons/bs";
import Button04 from "../../components/buttons/Button04";
import { TfiTarget } from "react-icons/tfi";


const SobreAll = styled.section`
    width: 97.5%;
    max-width: 1280px;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    z-index: 1;
    height: auto;
    background: var(--color--white);
    padding: 7.5% 5% 5% 5%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 125px;

    @media (max-width: 768px){
        border-radius: 30px;
        padding: 0% 5% 10% 5%;
        gap: 80px;
    }
`

const SobreTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 50px;
    }
`

const SobreCard = styled.div`
    width: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
    @media (max-width: 768px){
        width: 100%;
        border-bottom: 1px solid var(--color--blue);
        padding-bottom: 2.5%;
    }
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

        @media (max-width: 768px){
            width: 60px;
            height: 60px;
            border-radius: 10px 0 10px 0;
        }

        @media (min-width: 768px) and (max-width: 1280px){
            width: 60px;
            height: 60px;
        }
        
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

            @media (max-width: 768px){
                width: 20px;
                height: 20px;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                width: 25px;
                height: 25px;
            }
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

            @media (max-width: 768px){
                font-size: 14px;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                font-size: 14px;
            }
        }

        & > h1 {
            font-size: 22px;
            font-weight: 600;
            color: var(--color--black);

            @media (max-width: 768px){
                font-size: 20px;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                font-size: 18px;
            }
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

    @media (max-width: 768px){
        gap: 15px;
    }

    & > p{
        font-size: 16px;
        line-height: 110%;
        width: 95%;
        font-weight: 500;
        color: var(--color--black);

        @media (max-width: 768px){
            font-size: 14px;
            width: 100%;
        }

        @media (min-width: 768px) and (max-width: 1280px){
            font-size: 14px;
        }
    }

    & > a {
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        gap: 15px;
        color: var(--color--blue);
        cursor: pointer;
        transition: all .2s ease;

        &:hover {
            color: var(--color--dark--blue);
        }

        &:hover > svg {
            transform: rotate(135deg);
        }

        @media (max-width: 768px){
            font-size: 12px;
            gap: 10px;
            justify-content: space-between;
            width: 100%;
            gap: 0;
        }

        @media (min-width: 768px) and (max-width: 1280px){
            font-size: 14px;
        }

        & > svg {
            width: 14px;
            height: 14px;
            transition: all .1s ease;

            @media (max-width: 768px){
                width: 8px;
                height: 8px;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                width: 12px;
                height: 12px;
            }
        }
    }
`

const SobreCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    width: 100%;

    @media (max-width: 768px){
        flex-direction: column;
        width: 100%;
        gap: 50px;
    }

    @media (min-width: 768px) and (max-width: 1280px){
        gap: 70px;
    }

    & > div:nth-child(1){

        @media (max-width: 768px){
            width: 100%;
        }

        @media (min-width: 768px) and (max-width: 1280px){
            width: 50%;
        }

        & > img {

            @media (max-width: 768px){
                width: 100%;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                width: 100%;
            }
            
        }
    }

    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 30px;

        @media (min-width: 768px) and (max-width: 1280px){
            width: 50%;
        }

        & > span {
            font-size: 16px;
            color: var(--color--blue);
            font-weight: 300;

            @media (max-width: 768px){
                font-size: 14px;
            }
        }

        & > h1 {
            font-size: 28px;
            line-height: 110%;
            font-weight: 400;
            margin-top: -15px;

            @media (max-width: 768px){
                font-size: 22px;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                font-size: 24px;
            }

            & > b {
                font-weight: 500;
                color: var(--color--blue);
            }
        }

        & > p {
            font-weight: 300;
            width: 85%;
            margin-top: -5px;

            @media (max-width: 768px){
                font-size: 14px;
                width: 100%;
            }

            @media (min-width: 768px) and (max-width: 1280px){
                margin-top: -10px;
            }
        }

        & > div {
            padding: 5% 5%;
            background-color: #f3f3f3;
            position: relative;
            border-left: 10px solid var(--color--blue);

            & > p {
                width: 95%;

                @media (max-width: 768px){
                    font-size: 14px;
                }
            }
        }
    }
`

const Sobre = () => {
    return (
        <>
            <SobreAll id="Sobre">
                <SobreTop>
                    <SobreCard>

                        <SobreCardTop>
                            <div>
                            <BsChatSquareQuote />

                            </div>
                            <div>
                                <h6>Nova Metálica</h6>
                                <h1>Sobre</h1>
                            </div>
                        </SobreCardTop>

                        <SobreCardBottom>
                            <p>A Nova Metálica é uma fábrica referência no segmento de construção metálica, especializada em soluções de alta qualidade em Steel Frame.</p>
                            <a onClick={() => {
                                const formSection = document.getElementById('Form');
                                if ( formSection ){
                                    formSection.scrollIntoView({ behavior : 'smooth' })
                                }
                            }}>
                                Comprar da fábrica
                                <BsArrowUpRight />
                            </a>
                        </SobreCardBottom>

                    </SobreCard>

                    <SobreCard>

                        <SobreCardTop>
                            <div>
                            <TfiTarget />

                            </div>
                            <div>
                                <h6>Nova Metálica</h6>
                                <h1>Missão</h1>
                            </div>
                        </SobreCardTop>

                        <SobreCardBottom>
                            <p>Ser reconhecida por entregar todos os tipos de projetos dentro do prazo, com máxima qualidade e eficiência em cada etapa.</p>
                            <a onClick={() => {
                                const formSection = document.getElementById('Form');
                                if ( formSection ){
                                    formSection.scrollIntoView({ behavior : 'smooth' })
                                }
                            }}>
                                Comprar da fábrica
                                <BsArrowUpRight />
                            </a>
                        </SobreCardBottom>

                    </SobreCard>

                    <SobreCard>

                        <SobreCardTop>
                            <div>
                            <BsEye />

                            </div>
                            <div>
                                <h6>Nova Metálica</h6>
                                <h1>Visão</h1>
                            </div>
                        </SobreCardTop>

                        <SobreCardBottom>
                            <p>Evoluir a construção civil promovendo o Steel Frame como a melhor alternativa à alvenaria tradicional e elevando o padrão da indústria.</p>
                            <a onClick={() => {
                                const formSection = document.getElementById('Form');
                                if ( formSection ){
                                    formSection.scrollIntoView({ behavior : 'smooth' })
                                }
                            }}>
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
                        <h1>Confiança e <b>qualidade</b> tem nome</h1>
                        <p>
                            Somos a primeira fábrica de perfis para Steel Frame e Drywall do Rio de Janeiro, uma referência em qualidade e tecnologia para o setor da construção civil.<br /><br />
                            Com a missão de oferecer perfis metálicos normatizados e fabricados com aço 100% nacional, estamos equipados com tecnologia de ponta, como as avançadas máquinas FRAMECAD para Steel Frame e equipamentos Metalso de última geração para Drywall, garantindo maior precisão, eficiência e agilidade no processo de produção.
                        </p>

                        <div>
                            <p>Escolher a Nova Metálica é optar por inovação, custo-benefício e uma parceria que coloca a qualidade em primeiro lugar.</p>
                        </div>

                        <Button04 
                        children="Conhecer mais"
                        onClick={() => {
                            const infoSection = document.getElementById('Informacoes');
                            if ( infoSection ) {
                                infoSection.scrollIntoView({ behavior : 'smooth'});
                            }
                        }}
                        />
                    </div>
                </SobreCenter>
            </SobreAll>
        </>
    )
}

export default Sobre;