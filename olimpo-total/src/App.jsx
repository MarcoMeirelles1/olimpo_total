import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importando do react-router-dom
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Login from './Pages/Login/Login.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Definindo as rotas */}
          <Route path="/" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;