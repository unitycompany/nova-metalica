import React from "react";
import styled from "styled-components";
import ButtonLP from "../../components/buttons/Button07";

const Card = styled.div`
    height: 175px;
    width: 300px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    padding: 20px;
    background: #e6e6e6;
    transition: all .1s ease-in-out;

    &:hover {
        background: #353535;
        transform: scale(1.02);
    }

    &:hover > h1 {
        color: var(--color--white);
    }

    & > h1 {
        font-size: 22px;
        font-weight: 400;
        color: var(--color--black);
    }
`

const CardLP = ({ title }) => {

    return (
        <>
            <Card>
                <h1>
                    {title}
                </h1>
                <ButtonLP />
            </Card>
        </>
    )
}

export default CardLP;