import React from "react";
import styled from "styled-components";
import Button03 from "../../components/buttons/Button03";
import Button02 from "../../components/buttons/Button02";
import Button04 from "../../components/buttons/Button04";

const ParceirosAll = styled.section`
    width: 100%;
    height: 65vh;
    max-width: 1140px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    gap: 50px;
    background-color: #00000010;
    border-radius: 30px;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

const ParceirosTexts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    padding-left: 5%;
    margin-left: -10px;

    & > h1{
        font-size: 32px;
        font-weight: 500;
        color: var(--color--black);

        & > b{
            color: var(--color--blue);
            font-weight: 500;
        }
    }

    & > p{
        font-size: 16px;
        font-weight: 400;
        opacity: .6;
        color: var(---color--black);
    }

    & > div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        gap: 20px;

        & > div{
            width: 50%;
            height: 10vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 2px;
            background-color: var(--color--dark--blue);
            padding: 15px;
            border-radius: 12px;

            & > span{
                font-size: 30px;
                font-weight: 600;
                color: var(--color--blue);
            }

            & > p{
                font-size: 12px;
                opacity: .6;
                color: var(--color--white);
            }
        }
    }
`

const ParceirosImage = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
    }
`

const Parceiros = () => {
    return (
        <>
            <ParceirosAll>
                <ParceirosTexts>
                    <h1>Seja nosso <b>parceiro</b></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sequi magni porro quibusdam a. Laudantium modi, maiores possimus accusantium enim exercitationem delectus ex voluptas molestias magni, facilis voluptatibus reiciendis a!</p>
                    <div>
                        <div>
                            <span>100%</span>
                            <p>Todos os perfis normatizados</p>
                        </div>
                        <div>
                            <span>100%</span>
                            <p>Todos os perfis normatizados</p>
                        </div>
                    </div>
                    <Button04 href="/parcerias">Ser parceiro</Button04>
                </ParceirosTexts>
                <ParceirosImage>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b790bac9-6a8a-402f-734b-0ab292815b00/public" alt="foto de perfis de steel frame" />
                </ParceirosImage>
            </ParceirosAll>
        </>
    )
}

export default Parceiros;