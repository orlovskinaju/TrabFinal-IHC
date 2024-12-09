import React, { useState } from "react";
import "./index.css";
import logo from "../../assets/imgs/logo.png";
import olho from "../../assets/imgs/olho.png";
import olhoRiscado from "../../assets/imgs/olhoriscado.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    // Verifica se o e-mail está no formato correto usando regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se os campos estão preenchidos
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    // Verifica o formato do e-mail
    if (!validateEmail(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    // Se tudo estiver correto, limpa o erro e navega para a próxima tela
    setError("");
    navigate("/feedLivros");
  };

  const handleForgotPassword = () => {
    alert("Que pena! Tente lembrar dela."); // Exibe um alerta ao clicar
  };

  return (
    <div className="container">
      <img src={logo} alt="Ícone de Livro" className="icon" />
      <form className="form" onSubmit={handleSubmit}>
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
          <button type="button" className="eye-button" onClick={togglePasswordVisibility}>
            <img
              src={showPassword ? olhoRiscado : olho}
              alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
            />
          </button>
        </div>
        {error && <div className="error-message">{error}</div>} {/* Exibe mensagem de erro */}
        <div className="link-container">
          <button type="button" className="link-button" onClick={handleForgotPassword}>
            Esqueci minha senha
          </button>
          <Link to="/CadastrarUsuario" className="link-button">
            Cadastre-se já!
          </Link>
        </div>
        <div className="botao">
          <button
            type="submit"
            className="submitbutton"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
