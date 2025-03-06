import React from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

import { BsPlayFill } from "react-icons/bs";

const FooterAll = styled.section`
    width: 97.5%;
    overflow-x: hidden;
    height: 45vh;
    max-width: 1280px;
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

    @media (max-width: 768px){
        height: auto;
        align-items: flex-start;
        padding: 5%;
        gap: 50px;
    }
`

const FooterContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }

    & > div{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height: 80%;
        gap: 10px;

        @media (max-width: 768px){
            width: 100%;
        }

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
            cursor: pointer;
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

    @media (max-width: 768px){
        flex-direction: column;
        gap: 20px;
    }
    
    & > p{
        font-size: 12px;
        color: var(--color--white);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        @media (max-width: 768px){
            line-height: 120%;
            flex-direction: column;
        }

        & > a {
            color: var(--color--blue);
            text-decoration: underline;
            cursor: pointer;
            transition: all .2s ease;

            &:hover {
                color: var(--color--green);
            }

            & > img {
                width: 70px;

                @media (max-width: 768px){
                    width: 60px;
                }
            }
        }
    }
`

const Footer = () => {
    const navigate = useNavigate();

    return (
        <>
            <FooterAll>
                <FooterContainer>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b440dfa1-5f27-48ad-a0a6-8de8dd71c700/public" alt="logo da nova metalica" loading="lazy"></img>
                        <h4>Steel Frame & Drywall</h4>
                        <a href="mailto:contato@novametalica.com.br" target="_blank">contato@novametalica.com.br</a>
                        <a href="https://api.whatsapp.com/send?phone=5521992882282&text=Ol%C3%A1,%20vim%20do%20site!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.">+55 (21) 99288-2282</a>
                    </div>
                    <div  data-aos="fade-up" data-aos-delay="100">
                        <h4>Mapa do site</h4>
                        <a onClick={() => navigate ('/')}>
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Início
                        </a>
                        <a onClick={() => navigate ('/produtos/steel-frame')}>
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Produtos
                        </a>
                        <a onClick={() => navigate ('/sobre')}>
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Sobre nós
                        </a>
                        <a onClick={() => navigate ('/parcerias')}>
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Parcerias
                        </a>
                        <a onClick={() => navigate ('/blog')}>
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Blog
                        </a>
                        <a onClick={() => navigate ('/sobre')}>
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Como fabricamos
                        </a>
                    </div>
                    <div  data-aos="fade-up" data-aos-delay="100">
                        <h4>Parcerias</h4>
                            <a href="https://www.csn.com.br/" target="_blank">
                                <BsPlayFill style={{ marginLeft: '5px' }} />
                                CSN Siderúrgica
                            </a>
                            <a href="https://brasil.arcelormittal.com/" target="_blank">
                                <BsPlayFill style={{ marginLeft: '5px' }} />
                                Arcellar Mital
                            </a>
                            <a href="https://www.saint-gobain.com.br/" target="_blank">
                                <BsPlayFill style={{ marginLeft: '5px' }} />
                                Saint Gobain
                            </a>
                            <a href="https://stobrasil.com.br/" target="_blank">
                                <BsPlayFill style={{ marginLeft: '5px' }} />
                                Grupo STO Brasil
                            </a>
                    </div>
                    <div  data-aos="fade-up" data-aos-delay="100">
                        <h4>Nos acompanhe</h4>
                        <a href="https://www.instagram.com/anovametalica/" target="_blank">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Instagram
                        </a>
                        <a href="https://www.facebook.com/people/Nova-Met%C3%A1lica/61564565333487/" target="_blank">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            Facebook
                        </a>
                        <a href="https://www.linkedin.com/in/novametalica/" target="_blank">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            LinkedIn
                        </a>
                        <a href="mailto:contato@novametalica.com.br" target="_blank">
                            <BsPlayFill style={{ marginLeft: '5px' }} />
                            E-mail
                        </a>
                    </div>
                </FooterContainer>

                <FooterPolitica>
                    <p  data-aos="fade-left" data-aos-delay="100">© 2024 Nova Metálica | Todos os direitos reservados | <a onClick={() => navigate ('/politica-de-privacidade')}>Política de Privacidade</a></p>
                    <p  ata-aos="fade-left" data-aos-delay="100">Desenvolvido por <a href="https://alephsramos.com.br/" target="_blank"><img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5360ae68-4678-4438-a170-893b230de700/public" /></a></p>
                </FooterPolitica>
            </FooterAll>
        </>
    )
}

export default Footer;