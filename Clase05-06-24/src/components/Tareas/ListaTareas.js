import Lista from './Lista.js'
import Agregar from './Agregar.js'
import Titulo from './Titulo.js'
import { useState } from 'react'

const ListaTareas = () => {
    const [lista, setLista] = useState([])
    const agregarTarea = (tarea) => {
        setLista([...lista, tarea])
    }

    const removerTarea = (id) => {
        let nuevaLista = lista.filter(tarea => tarea.id !== id)
        setLista(nuevaLista)
    }

    return(
        <div className='container col-md-8 text-center'>
        <Titulo>To-Do List</Titulo>
        <Agregar agregarTarea = {agregarTarea}></Agregar>
        <Lista lista = {lista} removerTarea={removerTarea}></Lista>
        </div>
    )
}
export default ListaTareas;