import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './components/Menu';
import Inicio from './components/Inicio'; 
import ConsultarObras from './components/ConsultarObras';
import RegistrarObras from './components/RegistrarObras';

function App() {
  return (
    <Router>
      <>
        <Menu />
        <div className="container text-center">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/consultarobras" element={<ConsultarObras />} />
            <Route path="/registrarobras/:id" element={<RegistrarObras />} />
            <Route path="/registrarobras" element={<RegistrarObras />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
