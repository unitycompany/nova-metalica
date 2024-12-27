import React from "react";
import styled from "styled-components";
import CardProdutos from "../../layout/cards/CardProdutos";

const CardAll = styled.section `
    width: 100%;
    padding: 0 5%;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    position: relative;
    height: auto;
    border: 1px solid red;
    
`

const Cards = () => {
    return (
        <>
            <CardProdutos 
            image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public"
            title="Steel Frame"
            description="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida."
            background="var(--color--dark--blue)"
            color="var(--color--white)"
            />

            <CardProdutos 
            image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public"
            title="Drywall"
            description="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida."
            background="#00000010"
            color="var(--color--black)"
            reverse={true}
            padding="5%"
            />

            <CardProdutos 
            image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public"
            title="Telhados Engenheirados"
            description="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida."
            background="var(--color--blue)"
            color="var(--color--white)"
            />

            <CardProdutos 
            image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public"
            title="Fachadas Engenheiradas"
            description="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida."
            background="var(--color--black)"
            color="var(--color--white)"
            reverse={true}
            padding="5%"
            />

            <CardProdutos 
            image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public"
            title="Galpões Industriais"
            description="Descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida descrição bem objetiva sobre os produtos, falando sobre os principais que são os perfis, mas de forma rápida."
            background="#00000005"
            color="var(--color--black)"
            />
        </>
    )
}

export default Cards;