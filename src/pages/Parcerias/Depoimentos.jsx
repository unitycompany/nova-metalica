import React from "react";
import styled from "styled-components";
import { BsArrowDown, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import Button05 from "../../components/buttons/Button05";

const DepoimentosAll = styled.section`
    width: 100%;
    max-width: 1140px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    height: 80vh;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6331a68e-fbe1-4e74-c482-d4ee69226b00/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 30px;
    padding: 0 5%;
    gap: 20px;

    @media (max-width: 768px){
        width: 95%;
        flex-direction: column;
        height: auto;
        padding: 10% 5%;
    }

    @media (min-width:769px) and (max-width: 1240px){
        width: 98.5%;
    }
`

const DepoimentosTexts = styled.div`
    width: 45%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }
    
    gap: 25px;

    & > h1 {
        font-size: 32px;
        font-weight: 400;
        color: var(--color--white);

        @media (max-width: 768px){
            font-size: 26px;
            text-align: center;
        }

        & > b {
            font-weight: 500;
            background: linear-gradient(190deg, var(--color--blue), var(--color--white));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent; 
        }
    }

    & > p {
        font-size: 16px;
        color: var(--color--white);
        font-weight: 400;
        opacity: .8;
        line-height: 120%;
        width: 90%;
        margin-bottom: 50px;

        @media (max-width: 768px){
            text-align: center;
            font-size: 14px;
            margin-bottom: 25px;
        }
    }
`

const DepoimentosContainer = styled.div`
    width: 55%;
    height: 75%;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 20px;

    @media (max-width: 768px){
        width: 100%;
    }
`;

const DepoimentoContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 55vh;
    width: 100%;
    gap: 20px;

    @media (max-width: 768px){
        height: 70vh;
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: #d3d3d3; /* Placeholder para a imagem */
    border-radius: 20px;

    @media (max-width: 768px){
        width: 100%;
    }
`;

const TextContainer = styled.div`
    width: 50%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px){
        height: 45vh;
        width: 100%;
    }

    & > div {
        display: flex;
        gap: 20px;
        flex-direction: column;
    }
`;

const Name = styled.h2`
    font-size: 26px;
    margin-bottom: 10px;
    font-weight: 400;
    background: linear-gradient(140deg, var(--color--blue), var(--color--dark--blue));
    -webkit-background-clip: text;  
    background-clip: text; 
    color: transparent; 

    @media (max-width: 768px){
        font-size: 22px;
        text-align: center;
    }
`;

const TestimonialText = styled.p`
    font-size: 16px;
    color: var(--color--black);
    font-style: italic;
    opacity: .6;
    margin-bottom: 20px;

    @media (max-width: 768px){
        font-size: 14px;
        text-align: center;
    }
    
`;

const Depoimentos = () => {
    return (
        <>
            <DepoimentosAll>
                <DepoimentosTexts>
                    <h1>Nossos <b>parceiros</b></h1>
                    <p>O nosso objetivo em oferecer o programa de parceiros é garantir que pequenos e médios empreiteiros tenham a oportunidade e tenham um lucro maior...</p>
                    <BsArrowDown color="var(--color--white)" size={35}/>
                </DepoimentosTexts>
                <DepoimentosContainer>
                    <Swiper
                        modules={[Autoplay]} 
                        autoplay={{ 
                            delay: 5000, 
                            disableOnInteraction: false 
                        }}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        navigation
                    >
                        <SwiperSlide>
                            <DepoimentoContent>
                                <ImageContainer></ImageContainer>
                                <TextContainer>
                                    <div>
                                        <Name>Nome do parceiro</Name>
                                        <TestimonialText>
                                            "Alguma coisa que ele falou, Alguma coisa que ele falou, Alguma coisa que ele falou, Alguma coisa que ele falou"
                                        </TestimonialText>
                                    </div>
                                    <Button05 
                                    text="Virar um parceiro agora"
                                    />
                                </TextContainer>
                            </DepoimentoContent>
                        </SwiperSlide>
                        <SwiperSlide>
                            <DepoimentoContent>
                                <ImageContainer></ImageContainer>
                                <TextContainer>
                                    <div>
                                        <Name>Nome do parceiro</Name>
                                        <TestimonialText>
                                            "Alguma coisa que ele falou, Alguma coisa que ele falou, Alguma coisa que ele falou, Alguma coisa que ele falou"
                                        </TestimonialText>
                                    </div>
                                    <Button05
                                    text="Virar um parceiro agora"
                                    />
                                </TextContainer>
                            </DepoimentoContent>
                        </SwiperSlide>
                    </Swiper>
                </DepoimentosContainer>
            </DepoimentosAll>
        </> 
    )
}

export default Depoimentos;