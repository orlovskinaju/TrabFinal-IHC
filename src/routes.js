import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Login from "./views/login/index";
import CadastrarUsuario from "./views/cadastrarUsuario";
import PerfilUsuario from "./views/perfilUsuario";
import Favoritos from "./views/favoritos";
import FeedLivros from "./views/feedLivros";
import PesquisaLivro from "./views/pesquisaLivro";

function RoutesApp() {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={300}>
                <Routes location={location}>
                    <Route path="/" element={<Login />} />
                    <Route path="/CadastrarUsuario" element={<CadastrarUsuario />} />
                    <Route path="/PerfilUsuario" element={<PerfilUsuario />} />
                    <Route path="/Favoritos" element={<Favoritos />} />
                    <Route path="/FeedLivros" element={<FeedLivros />} />
                    <Route path="/PesquisaLivro" element={<PesquisaLivro />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <RoutesApp />
        </BrowserRouter>
    );
}