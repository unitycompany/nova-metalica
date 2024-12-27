import React from "react";
import styled from "styled-components";
import Button03 from "../../components/buttons/Button03";
import Button02 from "../../components/buttons/Button02";
import Button04 from "../../components/buttons/Button04";

const BlogAll = styled.section`
    width: 100%;
    height: 35vh;
    max-width: 1140px;
    left: 50%;
    top: 0%;
    transform: translateX(-50%);
    position: relative;
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 0 5%;
    background-color: var(--color--dark--blue);
    border-radius: 30px;
`

const BlogSwiper = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 15px;
    background-color: var(--color--white);
    gap: 25px;

    & > div:nth-child(1){
        width: 50%;
        height: 100%;
        border-radius: 20px;
        background-color: var(--color--dark--blue);

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
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

    & > h1{
        font-size: 24px;
        font-weight: 500;
        width: 80%;
    }

    & > p{
        font-size: 14px;
        opacity: .6;
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