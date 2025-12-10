import React from "react";

import Home from "./Home";
import Blogs from "./Blogs";
import StructuredData from "../../components/seo/StructuredData";

const PaginaBlog = () => {
    const domain = "https://novametalica.com.br";
    const url = `${domain}/blog`;
    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Blog - Nova Metálica",
            "url": url
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Início", "item": domain },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": url }
            ]
        }
    ];

    return (
        <>
            <StructuredData data={schema} />
            <Home />
                <Blogs />
        </>
    )
}

export default PaginaBlog;