import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

import "./App.css";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/variables.css";

// Lazy loading para as páginas
const PaginaInicial = lazy(() => import("./pages/Inicial/Inicial"));
const PaginaSobre = lazy(() => import("./pages/Sobre/Inicial"));
const PaginaProdutos = lazy(() => import("./pages/Produtos/Inicial"));
const PaginaParceria = lazy(() => import("./pages/Parcerias/Inicial"));
const PaginaBlog = lazy(() => import("./pages/Blog/Inicial"));
const LpPaginaParcerias = lazy(() => import("./pages/Parcerias/LP/Inicial"));
const ArticlePage = lazy(() => import("./pages/Blog/Artigo"));

function App() {
  // Se estiver em "production", basename será "/nova-metalica"
  // Se estiver em "development", basename será ""
  const base = process.env.NODE_ENV === "production" ? "/nova-metalica" : "";

  return (
    <Router basename={base}>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/sobre" element={<PaginaSobre />} />
          <Route path="/produtos" element={<PaginaProdutos />} />
          <Route path="/parcerias" element={<PaginaParceria />} />
          <Route path="/blog" element={<PaginaBlog />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/lpparcerias" element={<LpPaginaParcerias />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
