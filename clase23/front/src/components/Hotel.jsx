import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Hotel() {
    const { id } = useParams();
    const navigate = useNavigate();
    const {register,handleSubmit,formState: { errors },} = useForm();
    const [hotel, setHotel] = useState({});

    useEffect(() => {
        if (id > 0) {
            getHotel(id);
        } 
        else {
            setHotel({
                nombre: '',
                ciudad: '',
                plazas: '',
            });
        }
    }, []);

    const getHotel = async (id) => {
        const hotelDatos = await axios.get(`http://localhost:3001/api/hoteles/${id}`
        );
        setHotel(hotelDatos.data);
    };

    const volver = () => {
        navigate('/hoteles');
    };

    const cancelar = () => {
        volver();
    };

    const onSubmit = async (data) => {
        if (id > 0) {
            await axios.put(`http://localhost:3001/api/hoteles/${id}`, data);
        } else {
            await axios.post('http://localhost:3001/api/hoteles/', data);
        }
        volver();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mt-3">
                <div className="col-4">
                    <label htmlFor="nombre">Nombre: </label>
                </div>
                <div className="col-8">
                    <input
                        type="text"
                        defaultValue={hotel.nombre}
                        className="form-control"
                        {...register('nombre', {
                            required: 'El nombre es requerido',
                        })}
                    />
                </div>
            </div>
            {errors.nombre && (
                <span className="text-danger text-start">{errors.nombre.message}</span>
            )}
            <div className="row mt-3">
                <div className="col-4">
                    <label htmlFor="ciudad">Ciudad: </label>
                </div>
                <div className="col-8">
                    <input
                        type="text"
                        className="form-control"
                        defaultValue={hotel.ciudad}
                        {...register('ciudad', {
                            required: 'La ciudad es requerida.',
                        })}
                    />
                </div>
            </div>
            {errors.ciudad && (
                <span className="text-danger">{errors.ciudad.message}</span>
            )}
            <div className="row mt-3">
                <div className="col-4">
                    <label htmlFor="plazas">Plazas: </label>
                </div>
                <div className="col-8">
                    <input
                        type="text"
                        className="form-control"
                        defaultValue={hotel.plazas}
                        {...register('plazas', {
                            required: 'Las cantidad de plazas es requerida.',
                            validate: (value) => {
                                return !isNaN(value) || 'Debe ser numérico';
                            },
                        })}
                    />
                </div>
            </div>
            {errors.plazas && (
                <span className="text-danger">{errors.plazas.message}</span>
            )}
            <div className="mt-5 mb-5">
                <button className="btn btn-danger ms-5" onClick={cancelar}>Cancelar</button>
                <input
                    type="submit"
                    value={id > 0 ? 'Actualizar' : 'Crear'}
                    className="btn btn-success ms-5"
                ></input>
            </div>
        </form>
    );
}

