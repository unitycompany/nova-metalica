import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardProduto from "../../layout/cards/CardProduto";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const CarouselWrapper = styled.div`
  width: 90%;
  position: relative; /* Garante que as setas fiquem visíveis fora do container */
  .swiper {
    width: 100%;
    padding: 10px;
    position: relative;
    padding-bottom: 40px;/* Garante que as setas fiquem visíveis fora do swiper */
  }
  .swiper-button-next, .swiper-button-prev {
    color: var(--color--black);
    background: #fff;
    border: 1px solid #00000050;
    border-radius: 50%;
    width: 36px;
    padding: 8px;
    height: 36px;
    top: 45%;
    transform: translateY(-50%);
    box-shadow: 0 2px 8px #0001;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute!important;
    z-index: 10;
  }
  .swiper-button-prev {
    left: -48px;
  }
  .swiper-button-next {
    right: -48px;
  }
  .swiper-button-next:after, .swiper-button-prev:after {
    display: none;
  }
  .swiper-pagination-bullet {
    background: #fff;
    border: 1px solid #00000050;
    opacity: 1;
    width: 12px;
    height: 12px;
    margin: 0 4px !important;
  }
  .swiper-pagination-bullet-active {
    background: var(--color--black);
    border: 1px solid var(--color--black);
  }
`;

export default function CarouselProdutos({ produtos }) {
  return (
    <CarouselWrapper>
      <div className="swiper-button-prev"><SlArrowLeft /></div>
      <div className="swiper-button-next"><SlArrowRight /></div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 4 }
        }}
      >
        {produtos.map((produto, idx) => (
          <SwiperSlide key={idx}>
            <CardProduto {...produto} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
  );
}
