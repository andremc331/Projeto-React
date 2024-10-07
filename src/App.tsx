import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main'; // A página Main com a funcionalidade RGB

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> {/* Rota para a página Main */}
        {/* Adicionar mais rotas aqui se precisar */}
        {/* <Route path="/another" element={<AnotherPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;