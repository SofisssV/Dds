import { useState } from "react";

const Agregar = ({agregarTarea}) => {
    const [nombre, setNombre] = useState('')

    const changeNombre = (evento) => {
        setNombre(evento.target.value)
    }


    const handleSubmit = (evento) => {
        evento.preventDefault();
        agregarTarea({
                id: window.crypto.randomUUID(),
                nombre: nombre,
                realizada: false,
            });
            setNombre('');
        }
    

    return(
        <form onSubmit={handleSubmit}>
            <div className="input-group mt-5 mb-5"> 
            <input type="text" className="form-control" placeholder="Ej: Comprar café" onChange={changeNombre} value={nombre}/>
            <button disabled = {!nombre} className="btn btn-primary"><i className="bi bi-plus"></i></button>
            </div>
        </form>
    )
}
export default Agregar;