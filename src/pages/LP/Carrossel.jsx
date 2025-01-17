import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import CardLP from "../../layout/cards/CardLP";

const CarrosselContainer = styled.section`
    width: 100%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    position: relative;
    transform: translateX(-50%);
    height: auto;
    padding: 5% 0;
`;

const SwiperWrapper = styled.div`
    margin-bottom: 30px; /* Espaçamento entre os sliders */
`;

const Carrossel = () => {
    return (
        <CarrosselContainer>
            {/* Carrossel 1: Desliza para a direita */}
            <SwiperWrapper>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <CardLP title="Melhor preço do mercado" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardLP title="Perfis 100% normatizados" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardLP title="Condições de compra diferenciadas" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardLP title="Precisão e qualidades garantidas" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardLP title="Perfis engenheirados ou stick" />
                    </SwiperSlide>
                </Swiper>
            </SwiperWrapper>

            {/* Carrossel 2: Desliza para a esquerda */}
            <SwiperWrapper>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{ delay: 3000, reverseDirection: true, disableOnInteraction: false }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <CardLP title="Tecnologia de ponta na fabricação " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardLP title="Parceria com CSN e ArcelloMittal" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardLP title="Produtos 100% rastreaveis" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardLP title="Fabricados com aço nacional" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardLP title="Cálculo estrutural garantido" />
                    </SwiperSlide>
                </Swiper>
            </SwiperWrapper>
        </CarrosselContainer>
    );
};

export default Carrossel;
