import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore"; // Firebase
import { db } from "../../../firebase";
import { useNavigate } from "react-router-dom"; // Para redirecionamento
import Button03 from "../../components/buttons/Button03";
import Button04 from "../../components/buttons/Button04";
import Button05 from "../../components/buttons/Button05";
import GoBackButton from "../../components/buttons/Button01";
import Button02 from "../../components/buttons/Button02";

const BlogAll = styled.section`
  width: 97.5%;
  height: auto;
  max-width: 1280px;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
  position: relative;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 2.5%;
  background-color: var(--color--dark--blue);
  border-radius: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10% 5%;
  }
`;

const BlogSwiper = styled.div`
  width: 60%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-radius: 20px;
  background-color: var(--color--white);
  gap: 25px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }

  & > div:nth-child(1) {
    width: 50%;
    height: 100%;
    border-radius: 20px;
    background-color: var(--color--dark--blue);

    @media (max-width: 768px) {
      width: 100%;
    }

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;

      @media (max-width: 768px) {
        height: 200px;
      }
    }
  }

  & > div:nth-child(2) {
    color: var(--color--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    gap: 15px;
    color: var(--color--dark--blue);

    @media (max-width: 768px) {
      width: 100%;
    }

    & > h4 {
      font-size: 26px;
      font-weight: 500;
    }

    & > p {
      font-size: 14px;
      opacity: 0.6;
    }

    & > div {
      width: 100%;
      flex-wrap: wrap;
      display: flex;
      gap: 5px 10px;
      cursor: pointer;

      & > span {
        background-color: var(--color--dark--blue);
        padding: 5px 10px;
        border-radius: 5px;
        color: var(--color--white);
        font-size: 12px;
      }
    }
  }
`;

const BlogTexts = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  color: var(--color--white);

  @media (max-width: 768px) {
    width: 100%;
    padding: 5% 0;
    align-items: center;
    gap: 30px;
  }

  & > h1 {
    font-size: 28px;
    font-weight: 500;
    width: 80%;

    @media (max-width: 768px) {
      text-align: center;
      width: 100%;
      font-size: 24px;
    }
  }

  & > p {
    font-size: 16px;
    opacity: 0.8;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = collection(db, "Blog");
        const q = query(blogsRef, orderBy("data", "desc"), limit(1)); // Ordena por data e pega o último blog
        const querySnapshot = await getDocs(q);
        const fetchedBlogs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Erro ao buscar blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      {blogs.map((blog) => (
        <BlogAll key={blog.id}>
          <BlogSwiper  data-aos="fade-up" data-aos-delay="100">
            <div>
              <img src={blog.image} alt={blog.titulo} />
            </div>
            <div>
              <h4>{blog.titulo}</h4>
              <p>{blog.description}</p>

              <div>
                {blog.hashtag?.map((hashtag, index) => (
                  <span key={index}>#{hashtag}</span>
                ))}
              </div>
              <Button02
                children="Ler artigo"
                onClick={() => navigate(`/blog/${blog.link}`)}
              />
            </div>
          </BlogSwiper>
          <BlogTexts>
            <h1>Confira o nosso Blog e fique por dentro de tudo</h1>
            <p>Publicações novas toda semana, não perca!</p>
            <Button03 
            children="Ver todos os artigos"
            onClick={() => navigate ('/blog')}
            />
          </BlogTexts>
        </BlogAll>
      ))}
    </>
  );
};

export default Blog;