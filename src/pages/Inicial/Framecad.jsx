import React from "react";
import styled from "styled-components";
import Button02 from "../../components/buttons/Button02"; 

// Estilos do componente
const FramecadAll = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
`;

const FramecadIframe = styled.div`
    width: 45%;
    height: 60%;

    & > iframe {
        width: 100%;
        height: 100%;
        border-radius: 20px 0 0 20px;
    }
`;

const FramecadTexts = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 5%;
    gap: 30px;
    width: 55%;
    z-index: 0; /* Garantir que o texto fique atrás do iframe */
    transition: opacity 1s ease;

    & > h1 {
        font-size: 26px;
        font-weight: 500;
    }

    & > h6 {
        font-size: 20px;
        font-weight: 400;
        margin-top: -20px;
        opacity: .8;
    }

    & > p {
        font-size: 16px;
        opacity: .6;
        text-align: justify;
        width: 80%;
    }

    & > button {
        padding: 10px;
        background-color: var(--color--black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        & > svg {
            fill: var(--color--white);
            width: 30px;
            height: 30px;
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
