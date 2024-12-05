// Importar o Express
const express = require('express');
const app = express();

// Importar o CORS (para permitir requisições de origens diferentes)
const cors = require('cors');

// Importar a conexão com o banco de dados
const connection = require('./db');  // Importando a conexão correta

// Configurar o CORS para permitir requisições do frontend na porta 5173
app.use(cors({
  origin: 'http://localhost:5173'  // Permite requisições apenas do frontend que está na porta 5173
}));

// Importar o corpo da requisição (necessário para poder acessar `req.body`)
app.use(express.json());  // Adiciona o middleware para análise do corpo JSON da requisição

// Seu código de cadastro de usuário
app.post('/inserir/usuario', (req, res) => {
  const { nome, email, cpf, senha } = req.body;

  if (!nome || !email || !cpf || !senha) {
    return res.status(400).send('Nome, email, CPF e senha são obrigatórios');
  }

  // Verificar se o e-mail já existe
  connection.query('SELECT * FROM usuario WHERE email = ? OR cpf = ?', [email, cpf], (err, results) => {
    if (err) {
      console.error('Erro ao verificar dados existentes:', err);
      return res.status(500).send('Erro ao verificar dados');
    }

    if (results.length > 0) {
      return res.status(400).send('E-mail ou CPF já cadastrados');
    }

    // Inserir usuário caso não haja conflito
    connection.query(
      'INSERT INTO usuario (nome, email, cpf, senha) VALUES (?, ?, ?, ?)', 
      [nome, email, cpf, senha], 
      (err, results) => {
        if (err) {
          console.error('Erro na inserção:', err);
          return res.status(500).send('Erro ao inserir no banco de dados');
        }
        console.log('Usuário inserido:', results);
        res.status(200).send('Usuário inserido com sucesso!');
      }
    );
  });
});

// Definir a porta e iniciar o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
