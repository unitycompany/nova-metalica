import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Para pegar o slug da URL
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsInstagram, BsFacebook, BsLinkedin, BsFillPlayFill } from "react-icons/bs";
import Button05 from "../../components/buttons/Button05";

// Estilos para o layout do artigo
const ArtigoAll = styled.section`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 10% 0% 5% 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
  height: auto;
`;

const ArtigoLeft = styled.div`
    width: 70%;
    height: 100vh;
    overflow-y: scroll;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    padding-right: 1.5%;

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        height: 80vh;
        gap: 20px;

        & > h1 {
            font-size: 32px;
            font-weight: 400;
            color: var(--color--black);
        }

        & > span {
            font-size: 12px;
            margin-top: -10px;
            opacity: .8;
            font-weight: 400;
            color: var(--color--black);

            & > b {
                font-weight: 500;
                color: var(--color--dark--blue);
            }
        }

        & > img {
            width: 100%;
            height: 70%;
            object-fit: cover;
            border-radius: 30px;
        }

        & > h6 {
            font-weight: 300;
            font-size: 10px;
            font-style: italic;
            padding-left: 30px;
        }
    }

    & > div:nth-child(2){
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 20px;

        & > p{
            font-size: 14px;
            font-weight: 400;
            line-height: 120%;
            opacity: .6;
        }

        & > h2{
            font-size: 24px;
            font-weight: 400;
            color: var(--color--black);
        }
    }

    & > div:nth-child(n + 3){
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 30px;

        & > h6 {
            font-weight: 300;
            font-size: 10px;
            font-style: italic;
            padding-left: 30px;
        }

        & > img{
            width: 100%;
            height: 50vh;
            object-fit: cover;
            border-radius: 30px;
        }

        & > h1{
            font-size: 30px;
            font-weight: 400;
            background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent; 
        }

        & > p{
            font-size: 14px;
            opacity: .8;
            color: var(--color);
        }
    }

    & > article {
        width: 100%;
        height: auto;
        padding: 40px;
        background-color: var(--color--dark--blue);
        border-radius: 30px;
        
        & > div{
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            gap: 20px;  
            color: var(--color--white);

            & > h1 {
                font-size: 24px;
                font-weight: 400;
            }

            & > p {
                font-size: 14px;
                opacity: .8;
            }

            & > form {
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;
                width: 100%;
                gap: 15px;

                & > input {
                    padding: 12px;
                    background-color: var(--color--white);
                    width: 100%;
                    border-radius: 12px;

                    &::placeholder{
                        font-size: 14px;
                    }
                }

                & > button {
                    background-color: var(--color--green);
                    padding: 15px;
                    width: 100%;
                    border-radius: 12px;
                    cursor: pointer;
                }
            }
        }
    }
`

const ArtigoRight = styled.div`
    width: 30%;
    height: 90vh;
    margin-right: 0%;
    background-color: #00000010;
    border-radius: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    
    & > div:nth-child(1){
        width: 100%;
        height: 40%;
        border-radius: 25px;
        background-color: var(--color--white);
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 10px;

        & > h3{
            font-weight: 500;
            font-size: 18px;
            background: linear-gradient(130deg, var(--color--blue), var(--color--dark--blue));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent;
        }

        & > ol {
            padding-left: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: 14px;
            opacity: .6;

            & > li {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 5px;
                transition: transform .1s ease;
                cursor: pointer;

                &:hover{
                    transform: translateX(5px);
                    color: var(--color--blue);
                }

                & > a {
                    color: var(--color--black);
                    line-height: 120%;
                }
            }
        }
    }

    & > div:nth-child(2){
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color--white);
        border-radius: 20px;
        gap: 20px;

        & > a {
            color: var(--color--black);
            font-size: 24px;
            transition: all .1s ease;

            &:hover{
                color: var(--color--blue);
                transform: scale(.95);
            }
        }
    }
`

const ArtigoCarrossel = styled.div`
    height: 25%;
    width: 100%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & > a > img {
        border: 1px solid red;
        object-fit: contain;
    }
`

const ArtigoRelacionados = styled.div`
    height: 25%;
    width: 100%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    position: relative;
    background-color: var(--color--white);

    & > div{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;

        & > h2{
            font-size: 16px;
            font-weight: 500;
            margin: 5px 0;
        }

        & > p {
            font-size: 12px;
            font-weight: 400;
            opacity: calc().8;
        }

        & > button{
            font-size: 12px;
            padding: 10px 15px;
        }
    }
`

const ArtigoBlogs = styled.section `
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    margin: 2.5% 0 5% 0;
    max-width: 1140px;
    left: 50%;
    top: 0;
    position: relative;
    transform: translateX(-50%);
`

