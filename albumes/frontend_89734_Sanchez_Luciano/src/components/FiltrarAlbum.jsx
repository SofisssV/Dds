import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function FiltrarAlbum({ setAlbumsFiltrados }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        setGeneros(['nacional', 'rock', 'jazz', 'cuarteto', 'metal', 'electronica']);
    }, []);

    const getAlbumsFiltrados = async ({ titulo = '', genero = '' }) => {
        try {
            const albumsDatos = await axios.get(`http://localhost:3001/api/albumes?titulo=${titulo}&genero=${genero}`);
            setAlbumsFiltrados(albumsDatos.data);
        } catch (error) {
            console.error('Error al obtener los álbumes:', error);
        }
    };

    const onSubmit = (data) => {
        getAlbumsFiltrados(data);
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row mt-3'>
                    <h1 className="text-center">Filtrar Álbumes</h1>
                    <div className='col-2'>
                        <label htmlFor='titulo'>Insertar título del álbum:</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type='text'
                            id='titulo'
                            {...register('titulo', {
                                required: 'El título del álbum es requerido'
                            })}
                        />
                    </div>
                </div>
                {errors.titulo && (
                    <span className='text-danger text-start'>{errors.titulo.message}</span>
                )}
                <div className='row mt-3'>
                    <div className='col-2'>
                        <label htmlFor='genero'>Seleccionar género:</label>
                    </div>
                    <div className='col-8'>
                        <select
                            id='genero'
                            {...register('genero', {
                                required: 'El género es requerido'
                            })}
                        >
                            <option value=''>Todos</option>
                            {generos.map((genero, index) => (
                                <option key={index} value={genero}>{genero}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {errors.genero && (
                    <span className='text-danger text-start'>{errors.genero.message}</span>
                )}
                <div className='mt-4 mb-4'>
                    <button type="submit" className='btn btn-primary mt-1 ms-4'>Buscar</button>
                </div>
            </form>
        </div>
    );
}

export default FiltrarAlbum;
