import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"; // Firebase
import { db } from "../../../firebase"; // Configuração do Firebase
import Button05 from "../../components/buttons/Button05";

const CardAll = styled.div`
    width: 100%;
    height: 100vh;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
    background-color: var(--color--dark--blue);

    & > div:nth-child(1){
        height: 40%;
        width: 100%;
        border-radius: 20px;
        display: flex;
        align-items: flex-end;
        padding: 15px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cef8b191-587e-4d10-2225-47b90e631200/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        border-image: 0 fill linear-gradient(90deg, #0d142b95, #0000);

        & > div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 18px;
                font-weight: 600;
                color: var(--color--white);
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
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }

            & > button {
                font-size: 12px;
            }
        }
    }

    & > div:nth-child(2){
        height: 35%;
        width: 100%;
        border-radius: 20px;
        display: flex;
        align-items: flex-end;
        padding: 15px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2f058a7-3785-4301-a244-6d11e8ad5200/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        border-image: 0 fill linear-gradient(90deg, #0d142b95, #0000);

        & > div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 16px;
                font-weight: 600;
                color: var(--color--white);
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
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }

            & > button {
                font-size: 10px;
                padding: 10px 15px;
            }
        }
    }

    & > div:nth-child(3){
        height: 25%;
        width: 100%;
        border-radius: 20px;
        display: flex;
        align-items: flex-end;
        padding: 15px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbea8596-157f-401b-c346-8c9da797ee00/public');
        filter: contrast(120%);
        background-position: center;
        background-size: cover;
        border-image: 0 fill linear-gradient(90deg, #0d142b95, #0000);

        & > div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
            justify-content: center;

            & > h1 {
                font-size: 14px;
                line-height: 120%;
                color: var(--color--white);
                font-weight: 600;
            }

            & > p {
                font-size: 12px;
                font-weight: 400;
                opacity: 1;
                color: var(--color--white);
            }

            & > span {
                font-size: 8px;
                opacity: .8;
                font-style: italic;
                font-weight: 400;
                color: var(--color--white);

                & > b{
                    font-weight: 500;
                    color: var(--color--white);
                }
            }

            & > button {
                font-size: 10px;
                padding: 10px 15px;
            }
        }
    }

`

const CardLeftBlog = () => {
    const [latestBlogs, setLatestBlogs] = useState([]);

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

    return (
        <CardAll>
            {latestBlogs.map((blog, index) => (
                <div
                    key={blog.id}
                    style={{
                        backgroundImage: `url(${blog.image})`, // Imagem de fundo do blog
                    }}
                >
                    <div>
                        <h1>{blog.titulo}</h1>
                        <span>
                            Escrito por: <b>{blog.autor}</b> | {blog.data}
                        </span>
                        <Button05 text="Saber mais" />
                    </div>
                </div>
            ))}
        </CardAll>
    );
};

export default CardLeftBlog;