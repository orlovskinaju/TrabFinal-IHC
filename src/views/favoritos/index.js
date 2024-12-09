import React from "react";
import { Link, useNavigate } from "react-router-dom";
import fotoPerfil from "../../assets/imgs/fotoPerfil.png";
import coracao from "../../assets/imgs/favourite.png";
import estrelas from "../../assets/imgs/estrelas avaliação.png";
import livro5 from "../../assets/imgs/jogos_vorazes[1].jpg";
import "./index.css";

const Favoritos = () => {
  const navigate = useNavigate();

  return (
    <div className="favoritos-page-container">
      {/* Menu Hambúrguer */}
      <div className="favoritos-menu">
        <button className="favoritos-menu-button">☰</button>
        <div className="favoritos-dropdown-menu">
          <Link to="/FeedLivros">Feed Livros</Link>
          <Link to="/PerfilUsuario">Perfil Usuário</Link>
          <Link to="/Favoritos">Favoritos</Link>
          <Link to="/">Sair</Link>
        </div>
      </div>

      {/* Foto de Perfil */}
      <div className="favoritos-profile-container">
        <button
          className="favoritos-profile-button"
          onClick={() => navigate("/PerfilUsuario")}
        >
          <img
            src={fotoPerfil}
            alt="Foto de Perfil"
            className="favoritos-profile-image"
          />
        </button>
      </div>

      {/* Título */}
      <div className="favoritos-titulo">Aqui Estão seus favoritos!</div>

      {/* Lista de Favoritos */}
      <div className="favoritos-list">
        <div className="favoritos-item">
          <img
            src={livro5}
            alt="Livro Favorito"
            className="favoritos-item-image"
          />
          <img
            src={coracao}
            alt="Coração"
            className="favoritos-item-coracao"
          />
          <div className="favoritos-item-avaliacao">
            <img
              src={estrelas}
              alt="Estrelas de Avaliação"
              className="favoritos-item-estrelas"
            />
          </div>
        </div>
      </div>

      {/* Botão Voltar */}
      <button
        className="favoritos-botao-voltar"
        onClick={() => navigate("/PerfilUsuario")}
      >
        Voltar
      </button>
    </div>
  );
};

export default Favoritos;
