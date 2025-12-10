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
import StructuredData from "../../components/seo/StructuredData";

const All = styled.div`
    overflow: hidden;
`

const PaginaInicial = () => {

    const domain = "https://novametalica.com.br";
    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nova Metálica",
            "url": domain
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": domain,
            "name": "Nova Metálica"
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
                }
            ]
        }
    ];

    return (
        <>
            <StructuredData data={schema} />
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