import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 40px;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        gap: 20px;
        margin-top: -30px;
    }

    & > div:nth-child(2){
        width: 60%;
        height: 100%;
        border-radius: 20px 0px 0px 20px;
        padding-left: 5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--color--dark--blue);
        border-right: none;

        @media (max-width: 768px){
            width: 100%;
            padding: 30px;
            height: 200px;
            border-radius: 20px;
            border-right: 1px solid var(--color--dark--blue);
            position: relative;
        }
    }

    & > div:nth-child(1){
        width: 40%;
        height: 100%;
        border-radius: 0px 20px 20px 0px;
        position: relative;
        padding: 5%;
        background-color: var(--color--dark--blue);

        @media (max-width: 768px){
            width: 100%;
            height: 200px;
            border-radius: 20px;
            position: relative;
        }
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

    @media (max-width: 768px){
        width: 100%;
        gap: 20px;
        position: relative;
        align-items: center;
    }

    & > h1{
        font-size: 26px;
        color: var(--color--dark--blue);
        font-weight: 500;

        @media (max-width: 768px){
            text-align: center;
            font-size: 24px;
        }
    }

    & > p{
        font-size: 14px;
        opacity: .6;
        color: var(--color--black);

        
        @media (max-width: 768px){
            text-align: center;
        }
    }
`

const CardIcon = styled.div`
    position: relative;

    @media (max-width: 768px){
        position: absolute;
        z-index: -1;
        opacity: 0.1;
        width: 150px;
        left: 50%;
        transform: translateX(-50%);
    }

    & > img {
        width: 180px;

        @media (max-width: 768px){
            width: 100%;
        }
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

    @media (max-width: 768px){
        gap: 20px;
    }

    & > h1{
        font-size: 26px;
        color: var(--color--white);
        font-weight: 500;

        @media (max-width: 768px){
            font-size: 22px;
            text-align: center;
            width: 100%;
        }
    }

    & > p{
        font-size: 14px;
        opacity: .6;
        color: var(--color--white);

        @media (max-width: 768px){
            text-align: center;
            font-size: 14px;
            opacity: 0.8;
        }
    }
`

const CardIcon2 = styled.div`
    width: 30%;
    position: absolute;
    top: 50%;
    right: 25%;
    transform: translateY(-50%);

    @media (max-width: 768px){
        width: 120px;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        position: absolute;
    }

    & > img {
        width: 200px;
        filter: brightness(500%) invert(100%);

        @media (max-width: 768px){
            width: 100%;
        }
    }
`

const Card02 = () => {
    return (
        <>
            <Card>

                <div data-aos="fade-right" data-aos-delay="100">
                    <CardText2>
                        <h1>Tecnologia de Ponta</h1>
                        <p>Equipados com tecnologia FRAMECAD, garantimos precisão e eficiência em cada perfil de Steel Frame fabricado.</p>
                    </CardText2>
                    <CardIcon2>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/608dfa80-7aa9-4c16-8241-0ca1544bad00/public" alt="imagem de um cerebro no site da Nova Metálica" title="imagem de um cerebro no site da Nova Metálica" loading="lazy"/>
                    </CardIcon2>
                </div>

                <div data-aos="fade-left" data-aos-delay="100">
                    <CardText>
                        <h1>Parcerias Estratégicas</h1>
                        <p>Colaboramos com gigantes como CSN Siderúrgica, Arcellor Mital, Saint-Gobain e STO Brasil para oferecer soluções de Steel Frame de qualidade inigualável.</p>
                    </CardText>
                    <CardIcon>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7b2e17de-668a-47d2-212c-04548992f700/public" alt="imagem de mãos no site da Nova Metálica" title="imagem de mãos no site da Nova Metálica" loading="lazy"/>
                    </CardIcon>
                </div>
                
            </Card>
        </>
    )
}

export default Card02;