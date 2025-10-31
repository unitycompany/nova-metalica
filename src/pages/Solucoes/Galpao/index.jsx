import styled from "styled-components";
import Button02 from "../../../components/buttons/Button02";
import { useNavigate } from "react-router-dom";

const PageWrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    background: var(--color--white);
    padding-top: 100px;
`

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 60px 5% 100px 5%;

    @media (max-width: 768px){
        padding: 40px 5% 80px 5%;
    }
`

const Hero = styled.div`
    width: 100%;
    margin-bottom: 80px;

    @media (max-width: 768px){
        margin-bottom: 60px;
    }
`

const Breadcrumb = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--color--black);
    opacity: 0.6;
    margin-bottom: 40px;
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
    margin-bottom: 24px;
    line-height: 110%;

    @media (max-width: 768px){
        font-size: 36px;
        margin-bottom: 20px;
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
    margin-bottom: 80px;
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

    @media (max-width: 768px){
        height: 300px;
        margin-bottom: 60px;
    }
`

const ContentSection = styled.div`
    margin-bottom: 80px;

    @media (max-width: 768px){
        margin-bottom: 60px;
    }
`

const SectionTitle = styled.h2`
    font-size: 32px;
    font-weight: 600;
    color: var(--color--black);
    margin-bottom: 32px;
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
    margin-bottom: 40px;

    p {
        margin-bottom: 20px;
    }

    @media (max-width: 768px){
        font-size: 16px;
        margin-bottom: 32px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    margin-bottom: 60px;

    @media (max-width: 768px){
        grid-template-columns: 1fr;
        gap: 24px;
    }
`

const Card = styled.div`
    background: var(--color--white);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 32px;
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
    margin-bottom: 80px;

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
    padding: 60px 5%;
    margin: 80px -5% 80px -5%;

    @media (max-width: 768px){
        padding: 40px 5%;
        margin: 60px -5%;
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

const CTASection = styled.div`
    background: var(--color--black);
    color: var(--color--white);
    padding: 80px 5%;
    margin: 80px -5% 0 -5%;
    text-align: center;

    h3 {
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 20px;

        @media (max-width: 768px){
            font-size: 28px;
        }
    }

    p {
        font-size: 18px;
        opacity: 0.8;
        margin-bottom: 40px;
        font-weight: 300;

        @media (max-width: 768px){
            font-size: 16px;
            margin-bottom: 32px;
        }
    }
`

export default function Galpao() {
    const navigate = useNavigate();

    const handleOrcamento = () => {
        navigate('/contato');
    };

    return (
        <PageWrapper>
            <Container>
                <Hero data-aos="fade-up">
                    <Breadcrumb>
                        <span onClick={() => navigate('/')}>Início</span>
                        <span>/</span>
                        <span onClick={() => navigate('/solucoes')}>Soluções</span>
                        <span>/</span>
                        <span style={{ opacity: 1 }}>Kit Galpão</span>
                    </Breadcrumb>
                    <Title>Kit Galpão</Title>
                    <Subtitle>
                        Soluções completas para ambientes industriais, logísticos e armazéns, 
                        unindo resistência estrutural e conforto termoacústico.
                    </Subtitle>
                </Hero>

                <MainImage data-aos="fade-up" data-aos-delay="100">
                    <img 
                        src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/44a89dd5-dd7c-4982-8828-725c3e70e900/public" 
                        alt="Kit Galpão Nova Metálica" 
                    />
                </MainImage>

                <ContentSection data-aos="fade-up" data-aos-delay="200">
                    <SectionTitle>Sobre o Kit Galpão</SectionTitle>
                    <Description>
                        <p>
                            O Kit Galpão da Nova Metálica foi desenvolvido para atender às demandas 
                            de ambientes industriais, logísticos e armazéns, unindo resistência 
                            estrutural e conforto termoacústico.
                        </p>
                        <p>
                            Fabricado com tecnologia e precisão, o Kit Galpão entrega uma montagem 
                            rápida, reduzindo os custos operacionais e otimizando o tempo de execução.
                        </p>
                    </Description>
                </ContentSection>

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
                    </ContentSection>
                </ListSection>

                <ContentSection data-aos="fade-up" data-aos-delay="300">
                    <SectionTitle>Por que escolher o Kit Galpão da Nova Metálica?</SectionTitle>
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
                </ContentSection>
            </Container>
        </PageWrapper>
    );
}