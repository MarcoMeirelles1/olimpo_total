import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importando do react-router-dom
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Home from './pages/Home/Home.jsx'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Definindo as rotas */}
          <Route path="/" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;