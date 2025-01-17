import React from "react";
import styled from "styled-components";
import ButtonLP2 from "../../components/buttons/Button08";

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

    & > h1 {
        font-size: 32px;
        font-weight: 400;
        color: var(--color--black);

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
    }

    & > button {
        width: 50%;
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

    & > div {
        color: var(--color--black);
    }
`

const Perfis = () => {
    return (
        <>
            <PerfisContainer>
                <PerfisLeft>
                    <h1>
                        Perfis normatizados e com aço <b>100% nacional</b>
                    </h1>
                    <p>
                        Nossos perfis são fabricados com aço 100% nacional, fornecido por parceiros de renome como CSN Siderúrgica e ArcelorMittal, garantindo qualidade e rastreabilidade, pois todo aço fornecido tem um certificado da usina com o ensaio técnico do lote.
                        <br /> <br />
                        Com tecnologia de ponta, utilizamos equipamentos avançados, como a máquina F325iT FRAMECAD, que possibilita cortes precisos e personalizados, tornando o nosso processo produtivo mais eficiente e versátil.
                        <br /> <br />
                        Para fabricação de perfis para Drywall, contamos com maquinário Metalso de última geração, assegurando maior qualidade em todos os perfis produzidos.
                    </p>
                    <ButtonLP2 />
                </PerfisLeft>
                <PerfisVideo>
                    <div>
                        Video mostrando o perfil sendo fabricado
                    </div>
                </PerfisVideo>
            </PerfisContainer>
        </>
    )
}

export default Perfis;