import React from "react";
import styled from "styled-components";

import { Navigate, useNavigate } from "react-router-dom";
import Button03 from "../../components/buttons/Button03";
import Button02 from "../../components/buttons/Button02";
import Button04 from "../../components/buttons/Button04";

const ParceirosAll = styled.section`
    width: 97.5%;
    height: auto;
    max-width: 1280px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    gap: 50px;
    background-color: #e9e9e9;
    border-radius: 30px;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
    padding: 10px;

    @media (max-width: 768px){
       flex-direction: column-reverse;
       padding: 5% 5% 10% 5%;
    }
`

const ParceirosTexts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    padding-left: 5%;
    margin-left: -10px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > h1{
        font-size: 32px;
        font-weight: 500;
        color: var(--color--black);

        @media (max-width: 768px){
            font-size: 28px;
        }

        & > b{
            color: var(--color--blue);
            font-weight: 500;
        }
    }

    & > p{
        font-size: 16px;
        font-weight: 400;
        opacity: .6;
        color: var(---color--black);

        @media (max-width: 768px){
            text-align: center;
        }
    }

    & > div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        gap: 20px;


        & > div{
            width: 50%;
            height: 10vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 2px;
            background-color: var(--color--dark--blue);
            padding: 15px;
            border-radius: 12px;

            @media (max-width: 768px){
                height: 120px;
                gap: 10px;
            }

            & > span{
                font-size: 30px;
                font-weight: 600;
                color: var(--color--blue);
            }

            & > p{
                font-size: 12px;
                opacity: .6;
                color: var(--color--white);
            }
        }
    }
`

const ParceirosImage = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;

    @media (max-width: 768px){
        width: 100%;
    }

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
    }
`

const Parceiros = () => {
    const navigate = useNavigate();

    return (
        <>
            <ParceirosAll>
                <ParceirosTexts>
                    <h1 data-aos="fade-left" data-aos-delay="100">Seja nosso <b>parceiro</b></h1>
                    <p data-aos="fade-left" data-aos-delay="200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sequi magni porro quibusdam a. Laudantium modi, maiores possimus accusantium enim exercitationem delectus ex voluptas molestias magni, facilis voluptatibus reiciendis a!</p>
                    <div>
                        <div data-aos="fade-up" data-aos-delay="100">
                            <span>100%</span>
                            <p>Todos os perfis normatizados</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="100">
                            <span>100%</span>
                            <p>Todos os perfis normatizados</p>
                        </div>
                    </div>
                    {/* <Button04 
                    children="Virar parceiro"
                    onClick={() => navigate ('/parcerias')}
                    /> */}
                </ParceirosTexts>
                <ParceirosImage data-aos="fade-right" data-aos-delay="100">
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b790bac9-6a8a-402f-734b-0ab292815b00/public" alt="foto de perfis de steel frame" />
                </ParceirosImage>
            </ParceirosAll>
        </>
    )
}

export default Parceiros;