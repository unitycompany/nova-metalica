// import React, { useEffect, useRef } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../../firebase"; // Certifique-se de que o Firebase está configurado corretamente
// import styled from "styled-components";

// const Teste = styled.div`
//   height: 100vh;
//   border: 1px solid red;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

// // Função para adicionar o blog ao Firestore
// const addBlogToFirestore = async () => {
//   try {
//     console.log("Iniciando a adição do blog ao Firestore...");
//     const newBlog = {
//       link: "como-o-steel-frame",
//       title: "Como o Steel Frame está revolucionando a construção",
//       autor: "Alice Pereira de Jesus",
//       data: "24 de novembro de 2023",
//       imagemPrincipal: "https://via.placeholder.com/500",
//       bibliografiaImagemPrincipal: "https://alephsramos.com.br/",
//       t1Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       t1Pergunta1: "O que é steel frame?",
//       t1Resposta1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       t1Pergunta2: "O que é Drywall?",
//       t1Resposta2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       t1Image: "https://via.placeholder.com/500",
//       topico1: "Pergunta 01",
//       t1RespostaTopic: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       bibliografiaT1: "https://alephsramos.com.br",
//       t2Image: "https://via.placeholder.com/500",
//       topico2: "Pergunta 02",
//       t2RespostaTopic: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       bibliografiaT2: "https://alephsramos.com.br",
//       t3Image: "https://via.placeholder.com/500",
//       topico3: "Pergunta 03",
//       t3RespostaTopic: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       bibliografiaT3: "https://alephsramos.com.br",
//       t4Image: "https://via.placeholder.com/500",
//       topico4: "Pergunta 04",
//       t4RespostaTopic: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       bibliografiaT4: "https://alephsramos.com.br",
//       t5Image: "https://via.placeholder.com/500",
//       topico5: "Pergunta 05",
//       t5RespostaTopic: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       bibliografiaT5: "https://alephsramos.com.br",
//       tags: ["steel frame", "construção", "inovação"],
//       sumario: [
//         { id: "topico1", title: "Introdução ao Steel Frame" },
//         { id: "topico2", title: "Vantagens do Steel Frame" },
//         { id: "topico3", title: "Exemplos de Construções com Steel Frame" },
//       ],
//       carrosselImagens: [
//         { src: "https://via.placeholder.com/100", link: "/" },
//         { src: "https://via.placeholder.com/100", link: "/produtos" },
//         { src: "https://via.placeholder.com/100", link: "/sobre" },
//       ],
//       related: [
//         { title: "Artigo relacionado 1", description: "Descrição do artigo relacionado" },
//       ],
//     };

//     console.log("Dados a serem enviados:", newBlog);

//     const docRef = await addDoc(collection(db, "Artigos"), newBlog);
//     console.log("Documento adicionado com ID:", docRef.id);
//   } catch (e) {
//     console.error("Erro ao adicionar documento:", e.message || e);
//   }
// };

// // Componente para chamar a função de adição automaticamente
// const AddBlog = () => {
//   const isAdded = useRef(false); // Controle para evitar múltiplas execuções

//   useEffect(() => {
//     if (!isAdded.current) {
//       addBlogToFirestore()
//         .then(() => {
//           console.log("Adição do blog concluída.");
//           isAdded.current = true; // Marca como concluído
//         })
//         .catch((error) =>
//           console.error("Erro ao chamar a função de adicionar blog:", error)
//         );
//     }
//   }, []);

//   return (
//     <Teste>
//       <h1>Adicionando Blog ao Firestore...</h1>
//       <p>Verifique o console para os logs detalhados.</p>
//     </Teste>
//   );
// };

// export default AddBlog;
