import React from "react";
import "../styles/Auth.css"; // Caminho relativo correto;
import logo from "../logo.svg"; // Ajuste o caminho do logo

const Login = () => {
  return (
    <div className="container">
      <div className="left">
        <img src={logo} alt="Logo Elo Drinks" />
      </div>
      <div className="right">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
        <p>Não tem uma conta? <a href="/register">Cadastre-se</a></p>
      </div>
    </div>
  );
};

export default Login;
