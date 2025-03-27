import React from "react";
import "../styles/Auth.css"; // Importa o CSS
import logo from "../logo.svg"; // Certifique-se de que o caminho do logo está correto

const Login = () => {
  return (
    <div className="container">
      <div className="left">
        <img src={logo} alt="Logo Elo Drinks" />
        <p>Seu drink em nossas mãos</p>
        <button className="secondary-button">Registrar-se</button>
      </div>
      <div className="right">
        <h2>Login</h2>
        <p>Entre para continuar</p>
        <form>
          <input type="email" placeholder="Usuário ou e-mail" required />
          <input type="password" placeholder="Senha" required />
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <input type="checkbox" id="show-password" />
            <label htmlFor="show-password" style={{ marginLeft: "5px", fontSize: "14px" }}>Exibir senha</label>
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;