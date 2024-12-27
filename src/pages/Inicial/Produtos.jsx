import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // Importação do Swiper
import "swiper/css"; // Importação do CSS do Swiper
import Button02 from "../../components/buttons/Button02"; // Supondo que esse botão já está estilizado
import Button03 from "../../components/buttons/Button03";

const ProdutosAll = styled.section`
    width: 100%;
    height: 60vh;
    max-width: 1140px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    background-color: var(--color--dark--blue);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    gap: 50px;
`;

const ProdutosSwiper = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`;

const ProdutosTexts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    color: var(--color--white);

    & > h1{
        font-weight: 400;
        font-size: 28px;
        width: 80%;
    }

    & > p{
        font-size: 14px;
        width: 80%;
        font-weight: 300;
    }
`;

const ProdutoImage = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: contain;
    border-radius: 15px;
    transition: transform 0.3s ease; /* Adicionando transição suave */
    
    &:hover {
        transform: scale(1.05); /* Aumenta a imagem ao passar o mouse */
    }
`;

const Produtos = () => {
    const imagens = [
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65ab875a-1f55-4326-1f71-28088badc500/public"
    ];

    const link = "#"; 

    return (
        <ProdutosAll>
            <ProdutosSwiper>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    onMouseEnter={() => this.swiper.swiper.autoplay.stop()} // Para o autoplay quando o mouse entra
                    onMouseLeave={() => this.swiper.swiper.autoplay.start()} // Retoma o autoplay quando o mouse sai
                >
                    {/* Criando os slides */}
                    {imagens.map((image, index) => (
                        <SwiperSlide key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <ProdutoImage
                                    src={image}
                                    alt={`Produto ${index + 1}`}
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ProdutosSwiper>
            <ProdutosTexts>
                <h1>Eleve seus projetos com <b>nossos produtos</b></h1>
                <p>Na Nova Metálica, oferecemos mais do que produtos. Oferecemos soluções completas para suas construções.</p>
                <Button03 
                href="/produtos"
                >Ver produtos</Button03>
            </ProdutosTexts>
        </ProdutosAll>
    );
};

export default Produtos;
