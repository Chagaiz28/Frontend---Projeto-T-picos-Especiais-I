import React from "react";
import "../styles/Auth.css";
import logo from "../logo.svg"; // Ajuste o caminho do logo

const Register = () => {
  return (
    <div className="container">
      <div className="left">
        <img src={logo} alt="Logo Elo Drinks" />
      </div>
      <div className="right">
        <h2>Cadastro</h2>
        <form>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Cadastrar</button>
        </form>
        <p>Já tem uma conta? <a href="/login">Faça login</a></p>
      </div>
    </div>
  );
};

export default Register;
