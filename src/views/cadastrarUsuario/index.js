import React, { useState } from "react";
import "./index.css";
import logo from "../../assets/imgs/logo.png";
import olho from "../../assets/imgs/olho.png";
import olhoRiscado from "../../assets/imgs/olhoriscado.png";
import { Link, useNavigate } from "react-router-dom";

function CadastrarUsuario() {
  const [showPassword, setShowPassword] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nome || !email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setError("");
    navigate("./");
  };

  return (
    <div className="container">
      <div>
      <img src={logo} alt="Ícone de Livro" className="logo" />
        <h1 className="texto">Cadastre-se!</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome:"
          className="input"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail:"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha:"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="eye-button"
            onClick={togglePasswordVisibility}
          >
            <img
              src={showPassword ? olhoRiscado : olho}
              alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
            />
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="botao">
          {/* Botão Voltar */}
          <Link to="/">
            <button type="button" className="submit-button">
              Voltar
            </button>
          </Link>
          {/* Botão Cadastrar */}
          <button type="submit" className="submit-button">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarUsuario;
