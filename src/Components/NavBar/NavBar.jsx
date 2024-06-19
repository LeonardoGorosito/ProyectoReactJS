import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
  return (

    <header className="header">

        <Link to="/ProyectoReactJS" className='logo'><h1>MiTiendaOnline</h1></Link>
        
        <nav className='navbar'>
            <Link to="/ProyectoReactJS"><ul>Inicio</ul></Link>
            <ul>
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
                </button>
                <ul className="dropdown-menu">
                    <Link to="/ProyectoReactJS/productos/remeras"><li><button className="dropdown-item" type="button">Remeras</button></li></Link>
                    <Link to="/ProyectoReactJS/productos/Abrigos"><li><button className="dropdown-item" type="button">Abrigos</button></li></Link>
                    <Link to="/ProyectoReactJS/productos/Calzado"><li><button className="dropdown-item" type="button">Calzado</button></li></Link>
                </ul>
                </div>
            </ul>
            <Link to="/ProyectoReactJS/Sponsors"><ul>Sponsors</ul></Link>
            <Link to="/ProyectoReactJS/SobreNosotros"><ul>¿Quiénes sómos?</ul></Link>
        </nav>
        <div className="cart"><CartWidget/></div>

    </header>
  )
}

export default NavBar

