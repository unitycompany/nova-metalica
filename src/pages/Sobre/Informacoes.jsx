import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowLeftShort, BsArrowRightShort, BsBuildings } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Button04 from "../../components/buttons/Button04";
import Button05 from "../../components/buttons/Button05";

const InfoAll = styled.section`
    position: relative;
    width: 100%;
`;

const InfoBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    background: #353535;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1081687f-ba98-453b-c651-444af1325800/public');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        opacity: 0.2;
    }
`;

const InfoContainer = styled.div`
    height: auto;
    position: relative;
    z-index: 3;
    max-width: 1280px;
    margin-top: -12.5vh;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 5%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    padding-bottom: 7.5%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const InfoCards = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    margin-top: -2.5vh;
    z-index: 10 !important;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: none;
    }
`;

const InfoCard = styled.div`
    background-color: ${({ active }) => (active ? "var(--color--blue)" : "var(--color--white)")};
    width: ${({ active }) => (active ? "200px" : "160px")};
    height: ${({ active }) => (active ? "200px" : "160px")};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: #1c8fc0;
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        z-index: 1;
        display: ${({ active }) => (active ? "block" : "none")};
        border-radius: 10px;
    }

    &::after {
        content: 'Selecionar opção';
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.2);
        color: var(--color--white);
        padding: 5px 15px;
        border-radius: 5px;
        font-size: 12px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
        z-index: 5;
    }

    &:hover::after {
        opacity: ${({ active }) => (active ? 0 : 1)};
        visibility: ${({ active }) => (active ? 'hidden' : 'visible')};
    }

    & > span {
        position: absolute;
        right: 15px;
        top: 15px;
        color: ${({ active }) => (active ? "var(--color--white)" : "var(--color--black)")};
        font-size: 14px;
        z-index: 2;
    }

    & > svg {
        color: ${({ active }) => (active ? "var(--color--white)" : "var(--color--black)")};
        font-size:  ${({ active }) => (active ? "44px" : "40px")};
        position: relative;
        z-index: 2;
    }

    & > p {
        font-size: ${({ active }) => (active ? "20px" : "16px")};
        color: ${({ active }) => (active ? "var(--color--white)" : "var(--color--black)")};
        font-weight: ${({ active }) => (active ? "500" : "400")};;
        text-align: center;
        position: relative;
        z-index: 2;
        width: 80%;
    }
`;

const MobileSwiper = styled(Swiper)`
    width: 100%;
    padding: 0 5%;
    display: none !important;

    @media (max-width: 768px) {
        display: block !important;
    }
`;

const InfoDetails = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    gap: 50px;

    & > img {
        width: 50%;
        height: 100%;
        object-fit: cover;
    }

    & > div {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        & > h2 {
        font-size: 24px;
        margin-bottom: 10px;
        color: var(--color--white);
        }

        & > p {
        font-size: 16px;
        color: var(--color--white);
        }
    }

`;

const NavigationButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;

    button {
        background-color: var(--color--white);
        color: var(--color--black);
        border: none;
        font-size: 24px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;

        &:hover {
            background-color: #353535;
            color: var(--color--white);
            transform: scale(0.90);
        }

        &:disabled {
            background-color: var(--color--gray);
            color: var(--color--black);
            cursor: not-allowed;
            display: none;

            & > svg {
                display: none;
            }
        }
    }
`;

const Informacoes = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        { title: "Como fabricamos?", image: "https://via.placeholder.com/300", description: "Descrição sobre como fabricamos." },
        { title: "Como construímos?", image: "https://via.placeholder.com/300", description: "Descrição sobre como construímos." },
        { title: "Nossos diferenciais", image: "https://via.placeholder.com/300", description: "Descrição sobre nossos diferenciais." },
        { title: "Soluções inteligentes", image: "https://via.placeholder.com/300", description: "Descrição sobre soluções inteligentes." },
        { title: "Por que nos escolher?", image: "https://via.placeholder.com/300", description: "Descrição sobre por que nos escolher." },
        { title: "Somos sustentaveis?", image: "https://via.placeholder.com/300", description: "Descrição sobre sustentabilidade." }
    ];

    const handleNext = () => {
        if (activeIndex < cards.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <>
            <InfoAll>
                <InfoBackground></InfoBackground>

                <InfoContainer>
                    <InfoCards>
                        {cards.map((card, index) => (
                            <InfoCard
                                key={index}
                                active={index === activeIndex}
                                onClick={() => setActiveIndex(index)}
                            >
                                <span>{`0${index + 1}`}</span>
                                <BsBuildings />
                                <p>{card.title}</p>
                            </InfoCard>
                        ))}
                    </InfoCards>

                    <MobileSwiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={1}
                        onSlideChange={handleSlideChange}
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <InfoCard
                                    active={index === activeIndex}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <span>{`0${index + 1}`}</span>
                                    <BsBuildings />
                                    <p>{card.title}</p>
                                </InfoCard>
                            </SwiperSlide>
                        ))}
                    </MobileSwiper>

                    <InfoDetails>
                        <img src={cards[activeIndex].image} alt={cards[activeIndex].title} />
                        <div>
                            <h2>{cards[activeIndex].title}</h2>
                            <p>{cards[activeIndex].description}</p>
                            <Button05 text="Solicitar orçamento" />
                            <NavigationButtons>
                                <button onClick={handlePrev} disabled={activeIndex === 0}>
                                    <BsArrowLeftShort />
                                </button>
                                <button onClick={handleNext} disabled={activeIndex === cards.length - 1}>
                                    <BsArrowRightShort />
                                </button>
                            </NavigationButtons>
                        </div>
                    </InfoDetails>
                </InfoContainer>
            </InfoAll>
        </>
    );
};

export default Informacoes;