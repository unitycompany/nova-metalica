import React from "react";
import styled from "styled-components";
import ButtonLP2 from "../../../components/buttons/Button08";

const PerfisContainer = styled.section`
    max-width: 1280px;
    width: 100%;
    left: 50%;
    position: relative;
    top: 0;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    color: var(--color--white);

    @media (max-width:768px){
        flex-direction: column-reverse;
        padding: 10% 0;
    }
`

const PerfisLeft = styled.div`
    width: 50%;
    padding-left: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;

    @media (max-width:768px){
        padding: 0 5%;
    }

    @media (max-width:768px){
        width: 100%;
    }

    & > h1 {
        font-size: 32px;
        font-weight: 400;
        color: var(--color--black);

        @media (max-width:768px){
            font-size: 26px;
        }

        & > b {
            font-weight: 500;
            color: var(--color--blue);
        }
    }

    & > p {
        font-size: 18px;
        color: var(--color--black);
        font-weight: 300;
        margin-bottom: 20px;

        @media (max-width:768px){
            font-size: 16px;
        }
    }

    & > button {
        width: 50%;

        @media (max-width:768px){
            width: 80%;
        }
    }
`

const PerfisVideo = styled.div`
    width: 50%;
    height: 100%;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6e52a162-0a72-4e7d-5be1-228921228700/public');
    height: 700px;
    background-position: right;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width:768px){
        width: 100%!important;
        height: auto;
    }

    & > div {
        @media (max-width:768px){
            width: 100%;
            height: auto;
        }
    }

    & > div {
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){
            width: 90%;
        }

        &::before{
            content: '';
            width: 450px;
            height: 250px;
            top: 45.5%;
            transform: translateY(-50%) translateX(-50%);
            left: 52.5%;
            position: absolute;
            z-index: -1;
            border: 1px solid var(--color--blue);

            @media (max-width:768px){
                width: 95%;
                height: 210px;
                left: 49%;
                top: 50%;
            }
        }

            & > iframe {
            width: 450px;
            height: 250px;
            border-left: 10px solid var(--color--black);
            position: relative;

            @media (max-width:768px){
                width: 100%;
                height: 200px;
            }
        }
    }
`

const Perfis = () => {
    return (
        <>
            <PerfisContainer>
                <PerfisLeft>
                    <h1 data-aos="fade-up-right" data-aos-delay="100">
                        Perfis normatizados e com aço <b>100% nacional</b>
                    </h1>
                    <p data-aos="fade-up-right" data-aos-delay="100">
                        Nossos perfis são fabricados com aço 100% nacional, fornecido por parceiros de renome como CSN Siderúrgica e ArcelorMittal, garantindo qualidade e rastreabilidade, pois todo aço fornecido tem um certificado da usina com o ensaio técnico do lote.
                        <br /> <br />
                        Com tecnologia de ponta, utilizamos equipamentos avançados, como a máquina F325iT FRAMECAD, que possibilita cortes precisos e personalizados, tornando o nosso processo produtivo mais eficiente e versátil.
                        <br /> <br />
                        Para fabricação de perfis para Drywall, contamos com maquinário Metalso de última geração, assegurando maior qualidade em todos os perfis produzidos.
                    </p>
                    <ButtonLP2 />
                </PerfisLeft>
                <PerfisVideo>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <iframe
                            src="https://customer-g3gc6xcdls9bgs9k.cloudflarestream.com/e46e6388d3cf6d794418c81c2c22c3aa/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-g3gc6xcdls9bgs9k.cloudflarestream.com%2Fe46e6388d3cf6d794418c81c2c22c3aa%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                            loading="lazy"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </PerfisVideo>
            </PerfisContainer>
        </>
    )
}

export default Perfis;