import React, { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { db } from '../firebase'; 

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

import "./App.css";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/variables.css";


// Lazy loading das páginas
const PaginaInicial = lazy(() => import("./pages/Inicial/Inicial"));
const PaginaSobre = lazy(() => import("./pages/Sobre/Inicial"));
const PaginaProdutos = lazy(() => import("./pages/Produtos/Inicial"));
const PaginaParceria = lazy(() => import("./pages/Parcerias/Inicial"));
const PaginaBlog = lazy(() => import("./pages/Blog/Inicial"));
const LpPaginaParcerias = lazy(() => import("./pages/Parcerias/LP/Inicial"));
const ArticlePage = lazy(() => import("./pages/Blog/Artigo"));
const AddBlog = lazy(() => import("./pages/Blog/AdicionarBlog"));

// Componente para rolar a tela ao topo ao trocar de rota
function ScrollToTop() {
  const { pathname } = useLocation();

  
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true,   
      offset: 0,
      easing: 'ease-out-cubic'
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      {/* 'key={location.pathname}' força remontagem do componente ao trocar de rota */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/sobre" element={<PaginaSobre />} />
        <Route path="/produtos" element={<PaginaProdutos />} />
        <Route path="/parcerias" element={<PaginaParceria />} />
        <Route path="/blog" element={<PaginaBlog />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/lpparcerias" element={<LpPaginaParcerias />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
    </>
  );
}

function App() {

  console.log("Firebase Configurado!", db);

  return (
    // Se preferir, troque HashRouter por BrowserRouter; verifique se seu servidor lida bem com as rotas.
    <Router>
      <Header />
      <Suspense fallback={<div>Carregando...</div>}>
        <AnimatedRoutes />
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
