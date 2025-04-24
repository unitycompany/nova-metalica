import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"; // Firebase
import { db } from "../../../firebase"; // Configuração do Firebase
import Button05 from "../../components/buttons/Button05";   
import { useNavigate } from "react-router-dom";

const HomeAll = styled.section`
    width: 100%;
    height: 100vh;
    max-width: 1280px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 7.5% 2.5% 5% 2.5%;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 10% 2.5% 0% 2.5%;
        height: 7.5vh;
    }
`

const HomeLeft = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 40px;
    border-radius: 0px 15px 15px 0px;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cef8b191-587e-4d10-2225-47b90e631200/public');
    filter: contrast(120%);
    background-position: center;
    background-size: cover;
    border-image: 0 fill linear-gradient(90deg, #00000050, #0000);  

    @media (max-width: 768px){
        width: 100%;
        padding: 20px;
        border-image: 0 fill linear-gradient(90deg, #00000070, #0000);  
        display: none;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
        justify-content: center;

        & > h1 {
            font-size: 28px;
            font-weight: 600;
            background: linear-gradient(130deg, var(--color--white), var(--color--gray));
            -webkit-background-clip: text;  
            background-clip: text; 
            color: transparent; 
            line-height: 120%;

            @media (max-width: 768px){
                font-size: 20px;
            }
        }

        & > p {
            font-size: 16px;
            font-weight: 400;
            opacity: 1;
            color: var(--color--white);
        }

        & > span {
            font-size: 12px;
            font-style: italic;
            opacity: .8;
            color: var(--color--white);

            & > b{
                font-weight: 500;
                color: var(--color--white);
            }
        }
    }
`

const HomeRight = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px){
        width: 100%;
        display: none;
    }

    & > div:nth-child(1){
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 60%;
        border-radius: 0px 15px 15px 0px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 30px;
        border-image: 0 fill linear-gradient(90deg, #00000050, #0000);

            & > div {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 24px;
                font-weight: 600;
                background: linear-gradient(130deg, var(--color--white), var(--color--gray));
                -webkit-background-clip: text;  
                background-clip: text; 
                color: transparent; 
                line-height: 120%;
            }

            & > p {
                font-size: 14px;
                font-weight: 300;
                opacity: 1;
                color: var(--color--white);
            }

            & > span {
                font-size: 10px;
                opacity: .8;
                font-style: italic;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }
        }
    }

    & > div:nth-child(2){
        height: 40%;
        width: 100%;
        border-radius: 0px 15px 15px 0px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 30px;
        background-color: var(--color--white);
        position: relative;
        z-index: 1;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbea8596-157f-401b-c346-8c9da797ee00/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        border-image: 0 fill linear-gradient(90deg, #00000050, #0000);
        overflow: hidden;

        @media (max-width: 768px){
            width: 100%;
        }

            & > div {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 20px;
                font-weight: 600;
                background: linear-gradient(130deg, var(--color--white), var(--color--gray));
                -webkit-background-clip: text;  
                background-clip: text; 
                color: transparent; 
                line-height: 120%;
            }

            & > p {
                font-size: 12px;
                font-weight: 400;
                opacity: 1;
                color: var(--color--white);
            }

            & > span {
                font-size: 10px;
                opacity: .8;
                font-style: italic;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }
        }
    }
`

const Home = () => {
    const [latestBlogs, setLatestBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLatestBlogs = async () => {
            try {
                const q = query(
                    collection(db, "Blog"),
                    orderBy("data", "desc"), // Ordena pela data em ordem decrescente
                    limit(3) // Limita aos 3 últimos blogs
                );

                const querySnapshot = await getDocs(q);
                const blogs = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setLatestBlogs(blogs); // Define os últimos 3 blogs no estado
            } catch (error) {
                console.error("Erro ao buscar os últimos blogs:", error);
            }
        };

        fetchLatestBlogs();
    }, []);

    const handleRedirect = (link) => {
        navigate(`/blog/${link}`);
      };

    return (
        <HomeAll>
            {latestBlogs.length > 0 && (
                <>
                    <HomeLeft
                        style={{
                            backgroundImage: `url(${latestBlogs[0].image})`,
                            cursor: "pointer",
                        }}
                        onClick={() => handleRedirect(latestBlogs[0].link)}
                    >
                        <div>
                            <h1>{latestBlogs[0].titulo}</h1>
                            <span>
                                Escrito por <b>{latestBlogs[0].autor}</b> | {latestBlogs[0].data}
                            </span>
                            <Button05 
                                children="Ler artigo" 
                                onClick={() => handleRedirect(latestBlogs[0].link)}
                            />
                        </div>
                    </HomeLeft>
                    <HomeRight>
                        {latestBlogs.slice(1).map((blog) => (
                            <div
                                key={blog.id}
                                style={{
                                    backgroundImage: `url(${blog.image})`,
                                    cursor: "pointer",
                                }}
                                onClick={() => handleRedirect(blog.link)}
                            >
                                <div>
                                    <h1>{blog.titulo}</h1>
                                    <span>
                                        Escrito por <b>{blog.autor}</b> | {blog.data}
                                    </span>
                                    <Button05 
                                        children="Ler artigo" 
                                        onClick={() => handleRedirect(blog.link)}
                                    />
                                </div>
                            </div>
                        ))}
                    </HomeRight>
                </>
            )}
        </HomeAll>
    );
};

export default Home;