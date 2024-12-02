import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Certifique-se de importar o useNavigate
import { FaUser, FaLock } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { AiOutlineIdcard } from 'react-icons/ai';
import OlimpoIcon from "../../assets/OlimpoIcon.png";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();  // Inicializando o useNavigate

  const handleSubmitCadastro = (event) => {
    event.preventDefault();
    console.log("Login:",email, senha);
    navigate('/Login');  // Redirecionando para a página Home
  };

  return (
    <div className="container">
      <div className="form-container">
        {/* Seção de Login */}
        <div className="login-container">
          <img src={OlimpoIcon} alt="OLIMPO" className="olimpo-icon" />
          <p>Bem-vindo(a)! Não tem uma conta? Crie sua conta agora mesmo.</p>
          <form>
            <button className="login-button" type="submit">ENTRAR</button>
          </form>
        </div>

        {/* Seção de Login */}
        <div className="login-container">
          <h1 className="h1conta">Login</h1>
          <form onSubmit={handleSubmitCadastro}>
            <div className="input-field">
              <input
                type="email"
                placeholder="E-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FiMail className="icon" />
            </div>

            <div className="input-field">
              <input
                type="password"
                placeholder="Senha"
                required
                onChange={(e) => setSenha(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
            <button className="login-button" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
