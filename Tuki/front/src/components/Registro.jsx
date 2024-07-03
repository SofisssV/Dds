import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registro() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3001/ingresos', data);
            console.log(response.data);
            // Navegar a la página de consulta después de que la solicitud POST sea exitosa
            navigate('/consulta');
        } catch (error) {
            console.error('Error al crear el ingreso:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row mt-3'></div>
            <h1 className='text-center'>Registro de ingresos</h1>
            <div className="col-2">
                <label htmlFor="Dni">Dni:</label>
            </div>
            <div className="col-8">
                <input
                    type="text"
                    defaultValue={''}
                    {...register('Dni', {
                        required: 'El Dni es requerido',
                    })}
                />
            </div>
            {errors.Dni && (
                <span className="text-danger text-start">{errors.Dni.message}</span>
            )}

            <div className="col-2">
                <label htmlFor="HoraIngreso">Hora Ingreso:</label>
            </div>
            <div className="col-8">
                <input
                    type="text"
                    defaultValue={''}
                    {...register('HoraIngreso', {
                        required: 'La hora de ingreso es requerida',
                        validate: {
                            formatoHora: (value) => {
                                return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value) || 'Formato de hora no válido, use HH:MM';
                            },
                        },
                    })}
                />
            </div>
            {errors.HoraIngreso && (
                <span className="text-danger text-start">{errors.HoraIngreso.message}</span>
            )}

            <div className="col-2">
                <label htmlFor="Proveedor">Proveedor:</label>
            </div>
            <div className="col-8">
                <input
                    type="text"
                    defaultValue={''}
                    {...register('Proveedor', {
                        required: 'El Proveedor es requerido',
                    })}
                />
            </div>
            {errors.Proveedor && (
                <span className="text-danger text-start">{errors.Proveedor.message}</span>
            )}

            <div className="col-2">
                <label htmlFor="ConNotebook">Con Notebook?:</label>
            </div>
            <div className="col-8">
                <input
                    type="checkbox"
                    {...register('ConNotebook', {
                        required: 'Marcar con o sin Notebook',
                    })}
                />
            </div>
            {errors.ConNotebook && (
                <span className="text-danger text-start">{errors.ConNotebook.message}</span>
            )}

            <div className="mt-5 mb-5">
                <input
                    type="submit"
                    value={'Crear'}
                    className="btn btn-success ms-5"
                />
            </div>
        </form>
    );
}

export default Registro;
