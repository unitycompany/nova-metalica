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
import Galpao from "./Galpao";

const All = styled.div`
    overflow: hidden;
`

const PaginaDrywall = () => {

    return (
        <>
            <All>
            <Home />
                <Black />
                    <Carrossel />  
                        <Faixa />
                            <Produtos />
                                <Faixa />
                                    <Galpao />
                                        <Faixa />
                                            <Sobre />
                                                <Faixa />
                                                    <Perfis />
                                                        <FAQ />
            </All>
        </>
    )
}

export default PaginaDrywall;