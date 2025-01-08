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
                <h1>Como Fabricamos Nossos Perfis</h1>
                <h6>A F325iT em Ação</h6>
                <p>
                    A F325iT é uma máquina de última geração, equipada com um rolo calibrador automático, um avançado sistema hidráulico de fluxo variável e ferramentas adicionais de perfuração. Essa combinação permite ajustar com precisão os perfis de aço, otimizar o desempenho da máquina e oferecer flexibilidade na criação de cortes personalizados. Como resultado, o F325iT se destaca como a solução mais eficiente e versátil da FRAMECAD para fabricação de estruturas em Steel Frame.
                </p>
                <Button02 href="#Form">Solicitar orçamento</Button02>
            </FramecadTexts>
            <FramecadIframe>
                <iframe 
                    src="https://www.youtube.com/embed/KVCquOX5toQ?autoplay=1" 
                    title="FRAMECAD F325iT - Ideal for residential and light commercial construction projects" 
                    frameborder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </FramecadIframe>
        </FramecadAll>
    );
};

export default Framecad;
