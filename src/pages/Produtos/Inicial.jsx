import React from "react";
import styled from "styled-components";

import Home from "./Home";
import Filtro from "./Filtro";
import Cards from "./Cards";

const PaginaProdutos = () => {
    return (
        <>
            <Home />
                <Filtro />
                    <Cards />
        </>
    )
}

export default PaginaProdutos;