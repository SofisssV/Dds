import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import EmpleadoListado from './EmpleadoListado';

function Empleados() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { id } = useParams();
    const [empleadosFiltrados, setEmpleadosFiltrados] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getEmpleado(id); // Obtener empleado por ID para edición
        } else {
            setEmpleadosFiltrados([]);
        }
    }, [id]);

    const getEmpleado = async (apellidonombre) => {
        const empleadoDatos = await axios.get(`http://localhost:4000/api/empleados/?ApellidoYNombre=${apellidonombre}`);
        setEmpleadosFiltrados(empleadoDatos.data.Items);
    };

    const volver = () => {
        navigate('/inicio');
    };

    const onSubmit = async (data) => {
        const nombreCompleto = `${data.apellido} ${data.nombre}`;
        getEmpleado(nombreCompleto.trim()); // Filtrar empleados por nombre completo
        reset();
    };

    return (
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className='row mt-3'>
                    <h1 className="text-center">Filtrar Empleados</h1>
                    <div className='col-2'>
                        <label htmlFor='nombre'>Insertar Nombre Empleado:</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type='text'
                            id='nombre'
                            defaultValue={''}
                            {...register('nombre', {
                                required: 'El nombre del empleado se requiere'
                            })}
                        />
                    </div>
                </div>
                {errors.nombre && (
                    <span className='text-danger text-start'>{errors.nombre.message}</span>
                )}
                <div className='row mt-3'>
                    <div className='col-2'>
                        <label htmlFor='apellido' className='text-green'>Insertar Apellido Empleado:</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type='text'
                            id='apellido'
                            defaultValue={''}
                            {...register('apellido', {
                                required: 'El apellido del empleado se requiere'
                            })}
                        />
                    </div>
                </div>
                {errors.apellido && (
                    <span className='text-danger text-start'>{errors.apellido.message}</span>
                )}
                <div className='mt-4 mb-4'>
                    <button type='button' className="btn btn-danger ms-4 mt-1" onClick={volver}>Cancelar</button>
                    <button type="submit" className='btn btn-primary mt-1 ms-4'>Buscar</button>
                </div>
            </form>
            {/* Botón para crear un nuevo empleado */}
            
            {/* Componente que lista los empleados */}
            <EmpleadoListado empleados={empleadosFiltrados} />
        </div>
    );
}

export default Empleados;
