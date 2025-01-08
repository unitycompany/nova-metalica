import React from "react";
import styled from "styled-components";

import Card01 from "../../layout/cards/CardPorque01";
import Card02 from "../../layout/cards/CardPorque02";

const PorqueAll = styled.section`
    height: auto;
    width: 100%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    margin-top: 45px;
    padding: 0 5%;

    @media (max-width: 768px){
        margin-top: 55px;
    }
`

const PorqueTexts = styled.div`
    width: 100%;
    padding: 10% 0 5% 0;

    @media (max-width: 768px){
        padding: 15% 0 2.5% 0;
    }

    & > h1{
        font-size: 40px;
        line-height: 100%;
        width: 50%;
        font-weight: 500;
        color: var(--color--gray);

        @media (max-width: 768px){
            font-size: 32px;
            width: 100%;
            text-align: center;
        }

        & > b{
            font-weight: 500;
            color: var(--color--dark--blue);
        }
    }
`

const PorqueCards = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px){
        height: auto;
    }
`

const Porque = () => {
    return (
        <>
            <PorqueAll>
                <PorqueTexts>
                    <h1>Porque escolher a <b>Nova Metálica?</b></h1>
                </PorqueTexts>

                <PorqueCards>
                    <Card01 />
                </PorqueCards>

                <PorqueCards>
                    <Card02 />
                </PorqueCards>
            </PorqueAll>
        </>
    )
}

export default Porque;