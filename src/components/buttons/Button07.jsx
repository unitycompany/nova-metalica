import React from "react";
import styled from "styled-components";

import { BsArrowUpRight } from "react-icons/bs";

const Button = styled.button`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    gap: 20px;
    cursor: pointer;
    transition: all .2s ease;

    &:hover{
        color: var(--color--blue);
        gap: 5px;
    }

    &:hover > div:nth-child(2) svg{
        transform: rotate(45deg);
    }

    & > div:nth-child(1){
        width: 80%;
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: var(--color--white);
    }

    & > div:nth-child(2){
        width: 20%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color--white);
        
        & > svg {
            transition: all .2s ease;
        }
    }
`

const ButtonLP = () => {

    return (
        <>
           <Button>
                <div>
                    Solicitar orçamento
                </div>
                <div>
                    < BsArrowUpRight />
                </div>
            </Button> 
        </>
    )
}

export default ButtonLP;