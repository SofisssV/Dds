import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from  'axios'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const {idusuario} = useParams();
    const cargarPosts = async () => {
        const datosPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${idusuario}`)
        setPosts(datosPosts.data)
    };
    useEffect(() =>{cargarPosts()}, []);
    return(
        <>
            <h1>Posts</h1>
            <div className = "text-start">

                <ul>
                    {posts.map(p => <li key={p.id}>{p.title}</li>)}

        

                </ul>
            </div>
            <h1>Id Usuario: {idusuario} </h1> 
        </>
    );
}
export default Posts;