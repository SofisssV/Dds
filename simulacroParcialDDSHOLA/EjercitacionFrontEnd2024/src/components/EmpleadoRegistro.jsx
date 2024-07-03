import React, { useEffect } from 'react'; // Importa React y el hook useEffect
import { useForm } from 'react-hook-form'; // Importa useForm de react-hook-form para manejar formularios
import { useNavigate, useParams } from 'react-router-dom'; // Importa useNavigate y useParams de react-router-dom para navegación y parámetros de la URL
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

function EmpleadoRegistro() {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm(); // Inicializa useForm
    const { id } = useParams(); // Obtiene el parámetro de la URL (id del empleado)
    const navigate = useNavigate(); // Inicializa navigate para redireccionar

    useEffect(() => {
        if (id && id !== '0') { // Si hay un id y no es '0', obtenemos los datos del empleado para editar
            getEmpleadoById(id);
        } else {
            reset(); // Si el id es '0', reseteamos el formulario para crear un nuevo empleado
        }
    }, [id]);

    const getEmpleadoById = async (id) => { // Función para obtener los datos del empleado por su id
        try {
            const response = await axios.get(`http://localhost:4000/api/empleados/${id}`);
            const empleado = response.data;
            // Establece los valores del formulario con los datos del empleado
            Object.keys(empleado).forEach(key => {
                setValue(key, empleado[key]);
            });
        } catch (error) {
            console.error("Error al obtener el empleado:", error);
        }
    };

    const onSubmit = async (data) => { // Función para manejar el envío del formulario
        try {
            if (id && id !== '0') { // Si hay un id, actualiza el empleado
                await axios.put(`http://localhost:4000/api/empleados/${id}`, data);
            } else { // Si no hay id, crea un nuevo empleado
                await axios.post('http://localhost:4000/api/empleados/', data);
            }
            navigate('/empleados'); // Redirecciona a la lista de empleados
        } catch (error) {
            console.error("Error al guardar el empleado:", error);
        }
    };

    return (
        
        <div>
            <h1 className="text-center">{id && id !== '0' ? "Editar Empleado" : "Nuevo Empleado"}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row mt-3'>
                    <div className='col-2'>
                        <label htmlFor='ApellidoYNombre'>Nombre Completo:</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type='text'
                            id='ApellidoYNombre'
                            {...register('ApellidoYNombre', {
                                required: 'El nombre completo es requerido' // Validación de campo requerido
                            })}
                        />
                    </div>
                </div>
                {errors.ApellidoYNombre && (
                    <span className='text-danger text-start'>{errors.ApellidoYNombre.message}</span>
                )}
                <div className='row mt-3'>
                    <div className='col-2'>
                        <label htmlFor='Dni'>DNI:</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type='text'
                            id='Dni'
                            {...register('Dni', {
                                required: 'El DNI es requerido' // Validación de campo requerido
                            })}
                        />
                    </div>
                </div>
                {errors.Dni && (
                    <span className='text-danger text-start'>{errors.Dni.message}</span>
                )}
                <div className='row mt-3'>
                    <div className='col-2'>
                        <label htmlFor='FechaNacimiento'>Fecha de Nacimiento:</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type='date'
                            id='FechaNacimiento'
                            {...register('FechaNacimiento', {
                                required: 'La fecha de nacimiento es requerida' // Validación de campo requerido
                            })}
                        />
                    </div>
                </div>
                {errors.FechaNacimiento && (
                    <span className='text-danger text-start'>{errors.FechaNacimiento.message}</span>
                )}
                <div className='row mt-3'>
                    <div className='col-2'>
                        <label htmlFor='Suspendido'>Suspendido:</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type='checkbox'
                            id='Suspendido'
                            {...register('Suspendido')}
                        />
                    </div>
                </div>
                <div className='mt-4 mb-4'>
                    <button type='button' className="btn btn-danger ms-4 mt-1" onClick={() => navigate('/empleados')}>Cancelar</button> {/* Botón para cancelar y volver */}
                    <button type="submit" className='btn btn-primary mt-1 ms-4'>{id && id !== '0' ? "Actualizar" : "Crear"}</button> {/* Botón para enviar el formulario */}
                </div>
            </form>
        </div>
    );
}

export default EmpleadoRegistro;
