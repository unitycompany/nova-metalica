import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs } from "firebase/firestore"; // Importações do Firebase
import { db } from "../../../firebase"; // Importa o Firestore configurado
import { useNavigate } from 'react-router-dom'; // Para redirecionamento
import CardLeftBlog from "../../layout/cards/CardBlog01";
import Pesquisa from "../../layout/cards/HeaderBlog";
import CardExample from "../../layout/cards/CardBlogExample"; // Seu componente de card

const BlogsAll = styled.section`
  width: 100%;
  max-width: 1280px;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 5vh;

  @media (max-width: 768px){
    height: auto;
    margin-top: 25px;
    padding: 0 2.5%;
  }

  & > div:nth-child(1) {
    width: 30%;

    @media (max-width: 768px){
      display: none;
    }
  }

  & > div:nth-child(2) {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px){
      width: 100%;
    }

    & > div {
      width: 100%;
      overflow-y: scroll;
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 30px;

      @media (max-width: 768px){
      }
    }
  }
`;

const LoadMoreButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: var(--color--dark--blue);
  color: var(--color--white);
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(0.95);
  }
`;

const Blogs = () => {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(5); // Quantos artigos mostrar inicialmente
  const navigate = useNavigate(); // Para redirecionamento

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Blog"));
        if (querySnapshot.empty) {
          console.warn("Nenhum documento na coleção 'Blog'.");
          setFilteredArticles([]); // Garante que o estado seja atualizado
        } else {
          const blogs = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("Documentos encontrados:", blogs); // Verifica os dados
          setFilteredArticles(blogs);
          console.log("Estado atualizado:", blogs); // Verifica o estado após atualização
        }
      } catch (error) {
        console.error("Erro ao buscar blogs:", error);
      }
    };
  
    fetchBlogs();
  }, []);

  const handleRedirect = (link) => {
    navigate(`/blog/${link}`);
  };

  return (
    <BlogsAll>
      <div>
        <CardLeftBlog />
      </div>
      <div>
        <Pesquisa setFilteredArticles={setFilteredArticles} allArticles={filteredArticles} />
        <div>
          {filteredArticles.length > 0 ? (
            filteredArticles.slice(0, visibleArticles).map((article) => (
              <div key={article.id} onClick={() => handleRedirect(article.link)} style={{ cursor: 'pointer' }}>
                <CardExample
                  topico={article.topico}
                  titulo={article.titulo}
                  description={article.description}
                  hashtag={article.hashtag}
                  autor={article.autor}
                  data={article.data}
                  image={article.image}
                />
              </div>
            ))
          ) : (
            <p>Nenhum artigo encontrado.</p>
          )}
          {visibleArticles < filteredArticles.length && (
            <LoadMoreButton onClick={() => setVisibleArticles(visibleArticles + 5)}>
              Ver mais blogs
            </LoadMoreButton>
          )}
        </div>
      </div>
    </BlogsAll>
  );
};

export default Blogs;
