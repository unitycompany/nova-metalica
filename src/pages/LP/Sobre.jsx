import React from "react";
import styled from "styled-components";
import ButtonLP2 from "../../components/buttons/Button08";

const All = styled.section`
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
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

    }
`

const SobreContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    left: 50%;
    position: relative;
    top: 0;
    transform: translateX(-50%);
    padding: 10% 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    color: var(--color--white);
`

const SobreImage = styled.div`
    width: 50%;
    padding-left: 5%;
    height: 100%;
`

const SobreRight = styled.div`
    width: 50%;
    padding-right: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;

    & > img {
        width: 150px;
    }

    & > h1 {
        font-size: 32px;
        font-weight: 400;
        color: var(--color--black);
    }

    & > p {
        font-size: 18px;
        color: var(--color--black);
        font-weight: 300;
        margin-bottom: 20px;
    }

    & > button {
        width: 50%;
    }
`

const Sobre = () => {
    return (
        <>
            <All>
                <SobreBackground></SobreBackground>
                <SobreContainer>
                    <SobreImage>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8651a872-0b00-4e3e-4c14-ff48b6463d00/public" alt="foto da fábrica" loading="lazy" />
                    </SobreImage>
                    <SobreRight>
                        <img
                            src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public"
                            alt="logo da nova metalica"
                            loading="lazy"
                        />
                        <h1>
                            Confiança e qualidade tem nome
                        </h1>
                        <p>
                            Somos a primeira fábrica de perfis para Steel Frame e Drywall do Rio de Janeiro, uma referência em qualidade e tecnologia para o setor da construção civil.
                            <br /><br />
                            Com a missão de oferecer perfis metálicos normatizados e fabricados com aço 100% nacional, estamos equipados com tecnologia de ponta, como as avançadas máquinas F325iT Framecad para Steel Frame e equipamentos Metalso de última geração para Drywall, garantindo maior precisão, eficiência e agilidade no processo de produção.
                            <br /><br />
                            Escolher a Nova Metálica é optar por inovação, custo-benefício e uma parceria que coloca a qualidade em primeiro lugar.
                        </p>
                        <ButtonLP2 />
                    </SobreRight>
                </SobreContainer>
            </All>
        </>
    )
}

export default Sobre;