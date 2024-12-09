import React from "react";
import { useNavigate, Link } from "react-router-dom";
import estrelas from "../../assets/imgs/estrelas avaliação.png";
import coracao from "../../assets/imgs/favourite.png";
import comentarioIcon from "../../assets/imgs/comentário.png";
import avatar1 from "../../assets/imgs/fotoPerfil1.png";
import avatar2 from "../../assets/imgs/fotoPerfil2.png";
import avatar3 from "../../assets/imgs/fotoPerfil3.png";
import fotoPerfil from "../../assets/imgs/fotoPerfil.png";
import livro from "../../assets/imgs/jogos_vorazes[1].jpg";
import Pesquisa from "../../assets/imgs/BtnPesquisa.png";
import "./index.css";

const PesquisaLivro = () => {
  const navigate = useNavigate();

  // Dados simulados (comentários do livro com avatares)
  const comentarios = [
    {
      id: 1,
      usuario: "fulano1",
      avatar: avatar1,
      comentario: "é bom, mas a loira me estressa",
    },
    {
      id: 2,
      usuario: "fulano2",
      avatar: avatar2,
      comentario: "muito bom",
    },
    {
      id: 3,
      usuario: "fulano3",
      avatar: avatar3,
      comentario: "é bom, mas a loira me estressa",
    },
  ];

  return (
    <div className="pesquisa-livro-container">
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
        <input type="text" value="Jogos Vorazes" disabled /> {/* Campo fixado com nome do livro */}
        <button className="search-button">
          <img
            src={Pesquisa} // Uso correto da variável do botão de pesquisa
            alt="Pesquisar"
            className="search-icon"
          />
        </button>
      </div>

      {/* Imagem do Livro */}
      <div className="book-detail">
        <img src={livro} alt="Jogos Vorazes" className="book-image" />
        <button className="favorite-button">
          <img src={coracao} alt="Favoritar" className="favorite-icon" />
        </button>
      </div>

      {/* Avaliação */}
      <div className="stars">
        <img src={estrelas} alt="Estrelas de Avaliação" className="stars-image" />
      </div>

      {/* Botão Voltar */}
      <button className="back-button" onClick={() => navigate("/FeedLivros")}>Voltar
      </button>

      {/* Campo de Comentários */}
      <div className="comments-section">
        <h3>Deixe seu comentário</h3>
        <div className="comment-input-container">
          <textarea
            className="comment-input"
            placeholder="Digite aqui..."
          ></textarea>
          <button className="send-button">
            <img src={comentarioIcon} alt="Enviar Comentário" className="comment-icon" />
          </button>
        </div>

        {/* Lista de Comentários */}
        <div className="comments-list">
          {comentarios.map((comentario) => (
            <div key={comentario.id} className="comment-item">
              <div className="user-info">
                <img
                  src={comentario.avatar}
                  alt={comentario.usuario}
                  className="user-avatar"
                />
                <span className="user-name">{comentario.usuario}</span>
              </div>
              <p className="user-comment">{comentario.comentario}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PesquisaLivro;
