import React from "react";
import styled from "styled-components";
import Button02 from "../../components/buttons/Button02";

const HomeAll = styled.section`
    width: 100%;
    height: auto;
    max-width: 1280px;
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media (min-width: 768px) and (max-width: 1140px){
        align-items: flex-end;
    }

    @media (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
        height: auto;
        padding: 15% 5% 10% 5%;
    }
`

const HomeText = styled.div`
    width: 50%;
    height: 100%;
    padding-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;

    @media (min-width: 768px) and (max-width: 1140px){
        gap: 30px;
        padding-bottom: 5%;
    }

    @media (max-width: 768px){
        width: 100%;
        gap: 20px;
        padding-top: 15%;
        padding-left: 0;
    }

    & > span{
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        gap: 4px;
        font-size: 14px;
        color: var(--color--blue);
        opacity: .6;
        font-style: italic;

        & > hr {
            width: 50px;
            bottom: 1px;
            position: relative;
        }
    }

    & > h1{
        font-size: 40px;
        font-weight: 600;
        line-height: 110%;
        
        @media (min-width: 768px) and (max-width: 1140px){
            font-size: 36px;
        }

        @media (max-width: 768px){
            font-size: 36px;
            line-height: 100%;
        }

        & > b{
            font-weight: 700;
            color: var(--color--blue);
        }
    }

    & > p{
        font-size: 16px;
        font-weight: 400;
        color: var(--color--black);
        opacity: .7;
        line-height: 110%;
        width: 90%;

        @media (min-width: 768px) and (max-width: 1140px){
            font-size: 14px;
        }

        & > b{
            font-weight: 600;
        }
    }
`

const HomeImage = styled.div`
    width: 50%;
    height: 100vh;
    position: relative;

    @media (max-width: 768px){
        width: 80%;
        opacity: 0.05;
        top: 0;
        z-index: -1;
        right: 0;
        height: 350px;
        position: absolute;
        clip-path: polygon(25% 0%, 100% 0, 100% 100%, 75% 100%, 25% 100%, 0% 50%);
    }

    & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 0 0 0 250px;

        @media (max-width: 768px){
            border-radius: 0 0 0 50px;
            box-shadow: none;
        }
    }
`

const Home = () => {
    return(
        <>
            <HomeAll>
                <HomeText>
                    <span><hr />A solução para a sua empresa</span>

                    <h1>Sua Parceira <b>N°1</b> em Soluções para Steel Frame</h1>

                    <p>Na Nova Metálica, somos <b>líderes em oferecer os melhores perfis de Steel Frame do mercado</b> para a construção de estruturas metálicas. Nossa dedicação à qualidade, durabilidade excepcional e inovação constante nos diferencia.</p>

                    <p>Escolha a <b>Nova Metálica para elevar seus projetos</b> a um novo patamar de excelência!</p>

                    <Button02 
                    children="Solicitar orçamento!"
                    onClick={() => {
                        const formSection = document.getElementById('Form');
                        if (formSection) {
                            formSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    />
                </HomeText>

                <HomeImage>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8ac1e6f6-d87e-438e-9c4d-ab5124e8c300/public" alt="imagem de uma casa de steel frame pela nova metalica" loading="lazy"></img>
                </HomeImage>
            </HomeAll>
        </>
    )
}

export default Home;