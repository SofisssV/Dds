import ListaTareas from "./Tareas/ListaTareas.js";
import Contador from "./Contador/Contador.js";
import { Routes, Route, Link} from "react-router-dom";
import Inicio from "./Inicio/Inicio.js";
import About from './About/About.js';
import Error404 from './Error404/Error404.js'
import Usuarios from "./Usuarios/Usuarios.js";
import Posts from "./Posts/Posts"

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
    return(
		<>
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">DDS</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
		<li><Link to="/" className="nav-link active">Inicio</Link></li>
        </li>
        <li class="nav-item">
			<li><Link to="/tareas" className="nav-link active">To-Do List</Link></li>
        </li>
        <li class="nav-item">
			<li><Link to="/about" className="nav-link active">About</Link></li>
        </li>
        <li class="nav-item">
			<li><Link to="/usuarios" className="nav-link active">Usuarios</Link></li>
        </li>
        <li class="nav-item">
			<li><Link to="/Posts" className="nav-link active">Posts</Link></li>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
	<div className='container col-md-8 text-center'>
		<Routes>
			<Route path="/" element={<Inicio/>}/>
			<Route path="/contador" element={<Contador/>}/>
			<Route path="/tareas" element={<ListaTareas></ListaTareas>}/>
			<Route path="/about" element={<About></About>}/>
			<Route path="*" element={<Error404></Error404>}/>
			<Route path="/usuarios" element={<Usuarios></Usuarios>}/>
			<Route path="/posts/:idusuario" element={<Posts></Posts>}/>

		</Routes>
		</div>
        </>
    )
}

export default App;

/*
F1 -> Configure User Snippets -> javascript -> Pegar esto:
{
	"component":{
		"prefix": "cmp",
		"body": [
			"const $1 = () => {",
			"    return(",
			"        <>",
			"            $2",
			"        </>",
			"    )",
			"}",
			"export default $1;",
		],
		"description": "Snippet para componentes React"
	},
	"import" :{
		"prefix": "impR",
		"body": ["import $1 from './$1.js'",
	"$2"],
		"description": "Importar rapido con components"
	}
}
*/