import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 40px;

    & > div:nth-child(1){
        width: 60%;
        height: 100%;
        border-radius: 0 20px 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5%;
        border: 1px solid var(--color--dark--blue);
        border-left: none;
    }

    & > div:nth-child(2){
        width: 40%;
        height: 100%;
        border-radius: 20px 0 0 20px;
        position: relative;
        padding: 5%;
        background-color: var(--color--dark--blue);
    }
`

const CardText = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    & > h1{
        font-size: 26px;
        color: var(--color--dark--blue);
        font-weight: 500;
    }

    & > p{
        font-size: 14px;
        opacity: .6;
        color: var(--color--black);
    }
`

const CardIcon = styled.div`
    width: 30%;
    position: relative;

    & > img {
        width: 150px;
    }
`

const CardText2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    & > h1{
        font-size: 26px;
        color: var(--color--white);
        font-weight: 500;
    }

    & > p{
        font-size: 14px;
        opacity: .6;
        color: var(--color--white);
    }
`

const CardIcon2 = styled.div`
    width: 30%;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);

    & > img {
        width: 200px;
        filter: brightness(200%);
    }
`

const Card01 = () => {
    return (
        <>
            <Card>
                <div>

                    <CardText>
                        <h1>Produtos Nacionais</h1>
                        <p>Asseguramos que todos os nossos perfis de Steel Frame são 100% normatizados e fabricados exclusivamente com materiais de siderúrgicas brasileiras, sem o uso de aço importado.</p>
                    </CardText>
                    <CardIcon>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c2a46a4-fc03-4da7-87be-3bbba03b5700/public" alt="foto do mapa do brasil" />
                    </CardIcon>

                </div>
                <div>
                        <CardText2>
                            <h1>Soluções Eficientes</h1>
                            <p>Oferecemos a menor taxa de aço do mercado, resultando em estruturas de Steel Frame mais leves e econômicas. </p>
                        </CardText2>
                        <CardIcon2>
                            <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c050183b-0686-4310-6235-ec02c4323400/public" alt="foto do mapa do brasil" />
                        </CardIcon2>
                </div>
            </Card>
        </>
    )
}

export default Card01;