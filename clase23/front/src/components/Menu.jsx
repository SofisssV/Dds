import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to="/">Hoteles</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/hoteles">Hoteles</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;

/*import { Link } from "react-router-dom"; - Importa el componente Link de react-router-dom para la navegación entre rutas.

<nav className="navbar navbar-expand-lg bg-body-tertiary"> - Define una barra de navegación con clases de Bootstrap para estilo y comportamiento.

<div className="container-fluid"> - Contenedor fluido para asegurar que la barra de navegación ocupe el 100% del ancho(ES LA QUE DICE HOTELES INICIO HOTELES).

<Link className="navbar-brand" to="/">Hoteles</Link> - Enlace a la página principal ("/") (ES HOTELES DE BARRA DE NAVEGACION,LA BARRA CAMBIA DONDE 
PUEDE LLEVARME AL HACER CLICK)con la clase de Bootstrap navbar-brand para estilo.

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" 
aria-expanded="false" aria-label="Toggle navigation"> 
--El elemento HTML <button> crea un botón interactivo que puede ser clicado por el usuario
className="navbar-toggler" dar estilo al boton por boostrap
--El atributo type="button" especifica que el botón no debe enviar un formulario cuando se haga clic en él. Es solo un botón de acción.
data-bs-toggle="collapse":
--Este atributo de Bootstrap indica que el botón debe comportarse como un disparador para colapsar o expandir un contenido específico. data-bs-toggle="collapse"
 activa el comportamiento de colapsado proporcionado por Bootstrap.
 --data-bs-target="#navbarNav"Este atributo especifica el ID del elemento que debe ser colapsado o expandido cuando se hace clic en el botón
 --El atributo aria-controls mejora la accesibilidad al indicar cuál es el elemento controlado por este botón
 --aria-expanded="false"Este atributo también mejora la accesibilidad está establecido en false, lo que significa que el contenido está colapsado, cambia cuando se hace click
 --El atributo aria-label proporciona una etiqueta accesible que describe la acción que realiza el botón. 
 En este caso, "Toggle navigation" informa a los usuarios que este botón se usa para expandir o colapsar la navegación.
 --Dentro del botón, hay un elemento <span> con la clase navbar-toggler-icon. Bootstrap usa esta clase para mostrar un 
 ícono visual que generalmente se representa como tres barras horizontales

<div className="collapse navbar-collapse" id="navbarNav"> - El collapse permite que el contenido de la barra de navegación sea oculto o mostrado 
al hacer clic en el botón y navbar especifica q se haga en la barra de navegacion, el id solo le da un nombre para idetificarlo.

<ul className="navbar-nav"> - El elemento <ul> representa una lista no ordenada en HTML. En este contexto, se utiliza para contener los elementos de la barra de navegación.
--navbar-nav: Esta clase de Bootstrap se aplica al elemento <ul> para indicar que la lista es una lista de navegación dentro de una barra de navegación (navbar). 
Esta clase asegura que los elementos de la lista (<li>) se estilicen correctamente para una barra de navegación.

<li className="nav-item"> <li>: Es un elemento de lista en HTML que se utiliza para definir un elemento dentro de una lista no ordenada 
-- className="nav-item Asegura que los elementos de la lista tengan los estilos adecuados de margen, relleno y otros estilos específicos de navegación.

<Link className="nav-link active" to="/">Inicio</Link> -Link te lleva a la pagina q le especifiques, este caso /
--nav-link le da estilo al boton inicio
--active le da brillito blanco re lindo para indicar q esta disponible para el click

<Link className="nav-link active" to="/hoteles">Hoteles</Link> - Enlace a la página de hoteles con la clase de Bootstrap nav-link y active para el estilo.

export default Menu; --Esto permite que el componente Menu sea importado y utilizado en otros archivos.*/