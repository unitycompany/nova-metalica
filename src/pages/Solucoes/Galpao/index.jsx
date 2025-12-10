import styled from "styled-components";
import Button02 from "../../../components/buttons/Button02";
import { useNavigate } from "react-router-dom";
import Form from "../../Inicial/Form";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';
import StructuredData from "../../../components/seo/StructuredData";

const PageWrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    background: var(--color--white);
    padding-top: 100px;
`

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 5% 60px 5%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 768px){
        padding: 30px 5% 50px 5%;
        gap: 30px;
    }
`

const Hero = styled.div`
    width: 100%;
`

const Breadcrumb = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--color--black);
    opacity: 0.6;
    margin-bottom: 30px;
    font-weight: 400;

    span {
        cursor: pointer;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 1;
            color: var(--color--blue);
        }
    }

    @media (max-width: 768px){
        margin-bottom: 30px;
        font-size: 13px;
    }
`

const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    color: var(--color--black);
    margin-bottom: 20px;
    line-height: 110%;

    @media (max-width: 768px){
        font-size: 36px;
        margin-bottom: 16px;
    }
`

const Subtitle = styled.p`
    font-size: 20px;
    color: var(--color--black);
    opacity: 0.7;
    line-height: 160%;
    max-width: 800px;
    font-weight: 300;

    @media (max-width: 768px){
        font-size: 18px;
    }
`

const MainImage = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 0;
    overflow: hidden;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100px;
        background: linear-gradient(to top, var(--color--white), transparent);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px){
        height: 300px;
    }
`

const HeroSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;

    @media (max-width: 968px){
        grid-template-columns: 1fr;
        gap: 40px;
    }
`

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
        font-size: 18px;
        line-height: 180%;
        color: var(--color--black);
        opacity: 0.8;
        font-weight: 300;

        @media (max-width: 768px){
            font-size: 16px;
        }
    }
`

const HeroMedia = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 0;
    overflow: hidden;
    position: relative;

    img, video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 968px){
        height: 350px;
    }

    @media (max-width: 768px){
        height: 300px;
    }
`

const ContentSection = styled.div`
    @media (max-width: 768px){
    }
`

const SectionTitle = styled.h2`
    font-size: 32px;
    font-weight: 600;
    color: var(--color--black);
    margin-bottom: 24px;
    position: relative;
    padding-left: 20px;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 80%;
        background: var(--color--blue);
    }

    @media (max-width: 768px){
        font-size: 26px;
        margin-bottom: 24px;
    }
`

const Description = styled.div`
    font-size: 18px;
    line-height: 180%;
    color: var(--color--black);
    opacity: 0.8;
    font-weight: 300;

    p {
        margin-bottom: 16px;
    }

    @media (max-width: 768px){
        font-size: 16px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;

    @media (max-width: 768px){
        grid-template-columns: 1fr;
        gap: 20px;
    }
`

const Card = styled.div`
    background: var(--color--white);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 28px;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
        border-color: var(--color--blue);
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 768px){
        padding: 24px;
    }
`

const CardIcon = styled.div`
    font-size: 36px;
    color: var(--color--blue);
    margin-bottom: 20px;

    @media (max-width: 768px){
        font-size: 32px;
        margin-bottom: 16px;
    }
`

const CardTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: var(--color--black);
    margin-bottom: 12px;

    @media (max-width: 768px){
        font-size: 18px;
    }
`

const CardText = styled.p`
    font-size: 16px;
    line-height: 160%;
    color: var(--color--black);
    opacity: 0.7;
    font-weight: 300;

    @media (max-width: 768px){
        font-size: 15px;
    }
`

const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;

    @media (max-width: 968px){
        grid-template-columns: 1fr;
    }
`

const ImageColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Image = styled.div`
    width: 100%;
    height: ${props => props.height || '400px'};
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    &:hover img {
        transform: scale(1.05);
    }

    @media (max-width: 968px){
        height: 300px;
    }
`

const ListSection = styled.div`
    background: #fafafa;
    padding: 50px 5%;
    margin: 0 -5%;

    @media (max-width: 768px){
        padding: 40px 5%;
    }
`

const List = styled.ul`
    max-width: 800px;
    list-style: none;
    padding: 0;
    margin: 0;
`

const ListItem = styled.li`
    font-size: 18px;
    line-height: 160%;
    color: var(--color--black);
    padding: 20px 0 20px 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    font-weight: 400;

    &:last-child {
        border-bottom: none;
    }

    &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: var(--color--blue);
        font-size: 24px;
        font-weight: 700;
    }

    @media (max-width: 768px){
        font-size: 16px;
        padding: 16px 0 16px 36px;
    }
`

