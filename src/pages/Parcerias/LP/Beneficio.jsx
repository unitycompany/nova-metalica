import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; 
import Button06 from "../../../components/buttons/Button06";
import { BsArrowRight } from "react-icons/bs";

const BeneficiosAll = styled.section`
    width: 100%;
    height: 70vh;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a3bf147b-2bdc-48e3-043f-56241fe02700/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 0 5%;
    gap: 25px;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 5%;
        width: 95%;
        gap: 50px;
    }

    @media (min-width:769px) and (max-width: 1240px){
        width: 98.5%;
        padding: 2.5% 5%;
    }
`

const BeneficiosTexts = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 20%;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }

    & > h1 {
        font-size: 32px;
        color: var(--color--white);
        font-weight: 400;
        width: 40%;

        @media (max-width: 768px){
            width: 100%;
            text-align: center;
            font-size: 26px;
        }

        & > b{
            font-weight: 500;
            background: linear-gradient(130deg, var(--color--blue), var(--color--gray));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent; 
        }
    }
`

const BeneficiosCarrossel = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: 50vh;
    }
`

const CarrosselItem = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px){
    height: 50vh;
  }

  & > div{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background-color: var(--color--white);
    border-radius: 20px;
    height: 90%;

    @media (max-width: 768px){
        height: 100%;
    }

    & > div {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color--dark--blue);
        border-radius: 20px;
        color: var(--color--white);
    }

    & > h2{
        font-size: 20px;
        font-weight: 500;
        background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
        -webkit-background-clip: text;  
        background-clip: text; 
        color: transparent;      
    }

    & > p {
        font-size: 14px;
        color: var(--color--black);
        font-weight: 300;
    } 
  }

  & > div:nth-child(2){
    border: none;
    width: 100%;
    background-color: transparent;
    padding: 10px 0;
    height: 10%;

    & > button{
        width: 100%;
    }
  }
`;

const Beneficios = () => {
    return (
        <>
            <BeneficiosAll>
                <BeneficiosTexts>
                    <h1>Benefícios em ser um <b>Lojista Parceiro</b></h1>
                    <div>
                        <Button06 
                        text="Virar um parceiro agora"
                        />
                    </div>
                </BeneficiosTexts>
                <BeneficiosCarrossel>
                <Swiper
                        modules={[Autoplay]} 
                        autoplay={{ 
                            delay: 3000, 
                            disableOnInteraction: false 
                        }}
                        spaceBetween={10}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}           
                        breakpoints={{
                            768: {
                            slidesPerView: 1,
                            },
                            1024: {
                            slidesPerView: 2,
                            },
                        }}
                        >
                        <SwiperSlide>
                            <CarrosselItem>
                                <div>
                                    <div>Icon</div>
                                    <h2>Beneficio</h2>
                                    <p>Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio</p>
                                </div>
                            </CarrosselItem>
                        </SwiperSlide>
                        <SwiperSlide>
                        <CarrosselItem>
                                <div>
                                    <div>Icon</div>
                                    <h2>Beneficio</h2>
                                    <p>Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio</p>
                                </div>
                            </CarrosselItem>
                        </SwiperSlide>
                        <SwiperSlide>
                        <CarrosselItem>
                                <div>
                                    <div>Icon</div>
                                    <h2>Beneficio</h2>
                                    <p>Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio</p>
                                </div>
                            </CarrosselItem>
                        </SwiperSlide>
                        <SwiperSlide>
                        <CarrosselItem>
                                <div>
                                    <div>Icon</div>
                                    <h2>Beneficio</h2>
                                    <p>Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio</p>
                                </div>
                            </CarrosselItem>
                        </SwiperSlide>
                        <SwiperSlide>
                        <CarrosselItem>
                                <div>
                                    <div>Icon</div>
                                    <h2>Beneficio</h2>
                                    <p>Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio</p>
                                </div>
                            </CarrosselItem>
                        </SwiperSlide>
                        <SwiperSlide>
                        <CarrosselItem>
                                <div>
                                    <div>Icon</div>
                                    <h2>Beneficio</h2>
                                    <p>Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio Colocar um texto falando o determinado beneficio</p>
                                </div>
                            </CarrosselItem>
                        </SwiperSlide>
                    </Swiper>
                </BeneficiosCarrossel>
            </BeneficiosAll>
        </> 
    )
}

export default Beneficios;