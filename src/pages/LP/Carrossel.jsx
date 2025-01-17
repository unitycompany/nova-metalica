import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
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
    const swiperRef1 = useRef(null); // Referência para o primeiro Swiper
    const swiperRef2 = useRef(null); // Referência para o segundo Swiper

    const handleMouseEnter = (swiperRef) => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
        }
    };

    const handleMouseLeave = (swiperRef) => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
        }
    };

    return (
        <CarrosselContainer>
            {/* Carrossel 1: Movimento contínuo para a esquerda */}
            <SwiperWrapper>
                <Swiper
                    onSwiper={(swiper) => (swiperRef1.current = swiper)}
                    onMouseEnter={() => handleMouseEnter(swiperRef1)}
                    onMouseLeave={() => handleMouseLeave(swiperRef1)}
                    modules={[Autoplay, FreeMode, Pagination]}
                    loop={true}
                    autoplay={{
                        delay: 1, // Movimento contínuo
                        disableOnInteraction: false,
                    }}
                    speed={3000} // Velocidade do movimento
                    freeMode={true}
                    spaceBetween={50}
                    slidesPerView={4}
                    pagination={false} // Remove paginação
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1080: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
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

            {/* Carrossel 2: Movimento contínuo para a direita */}
            <SwiperWrapper>
                <Swiper
                    onSwiper={(swiper) => (swiperRef2.current = swiper)}
                    onMouseEnter={() => handleMouseEnter(swiperRef2)}
                    onMouseLeave={() => handleMouseLeave(swiperRef2)}
                    modules={[Autoplay, FreeMode, Pagination]}
                    loop={true}
                    autoplay={{
                        delay: 1, // Movimento contínuo
                        reverseDirection: true, // Inverte a direção do autoplay
                        disableOnInteraction: false,
                    }}
                    speed={2500} // Velocidade do movimento
                    freeMode={true}
                    spaceBetween={50}
                    slidesPerView={4}
                    pagination={false} // Remove paginação
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1080: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide>
                        <CardLP title="Tecnologia de ponta na fabricação" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardLP title="Parceria com CSN e ArcelloMittal" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardLP title="Produtos 100% rastreáveis" />
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
