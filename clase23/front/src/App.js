import {Routes, Route}  from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import Hoteles from './components/Hoteles';
import Hotel from './components/Hotel'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
      <>
          <Menu/>
          <div className="container text-center">
              <Routes>
                  <Route path="/" element={<Inicio></Inicio>} />
                  <Route path="/hoteles" element={<Hoteles></Hoteles>} />
                  <Route path="/hotel/:id" element={<Hotel></Hotel>} />
              </Routes>
          </div>
      </>
  );
}

export default App;

/*<Menu/> Hicimos la barra de navegacion en menu, esto la pone aca arriba, si la pongo abajo esta abajo y asi

<div className="container text-center">--Un contenedor de Bootstrap con clase container text-center, que centraliza el contenido y aplica estilos de Bootstrap.
Sin el container text-center el cuadro se agranda un monton y no se centraliza

<Route path="/" element={<Inicio></Inicio>} />
<Route path="/hoteles" element={<Hoteles></Hoteles>} /> Sin esto al hacer click en botones de hoteles, inicio o en el lapiz para modificar un hotel no sabe donde buscar
<Route path="/hotel/:id" element={<Hotel></Hotel>} />



*/