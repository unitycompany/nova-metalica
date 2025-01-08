import React from "react";
import styled from "styled-components";
import CardProdutos from "../../layout/cards/CardProdutos";

const CardAll = styled.section `
    width: 100%;
    padding: 0% 0% 2.5% 0%;
    max-width: 1280px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: auto;
    gap: 30px;
    
`

const Cards = () => {
    return (
        <>
            <CardAll>
                <CardProdutos 
                titleCardTop="Perfil 100% Normatizados"
                title="Steel Frame"
                description="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida."
                subDescription="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis."
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7991b741-023c-461d-7e61-509b7e768000/public"
                padding="padding-left"
                />

                <CardProdutos 
                titleCardTop="Qualidade 100% Garantida"
                title="Drywall"
                description="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida."
                subDescription="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis."
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6c5c94de-a5ad-424e-17a6-3e5ea91cbc00/public"
                padding="padding-right"
                position="right"
                direction="row-reverse"
                clipPath="polygon(0 0, 2.5% 0, 2.5% 100%, 0 100%);"
                />

                <CardProdutos 
                titleCardTop="Sistema 100% Aprovado"
                title="Telhados Industriais"
                description="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida."
                subDescription="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis."
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5665bd67-d11b-4522-2f91-54ce0558fb00/public"
                padding="padding-left"
                />

                <CardProdutos 
                titleCardTop="Perfil 100% Normatizados"
                title="Drywall"
                description="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida."
                subDescription="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis."
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d086625e-8598-49b1-653b-173f4335b300/public"
                padding="padding-right"
                position="right"
                direction="row-reverse"
                clipPath="polygon(0 0, 2.5% 0, 2.5% 100%, 0 100%);"
                />

                <CardProdutos 
                titleCardTop="Sistema 100% Aprovado"
                title="Fachadas Engenheiradas"
                description="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida."
                subDescription="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis."
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e760f765-c8d2-4fb5-f2ce-b893382a4800/public"
                padding="padding-left"
                />
            </CardAll>
        </>
    )
}

export default Cards;