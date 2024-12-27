import React from "react";
import styled from "styled-components";
import Button05 from "../../../components/buttons/Button05";

const HomeAll = styled.section`
    width: 100%;
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1140px;
    transform: translateX(-50%);
    position: relative;
    left: 50%;
    top: 0;
    gap: 25px;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 0%;
        flex-direction: column-reverse;
        gap: 10px;
    }
`

const HomeTexts = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    padding-left: 5%;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        padding-left: 0;
        height: 50vh;
        padding: 0 5%;
    }

    & > img {
        width: 150px;

        @media (max-width: 768px){
            width: 100px;
        }
    }

    & > h1 {
        font-size: 40px;
        font-weight: 400;
        color: var(--color--black);

        @media (max-width: 768px){
            font-size: 28px;
            text-align: center;
        }

        & > b {
            font-weight: 400;
            background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent;         
        }
    }

    & > p {
        color: var(--color--black);
        opacity: .6;
        font-size: 16px;
        width: 85%;

        @media (max-width: 768px){
            width: 100%;
            text-align: center;
        }
    }
`

const HomeVideo = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fa5b4dbb-d095-4384-6e13-87b1a483f400/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 768px){
        height: 50vh;
        width: 100%;
    }

    & > div{
        width: 80%;
        height: 40%;
        border-radius: 12px;
        background-color: var(--color--blue);
        color: var(--color--white);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);

        @media (max-width: 768px){
            height: 50%;
        }

        @media (min-width:769px) and (max-width: 1240px){
            height: 50%;
        }
    }
`


const Home = () => {
    return (
        <>
            
            <HomeAll>
                <HomeTexts>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public" alt="logo da nova metalica" />
                    <h1>Seja um <b>parceiro</b> da Nova Metálica</h1>
                    <p>Dizer bem resumido o porque ele deve ser um parceiro da Nova Metálica, Dizer bem resumido o porque ele deve ser um parceiro da Nova Metálica.</p>
                    <Button05 
                    text="Virar um parceiro agora!"
                    />
                </HomeTexts>
                <HomeVideo>
                    <div>Video sobre a Nova Metálica</div>
                </HomeVideo>
            </HomeAll>

        </> 
    )
}

export default Home;