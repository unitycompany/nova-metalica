import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { collection, getDocs, query, where } from "firebase/firestore"; // Para consultas no Firebase
import { db } from "../../../firebase"; // Configuração do Firebase

// Estilo da pesquisa
const PesquisaAll = styled.div`
    width: 100%!important;
    height: auto!important;
    display: flex!important;
    align-items: center!important;
    justify-content: space-between!important;
    flex-direction: row!important;
    gap: 20px;
    padding: 10px;
    background-color: var(--color--dark--blue);
    overflow: hidden!important;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px){
        flex-direction: column!important;
        gap: 15px!important;
    }

    & > div:nth-child(1) {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        @media (max-width: 768px){
            width: 100%;
        }

        & > input {
            padding: 10px;
            width: 85%;
            border-radius: 12px;
            background-color: var(--color--white);

            &::placeholder {
                font-size: 14px;
            }
        }

        & > button {
            width: 15%;
            padding: 10px;
            border-radius: 12px;
            cursor: pointer;
            background-color: var(--color--white);
        }
    }

    & > div:nth-child(2) {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 10px;

        @media (max-width: 768px){
            width: 100%;
            justify-content: center;
        }

        & > button {
            background-color: var(--color--white);
            padding: 10px;
            font-size: 12px;
            border-radius: 10px;
            cursor: pointer;
        }

        & > button.active {
            background-color: var(--color--blue);
            color: var(--color--white);
        }
    }
`;

const Pesquisa = ({ setFilteredArticles }) => {
    const [searchTerm, setSearchTerm] = useState(""); // Termo de pesquisa
    const [activeTopic, setActiveTopic] = useState("Todos"); // Tópico ativo

    useEffect(() => {
        // Faz a busca sempre que searchTerm ou activeTopic mudar
        fetchArticles(searchTerm, activeTopic);
    }, [searchTerm, activeTopic]);

    const fetchArticles = async (searchTerm, activeTopic) => {
        try {
            let q = collection(db, "Blog");

            // Aplica o filtro por tópico, se necessário
            if (activeTopic !== "Todos") {
                q = query(q, where("topico", "==", activeTopic));
            }

            const querySnapshot = await getDocs(q);
            const articles = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            // Realiza a filtragem parcial localmente
            const filtered = articles.filter((article) => {
                const term = searchTerm.toLowerCase();
                return (
                    article.titulo.toLowerCase().includes(term) || // Busca parcial no título
                    article.hashtag.some((tag) => tag.toLowerCase().includes(term)) // Busca em hashtags
                );
            });

            setFilteredArticles(filtered); // Atualiza os artigos filtrados
        } catch (error) {
            console.error("Erro ao buscar artigos:", error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); // Atualiza o termo de pesquisa
    };

    const handleTopicClick = (topic) => {
        setActiveTopic(topic); // Atualiza o tópico ativo
    };

    return (
        <PesquisaAll>
            <div>
                <input
                    type="search"
                    placeholder="Qual artigo você está buscando?"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="button" onClick={() => fetchArticles(searchTerm, activeTopic)}>
                    <BsSearch />
                </button>
            </div>
            <div>
                {["Steel Frame", "Drywall", "Telhados", "Todos"].map((topic) => (
                    <button
                        key={topic}
                        className={activeTopic === topic ? "active" : ""}
                        onClick={() => handleTopicClick(topic)}
                    >
                        {topic}
                    </button>
                ))}
            </div>
        </PesquisaAll>
    );
};

export default Pesquisa;
