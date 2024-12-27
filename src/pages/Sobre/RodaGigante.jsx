// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const RodaAll = styled.section`
//     width: 100%;
//     height: 200vh;
//     border: 1px solid red;
//     max-width: 1140px;
//     left: 50%;
//     top: 0;
//     transform: translateX(-50%);
//     position: relative;
//     overflow: hidden;
// `;

// const RodaGiganteDiv = styled.div`
//     position: absolute;
//     top: 12.5%;
//     left: 47.5%;
//     transform: translate(-50%, -50%);
//     width: 1200px;
//     height: 1200px;
//     border: 1px solid red;
//     border-radius: 50%;
//     background-color: var(--color--black);
//     z-index: 2;
//     display: flex;
//     flex-wrap: wrap;

//     transform: ${({ rotation }) => `rotate(${rotation}deg)`}; /* Aplicação da rotação com base no estado */

//     & > div {
//         border: 1px solid red;
//         width: 50%;
//         height: 50%;
//         border-radius: 2000px 0 0 0;
//     }

//     & > div:nth-child(1) {
//         background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/940fd126-d2eb-406f-b4ab-5fa32931ce00/public');
//         background-position: center;
//         background-size: cover;
//     }

//     & > div:nth-child(2) {
//         background-color: var(--color--blue);
//         transform: rotate(90deg);
//     }

//     & > div:nth-child(3) {
//         background-color: var(--color--dark--blue);
//         transform: rotate(-90deg);
//     }

//     & > div:nth-child(4) {
//         background-color: var(--color--gray);
//         transform: rotate(180deg);
//     }
// `;

// const RodaGigante = () => {
//     const [rotation, setRotation] = useState(0);

//     useEffect(() => {
//         let lastScrollY = 0;
//         let rotationValue = 0;

//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             // Calcula a rotação com base na rolagem da página, ajustando a velocidade
//             if (Math.abs(scrollPosition - lastScrollY) > 4) { // Verifica mudanças no scroll
//                 rotationValue += (scrollPosition - lastScrollY) * 0.2; // Ajuste a constante para controlar a velocidade
//                 setRotation(rotationValue);
//             }
//             lastScrollY = scrollPosition; // Atualiza a posição anterior
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <RodaAll>
//             <RodaGiganteDiv rotation={rotation}>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </RodaGiganteDiv>
//         </RodaAll>
//     );
// };

// export default RodaGigante;
