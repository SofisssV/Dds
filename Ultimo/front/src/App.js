import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './components/Menu';


function App() {
  return (
    <Router>
      <>
        <Menu />
        <div className="container text-center">
          <Routes>

          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
