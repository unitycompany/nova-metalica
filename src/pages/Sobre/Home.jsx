import React from "react";
import styled from "styled-components";
import Button05 from "../../components/buttons/Button05";

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
    padding: 10% 5% 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    background: #353535;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1081687f-ba98-453b-c651-444af1325800/public');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
    }
`

const HomeContainer = styled.div`
    padding-top: 12.5%;
    padding-bottom: 10%;
    height: auto;
    position: relative;
    z-index: 3;
    max-width: 1280px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1280px){
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

    @media (min-width: 768px) and (max-width: 1280px){
        
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
    right: 0;
    bottom: 0;
    clip-path: polygon(0% 0%, 0 30%, 3% 30%, 3% 3%, 97% 3%, 97% 97%, 0 97%, 0 100%, 100% 100%, 100% 0);
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
                            <h1>Conheça a <b>Nova Metálica</b>, a melhor Fábrica de Steel Frame e Drywall</h1>
                            <p>Colocar uma descrição curta falando sobre os materiais que vendemos, bem curta e objetiva</p>
                            <Button05 text="Conhecer a fábrica" />
                        </HomeTexts>
                        <HomeQuadrado></HomeQuadrado>
                    </HomeDivAll>
                </HomeContainer>
            </HomeAll>
        </>
    )
}

export default Home;