import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {
  return (
    <header className="header">
<h1>MiTiendaOnline</h1>
        
        <nav className='navbar'>
            <ul>Inicio</ul>
            <ul>
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button">Remeras</button></li>
                    <li><button className="dropdown-item" type="button">Abrigos</button></li>
                    <li><button className="dropdown-item" type="button">Calzado</button></li>
                </ul>
                </div>
            </ul>
            <ul>Sponsors</ul>
            <ul>¿Quiénes sómos?</ul>
        </nav>

        <div className="cart"><CartWidget/></div>

    </header>
  )
}

export default NavBar

//Consigna.
//Crea un componente CartWidget con un ícono y una notificación mostrando un número hardcodeado (fijo). Este servirá luego para indicar la cantidad de elementos que tenemos en el carrito, pero por ahora, mostrará un número hardcodeado (colocado en el código). Ubica este componente (CartWidget) dentro de Navbar.. Agrega algunos estilos con bootstrap/materialize u otro.
//Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado.
