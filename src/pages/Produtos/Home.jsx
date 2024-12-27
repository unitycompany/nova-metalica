import React from "react";
import styled, {keyframes} from "styled-components";

import { BsArrowDown } from "react-icons/bs";

const CickAnimation = keyframes`
    0% {
        transform: translateY(-5px) scale(1);
    }

    50% {
        transform: translateY(50px) scale(1.05);
    }
`

const HomeAll = styled.section`
    width: 100%;
    height: 100vh;
    width: 1140px;
    left: 50%;
    top: 0;
    padding: 0 0 5% 0;
    transform: translateX(-50%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    gap: 150px;

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
        text-align: center;

        & > h1 {
            font-size: 40px;
            font-weight: 300;
        }

        & > p {
            width: 70%;
            font-weight: 300;
            font-size: 20px;
        }
    }

    & > div:nth-child(2){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;
        animation: ${CickAnimation} 5s linear infinite;

        & > a {

            color: var(--color--black);
            transition: all .2s ease;

            &:hover{
            transform: scale(1.1);
            color: var(--color--blue);
            }
        }
        
    }
`

const Home = () => {
    return (
        <>
            <HomeAll>
                <div>
                    <h1>Produtos direto da fábrica</h1>
                    <p>Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida.</p>
                </div>
                <div>
                    <a href="#produtos">
                        <BsArrowDown size={40}/>
                    </a>
                </div>
            </HomeAll>
        </>
    )
}

export default Home;