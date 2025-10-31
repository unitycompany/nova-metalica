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

export default function Banheiros() {
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
                        <span style={{ opacity: 1 }}>Kit Banheiro Pronto</span>
                    </Breadcrumb>
                    <Title>Kit Banheiro Pronto</Title>
                    <Subtitle>
                        Solução modular completa com instalações hidráulica, elétrica, 
                        revestimentos, louças e metais inclusos.
                    </Subtitle>
                </Hero>

                <MainImage data-aos="fade-up" data-aos-delay="100">
                    <img 
                        src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a105ddd1-0c60-4d60-3ae4-2c7422212100/public" 
                        alt="Kit Banheiro Nova Metálica" 
                    />
                </MainImage>

                <ContentSection data-aos="fade-up" data-aos-delay="200">
                    <SectionTitle>Sobre o Kit Banheiro Pronto</SectionTitle>
                    <Description>
                        <p>
                            O Kit Banheiro Pronto da Nova Metálica é uma solução modular entregue 
                            com todas as instalações completas: hidráulica, elétrica, revestimentos, 
                            louças e até metais.
                        </p>
                        <p>
                            Indicado para hotéis, resorts, retrofit de edifícios, salas comerciais, 
                            hospitais e clínicas, o Kit Banheiro Pronto promove redução significativa 
                            do tempo de obra, instalação rápida e simplificada, padrão de qualidade 
                            industrial, economia em escala com menor custo de manutenção, além de 
                            sustentabilidade e menor impacto ambiental.
                        </p>
                    </Description>
                </ContentSection>

                <ImageGrid data-aos="fade-up" data-aos-delay="250">
                    <Image height="600px">
                        <img 
                            src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f767631c-5e70-4c6a-4cc4-b3442dc5c400/public" 
                            alt="Banheiro Moderno" 
                        />
                    </Image>
                    <ImageColumn>
                        <Image height="290px">
                            <img 
                                src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7f1bd05c-5d7c-45bb-9e8d-8dbef5beba00/public" 
                                alt="Detalhe Acabamento" 
                            />
                        </Image>
                        <Image height="290px">
                            <img 
                                src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2e21ee20-2ad3-4fdd-4a3d-9884b7a89800/public" 
                                alt="Instalação" 
                            />
                        </Image>
                    </ImageColumn>
                </ImageGrid>

                <ListSection>
                    <ContentSection data-aos="fade-up">
                        <SectionTitle>Etapas do processo</SectionTitle>
                        <List>
                            <ListItem>Estudo de viabilidade e projeto executivo</ListItem>
                            <ListItem>Pré-fabricação em ambiente controlado</ListItem>
                            <ListItem>Transporte até o local</ListItem>
                            <ListItem>Instalação plug & play</ListItem>
                        </List>
                        <Description style={{ marginTop: '32px', fontWeight: '500', fontSize: '20px', opacity: 1 }}>
                            <p>
                                ✨ Vai do caminhão direto para o local de instalação: <strong>É só conectar!</strong>
                            </p>
                        </Description>
                    </ContentSection>
                </ListSection>

                <ContentSection data-aos="fade-up" data-aos-delay="250">
                    <SectionTitle>Escolha entre diferentes opções de:</SectionTitle>
                    <Grid>
                        <Card>
                            <CardIcon>✓</CardIcon>
                            <CardTitle>Revestimentos cerâmicos ou vinílicos</CardTitle>
                            <CardText>
                                Ampla variedade de acabamentos para atender seu projeto.
                            </CardText>
                        </Card>
                        <Card>
                            <CardIcon>✓</CardIcon>
                            <CardTitle>Louças e metais</CardTitle>
                            <CardText>
                                Diversas opções de marcas e modelos disponíveis.
                            </CardText>
                        </Card>
                        <Card>
                            <CardIcon>✓</CardIcon>
                            <CardTitle>Iluminação</CardTitle>
                            <CardText>
                                Sistemas de iluminação eficientes e modernos.
                            </CardText>
                        </Card>
                        <Card>
                            <CardIcon>✓</CardIcon>
                            <CardTitle>Espelhos e marcenaria</CardTitle>
                            <CardText>
                                Soluções personalizadas para completar o ambiente.
                            </CardText>
                        </Card>
                    </Grid>
                </ContentSection>

                <ListSection>
                    <ContentSection data-aos="fade-up">
                        <SectionTitle>Por que escolher o Kit Banheiro Pronto?</SectionTitle>
                        <List>
                            <ListItem>Redução significativa do tempo de obra</ListItem>
                            <ListItem>Instalação rápida e simplificada</ListItem>
                            <ListItem>Padrão de qualidade industrial</ListItem>
                            <ListItem>Economia em escala com menor custo de manutenção</ListItem>
                            <ListItem>Sustentabilidade e menor impacto ambiental</ListItem>
                        </List>
                    </ContentSection>
                </ListSection>
            </Container>
        </PageWrapper>
    );
}