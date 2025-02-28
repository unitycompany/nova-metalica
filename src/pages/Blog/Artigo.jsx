import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
            color: var(--color--blue);
        }

        & > span {
            font-size: 12px;
            margin-top: -10px;
            opacity: .8;
            font-weight: 400;
            color: var(--color--black);

            & > b {
                font-weight: 500;
                color: var(--color--blue);
            }
        }

        & > p {
          font-weight: 400;
          line-height: 120%;
          color: var(--color--black);
        }

        & > img {
            width: 100%;
            height: 70%;
            object-fit: cover;
            border-radius: 30px;
        }

        & > h6 {
            font-weight: 300;
            font-size: 12px;
            font-style: italic;
            padding-left: 30px;
        }
    }

    & > div:nth-child(n + 2){
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 20px;

        & > h1 {
          font-size: 24px;
          color: var(--color--blue);
          font-weight: 500;
        }

        & > div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 15px;

          & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 30px;
        }

        & > h6 {
            font-weight: 300;
            font-size: 12px;
            font-style: italic;
            padding-left: 30px;
        }

          & > p {
            font-size: 16px;
            font-weight: 400;
            line-height: 120%;
            opacity: .8;
            color: var(--color--black);
          }

          & > ol {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 20px;

            & > li {
              font-size: 16px;
              font-weight: 400;
              line-height: 120%;
              color: var(--color--black);
              position: relative;
              padding-left: 25px;

              &::before{
                content: "";
                position: absolute;
                left: 5px;
                top: 5px;
                width: 8px;
                height: 8px;
                background-color: var(--color--blue);
                border-radius: 50%;
              }

              & > b {
                font-weight: 600;
                color: var(--color--black);
              }
            }
          }
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
    const { slug } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);
    const [relatedArticles, setRelatedArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchArticle = async () => {
        try {
          const articlesRef = collection(db, "Artigos");
          const q = query(articlesRef, where("slug", "==", slug));
          const querySnapshot = await getDocs(q);
  
          if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            const fetchedArticle = { id: doc.id, ...doc.data() };
            setArticle(fetchedArticle);
  
            fetchRelatedArticles(fetchedArticle.tags);
          } else {
            setError("Artigo não encontrado.");
          }
        } catch (err) {
          console.error("Erro ao buscar artigo:", err);
          setError("Ocorreu um erro ao carregar o artigo.");
        } finally {
          setLoading(false);
        }
      };
  
      const fetchRelatedArticles = async (tags) => {
        try {
          const articlesRef = collection(db, "Artigos");
          const q = query(articlesRef, where("tags", "array-contains-any", tags));
          const querySnapshot = await getDocs(q);
  
          const related = querySnapshot.docs
            .map((doc) => ({ id: doc.id, ...doc.data() }))
            .filter((relatedArticle) => relatedArticle.slug !== slug);
  
          setRelatedArticles(related);
        } catch (err) {
          console.error("Erro ao buscar artigos relacionados:", err);
        }
      };
  
      fetchArticle();
    }, [slug]);
  
    if (loading) {
      return <p>Carregando artigo...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!article) {
      return <p>Artigo não encontrado.</p>;
    }
  
    return (
      <div>
        <ArtigoAll>
          <ArtigoLeft>
            {/* primeira dobra */}
            <div>
              <h1>{article.title}</h1>
              <span>
                Escrito por: <b>{article.autor}</b> | {article.data}
              </span>
              <p dangerouslySetInnerHTML={{ __html: article.descricao }} />
              <img src={article.imagemPrincipal} alt="Imagem do blog" />
              <h6 dangerouslySetInnerHTML={{ __html: article.bibliografiaPrincipal }} />
            </div>

            {/* Segunda dobra */}
            {article.sumario?.map((topic, index) => (
              <div key={index} id={topic.id}>
                <h1>{topic.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: topic.content }} />
              </div>
            ))}
          </ArtigoLeft>

          <ArtigoRight>
            <div>
              <h3>Sumário</h3>
              <ol>
                {article.sumario?.map((topic, index) => (
                  <li key={index}>
                    <a href={`#${topic.id}`}>
                      <BsFillPlayFill /> <span>{topic.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
  
            <div>
              <a href="https://www.instagram.com/anovametalica/" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>
              <a href="https://www.facebook.com/people/Nova-Met%C3%A1lica/61564565333487/" target="_blank" rel="noopener noreferrer">
                <BsFacebook />
              </a>
              <a href="https://www.linkedin.com/in/novametalica/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
              </a>
            </div>
  
            <ArtigoCarrossel>
              <Swiper spaceBetween={10} slidesPerView={1} navigation loop modules={[Navigation]}>
                <SwiperSlide>
                  <a href="/pagina1">
                    <img
                      src="https://via.placeholder.com/600x300?text=Imagem+1"
                      alt="Imagem 1"
                      style={{
                        width: "100%",
                        borderRadius: "15px",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href="/pagina2">
                    <img
                      src="https://via.placeholder.com/600x300?text=Imagem+2"
                      alt="Imagem 2"
                      style={{
                        width: "100%",
                        borderRadius: "15px",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href="/pagina3">
                    <img
                      src="https://via.placeholder.com/600x300?text=Imagem+3"
                      alt="Imagem 3"
                      style={{
                        width: "100%",
                        borderRadius: "15px",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </SwiperSlide>
              </Swiper>
            </ArtigoCarrossel>
  
            <ArtigoRelacionados>
              <h3>Artigos Relacionados</h3>
              {relatedArticles.length > 0 ? (
                relatedArticles.map((related, index) => (
                  <div key={index}>
                    <h2>{related.title}</h2>
                    <p>{related.description}</p>
                    <Button05
                      children="Leia mais"
                      onClick={() => navigate(`/blog/${related.slug}`)}
                    />
                  </div>
                ))
              ) : (
                <p>Nenhum artigo relacionado encontrado.</p>
              )}
            </ArtigoRelacionados>
          </ArtigoRight>
        </ArtigoAll>
      </div>
    );
  };
  
  export default ArticlePage;
