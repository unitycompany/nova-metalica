import React from "react";
import styled from "styled-components";
import ButtonLP2 from "../../components/buttons/Button08";

const All = styled.section`
    width: 100%;
    height: auto;
    position: relative;
`

const SobreBackground = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: #F8F8F8;

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: #F2F2F2;
        clip-path: polygon(0 0, 25% 0, 25% 100%, 0% 100%);

        @media (max-width:768px){
            display: none;
        }

    }
`

const SobreContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%)!important;
    position: relative;
    padding: 10% 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    color: var(--color--white);

    @media (max-width:768px){
        flex-direction: column;
    }
`

const SobreImage = styled.div`
    width: 50%;
    padding-left: 5%;
    height: 100%;

    & > img {
        @media (max-width:768px){
            width: 100%;
            opacity: 0.05;
            z-index: -1;
        }
    }

    @media (max-width:768px){
        width: 100%;
        position: absolute;
        right: -10%;
        top: 5%;
    }
`

const SobreRight = styled.div`
    width: 50%;
    padding-right: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 24px;

    & > div {
        width: 100%;
        background-color: #00000010;
        padding: 16px 12px;
        color: #1d1d1b;
        margin-top: -10px;
        border-left: 2px solid var(--color--blue);
    }

    @media (max-width:768px){
        width: 100%;
        padding: 0 5%;
    }

    & > img {
        width: 150px;

        @media (max-width:768px){
            width: 120px;
        }
    }

    & > h1 {
        font-size: 32px;
        font-weight: 400;
        color: var(--color--black);

        @media (max-width:768px){
            font-size: 28px;
        }
    }

    & > p {
        font-size: 18px;
        color: var(--color--black);
        font-weight: 300;
        margin-bottom: 20px;

        @media (max-width:768px){
            font-size: 16px;
        }
    }

    & > button {
        width: 50%;

        @media (max-width:768px){
            width: 80%;
        }
    }
` 

const Sobre = () => {
    return (
        <>
            <All>
                <SobreBackground></SobreBackground>
                <SobreContainer>
                    <SobreImage data-aos="fade-up-right" data-aos-delay="100">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8651a872-0b00-4e3e-4c14-ff48b6463d00/public" alt="foto da fábrica" loading="lazy" />
                    </SobreImage>
                    <SobreRight data-aos="fade-up" data-aos-delay="100">
                        <img
                            src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public"
                            alt="logo da nova metalica"
                            loading="lazy"
                        />
                        <h1 data-aos="fade-up" data-aos-delay="200">
                            Nova Metálica: Confiança e qualidade têm nome
                        </h1>
                        <p>
                            Somos referência em perfis para Steel Frame e Drywall, unindo qualidade e tecnologia de ponta para elevar o padrão da construção civil em todo o Brasil.
                        </p>
                        <div>
                            <p>
                            Nossa missão é fornecer perfis metálicos normatizados, fabricados com aço 100% nacional, assegurando qualidade e desempenho em todo projeto.
                            </p>
                        </div>
                        <div>
                        <p>
                            Contamos com as avançadas máquinas Framecad para Steel Frame e Metalso para Drywall, o que nos permite entregar perfis com precisão milimétrica e eficiência.
                        </p>
                        </div>
                        <p>
                            Escolher a Nova Metálica é optar por inovação e uma parceria que coloca a qualidade em primeiro lugar.
                        </p>
                        <ButtonLP2 />
                    </SobreRight>
                </SobreContainer>
            </All>
        </>
    )
}

export default Sobre;