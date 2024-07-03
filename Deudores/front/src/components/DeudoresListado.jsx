import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';



function DeudoresListado({ deudores }) {
    const [deudoresListado, setDeudoresListado] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        if (deudores.length === 0) {
            getDeudoresListado(); 
        } else {
            setDeudoresListado(deudores);
        }
    }, [deudores]);

    const getDeudoresListado = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/deudores');
            setDeudoresListado(response.data.Items); 
        } catch (error) {
            console.error("Error al obtener la lista de deudores:", error);
        }
    };



    return (
        <div className="text-start">
            <h1 className="text-center">Deudores Listado</h1>
            <table className="table mt-5">
                <thead className="table-dark">
                    <tr>
                        <th>IdDeudor</th>
                        <th>ApellidoYNombre</th>
                        <th>FechaDeuda</th>
                        <th>ImporteAdeudado</th>
                    </tr>
                </thead>
                <tbody>
                    {deudoresListado.map((deudor) => (
                        <tr key={deudor.IdDeudor}>
                            <td>{deudor.IdDeudor}</td>
                            <td>{deudor.ApellidoYNombre}</td>
                            <td>{deudor.FechaDeuda}</td>
                            <td>{deudor.ImporteAdeudado}</td>
                        </tr>
                    ))}
                    <th> 
                     <button className='btn btn-success mb-4' onClick={() => navigate('/deudoresregistros')}> Agregar Deudor</button>
                     </th>
                     
                </tbody>
            </table>
        </div>
    );
}

export default DeudoresListado;
