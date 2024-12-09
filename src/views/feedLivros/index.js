import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import estrelas from "../../assets/imgs/estrelas avaliação.png";
import fotoPerfil from "../../assets/imgs/fotoPerfil.png";
import Pesquisa from "../../assets/imgs/BtnPesquisa.png";
import livro1 from "../../assets/imgs/trono_de_vidro_-_coroa_da_meia_noite[1].png";
import livro2 from "../../assets/imgs/a_seca[1].jpg";
import livro3 from "../../assets/imgs/herdeiras_do_mar[1].jpg";
import livro4 from "../../assets/imgs/caraval[1].jpg";
import livro5 from "../../assets/imgs/jogos_vorazes[1].jpg";
import livro6 from "../../assets/imgs/fourth_wing[1].jpg";

const livros = [livro1, livro2, livro3, livro4, livro5, livro6]; // Lista de imagens dos livros

const FeedLivros = () => {
  const navigate = useNavigate();

  const handleBookClick = (index) => {
    if (index === 4) { // Livro 5 é o índice 4 na lista
      navigate("/PesquisaLivro");
    }
  };

  return (
    <div className="feed-container">
      {/* Menu Hambúrguer */}
      <div className="menu">
        <button className="menu-button">☰</button>
        <div className="dropdown-menu">
          <Link to="/FeedLivros">Feed Livros</Link>
          <Link to="/PerfilUsuario">Perfil Usuário</Link>
          <Link to="/">Sair</Link>
        </div>
      </div>

      {/* Foto de Perfil */}
      <div className="profile-container">
        <button
          className="profile-button"
          onClick={() => navigate("/PerfilUsuario")}
        >
          <img
            src={fotoPerfil}
            alt="Foto de Perfil"
            className="profile-image"
          />
        </button>
      </div>

      {/* Barra de Pesquisa */}
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar livros..." />
        <button className="search-button">
          <img src={Pesquisa} alt="Pesquisar" className="search-icon" />
        </button>
      </div>

      {/* Grid de Livros */}
      <div className="books-grid">
        {livros.map((livro, index) => (
          <div
            key={index}
            className="book-card"
            onClick={() => handleBookClick(index)} // Chama a função no clique
          >
            <img src={livro} alt={`Livro ${index + 1}`} className="book-image1" />
            <div className="stars1">
              <img
                src={estrelas}
                alt="Estrelas de Avaliação"
                className="stars-image1"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Botão Voltar */}
      <button className="back-button1" onClick={() => navigate("/FeedLivros")}>
        Voltar
      </button>
    </div>
  );
};

export default FeedLivros;
