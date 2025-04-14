import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // Importação do Swiper
import "swiper/css"; // Importação do CSS do Swiper
import { useNavigate } from 'react-router-dom';
import Button03 from "../../components/buttons/Button03";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ProdutosAll = styled.section`
    width: 97.5%;
    height: auto;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    background-color: var(--color--dark--blue);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5% 5%;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 10% 5%;
        gap: 10px;
    }
`;

const ProdutosSwiper = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px){
        width: 100%;
    }
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

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > h1{
        font-weight: 400;
        font-size: 28px;
        width: 80%;

        @media (max-width: 768px){
            width: 100%;
            text-align: center;
        }
    }

    & > p{
        font-size: 14px;
        width: 80%;
        font-weight: 300;

        @media (max-width: 768px){
            text-align: center;
            width: 90%;
        }
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
    const navigate = useNavigate();

    const imagens = [
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/aa102622-40e8-45a3-b06a-952f5a27db00/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6890677a-4bd1-4b45-c196-a51698c0db00/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0b8c47d5-efc5-4007-405b-77bf33d7c200/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6ab7319d-3c5a-4aad-5885-bb9037c5b700/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/defa3de9-d8c8-443d-fd30-cc61fa3b9000/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f1b7c826-d7bc-4a97-ea20-cc7e2fe82c00/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e7a1b6dc-5225-4872-bd43-f9b3261c8300/public",
        "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3b21810e-d228-454e-d7a0-401b711ef200/public"
    ];

    const link = "/"; 

    return (
        <ProdutosAll>
            <ProdutosSwiper data-aos="fade-left" data-aos-delay="100">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    spaceBetween={30}
                    navigation={false}
                    slidesPerView={1}
                    pagination={false}
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
                <h1 data-aos="fade-left" data-aos-delay="200">Eleve seus projetos com <b>nossos produtos</b></h1>
                <p data-aos="fade-left" data-aos-delay="300">Na Nova Metálica, oferecemos mais do que produtos. Oferecemos soluções completas para a sua construção.</p>
                {/* <Button03 
                children="Ver produtos"
                onClick={() => navigate ('/produtos/steel-frame')}
                /> */}
            </ProdutosTexts>
        </ProdutosAll>
    );
};

export default Produtos;
