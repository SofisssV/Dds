import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { ArticulosFamilias } from "./components/ArticulosFamilias";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Articulos } from "./components/articulos/Articulos";
import { ModalDialog } from "./components/ModalDialog";
import Deudores from './components/Deudores'
import DeudoresListado from './components/DeudoresListado'
import DeudoresRegistros from './components/DeudoresRegistros'


function App() {
  return (
    <>
      <BrowserRouter>
        <ModalDialog />
        <Menu />
        <div className="divBody">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/articulosfamilias" element={<ArticulosFamilias />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="*" element={<Navigate to="/inicio" replace />} />
            <Route path="/deudores" element={<Deudores />} />
            <Route path="/deudoreslistado" element={<DeudoresListado />} />
            <Route path="/deudoresregistros" element={<DeudoresRegistros />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
