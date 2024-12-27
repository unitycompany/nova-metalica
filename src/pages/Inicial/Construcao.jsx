import React from "react";
import styled from "styled-components";
import Button02 from "../../components/buttons/Button02";

const ConstrucaoAll = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    position: relative;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
`

const ConstrucaoText = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;

    & > h1{
        font-size: 40px;
        color: var(--color--blue);
        font-weight: 500;
    }

    & > p{
        font-size: 14px;
        color: var(--color--black);
        opacity: .6;
    }
`

const ConstrucaoContainer = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 30px 0 0 30px;
        }

        & > div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 30px;
            padding: 0 5% 0 10%;

            & > h2 {
                font-size: 32px;
                font-weight: 500;
                color: var(--color--blue);
            }

            & > p{
                font-size: 14px;
                width: 80%;
                font-weight: 400;
                color: var(--color--black);
                opacity: .6;
            }
        }
    }
`

const ConstrucaoContainer2 = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0px 30px 30px 0px;
        }

        & > div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 30px;
            padding: 0 5% 0 10%;

            & > h2 {
                font-size: 32px;
                font-weight: 500;
                color: var(--color--blue);
            }

            & > p{
                font-size: 14px;
                width: 80%;
                font-weight: 400;
                color: var(--color--black);
                opacity: .6;
            }
        }
    }
`

const Construcao = () => {
    return (
        <>
            <ConstrucaoAll>
                <ConstrucaoText>
                    <h1>Construção a Seco</h1>
                    <p>Agilize suas obras com a qualidade superior e menos resíduos que o Steel Frame proporciona.</p>
                </ConstrucaoText>

                <ConstrucaoContainer>
                    <div>
                        <div>
                            <h2>Steel Frame</h2>
                            <p>O Steel Frame é uma revolução no setor da construção civil. Com perfis de aço galvanizado, essa técnica oferece uma estrutura leve, durável e resistente. A montagem rápida e precisa reduz significativamente o tempo de construção, enquanto a sustentabilidade e o conforto térmico e acústico tornam essa solução ideal para diversos tipos de edificações.</p>
                            <Button02 href="#Form">Solicitar orçamento</Button02>
                        </div>
                    </div>
                    <div>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b790bac9-6a8a-402f-734b-0ab292815b00/public" alt="steel frame" />
                    </div>
                </ConstrucaoContainer>

                <ConstrucaoContainer2>
                    <div>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d1000bbb-40dd-427d-a012-ce2c42bf7200/public" alt="drywall" />
                    </div>
                    <div>
                        <div>
                            <h2>Drywall</h2>
                            <p>O Drywall oferece praticidade e eficiência para a construção moderna, com excelente desempenho acústico e térmico. É a escolha perfeita para projetos residenciais e comerciais que buscam qualidade e agilidade na construção.</p>
                            <Button02 href="#Form">Solicitar orçamento</Button02>
                        </div>
                    </div>
                </ConstrucaoContainer2>

            </ConstrucaoAll>
        </>
    )
}

export default Construcao;