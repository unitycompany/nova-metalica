import React, { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { db } from "../firebase";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

import "./App.css";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/variables.css";

// Lazy loading das páginas
const PaginaInicial = lazy(() => import("./pages/Inicial/Inicial"));
const PaginaSobre = lazy(() => import("./pages/Sobre/Inicial"));
const PageSteelFrame = lazy(() => import("./pages/Produtos/Steelframe/Inicial"));
const PageDrywall = lazy(() => import("./pages/Produtos/Drywall/Inicial"));
const PaginaParceria = lazy(() => import("./pages/Parcerias/Inicial"));
const PaginaBlog = lazy(() => import("./pages/Blog/Inicial"));
const LpPaginaParcerias = lazy(() => import("./pages/Parcerias/LP/Inicial"));
const ArticlePage = lazy(() => import("./pages/Blog/Artigo"));
const AddBlog = lazy(() => import("./pages/Blog/AdicionarBlog"));
const TermosCondicoes = lazy(() => import("./pages/Politicas/Termos/Termos"));
const PoliticaDados = lazy(() => import("./pages/Politicas/Dados/Dados"));
const PoliticaPrivacidade = lazy(() => import("./pages/Politicas/Privacidade/Privacidade"));
const LP = lazy(() => import("./pages/LP/Inicial"));

// Componente para rolar a tela ao topo ao trocar de rota
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 0,
      easing: "ease-out-cubic",
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
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/sobre" element={<PaginaSobre />} />
        <Route path="/produtos/drywall" element={<PageDrywall />} />
        <Route path="/produtos/steel-frame" element={<PageSteelFrame />} />
        <Route path="/parcerias" element={<PaginaParceria />} />
        <Route path="/blog" element={<PaginaBlog />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/lpparcerias" element={<LpPaginaParcerias />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/politica-de-dados" element={<PoliticaDados />} />
        <Route path="/termos-de-condicoes" element={<TermosCondicoes />} />
        <Route path="/lp" element={<LP />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

// Separando o conteúdo principal dentro do Router
function MainApp() {
  const location = useLocation();
  const isLandingPage = location.pathname.startsWith("/lp");

  console.log("Firebase Configurado!", db);

  return (
    <>
      {!isLandingPage && <Header />}
      <Suspense fallback={<div>Carregando...</div>}>
        <AnimatedRoutes />
      </Suspense>
      {!isLandingPage && <Footer />}
    </>
  );
}

export default App;
