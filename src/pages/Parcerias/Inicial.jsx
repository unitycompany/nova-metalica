import React from "react";
import styled from "styled-components";

import Home from "./Home";
import Aviso from "./Aviso";
import Praquem from "./Praquem";
import Beneficios from "./Beneficio";
import Quem from "./Quem";
import Depoimentos from "./Depoimentos";
import Form from "./Form";
import StructuredData from "../../components/seo/StructuredData";

const LPPaginaParceria = () => {
    const domain = "https://novametalica.com.br";
    const url = `${domain}/parcerias`;
    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Parcerias - Nova Metálica",
            "url": url
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Início", "item": domain },
                { "@type": "ListItem", "position": 2, "name": "Parcerias", "item": url }
            ]
        }
    ];

    return (
        <>
            <StructuredData data={schema} />
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