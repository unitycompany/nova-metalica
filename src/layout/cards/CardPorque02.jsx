import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 40px;

    & > div:nth-child(2){
        width: 60%;
        height: 100%;
        border-radius: 20px 0px 0px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5%;
        border: 1px solid var(--color--dark--blue);
        border-right: none;
    }

    & > div:nth-child(1){
        width: 40%;
        height: 100%;
        border-radius: 0px 20px 20px 0px;
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

const Card02 = () => {
    return (
        <>
            <Card>

                <div>
                    <CardText2>
                        <h1>Tecnologia de Ponta</h1>
                        <p>Equipados com tecnologia CNC Framecad e máquinas de fabricação de telhas termoacústicas, garantimos precisão e inovação em cada perfil de Steel Frame.</p>
                    </CardText2>
                    <CardIcon2>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/608dfa80-7aa9-4c16-8241-0ca1544bad00/public" alt="foto do mapa do brasil" />
                    </CardIcon2>
                </div>

                <div>
                    <CardText>
                        <h1>Soluções Eficientes</h1>
                        <p>Colaboramos com gigantes como CSN Siderúrgica, Arcellor Mital, Saint-Gobain e STO Brasil para oferecer soluções de Steel Frame de qualidade inigualável.</p>
                    </CardText>
                    <CardIcon>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7b2e17de-668a-47d2-212c-04548992f700/public" alt="foto do mapa do brasil" />
                    </CardIcon>
                </div>
                
            </Card>
        </>
    )
}

export default Card02;