export default Hotel;
/*import { useState, useEffect } from 'react';Importa los hooks useState y useEffect de React para manejar el estado y efectos secundarios.

import { useParams, useNavigate } from 'react-router-dom'; Importa los hooks useParams y useNavigate de React Router para obtener parámetros de la URL y 
para navegar entre rutas.

import { useForm } from 'react-hook-form'; Importa el hook useForm de react-hook-form para manejar formularios y validaciones.

import axios from 'axios'; Importa axios para hacer solicitudes HTTP.

const { id } = useParams(); Obtiene el parámetro id de la URL.

const navigate = useNavigate(); Hook para programáticamente navegar a otras rutas. Se va a usar para cuando yo hago click en algun boton por ejemplo me mueva a esa ruta

const {register,handleSubmit,formState: { errors },} = useForm(); useForm es un hook proporcionado por la biblioteca react-hook-form, que se utiliza para manejar 
formularios en aplicaciones React de manera sencilla y efectiva.Aquí, useForm se llama para obtener varios métodos y objetos útiles para manejar el formulario.
Register se utilizara para poder agregar algo al formulario, como nuevo nombre de hotel
handleSubmit Este método se usa como manejador de eventos para el envío del formulario. Garantiza que las validaciones se apliquen antes de que se ejecute la función de envío.
formState: { errors }Este objeto contiene todos los errores de validación de los campos del formulario. Si un campo no pasa la validación, su error se almacena aquí.

const [hotel, setHotel] = useState({}); inicializa el estado hoteles en el componente Hoteles. 
Posteriormente, cuando la lista de hoteles se carga desde la API, setHoteles se utiliza para actualizar hoteles, lo que provoca que el componente se vuelva a 
renderizar con la lista de hoteles actualizada. null es el valor inicial del estado hoteles y dsp tomara los q viene segun la interaccion del usuario

useEffect(() => { La función dentro de useEffect se ejecuta cuando el componente se monta por primera vez.
[] es la lista de dependencias, que en este caso está vacía, lo que significa que el useEffect solo se ejecutará una vez, cuando el componente se monta.

if (id > 0) { getHotel(id); } else { setHotel({ nombre: '', ciudad: '', plazas: '', }); } }, []);
Si id es mayor a 0, llama a getHotel(id). Si no, inicializa los datos del hotel con valores vacíos.

const getHotel = async (id) => { const hotelDatos = await axios.get(http://localhost:3001/api/hoteles/${id}); setHotel(hotelDatos.data); };
Función asíncrona para obtener datos del hotel desde la API y actualizar el estado del hotel.

const volver = () => { navigate('/hoteles'); };
Función para navegar de vuelta a la lista de hoteles.

const cancelar = () => { volver(); };
Función para cancelar la operación actual y volver a la lista de hoteles.

const onSubmit = async (data) => { if (id > 0) { await axios.put(http://localhost:3001/api/hoteles/${id}, data); } 
else { await axios.post('http://localhost:3001/api/hoteles/', data); } volver(); };
--Define una función asíncrona onSubmit que se ejecuta cuando el formulario es enviado. data contiene los valores del formulario.
--if (id > 0)Condicional que verifica si el id del hotel es mayor que 0, lo cual indica que se está editando un hotel existente.
--await axios.put(http://localhost:3001/api/hoteles/${id}`, data);Si el id es mayor que 0, se hace una solicitud PUT a la API para actualizar el hotel existente 
con el id especificado, enviando data como el cuerpo de la solicitud.axios.put es una función de axios que se usa para actualizar recursos existentes.
--Si el id no es mayor que 0, se ejecuta la sección else, lo que indica que se está creando un nuevo hotel.
--await axios.post('http://localhost:3001/api/hoteles/', data) Hace una solicitud POST a la API para crear un nuevo hotel con los datos del formulario (data),
 axios.post es una función de axios que se usa para crear nuevos recursos.

return ( <form onSubmit={handleSubmit(onSubmit)}> form Inicia una etiqueta de formulario en HTML. Los formularios se utilizan para recolectar datos del usuario que se
 pueden enviar a un servidor.
 --handleSubmit:Esta función envuelve onSubmit (que es tu función de manejo de envío) y se encarga de prevenir el comportamiento por defecto del formulario
  (que es recargar la página), valida los datos del formulario y, si todos los datos son válidos, llama a tu función onSubmit con los datos del formulario como argumento


<div className="row mt-3"> Se encarga de centrar 
 <div className="col-4">  Se encarga de centrar 
 <label htmlFor="nombre">Nombre: </label> </div> Pone el nombre al lado del cuadrito a llenar
 <div className="col-8"> Se encarga de centrar
  <input type="text" defaultValue={hotel.nombre} Esto hace q aparezca el cuadro donde pondremos el nuevo nombre del hotel
 className="form-control" {...register('nombre', { required: 'El nombre es requerido.', })} /> </div> </div> mensage de control por si no puso nada

{errors.nombre && ( <span className="text-danger text-start">{errors.nombre.message}</span> )} Si no puso nada q salga el error en rojo


{errors.ciudad && ( <span className="text-danger">{errors.ciudad.message}</span> )} Si no puso nada en ciudad muestra lo mismo

{errors.plazas && ( <span className="text-danger">{errors.plazas.message}</span> )} Lo mismo d lo mismo en error lee arriba si no entendiste lo de errors pero duplicado


validate: (value) => {return !isNaN(value) || 'Debe ser numérico'; si el usuario pasa un valor value no numerico saltara el error debe ser numerico

<div className="mt-5 mb-5"> <button className="btn btn-danger ms-5"  centra el boton cancelar

onClick={cancelar}> Cancelar </button> Si el boton cancelar es clickeado se va a dar la funcion cancelar antes establecida

<input type="submit" value={id > 0 ?'Actualizar' : 'Crear'} className="btn btn-success ms-5"></input> </div>
El submit acomoda el boton para q sea mas chico y lindo
El id > 0 pregunta q si el id es mas q 0 se esta actualizando y el boton dira actualizar, si es menor a 0 o igual osea se esta creando se mostrara crear esta rotisimo

</form>
Cierre del formulario.

export default Hotel;
Exporta el componente Hotel para su uso en otros lugares del proyecto.*/