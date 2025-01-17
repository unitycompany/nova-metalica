import React from "react";

import Home from "./Home";
import Black from "./Black";
import Carrossel from "./Carrossel";
import Faixa from "./Faixa";
import Produtos from "./Produtos";
import Sobre from "./Sobre";
import Perfis from "./Perfis";
import FAQ from "./FAQ";

const PaginaInicial = () => {

    return (
        <>
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
        </>
    )
}

export default PaginaInicial;