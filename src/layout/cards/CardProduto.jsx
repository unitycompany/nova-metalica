import react, { useState } from "react";
import styled from "styled-components";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;

    & img {
        width: 250px;
        height: 250px;
        object-fit: contain;
        object-position: center;
    }

    & h2 {
        width: 100%;
        font-size: 18px;
        text-align: center;
        font-weight: 600;
        text-transform: uppercase;
    }

    & div {
        width: 100%;
        color: var(--color--black);
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & span {
            font-size: 16px;
            font-weight: 400;
            opacity: 0.8;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            border: 1px solid #00000050;
            padding: 3px 5px;

            & svg {
                font-size: 12px;
            }
        }

        & ol {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 5px;
            padding: 6px 5px;
            border-top: none!important;
            border: 1px solid #00000050;

            & li {
                font-size: 14px;
                font-weight: 300;
                opacity: 0.7;
            }
        }
    }

    & button {
        border: 1px solid #00000050;
        padding: 15px 20px;
        width: 100%;
        cursor: pointer;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 0%;
            height: 100%;
            top: 0;
            left: 0;
            background: var(--color--black);
            transition: all 0.3s ease-in-out;
            z-index: -1;
        }

        &:hover::before {
            width: 100%;
        }

        &:hover {
            color: #fff;
        }
    }
`

export default function CardProduto ({
    imagem,
    nome, 
    medidas // agora é um array
}) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Content>
                <img src={imagem} />
                <h2>{nome}</h2>
                <div>
                    <span
                        style={{ cursor: 'pointer', userSelect: 'none' }}
                        onClick={() => setOpen(o => !o)}
                    >
                        Medidas {open ? <SlArrowUp /> : <SlArrowDown />}
                    </span>
                    {open && (
                        <ol>
                            {medidas && medidas.map((medida, idx) => (
                                <li key={idx}>{medida}</li>
                            ))}
                        </ol>
                    )}
                </div>
                <button>
                    Solicitar orçamento
                </button>
            </Content>
        </>
    )
}