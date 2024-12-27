import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

// Estilo da pesquisa
const PesquisaAll = styled.div`
    width: 100%!important;
    height: 10%!important;
    display: flex!important;
    align-items: center!important;
    justify-content: space-between!important;
    flex-direction: row!important;
    gap: 20px;
    padding: 15px;
    background-color: var(--color--dark--blue);
    overflow: hidden!important;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

    & > div:nth-child(1){
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        & > input {
            padding: 10px;
            width: 85%;
            border-radius: 12px;
            background-color: var(--color--white);

            &::placeholder{
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

    & > div:nth-child(2){
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 10px;

        & > button{
            background-color: var(--color--white);
            padding: 10px;
            font-size: 10px;
            border-radius: 10px;
            cursor: pointer;
        }

        & > button.active {
            background-color: var(--color--blue); /* Altere para a cor de fundo desejada */
            color: var(--color--white);
        }
    }
`;

const Pesquisa = ({ setFilteredArticles, allArticles }) => {
    const [searchTerm, setSearchTerm] = useState(""); // Para armazenar o termo da pesquisa
    const [activeTopic, setActiveTopic] = useState("Todos"); // Para controlar o tópico ativo (inicializa com "Todos")

    useEffect(() => {
        // Ao iniciar, mostra todos os artigos
        filterArticles(searchTerm, activeTopic);
    }, [allArticles, activeTopic]); // Refiltra sempre que allArticles ou activeTopic mudar

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); // Atualiza o termo de pesquisa
    };

    const handleTopicClick = (topic) => {
        setActiveTopic(topic); // Atualiza o tópico ativo
    };

    const handleSearchSubmit = () => {
        filterArticles(searchTerm, activeTopic); // Filtra com base no termo e no tópico
    };

    const filterArticles = (searchTerm, activeTopic) => {
        // Filtra os artigos com base no termo de pesquisa e no tópico ativo
        const filtered = allArticles.filter((article) => {
            // Verifica se o termo de pesquisa é uma hashtag
            const isHashtagSearch = searchTerm.startsWith("#");
            const matchesSearchTerm = isHashtagSearch
                ? article.hashtag.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) // Busca nas hashtags
                : article.titulo.toLowerCase().includes(searchTerm.toLowerCase()); // Busca no título normalmente

            const matchesTopic = activeTopic === "Todos" || article.topico === activeTopic;
            return matchesSearchTerm && matchesTopic;
        });
        setFilteredArticles(filtered); // Passa os artigos filtrados para o estado do componente pai
    };

    return (
        <PesquisaAll>
            <div>
                <input
                    type="search"
                    name="pesquisa"
                    placeholder="Qual artigo você está buscando?"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="button" onClick={handleSearchSubmit}>
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
