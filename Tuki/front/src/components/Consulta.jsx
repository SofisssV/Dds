import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Consulta() {
    const [consultas, setConsultas] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getConsultas();
    }, []);

    const getConsultas = async () => {
        const consultasDatos = await axios.get(
            'http://localhost:3001/ingresos'
        );
        setConsultas(consultasDatos.data);
    };

    const volver = () => {
        navigate('/Registro');
    };



    return (
        <div className="text-start">
            <h1 className="text-center">Consulta De Ingresos</h1>
                <table className="table mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Dni</th>
                            <th>Hora ingreso</th>
                            <th>Proveedor</th>
                            <th>ConNotebook</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consultas && consultas.map((h) => {
                                return (
                                    <tr key={h.Id}>
                                        <td>{h.Id}</td>
                                        <td>{h.Dni}</td>
                                        <td>{h.HoraIngreso}</td>
                                        <td>{h.Proveedor}</td>
                                        <td>{h.ConNotebook ? 'Si' : 'No'}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
                <button className="btn btn-danger ms-5" onClick={volver}>Volver</button>
        </div>
    );
}

export default Consulta;
