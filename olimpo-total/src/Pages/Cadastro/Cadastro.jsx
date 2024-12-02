import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Certifique-se de importar o useNavigate
import { FaUser, FaLock } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { AiOutlineIdcard } from 'react-icons/ai';
import OlimpoIcon from "../../assets/OlimpoIcon.png";
import './Cadastro.css';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();  // Inicializando o useNavigate

  const handleSubmitCadastro = (event) => {
    event.preventDefault();
    console.log("Cadastro:", nome, email, cpf, senha);
    navigate('/home');  // Redirecionando para a página Home
  };

  return (
    <div className="container">
      <div className="form-container">
        {/* Seção de Login */}
        <div className="login-container">
          <img src={OlimpoIcon} alt="OLIMPO" className="olimpo-icon" />
          <p>Bem-vindo(a)! Já tem conta? Acesse sua conta agora mesmo.</p>
          <form>
            <button className="login-button" type="submit">ENTRAR</button>
          </form>
        </div>

        {/* Seção de Cadastro */}
        <div className="register-container">
          <h1 className="h1conta">Crie sua conta</h1>
          <form onSubmit={handleSubmitCadastro}>
            <div className="input-field">
              <input
                type="text"
                placeholder="Nome"
                required
                onChange={(e) => setNome(e.target.value)}
              />
              <FaUser className="icon" />
            </div>

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
                type="text"
                placeholder="CPF"
                maxLength="14"
                required
                onChange={(e) => setCpf(e.target.value)}
              />
              <AiOutlineIdcard className="icon" />
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

            <button className="register-button" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
