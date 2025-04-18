import React from "react";
import styled from "styled-components";
import Button05 from "../../components/buttons/Button05";
import Button02 from "../../components/buttons/Button02";
import Button03 from "../../components/buttons/Button03";

const HomeAll = styled.section`
    position: relative;
    width: 100%;
`

const HomeBackground = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    padding: 15% 5% 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    background: #000;

    @media (max-width: 768px){
        height: 90vh;
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6d7850c3-4de2-490f-6ac3-16ab5f43c100/public');
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        opacity: 0.5;
    }
`

const HomeContainer = styled.div`
    height: 100vh;
    padding: 10% 0;
    position: relative;
    z-index: 3;
    max-width: 1280px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1120px){
        padding-top: 10%;
    }

    @media (max-width: 768px){
        padding-top: 10%;
    }
`

const HomeDivAll = styled.div`
    width: 55%;
    height: 450px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    gap: 10px;
    position: relative;

    @media (max-width: 768px){
        width: 90%;
        height: 400px;
    }

    @media (min-width: 768px) and (max-width: 1280px){
        height: 400px;
    }
`

const HomeLogo = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: auto;

    @media (max-width: 768px){
        width: 120px;
        top: 5%;
    }

    & > img {
        width: 100%;
        object-fit: contain;
    }
`

const HomeTexts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 25px;
    width: 90%;
    color: var(--color--white);

    & > h1 {
        font-size: 32px;
        line-height: 110%;
        font-weight: 500;

        @media (max-width: 768px){
            font-size: 24px;
        }

        @media (min-width: 768px) and (max-width: 1280px){
            font-size: 28px;
        }

        & > b {
            color: var(--color--blue);
            font-weight: 600;
        }
    }

    & > p {
        font-size: 18px;
        line-height: 120%;
        width: 85%;
        font-weight: 300;

        @media (max-width: 768px){
            width: 100%;
            font-size: 16px;
        }

        @media (min-width: 768px) and (max-width: 1280px){
            font-size: 16px;
        }
    }
`

const HomeQuadrado = styled.div`
    background-color: var(--color--blue);
    width: 50%;
    height: 80%;
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    clip-path: polygon(0% 0%, 0 30%, 3% 30%, 3% 3%, 97% 3%, 97% 97%, 0 97%, 0 100%, 100% 100%, 100% 0);

    @media (max-width: 768px){
        height: 75%;
        bottom: 3.5%;
        clip-path: polygon(0% 0%, 0 20%, 4% 20%, 4% 2.5%, 96% 2.5%, 96% 97.5%, 0 97.5%, 0 100%, 100% 100%, 100% 0);
    }
`

const Home = () => {
    return (
        <>
            <HomeAll>
                <HomeBackground></HomeBackground>

                <HomeContainer>
                    <HomeDivAll>
                        <HomeLogo><img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b440dfa1-5f27-48ad-a0a6-8de8dd71c700/public" alt="logo da nova metálica branca" /></HomeLogo>
                        <HomeTexts>
                            <h1>Conheça a <b>Nova Metálica</b>, referência em perfis para Steel Frame e Drywall</h1>
                            <p>Somos líderes na fabricação de perfis para Steel Frame e Drywall, oferecendo soluções construtivas de alta qualidade para todo tipo de obra.</p>
                            <Button03 
                            children="Conhecer a fábrica" 
                            onClick={() => {
                                const sobreSection = document.getElementById('Sobre')
                                if (sobreSection){
                                    sobreSection.scrollIntoView({ behavior: 'smooth'});
                                }
                            }}
                            />
                        </HomeTexts>
                        <HomeQuadrado></HomeQuadrado>
                    </HomeDivAll>
                </HomeContainer>
            </HomeAll>
        </>
    )
}

export default Home;