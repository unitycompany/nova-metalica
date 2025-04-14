import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 32%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 5px;
    border-radius: 20px;
    background-color: var(--color--blue);
    gap: 10px;

    @media (max-width: 768px){
        width: 100%;
        padding: 10px;
    }

    & > div:nth-child(1){
        width: 40%;
        height: 100%;
        background-color: #fff;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){
            width: 60%;
            height: 140px;
            padding: 10px;
        }

        & > img{
            width: 60%;
            height: 100%;
            object-fit: contain;

            @media (max-width: 768px){
                width: 80%;
            }
        }
    }

    & > div:nth-child(2){
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;

        @media (max-width: 768px){
            width: 100%;
            padding: 5px;
        }
        

        & > h2{
            color: var(--color--white);
            font-weight: 500;
            font-size: 20px;

            @media (max-width: 768px){
                text-align: left;
            }
        }

        & > p{
            font-size: 14px;
            color: var(--color--white);
            opacity: .6;
            width: 90%;

            @media (max-width: 768px){
                width: 100%;
                font-size: 12px;
                text-align: left;
                opacity: 0.8;
                line-height: 110%;
            }
        }
    }
`

const HomeCard2 = ({image, descricaoImage, title, descricao}) => {
    return (
        <>

            <Card data-aos="fade-up" data-aos-delay="0">
                <div>
                    <img src={image} alt={descricaoImage} loading="lazy" title={descricaoImage}/>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{descricao}</p>
                </div>
            </Card>

        </>
    )
}

export default HomeCard2;