export default function Galpao() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    const domain = "https://novametalica.com.br";
    const url = `${domain}/solucoes/galpao`;
    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Kit Galpão - Nova Metálica",
            "url": url
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Início",
                    "item": domain
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Soluções",
                    "item": `${domain}/solucoes`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Kit Galpão",
                    "item": url
                }
            ]
        }
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scrollToForm = () => {
        const formElement = document.getElementById('form-orcamento');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <PageWrapper>
            <StructuredData data={schema} />
            <Container>
                <Breadcrumb data-aos="fade-up">
                    <span onClick={() => navigate('/')}>Início</span>
                    <span>/</span>
                    <span onClick={() => navigate('/solucoes')}>Soluções</span>
                    <span>/</span>
                    <span style={{ opacity: 1 }}>Kit Galpão</span>
                </Breadcrumb>

                <HeroSection data-aos="fade-up" data-aos-delay="100">
                    <HeroContent>
                        <Title>Kit Galpão</Title>
                        <Subtitle>
                            Soluções completas para ambientes industriais, logísticos e armazéns, 
                            unindo resistência estrutural e conforto termoacústico.
                        </Subtitle>
                        <p>
                            O Kit Galpão da Nova Metálica foi desenvolvido para atender às demandas 
                            de ambientes industriais, logísticos e armazéns, unindo resistência 
                            estrutural e conforto termoacústico.
                        </p>
                        <p>
                            Fabricado com tecnologia e precisão, o Kit Galpão entrega uma montagem 
                            rápida, reduzindo os custos operacionais e otimizando o tempo de execução.
                        </p>
                        <div style={{ marginTop: '24px' }}>
                            <Button02 onClick={scrollToForm}>Solicitar Orçamento</Button02>
                        </div>
                    </HeroContent>
                    <HeroMedia>
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                        >
                            <source src="/time-lapse.mp4" type="video/mp4" />
                            Seu navegador não suporta vídeos.
                        </video>
                    </HeroMedia>
                </HeroSection>

                {isMobile ? (
                    <div data-aos="fade-up" data-aos-delay="250" style={{ marginBottom: '40px' }}>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                        >
                            <SwiperSlide>
                                <Image height="300px">
                                    <img 
                                        src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6b656ba6-8405-41bb-cbfd-c83297492700/public" 
                                        alt="Estrutura Galpão" 
                                    />
                                </Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image height="300px">
                                    <img 
                                        src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e7e0ed6a-d2db-4b0e-6c70-ea855d90fe00/public" 
                                        alt="Detalhe Treliça" 
                                    />
                                </Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image height="300px">
                                    <img 
                                        src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0f3fb05-5222-4bab-8791-2ebd303f1000/public" 
                                        alt="Isolamento Térmico" 
                                    />
                                </Image>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                ) : (
                    <ImageGrid data-aos="fade-up" data-aos-delay="250">
                        <Image height="600px">
                            <img 
                                src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6b656ba6-8405-41bb-cbfd-c83297492700/public" 
                                alt="Estrutura Galpão" 
                            />
                        </Image>
                        <ImageColumn>
                            <Image height="290px">
                                <img 
                                    src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e7e0ed6a-d2db-4b0e-6c70-ea855d90fe00/public" 
                                    alt="Detalhe Treliça" 
                                />
                            </Image>
                            <Image height="290px">
                                <img 
                                    src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0f3fb05-5222-4bab-8791-2ebd303f1000/public" 
                                    alt="Isolamento Térmico" 
                                />
                            </Image>
                        </ImageColumn>
                    </ImageGrid>
                )}

                <ListSection>
                    <ContentSection data-aos="fade-up">
                        <SectionTitle>O que compõe o Kit Galpão?</SectionTitle>
                        <List>
                            <ListItem>Treliça de 40 cm</ListItem>
                            <ListItem>Treliça de 20 cm</ListItem>
                            <ListItem>
                                Isolante Lã de Rocha Gesla — para um desempenho termoacústico superior
                            </ListItem>
                        </List>
                        <div style={{ marginTop: '32px', textAlign: 'center' }}>
                            <Button02 onClick={scrollToForm}>Solicitar Orçamento</Button02>
                        </div>
                    </ContentSection>
                </ListSection>

                <ContentSection data-aos="fade-up" data-aos-delay="300">
                    <SectionTitle>Por que escolher o Kit Galpão da Nova Metálica?</SectionTitle>
                    {isMobile ? (
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000 }}
                        >
                            <SwiperSlide>
                                <Card>
                                    <CardIcon>✓</CardIcon>
                                    <CardTitle>Alta resistência e durabilidade</CardTitle>
                                    <CardText>
                                        Estruturas projetadas para durar décadas, com materiais de 
                                        primeira qualidade e engenharia de precisão.
                                    </CardText>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <CardIcon>✓</CardIcon>
                                    <CardTitle>Conforto térmico e acústico garantido</CardTitle>
                                    <CardText>
                                        Isolamento de alta performance que garante um ambiente mais 
                                        produtivo e confortável.
                                    </CardText>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <CardIcon>✓</CardIcon>
                                    <CardTitle>Personalização conforme suas necessidades</CardTitle>
                                    <CardText>
                                        Soluções adaptadas para atender as especificações únicas de 
                                        cada projeto e cliente.
                                    </CardText>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    ) : (
                        <Grid>
                            <Card>
                                <CardIcon>✓</CardIcon>
                                <CardTitle>Alta resistência e durabilidade</CardTitle>
                                <CardText>
                                    Estruturas projetadas para durar décadas, com materiais de 
                                    primeira qualidade e engenharia de precisão.
                                </CardText>
                            </Card>
                            <Card>
                                <CardIcon>✓</CardIcon>
                                <CardTitle>Conforto térmico e acústico garantido</CardTitle>
                                <CardText>
                                    Isolamento de alta performance que garante um ambiente mais 
                                    produtivo e confortável.
                                </CardText>
                            </Card>
                            <Card>
                                <CardIcon>✓</CardIcon>
                                <CardTitle>Personalização conforme suas necessidades</CardTitle>
                                <CardText>
                                    Soluções adaptadas para atender as especificações únicas de 
                                    cada projeto e cliente.
                                </CardText>
                            </Card>
                        </Grid>
                    )}
                    <div style={{ marginTop: '32px', textAlign: 'center' }}>
                        <Button02 onClick={scrollToForm}>Solicitar Orçamento</Button02>
                    </div>
                </ContentSection>

                <div id="form-orcamento">
                    <Form />
                </div>
            </Container>
        </PageWrapper>
    );
}