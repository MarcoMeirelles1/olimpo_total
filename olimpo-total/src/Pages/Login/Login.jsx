import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { AiOutlineIdcard } from 'react-icons/ai';
import OlimpoIcon from "../../assets/OlimpoIcon.png";
import styles from './Login.module.css'; // Usando CSS Modules

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmitCadastro = (event) => {
    event.preventDefault();
    console.log("Login:",email,senha);
    navigate('/Home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.loginContainer}>
          <img src={OlimpoIcon} alt="OLIMPO" />
          <p>Bem-vindo(a)! Não tem conta? Crie sua conta agora mesmo.</p>
          <form>
            <button className={styles.loginButton} type="submit">Registrar</button>
          </form>
        </div>

        <div className={styles.registerContainer}>
          <h1 className={styles.h1}>Faça seu login</h1>
          <form onSubmit={handleSubmitCadastro}>

            <div className={styles.inputField}>
              <input
                type="email"
                placeholder="E-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FiMail className={styles.icon} />
            </div>

            <div className={styles.inputField}>
              <input
                type="password"
                placeholder="Senha"
                required
                onChange={(e) => setSenha(e.target.value)}
              />
              <FaLock className={styles.icon} />
            </div>

            <button className={styles.registerButton} type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
