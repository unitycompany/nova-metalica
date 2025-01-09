import React from "react";
import styled from "styled-components";
import Button05 from "../../components/buttons/Button05";

const PraquemAll = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    z-index: 1;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 10% 5%;
        height: auto;
    }
`

const PraquemLeft = styled.div`
    width: 50%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 30px;
    background-color: var(--color--white);
    border-radius: 0 30px 30px 0;
    position: relative;
    z-index: 2;
    padding-left: 5%;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        gap: 30px;
        padding-left: 0%;
    }

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        top: 10px;
        left: 10px;
        background-color: #00000005;
        position: absolute;
        border-radius: 0 30px 30px 0;
        z-index: -1;
    }

    & > h1{
        font-size: 32px;
        width: 80%;
        font-weight: 300;
        color: var(--color--black);

        @media (max-width: 768px){
            text-align: center;
            font-size: 26px;
            margin-left: 5vh;
        }

        & > b{
            font-weight: 400;
            background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent;  
        }
    }

    & > p{
        font-size: 16px;
        width: 80%;
        line-height: 160%;
        color: var(--color--black);
        font-weight: 300;
        
        @media (max-width: 768px){
            font-size: 14px;
            text-align: center;
            width: 90%;
            margin-left: 5vh;
        }
    }

    & >  button {
        @media (max-width: 768px){
            margin-left: 5vh;
        }
    }

    & > img {
        position: absolute;
        z-index: 2;
        border: 1px solid red;
    }
`

const PraquemRight = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-right: 5%;

    @media (max-width: 768px){
        width: 100%;
    }
`

const PraquemCard = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px;
    padding: 10px;
    gap: 15px;
    background-color: #00000010;

    @media (max-width: 768px){
        width: 100%;
        flex-direction: column;
        padding: 20px;
    }
    
    & > div{
        width: 30%;
        height: 100%;
        border-radius: 25px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color--white);

        @media (max-width: 768px){
            width: 100%;
            background-color: transparent;
            justify-content: flex-start;
        }

        & > img{
            width: 80%;

            @media (max-width: 768px){
                width: 20%;
                margin-left: 10px;
                border-radius: 10px;
            }
        }
    }

    & > div:nth-child(2){
        width: 70%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        padding: 10px;
        background-color: transparent;

        @media (max-width: 768px){
            width: 100%;
        }

        & > h2{
            font-size: 20px;
            font-weight: 500;
            background: linear-gradient(45deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent;  
        }

        & > p{
            font-size: 12px;
            line-height: 120%;
            font-weight: 300;
            color: var(--color--dark--blue);
        }
    }
`

const Praquem = () => {
    return (
        <>
            <PraquemAll>
                <PraquemLeft>
                    <h1>Para quem é a <b>Nova Metálica?</b></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, ad. Eaque asperiores in est temporibus, dicta facere earum perferendis assumenda alias. Iure commodi natus aperiam animi! Aut quod corrupti quae.</p>
                    <Button05 
                    text="Solicitar meu orçamento agora!"
                    />
                </PraquemLeft>
                <PraquemRight>
                    <PraquemCard>
                        <div>
                            <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/91a5a914-898d-44d6-3910-5410c95e6500/public" alt="icon" />
                        </div>
                            <div>
                                <h2>Montadores</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus eligendi nulla, tempora cum non pariatur, possimus fugit minima iure ex, veniam dolore! Tempore quos fugiat nihil dolorum repellendus voluptatum.</p>
                            </div>
                    </PraquemCard>
                    <PraquemCard>
                        <div>
                            <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/49f6844f-b4b0-4699-695b-7439f7354400/public" alt="icon" />
                        </div>
                            <div>
                                <h2>Empreiteiros</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus eligendi nulla, tempora cum non pariatur, possimus fugit minima iure ex, veniam dolore! Tempore quos fugiat nihil dolorum repellendus voluptatum.</p>
                            </div>
                    </PraquemCard>
                    <PraquemCard>
                        <div>
                            <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09527f06-a4af-4a15-1d71-f0acc4b7f100/public" alt="icon" />
                        </div>
                            <div>
                                <h2>Empresas de Engenharia</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus eligendi nulla, tempora cum non pariatur, possimus fugit minima iure ex, veniam dolore! Tempore quos fugiat nihil dolorum repellendus voluptatum.</p>
                            </div>
                    </PraquemCard>
                </PraquemRight>
            </PraquemAll>
        </> 
    )
}

export default Praquem;