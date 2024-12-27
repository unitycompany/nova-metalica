import React from "react";
import styled from "styled-components";
import Button02 from "../../components/buttons/Button02";

const HomeAll = styled.section`
    width: 100%;
    height: 95vh;
    max-width: 1140px;
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 15%;
    padding-bottom: 5%;
    display: flex;
    gap: 50px;
`

const HomeText = styled.div`
    width: 50%;
    height: 100%;
    padding-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;

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

        & > b{
            font-weight: 700;
            color: var(--color--blue);
        }
    }

    & > p{
        font-size: 14px;
        font-weight: 400;
        color: var(--color--black);
        opacity: .7;
        line-height: 110%;
        width: 90%;

        & > b{
            font-weight: 600;
        }
    }
`

const HomeImage = styled.div`
    width: 50%;
    height: 100%;
    position: relative;

    & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 18px 0 0 18px;
        filter: contrast(110%) brightness(110%);
        box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.2);
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

                    <Button02 href="#Form">Solicitar orçamento</Button02>
                </HomeText>

                <HomeImage>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4e5edc4f-f411-4f7a-5f47-9fa8ab3e6d00/public" alt="imagem de uma casa de steel frame pela nova metalica" loading="lazy"></img>
                </HomeImage>
            </HomeAll>
        </>
    )
}

export default Home;