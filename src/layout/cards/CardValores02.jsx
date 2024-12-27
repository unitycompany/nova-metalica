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

    & > div:nth-child(1){
        width: 40%;
        height: 100%;
        background-color: #fff;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        & > img{
            width: 60%;
            height: 100%;
            object-fit: contain;
        }
    }

    & > div:nth-child(2){
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;

        & > h2{
            color: var(--color--white);
            font-weight: 500;
            font-size: 20px;
        }

        & > p{
            font-size: 12px;
            color: var(--color--white);
            opacity: .6;
            width: 90%;
        }
    }
`

const HomeCard2 = ({image, descricaoImage, title, descricao}) => {
    return (
        <>

            <Card>
                <div>
                    <img src={image} alt={descricaoImage} />
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