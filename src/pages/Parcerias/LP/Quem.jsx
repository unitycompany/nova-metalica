import React from "react";
import styled from "styled-components";
import { BsArrowDown } from "react-icons/bs";
import Button05 from "../../../components/buttons/Button05";

const QuemAll = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1140px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    flex-direction: column;
    padding: 0 5%;
    gap: 20px;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 5%;
    }
`

const QuemIcon = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 10%;
`

const QuemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    height: 70%;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const QuemLeft = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px){
        width: 100%;
    }

    & > div{
        height: 30%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        @media (max-width: 768px){
            align-items: center;
            text-align: center;
            margin-top: 25px;
        }

        & > h1{
            font-size: 36px;
            font-weight: 400;
            width: 75%;

            @media (max-width: 768px){
                width: 100%;
                font-size: 26px;
            }

            & > b {
                font-weight: 500;
                background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
                -webkit-background-clip: text;  
                background-clip: text; 
                color: transparent;
            }
        }

        & > p {
            font-size: 16px;
            color: var(--color--black);
            opacity: .6;
            font-weight: 400;
            width: 85%;

            @media (max-width: 768px){
                width: 100%;
            }
        }
    }

    & > div:nth-child(2){
        height: 70%;
        width: 100%;
        flex-direction: row;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        @media (max-width: 768px){
            height: 40vh;
        }

        & > div {
            width: 30%;
            border-radius: 15px;
            color: var(--color--white);

            @media (max-width: 768px){
                border-radius: 30px;
            }
        }

        & > div:nth-child(1){
            background-color: var(--color--dark--blue);
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`

const QuemRight = styled.div`
    width: 45%;
    height: 100%;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
    
    & > div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 20px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4e5edc4f-f411-4f7a-5f47-9fa8ab3e6d00/public');
        background-position: center;
        background-size: cover;
        border-radius: 30px;
    }
`

const Quem = () => {
    return (
        <>
            <QuemAll>
                <QuemIcon>
                    <BsArrowDown size={35} color="var(--color--gray)"/>
                </QuemIcon>
                <QuemContainer>
                    <QuemLeft>
                        <div>
                            <h1>Quem <b>é a Nova Metálica?</b></h1>
                            <p>O nosso objetivo em oferecer o programa de parceiros é garantir que pequenos e médios empreiteiros tenham a oportunidade e tenham um lucro maior...</p>
                        </div>
                        <div>
                            <div>Vídeo da nova metálica produzindo</div>
                        </div>
                    </QuemLeft>

                    <QuemRight>
                        <div>
                            <Button05 
                            text="Virar um parceiro agora!"
                            />
                        </div>
                    </QuemRight>
                </QuemContainer>
            </QuemAll>
        </> 
    )
}

export default Quem;