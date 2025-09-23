import React from "react";
import styled from "styled-components";
import CarouselProdutos from "./CarouselProdutos";

const Content = styled.section`
    width: 100%;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 10% 5% 2.5% 5%;
    flex-direction: column;
    gap: 50px;

    & h1 {
        font-size: 36px;
        width: 50%;
        text-align: center;
        font-weight: 500;
        color: var(--color--black);
    }
`

export default function Home () {
    const produtos = [
        {
            imagem: " ",
            nome: "Guia LSF",
            medidas: ["0,80x90x38mm", "0,95x90x38mm", "0,80x140x38mm", "0,95x140x38mm"]
        },
        {
            imagem: " ",
            nome: "Montante LSF",
            medidas: ["0,80x90x40mm", "0,95x90x40mm", "0,80x140x40mm", "0,95x140x40mm"]
        },
        {
            imagem: " ",
            nome: "Cartola",
            medidas: ["0,80x65x30mm", "0,95x65x30mm"]
        },
        {
            imagem: " ",
            nome: "Treliça Pronta",
            medidas: ["0,80x90x300mm", "0,95x90x300mm", "0,80x90x400mm", "0,95x90x400mm"]
        },
    ];
    return (
        <>
            <Content>
                <h1>Conheça nossos produtos de Steel Frame</h1>
                <CarouselProdutos produtos={produtos} />
            </Content>
        </>
    )
}