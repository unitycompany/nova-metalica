import React from "react";

import Home from "./Home";
import Valores from "./Valores";
import Porque from "./Porque";
import Construcao from "./Construcao";
import Framecad from "./Framecad";
import Produtos from "./Produtos";
import Parceiros from "./Parceiras";
import Blog from "./Blog";
import Form from "./Form";
import styled from "styled-components";

const All = styled.div`
    overflow: hidden;
`

const PaginaInicial = () => {

    return (
        <>
            <All>
                <Home />
                    {/* <Valores /> */}
                        <Porque />
                            <Construcao />
                                <Framecad />
                                    <Produtos />
                                        <Parceiros />
                                            <Form />
                                                <Blog />
            </All>
        </>
    )
}

export default PaginaInicial;