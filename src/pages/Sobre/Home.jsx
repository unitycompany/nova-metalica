import React from "react";
import styled from "styled-components";

import { BsArrowDown } from "react-icons/bs";
import Button04 from "../../components/buttons/Button04";

const HomeAll = styled.section`
    width: 100%;
    height: 100vh;
    max-width: 1140px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    padding: 10% 5% 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

    &::before{
        content: '';
        max-width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/940fd126-d2eb-406f-b4ab-5fa32931ce00/public');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: .05;
        z-index: -1;
    }
`

const HomeText = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    & > img {
        width: 150px;
    }

    & > h1{
        font-size: 40px;
        width: 70%;
        text-align: center;
        font-weight: 500;

        & > b{
            font-weight: 500;
            color: var(--color--blue);
        }
    }
`

const HomeIcon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    opacity: .6;
`

const Home = () => {
    return (
        <>
            <HomeAll>
                <HomeText>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6bd0b20-7bcc-4575-98dd-39f394dbe100/public" alt="logo da nova metalica" loading="lazy"/>
                    <h1>Conheça agora a fábrica que vende <b>os melhores perfis</b></h1>
                    <Button04>Solciitar orçamento</Button04>
                </HomeText>
                <HomeIcon>
                    <BsArrowDown size={30} />
                </HomeIcon>
            </HomeAll>
        </>
    )
}

export default Home;