import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Hoteles() {
    const [hoteles, setHoteles] = useState(null);

    useEffect(() => {
        getHoteles();
    }, []);

    const getHoteles = async () => {
        const hotelesDatos = await axios.get(
            'http://localhost:3001/api/hoteles'
        );
        setHoteles(hotelesDatos.data);
    };

    const deleteHotel = async (id) => {
        if (window.confirm('¿Desea borrar este hotel?')) {
            await axios.delete(`http://localhost:3001/api/hoteles/${id}`);
            getHoteles();
        }
    };

    return (
        <div className="text-start">
            <h1 className="text-center">Hoteles</h1>
                <table className="table mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Ciudad</th>
                            <th>Plazas</th>
                            <th><Link to={'/hotel/0'} className='text-white'>Nuevo hotel<i className='bi bi-plus-circle text-success'/></Link></th>
                        </tr>
                    </thead>
                    <tbody>
                        {hoteles && hoteles.map((h) => {
                                return (
                                    <tr key={h.id}>
                                        <td>{h.nombre}</td>
                                        <td>{h.ciudad}</td>
                                        <td>{h.plazas}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger ms-3"
                                                onClick={() => deleteHotel(h.id)}
                                            >
                                                <i className="bi bi-trash" />
                                            </button>
                                            <Link className='btn btn-primary ms-3' to={`/hotel/${h.id}`}><i className='bi bi-pencil'/></Link>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
        </div>
    );
}

export default Hoteles;

/*const [hoteles, setHoteles] = useState(null);: inicializa el estado hoteles como null en el componente Hoteles. 
Posteriormente, cuando la lista de hoteles se carga desde la API, setHoteles se utiliza para actualizar hoteles, lo que provoca que el componente se vuelva a 
renderizar con la lista de hoteles actualizada. null es el valor inicial del estado hoteles y dsp tomara los q viene segun la interaccion del usuario

useEffect(() => {getHoteles();}, []); Utiliza useEffect para ejecutar la función getHoteles al montar el componente ([] indica que se ejecuta solo una vez al inicio).

 const getHoteles = async () => {const hotelesDatos = await axios.get( 'http://localhost:3001/api/hoteles');setHoteles(hotelesDatos.data)};-- Define la función asíncrona 
 getHoteles para obtener la lista de hoteles desde la API y actualizar el estado hoteles. hotelesDatos.data es la parte de los datos específicos 
 devueltos por la API (en este caso, la lista de hoteles). y setHoteles actualiza los datos

const deleteHotel = async (id) => {if (window.confirm('¿Desea borrar este hotel?')) { await axios.delete(`http://localhost:3001/api/hoteles/${id}`); getHoteles()};};:
hace una promise con una id, q sera identificada por el await en ${id}, window.confirm muestra un mensaje al querer eliminarlo y si es confirmada entra en el if
haciendo un await esperando a que se aplique el axios.delete la direccion y el getHoteles muestra la nueva lista de hoteles actualizado sin el hotel actual elimina

<div className="text-start"> ... </div>: text-start Es una clase de Bootstrap que alinea el texto a la izquierda dentro del contenedor sino se queda en medio

<h1 className="text-center">Hoteles</h1>: Título principal centrado que indica "Hoteles" arriba del cuadro.

<table className="table mt-5"> ... </table>: es la Tabla para mostrar la lista de hoteles con clases de Bootstrap (table y mt-5).

<thead className="table-dark"> ... </thead>: es solo para resaltar donde se ve el nombre, ciudad, plazas Cabecera de la tabla con fondo oscuro (table-dark).

<tr> ... </tr>: Fila de ENCABEZADO DE LA TABLA con columnas para "Nombre", "Ciudad", "Plazas" y "Nuevo hotel".

{hoteles && hoteles.map((h) => { ... })}:  valúa si hoteles es una variable que contiene un valor "verdadero" Si hoteles es null o undefined, 
la evaluación se detiene y no se ejecuta el código map es una función de orden superior en JavaScript que se utiliza para transformar los elementos de un array. 
Toma una función de callback como argumento y aplica esa función a cada elemento del array, devolviendo un nuevo array con los resultados.
En este caso, la función de callback (h) toma cada elemento del array hoteles y ejecuta el código dentro de la función de callback para cada uno.

<button className="btn btn-danger ms-3" onClick={() => deleteHotel(h.id)}> ... </button>: Botón de eliminación rojo con un ícono de basura que llama a la función deleteHotel.

<Link className='btn btn-primary ms-3' to={/hotel/${h.id}}><i className='bi bi-pencil'/></Link>: Enlace de botón azul para editar un hotel que redirige a la página de 
edición de hotel (/hotel/:id). Boton que tiene un link segun el id, al hacer click te lleva a la ruta hotel con i y el pencil es de boostrap q esta re cheto

export default Hoteles;: Exporta el componente Hoteles como el componente por defecto del archivo.*/