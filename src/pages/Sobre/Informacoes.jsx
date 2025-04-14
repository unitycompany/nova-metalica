import React from "react";
import styled from "styled-components";

import HomeCard from "../../layout/cards/CardValores01";
import HomeCard2 from "../../layout/cards/CardValores02";

const ValoresAll = styled.section`
    width: 97.5%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    height: auto;
    padding: 5% 5% 2.5% 5%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-bottom: 50px;

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        position: absolute;
        background-color: var(--color--black);
        border-radius: 30px;
        padding-bottom: 55px;
    }
`

// Fim dos cards

const ValoresText = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        flex-direction: column-reverse;
    }

    & > div:nth-child(1){
        color: var(--color--white);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 15px;

        @media (max-width: 768px){
            align-items: center;
            gap: 15px;
        }

        & > h1{
            font-size: 40px;
            font-weight: 500;
            line-height: 100%;

            @media (max-width: 768px){
                font-size: 32px;
            }
        }

        & > p{
            font-size: 16px;
            opacity: .6;
            width: 80%;

            @media (max-width: 768px){
                width: 100%;
                text-align: center;
                opacity: 0.8;
            }
        }
    }

    & > div:nth-child(2){

        & > img{
            width: 150px;
        }
    }
`

// Fim dos textos

const ValoresQualidades = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 768px){
        border: 2px solid red;
        height: auto;
        gap: 10px;
        margin-bottom: -45px;
    }

    
`

const Valores = () => {
    return (
        <>
            <ValoresAll id="Informacoes">
                <ValoresText>
                    <div>
                        <h1 data-aos="fade-up-right" data-aos-delay="100">Nossos valores</h1>
                        <p data-aos="fade-right" data-aos-delay="200">Entenda nossos principais pontos fortes que nos tornam referência no setor.</p>
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-delay="400" src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b440dfa1-5f27-48ad-a0a6-8de8dd71c700/public" alt="logo da nova metalica" />
                    </div>
                </ValoresText>

                <ValoresQualidades>
                    <HomeCard2 
                    image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/992069d8-d5ab-4522-11d8-04cb49714b00/public"
                    descricaoImage="Icone de Inovação, na Nova Metálica"
                    title="Inovação"
                    descricao="Buscamos, constantemente, novas tecnologias e métodos para desafiar os padrões estabelecidos da construção civil."
                    />
                    <HomeCard2 
                    image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/66eecf95-d765-4d16-7e4c-c13bea3cde00/public"
                    descricaoImage="Icone de Qualidade, na Nova Metálica"
                    title="Qualidade"
                    descricao="Comprometemo-nos com a excelência em todos os nossos produtos e serviços, assegurando a satisfação plena dos nossos clientes."
                    />
                    <HomeCard2 
                    image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3381d730-6783-4b29-ec37-0c3848d9d000/public"
                    descricaoImage="Icone de Sustentabilidade, na Nova Metálica"
                    title="Sustentabilidade"
                    descricao="Adotamos práticas que reduzem o impacto ambiental das nossas operações, comprometidos com a responsabilidade ecológica."
                    />
                </ValoresQualidades>

                <ValoresQualidades>
                    <HomeCard2 
                    image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ec88ac56-8147-4f89-f0b2-e7dcdc44b900/public"
                    descricaoImage="Icone de Velocidade, na Nova Metálica"
                    title="Velocidade"
                    descricao="Entregamos seus projetos no prazo, garantindo agilidade e eficiência em todas as etapas."
                    />
                    <HomeCard2 
                    image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a3c4b281-55ad-4774-a81a-8477fae72f00/public"
                    descricaoImage="Icone de Equipe, na Nova Metálica"
                    title="Equipe"
                    descricao="Valorizamos a diversidade e o trabalho em equipe, integrando colaboradores, parceiros e comunidades."
                    />
                    <HomeCard2 
                    image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cc0601c8-e556-4ccc-641d-fb3d74f66d00/public"
                    descricaoImage="Icone de Persistência, na Nova Metálica"
                    title="Persistência"
                    descricao="Superamos os desafios com determinação, focados em alcançar resultados que atendam às necessidades dos nossos clientes."
                    />
                </ValoresQualidades>

            </ValoresAll>
        </>
    )
}

export default Valores;