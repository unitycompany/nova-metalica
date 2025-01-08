import React from "react";
import styled from "styled-components";

import Home from "./Home";
import Sobre from "./Sobre";
import Informacoes from "./Informacoes";
import Form from "../Inicial/Form";

const PaginaSobre = () => {
    return (
        <>
            <Home />
                <Sobre />
                    <Informacoes />
                        <Form /> 
        </>
    )
}

export default PaginaSobre;