const Card = styled.div`
  padding: 25px;
  height: 40vh;
  border-radius: 12px;
  background-color: #00000010;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  gap: 20px;

    & > h1 {
        font-size: 20px;
        font-weight: 400;
    }

    & > p {
        font-size: 12px;
        font-weight: 400;
        opacity: .6;
    }

    & > span {
        font-size: 10px;
        opacity: .4;
        font-style: italic;
        font-weight: 400;

        & > b{
            font-weight: 500;
            color: var(--color--blue);
        }
    }

    & > button {
        font-size: 12px;
        padding: 10px 15px;
    }
`

const ArtigoTituloBlogs = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    background-color: var(--color--dark--blue);
    max-width: 1140px;
    left: 50%;
    top: 0;
    position: relative;
    transform: translateX(-50%);
    border-radius: 20px;

    & > h1 {
        font-size: 24px;
        font-weight: 300;
        color: var(--color--white);
    }
`

const ArticlePage = () => {
    const { slug } = useParams(); // Obtendo o slug da URL
    const [article, setArticle] = useState(null);
  
    useEffect(() => {
      // Simulando uma busca de artigo com base no slug
      const articles = [
        {
          slug: "como-o-steel-frame",
          title: "Como o Steel Frame está revolucionando a construção",
          autor: "Alice Pereira de Jesus",
          data: "24 de novembro de 2023",
          imagemPrincipal: "https://via.placeholder.com/500",
          bibliografiaImagemPrincipal: "https://alephsramos.com.br/",
          t1Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga <a href='https://alephsramos.github.io/lpnovametalica/'>voluptates soluta</a> quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",
          t1Pergunta1: "O que é steel frame?",
          t1Resposta1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",
          t1Pergunta2: "O que é Drywall",
          t1Resposta2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",
          image: "https://via.placeholder.com/800x400",

          t1Image: "https://via.placeholder.com/500",
          topico1: "Pergunta 01",
          t1RespostaTopic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",
          bibliografiaT1: "https://alephsramos.com.br",

          t2Image: "https://via.placeholder.com/500",
          topico2: "Pergunta 02",
          t2RespostaTopic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",
          bibliografiaT2: "https://alephsramos.com.br",

          t3Image: "https://via.placeholder.com/500",
          topico3: "Pergunta 03",
          t3RespostaTopic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",
          bibliografiaT3: "https://alephsramos.com.br",

          t4Image: "https://via.placeholder.com/500",
          topico4: "Pergunta 04",
          t4RespostaTopic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",
          bibliografiaT4: "https://alephsramos.com.br",

          t5Image: "https://via.placeholder.com/500",
          topico5: "Pergunta 05",
          t5RespostaTopic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione iure qui ullam, necessitatibus, minus veritatis at fuga voluptates soluta quidem sapiente dolor alias sint est distinctio consequuntur eum dicta.",
          bibliografiaT5: "https://alephsramos.com.br",

          tags: ["steel frame", "construção", "inovação"],
          sumario: [
            { id: "topico1", title: "Introdução ao Steel Frame" },
            { id: "topico2", title: "Vantagens do Steel Frame" },
            { id: "topico3", title: "Exemplos de Construções com Steel Frame" },
          ],
          carrosselImagens: [
            { src: "https://via.placeholder.com/100", link: "/" },
            { src: "https://via.placeholder.com/100", link: "/produtos" },
            { src: "https://via.placeholder.com/100", link: "/sobre" }
          ],
          related: [{ title: "Artigo relacionado 1", description: "Descrição do artigo relacionado" }],
        },
      ];
  
      // Encontrar o artigo com base no slug
      const foundArticle = articles.find((article) => article.slug === slug);
      setArticle(foundArticle);
    }, [slug]);
  
    return (
      <div>
        {article ? (
            <>          
            <ArtigoAll>
                <ArtigoLeft>
                    <div>
                        <h1>{article.title}</h1>
                        <span>Escrito por: <b>{article.autor}</b> | {article.data}</span>
                        <img src={article.imagemPrincipal} alt="Imagem do blog" />
                        <h6>{article.bibliografiaImagemPrincipal}</h6>
                    </div>

                    <div>
                        <p
                            dangerouslySetInnerHTML={{ __html: article.t1Description }}
                        />
                        <h2>
                            {article.t1Pergunta1}
                        </h2>
                        <p
                            dangerouslySetInnerHTML={{ __html: article.t1Resposta1 }}
                        />
                        <h2>
                            {article.t1Pergunta2}
                        </h2>
                        <p
                            dangerouslySetInnerHTML={{ __html: article.t1Resposta2 }}
                        />
                    </div>

                    <div>
                        <img src={article.t1Image} />
                        <h6>{article.bibliografiaT1}</h6>
                        <h1 id="topico2">
                            {article.topico1}
                        </h1>
                        <p
                            dangerouslySetInnerHTML={{ __html: article.t1RespostaTopic }}
                        />
                    </div>

                    <div>
                        <img src={article.t2Image} />
                        <h6>{article.bibliografiaT2}</h6>
                        <h1 id="topico2">
                            {article.topico2}
                        </h1>
                        <p
                            dangerouslySetInnerHTML={{ __html: article.t2RespostaTopic }}
                        />
                    </div>

                    <div>
                        <img src={article.t3Image} />
                        <h6>{article.bibliografiaT3}</h6>
                        <h1 id="topico3">
                            {article.topico3}
                        </h1>
                        <p
                            dangerouslySetInnerHTML={{ __html: article.t3RespostaTopic }}
                        />
                    </div>

                    <div>
                        <img src={article.t4Image} />
                        <h6>{article.bibliografiaT4}</h6>
                        <h1 id="topico4">
                            {article.topico4}
                        </h1>
                        <p
                            dangerouslySetInnerHTML={{ __html: article.t4RespostaTopic }}
                        />
                    </div>

                    <div>
                        <img src={article.t5Image} />
                        <h6>{article.bibliografiaT5}</h6>
                        <h1 id="topico5">
                            {article.topico5}
                        </h1>
                        <p
                            dangerouslySetInnerHTML={{ __html: article.t5RespostaTopic }}
                        />
                    </div>

                    <article>
                        <div>
                            <h1>Fique por dentro de tudo!</h1>
                            <p>Por favor, preencha seus dados para nossa equipe entrar em contato com você.</p>
                            <form>
                                <input type="text" id="name" placeholder="Nome" />
                                <input type="email" id="email" placeholder="E-mail" />
                                <input type="tel" id="tel" placeholder="WhatsApp" />
                                <button type="submit">Enviar</button>
                            </form>
                        </div>
                    </article>
                </ArtigoLeft>
    
                <ArtigoRight>
                <div>
                    <h3>Sumário</h3>
                    <ol>
                    {article.sumario.map((topic, index) => (
                        <li key={index}>
                        <a href={`#${topic.id}`}>
                            <BsFillPlayFill /> <span>{topic.title}</span>
                        </a>
                        </li>
                    ))}
                    </ol>
                </div>
    
                <div>
                    <a href="#">
                    <BsInstagram />
                    </a>
                    <a href="#">
                    <BsFacebook />
                    </a>
                    <a href="#">
                    <BsLinkedin />
                    </a>
                </div>
    
                <ArtigoCarrossel>
                <Swiper spaceBetween={10} slidesPerView={1} navigation loop>
                    {article.carrosselImagens.map((image, index) => (
                    <SwiperSlide key={index}>
                        <a href={image.link}>
                        <img
                            src={image.src}
                            alt={`Imagem do carrossel ${index + 1}`}
                            style={{ width: "100%", borderRadius: "15px", height: "100%", objectFit: "contain" }}
                        />
                        </a>
                    </SwiperSlide>
                    ))}
                </Swiper>
                </ArtigoCarrossel>
    
                <ArtigoRelacionados>
                    {article.related.map((related, index) => (
                    <div key={index}>
                        <h2>{related.title}</h2>
                        <p>{related.description}</p>
                        <Button05 text="Saber mais" />
                    </div>
                    ))}
                </ArtigoRelacionados>
                </ArtigoRight>
            </ArtigoAll>

            <ArtigoTituloBlogs>
                    <h1> Confira nossos blogs mais buscados</h1>
            </ArtigoTituloBlogs>

            <ArtigoBlogs>
                <Swiper
                    spaceBetween={30} // Espaço entre os slides
                    slidesPerView={3} // Quantos slides serão visíveis por vez
                    autoplay={{
                    delay: 3000, // Atraso de 3 segundos
                    disableOnInteraction: false, // Não desabilita o autoplay após interação
                    }}
                    loop={true} // Loop infinito
                >
                    <SwiperSlide>
                    <Card>
                            <h1>Nome do titulo do blog</h1>
                            <p>Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.</p>
                            <span>Escrito por: <b>Nome da autora</b> | 24 de novembro de 2023</span>
                            <Button05 
                            text="Saber mais"
                            />
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Card>
                            <h1>Nome do titulo do blog</h1>
                            <p>Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.</p>
                            <span>Escrito por: <b>Nome da autora</b> | 24 de novembro de 2023</span>
                            <Button05 
                            text="Saber mais"
                            />
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Card>
                            <h1>Nome do titulo do blog</h1>
                            <p>Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.</p>
                            <span>Escrito por: <b>Nome da autora</b> | 24 de novembro de 2023</span>
                            <Button05 
                            text="Saber mais"
                            />
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Card>
                            <h1>Nome do titulo do blog</h1>
                            <p>Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.</p>
                            <span>Escrito por: <b>Nome da autora</b> | 24 de novembro de 2023</span>
                            <Button05 
                            text="Saber mais"
                            />
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Card>
                            <h1>Nome do titulo do blog</h1>
                            <p>Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.</p>
                            <span>Escrito por: <b>Nome da autora</b> | 24 de novembro de 2023</span>
                            <Button05 
                            text="Saber mais"
                            />
                    </Card>
                    </SwiperSlide>
                </Swiper>
            </ArtigoBlogs>

          </>
        ) : (
          <p>Artigo não encontrado.</p>
        )}
      </div>
    );
  };
  
  export default ArticlePage;