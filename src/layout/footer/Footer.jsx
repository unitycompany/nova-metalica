import React from "react";
import styled from "styled-components";

import { BsPlayFill } from "react-icons/bs";

const FooterAll = styled.section`
    width: 100%;
    height: 45vh;
    max-width: 1140px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    padding: 0 5%;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--color--black);
    border-radius: 20px 20px 0 0;
`

const FooterContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height: 80%;
        gap: 10px;

        & > img {
            width: 150px;
            object-fit: contain;
        }

        & > h4{
            color: var(--color--white);
            font-weight: 400;
            font-size: 16px;
        }

        & > a {
            font-size: 12px;
            color: var(--color--white);
            font-weight: 200;
            transition: all .2s ease;
        }

        & > a:hover{
            font-weight: 400;
            text-decoration: underline;
        }
    }

    & > div:nth-child(n + 2){
    height: 80%;
    justify-content: flex-start;

    & > h4 {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 500;
    }

    & > a {
        font-weight: 300;
        display: flex;
        align-items: center;
        position: relative;
        transition: transform 0.3s ease;
        transform: translateX(-15px);
    }

    & > a > svg{
        color: var(--color--black);
        transition: all .2s ease;
    }

    & > a:hover {
        transform: translateX(-5px);
    }

    & > a:hover > svg{
        color: var(--color--white);
        margin-right: 5px;
    }

}
`

const FooterPolitica = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5%;
    
    & > p{
        font-size: 12px;
        color: var(--color--white);

        & > a {
            color: var(--color--blue);
            text-decoration: underline;
        }
    }
`

const Footer = () => {
    return (
        <>
            <FooterAll>
                <FooterContainer>
                    <div>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b440dfa1-5f27-48ad-a0a6-8de8dd71c700/public" alt="logo da nova metalica" loading="lazy"></img>
                        <h4>Steel Frame & Drywall</h4>
                        <a href="#">contato@novametalica.com.br</a>
                        <a href="#">+55 (21) 99288-2282</a>
                    </div>
                    <div>
                        <h4>Mapa do site</h4>
                        <a href="#">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Início
                        </a>
                        <a href="#">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Produtos
                        </a>
                        <a href="#">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Sobre nós
                        </a>
                        <a href="#">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Parcerias
                        </a>
                        <a href="#">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Blog
                        </a>
                        <a href="#">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Como fabricamos
                        </a>
                    </div>
                    <div>
                        <h4>Parcerias</h4>
                            <a href="#">
                                <BsPlayFill style={{ marginLeft: '5px' }} />
                                CSN Siderúrgica
                            </a>
                            <a href="#">
                                <BsPlayFill style={{ marginLeft: '5px' }} />
                                Arcellar Mital
                            </a>
                            <a href="#">
                                <BsPlayFill style={{ marginLeft: '5px' }} />
                                Saint Gobain
                            </a>
                            <a href="#">
                                <BsPlayFill style={{ marginLeft: '5px' }} />
                                Grupo STO Brasil
                            </a>
                    </div>
                    <div>
                        <h4>Nos acompanhe</h4>
                        <a href="#">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Instagram
                        </a>
                        <a href="#">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Facebook
                        </a>
                        <a href="#">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            LinkedIn
                        </a>
                        <a href="#">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            YouTube
                        </a>
                    </div>
                </FooterContainer>

                <FooterPolitica>
                    <p>© 2024 Nova Metálica | Todos os direitos reservados | <a href="#">Política de Privacidade</a></p>
                    <p>Desenvolvido por <a href="#">Aleph</a></p>
                </FooterPolitica>
            </FooterAll>
        </>
    )
}

export default Footer;