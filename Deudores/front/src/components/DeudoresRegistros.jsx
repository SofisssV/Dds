import React, { useEffect } from 'react'; // Importa React y el hook useEffect
import { useForm } from 'react-hook-form'; // Importa useForm de react-hook-form para manejar formularios
import { useNavigate, useParams } from 'react-router-dom'; // Importa useNavigate y useParams de react-router-dom para navegación y parámetros de la URL
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

function DeudoresRegistros() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Inicializa useForm
    const { id } = useParams(); // Obtiene el parámetro de la URL (id del empleado)
    const navigate = useNavigate(); // Inicializa navigate para redireccionar

    useEffect(() => {
       reset(); // Si el id es '0', reseteamos el formulario para crear un nuevo empleado
         }, [id]);


         const onSubmit = async (data) => { // Función para manejar el envío del formulario
            try {
             
                    await axios.post('http://localhost:4000/api/deudores', data);
                navigate('/deudores'); // Redirecciona a la lista de empleados
            } catch (error) {
                console.error("Error al guardar el deudor:", error);
            }
        };
    

    return (
        
        <div>
            <h1 className="text-center">Registrar Deudor</h1>
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
                        <label htmlFor='FechaDeuda'>Ingrese fecha deuda:</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type='date'
                            id='FechaDeuda'
                            {...register('FechaDeuda', {
                                required: 'La fecha deuda es requerida' // Validación de campo requerido
                            })}
                        />
                    </div>
                </div>
                {errors.FechaDeuda && (
                    <span className='text-danger text-start'>{errors.FechaDeuda.message}</span>
                )}
                <div className='row mt-3'>
                    <div className='col-2'>
                        <label htmlFor='ImporteAdeudado'>Importe de deuda:</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type='text'
                            id='ImporteAdeudado'
                            {...register('ImporteAdeudado', {
                                required: 'El importe de deuda es requerido', // Validación de campo requerido
                                validate: {
                                    esnumero: (value) => {
                                        return !isNaN(value) || 'Debe ser numérico';
                                    },
                                },
                            })}
                        />
                    </div>
                </div>
                {errors.ImporteAdeudado && (
                    <span className='text-danger text-start'>{errors.ImporteAdeudado.message}</span>
                )}
                <div className='mt-4 mb-4'>
                    <button type='button' className="btn btn-danger ms-4 mt-1" onClick={() => navigate('/inicio')}>Cancelar</button> {/* Botón para cancelar y volver */}
                    <button type="submit" className='btn btn-primary mt-1 ms-4'>{"Registrar"}</button> {/* Botón para enviar el formulario */}
                </div>
            </form>
        </div>
    );
}

export default DeudoresRegistros;