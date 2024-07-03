import { useState } from "react";


const Tarea = ({tarea, removerTarea}) => {
    const [realizada, setRealizada] = useState(tarea.realizada);
    let estilo = {textDecoration : realizada && 'line-through', color : realizada && 'red'}
    
    
    return(
        <>
            <li className="list-group-item text-start">
                <input type="checkbox" onChange={(evento) => {setRealizada(evento.target.checked)}} checked={realizada? 'checked' : ''} className="form-check-input me-1"/>
                <label style={estilo} className="form-check-label ms-2">{tarea.nombre} </label>
                <button onClick={(e) => removerTarea(tarea.id)} className="btn btn-danger float-end"><i className="bi bi-trash"></i></button>
            </li>
        </>
    )
}

export default Tarea;