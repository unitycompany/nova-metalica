import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StructuredData from "../../components/seo/StructuredData";

const SolucoesAll = styled.section`
    width: 100%;
    min-height: 100vh;
    background: var(--color--white);
    padding-top: 100px;
`

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 80px 5% 100px 5%;

    @media (max-width: 768px){
        padding: 60px 5% 80px 5%;
    }
`

const Header = styled.div`
    text-align: center;
    margin-bottom: 80px;

    @media (max-width: 768px){
        margin-bottom: 60px;
    }

    h1 {
        font-size: 48px;
        font-weight: 700;
        color: var(--color--black);
        margin-bottom: 20px;
        line-height: 110%;

        @media (max-width: 768px){
            font-size: 36px;
        }
    }

    p {
        font-size: 20px;
        color: var(--color--black);
        opacity: 0.7;
        font-weight: 300;
        max-width: 700px;
        margin: 0 auto;

        @media (max-width: 768px){
            font-size: 18px;
        }
    }
`

const KitsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    @media (max-width: 968px){
        grid-template-columns: 1fr;
        gap: 32px;
    }
`

const KitCard = styled.div`
    background: var(--color--white);
    border: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        border-color: var(--color--blue);
        transform: translateY(-8px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px){
        &:hover {
            transform: translateY(-4px);
        }
    }
`

const KitImage = styled.div`
    width: 100%;
    height: 350px;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    ${KitCard}:hover & img {
        transform: scale(1.08);
    }

    @media (max-width: 768px){
        height: 250px;
    }
`

const KitContent = styled.div`
    padding: 40px 32px;

    @media (max-width: 768px){
        padding: 32px 24px;
    }

    h2 {
        font-size: 28px;
        font-weight: 600;
        color: var(--color--black);
        margin-bottom: 16px;

        @media (max-width: 768px){
            font-size: 24px;
        }
    }

    p {
        font-size: 16px;
        line-height: 160%;
        color: var(--color--black);
        opacity: 0.7;
        font-weight: 300;
        margin-bottom: 32px;

        @media (max-width: 768px){
            font-size: 15px;
            margin-bottom: 24px;
        }
    }
`

const KitButton = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--color--blue);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: gap 0.3s ease;

    ${KitCard}:hover & {
        gap: 12px;
    }

    &::after {
        content: '→';
        font-size: 18px;
    }
`

export default function Solucoes() {
    const navigate = useNavigate();

    const domain = "https://novametalica.com.br";
    const url = `${domain}/solucoes`;
    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Soluções - Nova Metálica",
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
                    "item": url
                }
            ]
        }
    ];

    const kits = [
        {
            id: 'galpao',
            title: 'Kit Galpão',
            description: '',
            image: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6b656ba6-8405-41bb-cbfd-c83297492700/public',
            route: '/solucoes/galpao'
        },
        {
            id: 'banheiro',
            title: 'Kit Banheiro Pronto',
            description: '',
            image: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a105ddd1-0c60-4d60-3ae4-2c7422212100/public',
            route: '/solucoes/banheiros'
        }
    ];

    return (
        <SolucoesAll>
            <StructuredData data={schema} />
            <Container>
                <Header data-aos="fade-up">
                    <h1>Nossas soluções</h1>
                    <p>
                        Soluções completas e personalizadas para otimizar o seu projeto
                    </p>
                </Header>

                <KitsGrid>
                    {kits.map((kit, index) => (
                        <KitCard 
                            key={kit.id}
                            onClick={() => navigate(kit.route)}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <KitImage>
                                <img src={kit.image} alt={kit.title} />
                            </KitImage>
                            <KitContent>
                                <h2>{kit.title}</h2>
                                <p>{kit.description}</p>
                                <KitButton>Saiba mais</KitButton>
                            </KitContent>
                        </KitCard>
                    ))}
                </KitsGrid>
            </Container>
        </SolucoesAll>
    );
}
