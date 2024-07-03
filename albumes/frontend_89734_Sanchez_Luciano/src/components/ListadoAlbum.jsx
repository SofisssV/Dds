import { useState, useEffect } from 'react';
import axios from 'axios';
import FiltrarAlbum from './FiltrarAlbum';

function ListadoAlbum() {
    const [albums, setAlbums] = useState([]);
    const [albumsFiltrados, setAlbumsFiltrados] = useState([]);

    useEffect(() => {
        getAlbums();
    }, []);

    const getAlbums = async () => {
        try {
            const albumsDatos = await axios.get('http://localhost:3001/api/albumes');
            setAlbums(albumsDatos.data);
            setAlbumsFiltrados(albumsDatos.data); 
        } catch (error) {
            console.error('Error al obtener los álbumes:', error);
        }
    };

    const deleteAlbum = async (id) => {
        if (window.confirm('¿Desea borrar este álbum?')) {
            try {
                await axios.delete(`http://localhost:3001/api/albumes/${id}`);
                getAlbums();
            } catch (error) {
                console.error('Error al borrar el álbum:', error);
            }
        }
    };

    return (
        <div>
            <FiltrarAlbum setAlbumsFiltrados={setAlbumsFiltrados} />
            <div className="text-start">
                <h1 className="text-center">Listado De Álbumes</h1>
                <table className="table mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Título</th>
                            <th>Artista</th>
                            <th>Género</th>
                            <th>Soporte</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {albumsFiltrados.map((album) => (
                            <tr key={album.id}>
                                <td>{album.id}</td>
                                <td>{album.titulo}</td>
                                <td>{album.artista}</td>
                                <td>{album.genero}</td>
                                <td>{album.soporte}</td>
                                <td>{album.precio}</td>
                                <td>
                                    <button
                                        className="btn btn-danger ms-3"
                                        onClick={() => deleteAlbum(album.id)}
                                    >
                                        <i className="bi bi-trash" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListadoAlbum;
