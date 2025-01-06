import React from "react";
import styled from "styled-components";
import Button03 from "../../components/buttons/Button03";
import Button02 from "../../components/buttons/Button02";
import Button04 from "../../components/buttons/Button04";

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
    padding: 5%;
    background-color: var(--color--dark--blue);
    border-radius: 30px;

    @media (max-width: 768px){
        flex-direction: column ;
        padding: 10% 5%;
    }
`

const BlogSwiper = styled.div`
    width: 50%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 15px;
    background-color: var(--color--white);
    gap: 25px;

    @media (max-width: 768px){
        width: 100% ;
        height: auto;
        flex-direction: column;
    }

    & > div:nth-child(1){
        width: 50%;
        height: 100%;
        border-radius: 20px;
        background-color: var(--color--dark--blue);
        
        @media (max-width: 768px){
            width: 100%;
        }

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;

            @media (max-width: 768px){
                height: 200px;
            }
        }
    }

    & > div:nth-child(2){
        color: var(--color--white);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 50%;
        gap: 15px;
        color: var(--color--dark--blue);

        @media (max-width: 768px){
            width: 100%;
        }

        & > h4{
            font-size: 26px;
            font-weight: 500;
        }

        & > p{
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
`

const BlogTexts = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    color: var(--color--white);

    @media (max-width: 768px){
        width: 100%;
        padding: 5% 0;
        align-items: center;
        gap: 30px;
    }

    & > h1{
        font-size: 28px;
        font-weight: 500;
        width: 80%;

        @media (max-width: 768px){
            text-align: center;
            width: 100%;
            font-size: 24px;
        }
    }

    & > p{
        font-size: 16px;
        opacity: .8;

        @media (max-width: 768px){
            font-size: 14px;
        }
    }
`

const Blog = ({imageBlog, titulo, descricao, hashtag }) => {
    return (
        <>
            <BlogAll>
                <BlogSwiper>

                    <div>
                        <img src={imageBlog} />
                    </div>
                    <div>
                        <h4>{titulo}Titulo</h4>
                        <p>{descricao}Descrição</p>

                        <div>
                            <span>{hashtag}#steelframe</span>
                            <span>{hashtag}#drywall</span>
                            <span>{hashtag}#novametalica</span>
                            <span>{hashtag}#massa</span>
                        </div>
                        <Button04 />
                    </div>

                </BlogSwiper>
                <BlogTexts> 
                    <h1>Confira nosso blog e fique por dentro de tudo</h1>
                    <p>Novos posts nos dias 15 e 30 de cada mês</p>
                    <Button03 />
                </BlogTexts>
            </BlogAll>
        </>
    )
}

export default Blog;