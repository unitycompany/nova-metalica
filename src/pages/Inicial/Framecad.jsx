import React from "react";
import styled from "styled-components";
import Button02 from "../../components/buttons/Button02"; 

// Estilos do componente
const FramecadAll = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1280px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    padding: 10% 5%;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        gap: 50px;
    }   
`;

const FramecadIframe = styled.div`
    width: 45%;
    height: 400px;

    @media (max-width: 768px){
        width: 100%;
        height: 250px;
    }

    @media (min-width: 768px) and (max-width: 1280px){
        height: 350px;
    }

    & > iframe {
        width: 100%;
        height: 100%;
        border-radius: 20px;

        @media (max-width: 768px){
            border-radius: 12px;
        }
    }
`;

const FramecadTexts = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    width: 55%;
    z-index: 0; /* Garantir que o texto fique atrás do iframe */
    transition: opacity 1s ease;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > h1 {
        font-size: 26px;
        font-weight: 500;

        @media (max-width: 768px){
            font-size: 24px;
            text-align: center;
        }
    }

    & > h6 {
        font-size: 20px;
        font-weight: 400;
        margin-top: -20px;
        opacity: .8;

        @media (max-width: 768px){
            font-size: 14px;
            text-align: center;
            width: 100%;
            margin-top: -10px;
        }
    }

    & > p {
        font-size: 16px;
        opacity: .6;
        text-align: justify;
        width: 80%;

        @media (max-width: 768px){
            width: 100%;
        }
    }

`;

const Framecad = () => {

    return (
        <FramecadAll>
             <FramecadTexts>
                <h1 data-aos="fade-left" data-aos-delay="100">Como Fabricamos Nossos Perfis</h1>
                <h6 data-aos="fade-left" data-aos-delay="200">A F325iT em Ação</h6>
                <p data-aos="fade-left" data-aos-delay="300">
                    A F325iT é uma máquina de última geração, equipada com um rolo calibrador automático, um avançado sistema hidráulico de fluxo variável e ferramentas adicionais de perfuração. Essa combinação permite ajustar com precisão os perfis de aço, otimizar o desempenho da máquina e oferecer flexibilidade na criação de cortes personalizados. Como resultado, o F325iT se destaca como a solução mais eficiente e versátil da FRAMECAD para fabricação de estruturas em Steel Frame.
                </p>
                <Button02 
                children="Solicitar orçamento!"
                onClick={() => {
                    const formSection = document.getElementById('Form');
                    if (formSection){
                        formSection.scrollIntoView({ behavior: 'smooth'});
                    }
                }}
                />
            </FramecadTexts>
            <FramecadIframe data-aos="fade-right" data-aos-delay="200">
                        <iframe
                            src="https://customer-g3gc6xcdls9bgs9k.cloudflarestream.com/bb55b730584a791554abea0ab2d9c596/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-g3gc6xcdls9bgs9k.cloudflarestream.com%2Fbb55b730584a791554abea0ab2d9c596%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                            loading="lazy"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowfullscreen="true"
                            data-aos="fade-up" data-aos-delay="100"
                        ></iframe>
            </FramecadIframe>
        </FramecadAll>
    );
};

export default Framecad;
