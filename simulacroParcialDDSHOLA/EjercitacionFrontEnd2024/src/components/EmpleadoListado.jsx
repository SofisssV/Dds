import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


function EmpleadoListado({ empleados }) {
    const [empleadoListado, setEmpleadoListado] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (empleados.length === 0) {
            getEmpleadoListado(); // Obtiene la lista de empleados cuando el componente se monta
        } else {
            setEmpleadoListado(empleados);
        }
    }, [empleados]);

    const getEmpleadoListado = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/empleados');
            setEmpleadoListado(response.data.Items); // Establece la lista de empleados en el estado
        } catch (error) {
            console.error("Error al obtener la lista de empleados:", error);
        }
    };

    const deleteEmpleado = async (id) => {
        if (window.confirm('¿Desea borrar este empleado?')) { // Confirmación antes de eliminar
            try {
                await axios.delete(`http://localhost:4000/api/empleados/${id}`);
                getEmpleadoListado(); // Refresca la lista de empleados
            } catch (error) {
                console.error("Error al eliminar el empleado:", error);
            }
        }
    };

    return (
        <div className="text-start">
            <h1 className="text-center">Empleados</h1>
            <table className="table mt-5">
                <thead className="table-dark">
                    <tr>
                        <th>Nombre completo</th>
                        <th>DNI</th>
                        <th> <div className='text-center'>
                        <button className='btn btn-success mb-4' onClick={() => navigate('/empleados/0')}> Agregar Empleado</button> {/* Crear empleado boton */}
                        </div>Fecha Nacimiento</th>
                        <th>Suspendido</th>
                        <th>Acciones </th> {/* Nueva columna para acciones */}
                        
                    </tr>
                </thead>
                <tbody>
                    {empleadoListado.map((empleado) => (
                        <tr key={empleado.IdEmpleado}>
                            <td>{empleado.ApellidoYNombre}</td>
                            <td>{empleado.Dni}</td>
                            <td>{empleado.FechaNacimiento}</td>
                            <td>{empleado.Suspendido ? 'Si' : 'No'}</td>
                            
                            <td>
                                {/* Botón para editar */}
                                <Link className='btn btn-primary ms-3' to={`/empleados/${empleado.IdEmpleado}`}> Edit
                                    <i className='bi bi-pencil' />
                                </Link>
                                {/* Botón para eliminar */}
                                <button
                                    className="btn btn-danger ms-3"
                                    onClick={() => deleteEmpleado(empleado.IdEmpleado)}
                                >Delete
                                    <i className="bi bi-trash" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmpleadoListado;
