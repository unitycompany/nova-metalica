import React from "react";
import styled from "styled-components";

import Home from "./Home";
import Aviso from "./Aviso";
import Praquem from "./Praquem";
import Beneficios from "./Beneficio";
import Quem from "./Quem";
import Depoimentos from "./Depoimentos";
import Form from "./Form";

const LPPaginaParceria = () => {
    return (
        <>
            <Home />
                <Aviso />
                    <Praquem />
                        <Beneficios />
                            <Quem />
                                <Depoimentos />
                                    <Form />
        </> 
    )
}

export default LPPaginaParceria;