import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { AiOutlineIdcard } from 'react-icons/ai';
import OlimpoIcon from "../../assets/OlimpoIcon.png";
import axios from 'axios';  // Importando o axios
import styles from './Cadastro.module.css'; // Usando CSS Modules

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmitCadastro = async (event) => {
    event.preventDefault();
    
    // Criando um objeto com os dados do formulário
    const userData = {
      nome,
      email,
      cpf,
      senha
    };

    try {
      // Enviando os dados para o servidor usando o axios
      const response = await axios.post('http://localhost:3000/inserir/usuario', userData);

      if (response.status === 200) {
        // Redirecionar para a página de login em caso de sucesso
        navigate('/Login');
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      // Tratar erros, como e-mail ou CPF já cadastrados, e mostrar para o usuário
      if (error.response && error.response.data) {
        alert(error.response.data.message || 'Erro ao se cadastrar. Tente novamente.');
      } else {
        alert('Erro ao se cadastrar. Tente novamente.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.loginContainer}>
          <img src={OlimpoIcon} alt="OLIMPO" />
          <p>Bem-vindo(a)! Não tem conta? Crie sua conta agora mesmo.</p>
          <form>
            <button className={styles.loginButton} type="submit">Entrar</button>
          </form>
        </div>

        <div className={styles.registerContainer}>
          <h1 className={styles.h1}>Crie sua conta</h1>
          <form onSubmit={handleSubmitCadastro}>
            <div className={styles.inputField}>
              <input
                type="text"
                placeholder="Nome"
                required
                onChange={(e) => setNome(e.target.value)}
              />
              <FaUser className={styles.icon} />
            </div>

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
                type="text"
                placeholder="CPF"
                maxLength="14"
                required
                onChange={(e) => setCpf(e.target.value)}
              />
              <AiOutlineIdcard className={styles.icon} />
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

            <button className={styles.registerButton} type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;