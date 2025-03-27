import React from "react";
import "../styles/Auth.css";
import logo from "../logo.svg";

const Register = () => {
  return (
    <div className="container">
      <div className="left">
        <img src={logo} alt="Logo Elo Drinks" />
        <p>Seu drink em nossas mãos</p>
      </div>
      <div className="right">
        <h2>Registrar</h2>
        <p>Registre-se para continuar</p>
        <form>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <input type="password" placeholder="Confirme sua senha" required />
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <input type="checkbox" id="show-password" />
            <label htmlFor="show-password" style={{ marginLeft: "5px", fontSize: "14px" }}>Exibir senha</label>
          </div>
          <button type="submit">Registrar</button>
        </form>
        <p>Já possui uma conta? <a href="/login">Faça login</a></p>
      </div>
    </div>
  );
};

export default Register;