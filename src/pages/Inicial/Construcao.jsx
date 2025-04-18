import React from "react";
import styled from "styled-components";
import Button02 from "../../components/buttons/Button02";

const ConstrucaoAll = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    position: relative;
    transform: translateX(-50%);
    left: 50%;
    top: 0;

    @media (max-width: 768px) {
        padding: 5%;
    }   
`

const ConstrucaoText = styled.div`
    width: 100%;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 768px) {
        padding: 0%;
        gap: 15px;
        display: none;
    }

    & > h1{
        font-size: 40px;
        color: var(--color--blue);
        font-weight: 500;

        @media (max-width: 768px) {
            font-size: 32px;
            text-align: center;
        }
    }

    & > p{
        font-size: 16px;
        color: var(--color--black);
        opacity: .8;
        text-align: center;

        @media (max-width: 768px) {
            text-align: center;
        }
    }
`

const ConstrucaoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        position: relative;
        margin-top: 10%;
    }

    & > div{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;

        @media (max-width: 768px) {
            width: 100%;
            align-items: center;
            text-align: center;
        }

        & > img{
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 30px 0 0 30px;
            position: relative;
            
            @media (max-width: 768px) {
                height: 40px;
                border-radius: 0;
                z-index: -1;
                position: absolute;
                top: 0;
                left: 0;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 60% 0);
            }
        }

        & > div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 30px;
            padding: 0 5% 0 10%;

            @media (max-width: 768px){
                padding: 0 0;
            }

            & > h2 {
                font-size: 32px;
                font-weight: 500;
                color: var(--color--blue);

                @media (max-width: 768px) {
                    font-size: 28px;
                    height: 40px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            & > p{
                font-size: 16px;
                width: 85%;
                font-weight: 400;
                color: var(--color--black);
                opacity: .8;
                line-height: 110%;

                @media (max-width: 768px) {
                    width: 100%;
                    text-align: left;
                }   
            }
        }
    }
`

const ConstrucaoContainer2 = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        position: relative;
        margin-top: 15%;
    }

    & > div{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;

        @media (max-width: 768px) {
            width: 100%;
            align-items: center;
            text-align: center;
        }

        & > img{
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 0px 30px 30px 0px;

            @media (max-width: 768px) {
                height: 40px;
                border-radius: 0;
                z-index: -1;
                position: absolute;
                top: 0;
                left: 0;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 55% 100%, 45% 0);
            }
        }

        & > div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 30px;
            padding: 0 5% 0 10%;

            @media (max-width: 768px){
                padding: 0 0;
            }

            & > h2 {
                font-size: 32px;
                font-weight: 500;
                color: var(--color--blue);

                @media (max-width: 768px) {
                    font-size: 28px;
                    height: 40px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            & > p{
                font-size: 16px;
                width: 85%;
                font-weight: 400;
                color: var(--color--black);
                opacity: .8;
                line-height: 110%;

                @media (max-width: 768px) {
                    width: 100%;
                    text-align: left;
                }   
            }
        }
    }
`

const Construcao = () => {
    return (
        <>
            <ConstrucaoAll>
                <ConstrucaoText>
                    <h1 data-aos="fade-up" data-aos-delay="100">Construção a Seco</h1>
                    <p data-aos="fade-up" data-aos-delay="300">Agilize as suas obras com a qualidade que só o Steel Frame e o Drywall podem oferecer, garantindo maior eficiência em cada etapa da construção.</p>
                </ConstrucaoText>

                <ConstrucaoContainer>
                    <div>
                        <div>
                            <h2 data-aos="fade-up-left" data-aos-delay="100">Steel Frame</h2>
                            <p data-aos="fade-up-left" data-aos-delay="200">O Steel Frame é uma revolução no setor da construção civil. Com perfis de aço galvanizado, essa técnica oferece uma estrutura leve, durável e resistente. A montagem rápida e precisa reduz, significativamente, o tempo de construção, enquanto a sustentabilidade em foco torna essa solução ideal para diversos tipos de obras.</p>
                            <Button02 
                            children="Solicitar orçamento!"
                            onClick={() => {
                                const formSection = document.getElementById('Form');
                                if (formSection){
                                    formSection.scrollIntoView({ behavior : 'smooth' })
                                }
                            }}
                            />
                        </div>
                    </div>
                    <div>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b790bac9-6a8a-402f-734b-0ab292815b00/public" loading="lazy" alt="Estrutura metálica de Steel Frame da fábrica da Nova Metálica" title="Estrutura metálica de Steel Frame da fábrica da Nova Metálica" />
                    </div>
                </ConstrucaoContainer>

                <ConstrucaoContainer2>
                    <div>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d1000bbb-40dd-427d-a012-ce2c42bf7200/public" loading="lazy" alt="Paredes de drywall da Nova Metálica" title="Paredes de drywall da Nova Metálica" />
                    </div>
                    <div>
                        <div>
                            <h2 data-aos="fade-up-right" data-aos-delay="100">Drywall</h2>
                            <p data-aos="fade-up-right" data-aos-delay="100">O Drywall oferece praticidade e eficiência para a construção moderna, com excelente. É a escolha perfeita para projetos residenciais e comerciais que buscam qualidade e maior agilidade na construção.</p>
                            <Button02
                            children="Solicitar orçamento!"
                            onClick={() => {
                                const formSection = document.getElementById('Form');
                                if (formSection){
                                    formSection.scrollIntoView({ behavior : 'smooth' })
                                }
                            }}
                            />
                        </div>
                    </div>
                </ConstrucaoContainer2>

            </ConstrucaoAll>
        </>
    )
}

export default Construcao;