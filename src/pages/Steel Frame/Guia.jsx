import React from "react";
import styled from "styled-components";

const Content = styled.section`
    width: 100%;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 5% 5% 2.5% 5%;
    flex-direction: column;
    gap: 50px;

`

export default function Guia() {
    return (
        <>
            <Content>
                <div>
                    <h1>Guia de Medidas</h1>
                    <p>Perfil de Referência: F530 para Drywall </p>
                </div>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </Content>
        </>
    )
}