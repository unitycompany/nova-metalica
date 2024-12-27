import React from "react";
import styled from "styled-components";

const FiltroAll = styled.div`
    width: 100%;
    height: auto;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;

        & > h1 {
            font-size: 24px;
            font-weight: 400;
        }
    }

    & > div:nth-child(2){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2.5% 5%;
        background-color: var(--color--dark--blue);
        border-radius: 20px;
        gap: 20px;

        & > a {
            padding: 12px 20px;
            border-radius: 12px;
            background-color: var(--color--white);
            color: var(--color--dark--blue);
            font-weight: 400;
            font-size: 14px;
            transition: all .3s ease-in-out;

            &:hover{
                background-color: var(--color--blue);
                color: var(--color--white);
                transform: scale(.95);
            }
        }
    }
`

const Filtro = () => {
    return (
        <>
            <FiltroAll id="produtos">
                <div>
                    <h1>Filtre sua busca, vá direto para o que desejas</h1>
                </div>
                <div>
                    <a href="#">
                        Steel Frame
                    </a>
                    <a href="#">
                        Drywall
                    </a>
                    <a href="#">
                        Telhados Engenheirados
                    </a>
                    <a href="#">
                        Fachadas Engenheiradas
                    </a>
                    <a href="#">
                        Galpões Industriais
                    </a>
                </div>
            </FiltroAll>
        </>
    )
}

export default Filtro;