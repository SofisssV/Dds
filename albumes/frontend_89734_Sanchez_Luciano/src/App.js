import {Routes, Route}  from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import ListadoAlbum from './components/ListadoAlbum'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <>
      <Menu />
      <div className='container text-center'>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}/>
          <Route path='/albumes' element={<ListadoAlbum></ListadoAlbum>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
