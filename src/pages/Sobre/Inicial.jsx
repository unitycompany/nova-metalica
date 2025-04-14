import React from "react";
import styled from "styled-components";

import Home from "./Home";
import Sobre from "./Sobre";
import Informacoes from "./Informacoes";
import Form from "../Inicial/Form";
import Valores from "./Informacoes";

const PaginaSobre = () => {
    return (
        <>
            <Home />
                <Sobre />
                    <Valores />
                        <Form /> 
        </>
    )
}

export default PaginaSobre;