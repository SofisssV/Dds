import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])
    const cargarUsuarios = async() => {
        const datosUsuarios = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsuarios(datosUsuarios.data);
    }

    useEffect(()=> {cargarUsuarios()}, [])

    return(
        <>
         <h1>Usuarios</h1>
         <button className= "btn btn-primary" onClick={cargarUsuarios}>Cargar usuario</button>
     
        <div className = "text-start">

         <ul>
            {usuarios.map(u => <li key={u.id}>
                {u.name}
                <Link to={`/posts/${u.id}`}> Ver posts...</Link>
                </li>)}

        

         </ul>
         </div>
        </>


    )
}
export default Usuarios;