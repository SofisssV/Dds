import Tarea from "./Tarea.js";

const Lista = ({lista, removerTarea}) => {

    return(
        <ul className="list-group">
            {lista.map(tarea => <Tarea tarea={tarea} key={tarea.id} removerTarea={removerTarea}/>)}
        </ul>
    )
}
export default Lista;