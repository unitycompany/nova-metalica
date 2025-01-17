import React from "react";
import styled from "styled-components";

import Home from "./Home";
import Black from "./Black";
import Carrossel from "./Carrossel";
import Faixa from "./Faixa";
import Produtos from "./Produtos";
import Sobre from "./Sobre";
import Perfis from "./Perfis";
import FAQ from "./FAQ";

const All = styled.div`
    overflow: hidden;
`

const PaginaInicial = () => {

    return (
        <>
            <All>
            <Home />
                <Black />
                    <Carrossel />  
                        <Faixa />
                            <Produtos />
                                <Faixa />
                                    <Sobre />
                                        <Faixa />
                                            <Perfis />
                                                <FAQ />
            </All>
        </>
    )
}

export default PaginaInicial;