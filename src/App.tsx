import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main'; // Página Main com RGB

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Main" element={<Main />} /> {/* Rota para página Main */}
        {/* Adicionar mais se precisar */}
        {/* <Route path="/another" element={<AnotherPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;