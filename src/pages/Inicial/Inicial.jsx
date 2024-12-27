import React from "react";
import styled from "styled-components";

import Home from "./Home";
import Valores from "./Valores";
import Porque from "./Porque";
import Construcao from "./Construcao";
import Framecad from "./Framecad";
import Produtos from "./Produtos";
import Parceiros from "./Parceiras";
import Blog from "./Blog";
import Form from "./Form";

const PaginaInicial = () => {
    return (
        <>
            <Home />
                <Valores />
                    <Porque />
                        <Construcao />
                            <Framecad />
                                <Produtos />
                                    <Parceiros />
                                        <Form />
                                            <Blog />
        </>
    )
}

export default PaginaInicial;