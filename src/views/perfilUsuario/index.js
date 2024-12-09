import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import fotoPerfil from "../../assets/imgs/fotoPerfil.png";
import coracao from "../../assets/imgs/favourite.png";
import olho from "../../assets/imgs/olho.png";
import olhoRiscado from "../../assets/imgs/olhoriscado.png";

const PerfilUsuario = () => {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const alternarVisibilidadeSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div className="perfil-container">
      {/* Menu Hambúrguer */}
      <div className="menu">
        <button className="menu-button" onClick={alternarMenu}>
          ☰
        </button>
        {menuAberto && (
          <div className="dropdown-menu">
            <Link to="/FeedLivros">Feed Livros</Link>
            <Link to="/PerfilUsuario">Perfil Usuário</Link>
            <Link to="/favoritos">Favoritos</Link>
            <Link to="/">Sair</Link>
          </div>
        )}
      </div>

      {/* Foto de Perfil */}
      <img src={fotoPerfil} alt="Foto de Perfil" className="foto-perfil" />

      {/* Informações do Usuário */}
      <div className="info">
        <div className="campo">
          <span>Nome usuário:</span>
          <span>Gatinho123</span>
        </div>
        <div className="campo senha-campo">
          <span>Senha:</span>
          <div className="senha-container">
            <span>{mostrarSenha ? "minhasenha123" : "**********"}</span>
            <img
              src={mostrarSenha ? olho : olhoRiscado}
              alt="Alternar Visibilidade"
              className="icone-senha"
              onClick={alternarVisibilidadeSenha}
            />
          </div>
        </div>
        <div className="campo">
          <span>E-mail:</span>
          <span>gatinho123@gmail.com</span>
        </div>
        <div className="campo">
          <span>Telefone:</span>
          <span>(43) 9 8976-3467</span>
        </div>
      </div>

      {/* Botão Favoritos */}
      <button
        className="botao favoritos"
        onClick={() => navigate("/favoritos")}
      >
        <img src={coracao} alt="Favoritos" className="icone-coracao" />
        Favoritos
      </button>

      {/* Botões de Ação */}
      <div className="botoes">
        <button className="botao editar">Editar Perfil</button>
        <button className="botao excluir">Excluir Perfil</button>
      </div>

      {/* Botão Voltar */}
      <button className="botao voltar" onClick={() => navigate("/FeedLivros")}>
        Voltar
      </button>
    </div>
  );
};

export default PerfilUsuario;
