import React from "react";
import styled from "styled-components";

import { BsArrowUpRight, BsAward, BsCrosshair, BsBagCheck, BsCapslock } from "react-icons/bs";
import Button04 from "../../components/buttons/Button04";


const SobreAll = styled.section`
    width: 97.5%;
    max-width: 1280px;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    z-index: 1;
    height: auto;
    background: var(--color--white);
    padding: 7.5% 5% 15% 5%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 125px;

    @media (max-width: 768px){
        border-radius: 30px;
        padding: 0% 5% 35% 5%;
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
                            <BsCrosshair />

                            </div>
                            <div>
                                <h6>Produzimos com</h6>
                                <h1>precisão e tecnologia</h1>
                            </div>
                        </SobreCardTop>

                        <SobreCardBottom>
                            <p>Cada perfil de Steel Frame e Drywall que fabricamos passa por rigorosos processos de qualidade, garantindo resistência e exatidão para qualquer projeto.</p>
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
                            <BsBagCheck />

                            </div>
                            <div>
                                <h6>Máteria-prima</h6>
                                <h1>de alto padrão</h1>
                            </div>
                        </SobreCardTop>

                        <SobreCardBottom>
                            <p>Utilizamos aço galvanizado de qualidade superior, garantindo estruturas duráveis, seguras e livres de corrosão.</p>
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
                            <BsCapslock />

                            </div>
                            <div>
                                <h6>Fabricação</h6>
                                <h1>sob demanda</h1>
                            </div>
                        </SobreCardTop>

                        <SobreCardBottom>
                            <p>Produzimos perfis sob medida, adaptados às necessidades do seu projeto, com agilidade na entrega e padronização garantida.</p>
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
                        <h1>Conheça a <b>Nova Metálica</b>, a melhor Fábrica de Steel Frame e Drywall</h1>
                        <p>Colocar uma descrição curta falando sobre os materiais que vendemos, bem curta e objetiva</p>

                        <div>
                            <p>Colocar uma descrição curta falando sobre os materiais que vendemos, bem curta e objetiva, Colocar uma descrição curta.</p>
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