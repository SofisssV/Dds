import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ConsultarObras() {
    const [obras, setObras] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getObras();
    }, []);

    const getObras = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/obras-teatrales');
            setObras(response.data);
        } catch (error) {
            console.error("Error al obtener las obras:", error);
        }
    };

    const deleteObra = async (id) => {
        if (window.confirm('¿Desea borrar esta obra?')) {
            try {
                await axios.delete(`http://localhost:3001/api/obras-teatrales/${id}`);
                getObras(); // Actualiza la lista de obras después de eliminar
            } catch (error) {
                console.error("Error al eliminar la obra:", error);
            }
        }
    };

    return (
        <div className="text-start">
            <h1 className="text-center">Consultar Obras</h1>
            <div className='text-center'>
                <button className='btn btn-success mb-4' onClick={() => navigate('/registrarobras')}>
                    Agregar obra
                </button>
            </div>
            <table className="table mt-5">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Título</th>
                        <th>Director</th>
                        <th>Eliminado</th>
                        <th>Precio Entrada</th>
                        <th>Fecha Desde</th>
                        <th>Fecha Hasta</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {obras.length > 0 ? (
                        obras.map((obra) => (
                            <tr key={obra.Id}>
                                <td>{obra.Id}</td>
                                <td>{obra.Titulo}</td>
                                <td>{obra.Director}</td>
                                <td>{obra.Eliminado ? 'Sí' : 'No'}</td>
                                <td>{obra.PrecioEntrada}</td>
                                <td>{obra.FechaDesde}</td>
                                <td>{obra.FechaHasta}</td>
                                <td>
                                    <Link className='btn btn-primary ms-3' to={`/registrarobras/${obra.Id}`}>
                                        <i className='bi bi-pencil' />
                                    </Link>
                                    <button
                                        className="btn btn-danger ms-3"
                                        onClick={() => deleteObra(obra.Id)}
                                    >
                                        <i className="bi bi-trash" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">No se encontraron obras</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ConsultarObras;
