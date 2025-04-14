import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
    position: relative;
    z-index: 1;
    background-color: var(--color--white);
    padding: 5px 5px 20px 5px;
    border-radius: 12px;

    @media (max-width: 768px){
        width: 100%;
        height: auto;
        gap: 20px;
        border-radius: 20px;
    }

    & > img{
        width: 100%;
        height: 65%;
        object-fit: cover;
        border-radius: 12px;

        @media (max-width: 768px){
            border-radius: 15px;
        }
    }

    & > h2{
        color: var(--color--blue);
        font-size: 18px;
        padding: 0px 10px;
        font-weight: 500;
        line-height: 100%;
    }

    & > p{
        font-size: 14px;
        color: var(--color--black);
        opacity: .6;
        padding: 0px 10px;
    }
`;

const HomeCard = ({ image, descricaoImage, title, descricao}) => {
    return (
        <Card data-aos="fade-in" data-aos-delay="0">
            <img src={image} alt={descricaoImage} data-aos="fade-up" title={descricaoImage} data-aos-delay="100" loading="lazy"/>
            <h2 data-aos="fade-up" data-aos-delay="200">{title}</h2>
            <p data-aos="fade-up" data-aos-delay="300">{descricao}</p>
        </Card>
    )
}

export default HomeCard;