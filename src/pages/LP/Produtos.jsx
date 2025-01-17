import React from "react";
import styled from "styled-components";
import ButtonLP from "../../components/buttons/Button07";
import ButtonLP2 from "../../components/buttons/Button08";

const ProdutosContainer = styled.section`
    max-width: 1280px;
    width: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    padding: 5% 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    height: auto;

    @media (max-width:768px){
        flex-direction: column;
    }
`

const ProdutosImage = styled.div`
    width: 40%;
    padding-left: 5%;
    height: 700px;

    @media (max-width:768px){
        width: 100%;
        height: 200px;
    }

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
`

const ProdutosRight = styled.div`
    width: 60%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;

    @media (max-width:768px){
        width: 100%;
        padding: 0 5%;
        margin-bottom: 5vh;
        overflow-x: auto;
    }

    & > h1 {
        font-size: 30px;
        font-weight: 400;

        @media (max-width:768px){
            font-size: 24px;
        }
    }

    & > p {
        font-size: 18px;
        line-height: 110%;
        font-weight: 300;
        padding-bottom: 30px;

        @media (max-width:768px){
            font-size: 16px;
        }
    }

    & > table {
        width: 100%;
        border-collapse: collapse;
        overflow: hidden;
        color: var(--color--black);
        margin-bottom: 30px!important;

        @media (max-width:768px){
            overflow-x: auto!important; /* Permite o scroll horizontal */
            -webkit-overflow-scrolling: touch; /* Para uma rolagem mais suave no iOS */
            min-width: 600px;
            display: block;
        }

        & > th, td{
            padding: 10px!important;
            text-align: left;
            border-bottom: 1px solid #e9e9e9;
            border: 3px solid #fff;
        }

        & > tr > td {
           font-weight: 300;
           font-size: 14px;
        }

        & > tr > td > b {
            font-weight: 500;
        }

        & > tr > th {
            background-color: #f7f7f7;
            font-weight: bold;
            padding: 10px;
            text-align: left;
            border: 3px solid #fff;
        }

        & >  tr:nth-child(even){
            background-color: #ffffff;
        }

        & > tr:hover {
            background-color: #f5f5f5;
        }

        & > td:first-child{
            font-weight: bold;
        }
    }

    & > button {
        width: 45%;

        @media (max-width:768px){
            width: 80%;
        }
    }
`

const Produtos = () => {
    return (
        <>
            <ProdutosContainer>
                <ProdutosImage data-aos="fade-up" data-aos-delay="100">
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/46f191f0-60f1-440c-ff92-af4a37dbce00/public" alt="foto de todos os perfis de steel frame" loading="lazy" />
                </ProdutosImage>
                <ProdutosRight>
                    <h1 data-aos="fade-up-right" data-aos-delay="100">
                        Produtos de Steel Frame que Fazem a Diferença no Seu Negócio
                    </h1>
                    <p data-aos="fade-right" data-aos-delay="200">
                        Na Nova Metálica, oferecemos uma linha completa de perfis de Steel Frame para atender às mais diversas demandas do mercado, com qualidade superior e produção sob medida. Conheça nossos produtos:
                    </p>
                    <table data-aos="fade-up" data-aos-delay="100">
                        <tr>
                            <th>Produto</th>
                            <th>Descrição</th>
                            <th>Especificações</th>
                        </tr>
                        <tr>
                            <td><b>Guia</b></td>
                            <td>Perfis para suporte de montantes em paredes e divisórias, garantindo estrutura e precisão.</td>
                            <td>Disponível em 90 mm e 140 mm.</td>
                        </tr>
                        <tr>
                            <td><b>Montante</b></td>
                            <td>Elemento essencial para montagem de paredes, oferecendo resistência e estabilidade.</td>
                            <td>Disponível em 90 mm e 140 mm.</td>
                        </tr>
                        <tr>
                            <td><b>Treliça Pronta</b></td>
                            <td>Solução prática para estruturas de cobertura, reduzindo o tempo de montagem com alta perfomance.</td>
                            <td>Personalizada conforme o projeto.</td>
                        </tr>
                        <tr>
                            <td><b>Cartola</b></td>
                            <td>Perfil leve e versátil, ideal para acabamento e reforços em diversas aplicações</td>
                            <td>Espessuras: 0,80 mm  e 0,95 mm.</td>
                        </tr>
                    </table>
                    <ButtonLP2 />                    
                </ProdutosRight>
            </ProdutosContainer>
        </>
    )
}

export default Produtos;