import React from "react";
import styled from "styled-components";

import Card01 from "../../layout/cards/CardPorque01";
import Card02 from "../../layout/cards/CardPorque02";

const PorqueAll = styled.section`
    height: 100vh;
    width: 100%;
    max-width: 1140px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
`

const PorqueTexts = styled.div`
    width: 100%;
    height: 10%;
    padding-left: 5%;

    & > h1{
        font-size: 40px;
        line-height: 100%;
        width: 50%;
        font-weight: 500;
        color: var(--color--gray);

        & > b{
            font-weight: 500;
            color: var(--color--dark--blue);
        }
    }
`

const PorqueCards = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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