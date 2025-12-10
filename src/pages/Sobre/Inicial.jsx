import React from "react";
import styled from "styled-components";
import StructuredData from "../../components/seo/StructuredData";

import Home from "./Home";
import Sobre from "./Sobre";
import Informacoes from "./Informacoes";
import Form from "../Inicial/Form";
import Valores from "./Informacoes";

const PaginaSobre = () => {
    const domain = "https://novametalica.com.br";
    const url = `${domain}/sobre`;
    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sobre - Nova Metálica",
            "url": url
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Início",
                    "item": domain
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Sobre",
                    "item": url
                }
            ]
        }
    ];

    return (
        <>
            <StructuredData data={schema} />
            <Home />
                <Sobre />
                    <Valores />
                        <Form /> 
        </>
    )
}

export default PaginaSobre;