import { Link } from "react-router-dom";
import React from "react";

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/inicio">Inicio</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/consultarobras">Consultar Obras</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/registrarobras">Registrar Obras</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;