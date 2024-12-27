import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardLeftBlog from "../../layout/cards/CardBlog01";
import Pesquisa from "../../layout/cards/HeaderBlog";
import CardExample from "../../layout/cards/CardBlogExample"; // Seu componente de card

const BlogsAll = styled.section`
  width: 100%;
  max-width: 1140px;
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

  & > div:nth-child(1){
    width: 30%;
  }

  & > div:nth-child(2){
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    & > div {
      width: 100%;
      overflow-y: scroll;
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 30px;
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
  transition: transform .2s ease;
  
  &:hover {
    transform: scale(.95);
  }
`;

const Blogs = () => {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(5); 

  const articles = [
    {
      topico: "Steel Frame",
      titulo: "O que é Steel Frame?",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "construção"],
      autor: "Alice Pereira de Jesus",
      data: "26/04/2022",
      link: "como-o-steel-frame", // Slug aqui
      image: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cef8b191-587e-4d10-2225-47b90e631200/public'
    },

    {
      topico: "Steel Frame",
      titulo: "Diferença entre Steel Frame e Alvenaria",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "construção"],
      autor: "Carlos Silva",
      data: "12/05/2022",
      link: "vantagens-do-drywall", // Slug aqui
      image: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public' // Imagem 2
    },

    {
      topico: "Steel Frame",
      titulo: "Como o Steel Frame está revolucionando a Construção Civil?",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbea8596-157f-401b-c346-8c9da797ee00/public'
    },
    
    {
      topico: "Steel Frame",
      titulo: "Por que construir em Steel Frame é mais rápido?",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
    {
      topico: "Steel Frame",
      titulo: "Qual o custo de uma construção em Steel Frame?",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
    {
      topico: "Steel Frame",
      titulo: "Por que uma construção em Steel Frame é mais barata que em Alvenaria",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
    {
      topico: "Projeto",
      titulo: "Por que é necessário ter um Projeto de Cálculo Estrutural para Steel Frame?",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
    {
      topico: "Construções",
      titulo: "Construções Offsite: Diferenças entre Pré-fabricação e Modular",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
    {
      topico: "Projetos",
      titulo: "Steel Frame: A Solução Ideal para Projetos Modulares",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
    {
      topico: "Construções",
      titulo: "Por que construções com perfis metálicos/de aço estão transformando a Construção Civil?",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
    {
      topico: "Steel Frame",
      titulo: "Diferença entre Aço Comercial e Aço Normatizado",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
    {
      topico: "Steel Frame",
      titulo: "Obra de Steel Frame pode voar com vento?",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
    {
      topico: "Steel Frame",
      titulo: "Construção de Steel Frame enferruja?",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
    {
      topico: "Steel Frame",
      titulo: "É possível financiar uma obra de Steel Frame?",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
    {
      topico: "Steel Frame",
      titulo: "Posso modificar uma obra de Steel Frame?",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
    {
      topico: "Steel Frame",
      titulo: "Obra de Steel Frame atrai raios?",
      description: "Descrição curta e objetiva sobre o blog atual, Descrição curta e objetiva sobre o blog atual.",
      hashtag: ["steelframe", "arquitetura"],
      autor: "João Souza",
      data: "15/06/2022",
      link: "como-escolher-o-telhado", // Slug aqui
      image: 'https://via.placeholder.com/150'
    },
  ];

  useEffect(() => {
    setFilteredArticles(articles);
  }, []);

  const loadMoreArticles = () => {
    if (visibleArticles < filteredArticles.length) {
      setVisibleArticles(visibleArticles + 5);  // Carrega mais 5 artigos
    }
  };

  return (
    <BlogsAll>
      <div>
        <CardLeftBlog />
      </div>
      <div>
        <Pesquisa setFilteredArticles={setFilteredArticles} allArticles={articles} />
        <div>
          {filteredArticles.length > 0 ? (
            filteredArticles.slice(0, visibleArticles).map((article, index) => (
              <div key={index}>
                <a href={`/blog/${article.link}`} target="_blank">
                  <CardExample
                    topico={article.topico}
                    titulo={article.titulo}
                    description={article.description}
                    hashtag={article.hashtag}
                    autor={article.autor}
                    data={article.data}
                    image={article.image}
                  />
                </a>
              </div>
            ))
          ) : (
            <p>Nenhum artigo encontrado</p>
          )}
          {visibleArticles < filteredArticles.length && (
            <LoadMoreButton onClick={loadMoreArticles}>Ver mais blogs</LoadMoreButton>
          )}
        </div>
      </div>
    </BlogsAll>
  );
};

export default Blogs;
