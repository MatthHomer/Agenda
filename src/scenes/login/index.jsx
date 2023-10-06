import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import {} from './style.css';
import { Link } from "react-router-dom";


const Login = ({ to }) => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <Box>
      <div className="App">
      <div className="auth-form-container">
      <img className="logo" src="/assets/img/LOGO_ENDBAR.png" alt="" />
      <form className="login-form" onSubmit={handleSubmit}>
        <label form="email"></label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="seu@email.com" id="email" name="email"></input>
        <label form="senha"></label>
        <input value={senha} onChange={(e) => setSenha(e.target.value)} type="senha" placeholder="Sua Senha" id="senha" name="senha"></input>
      </form>
      <Link to="/calendar"><button className="link-btn">Entrar</button></Link>
      </div>
      </div>
    </Box>
  )
};

export default Login;