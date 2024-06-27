import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import './Carrito.css'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

  return (
    <div>
        <h1>Carrito</h1>
        {
            carrito.map((prod) => (
                
                <div className='item-carrito' key={prod.id}>                    
                <h2>{prod.titulo}</h2>
                <img src={prod.imagen} className='item-imagen-carrito'/>
                <div className='item-details'>
                <div className='cart-summary'>
                <p>Precio unit: ${prod.precio}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <p>Precio total: ${prod.precio*prod.cantidad}</p>
                </div>
                </div>
                </div>
                
            ))
            
        }
        
    {  
            carrito.length > 0 ?
            <div className='d-flex justify-content-end gap-5'>
                <h2>Precio total: ${precioTotal()}</h2>
                
                <button onClick={handleVaciar} className='btn-secondary'>Vaciar 🗑️</button>
                <Link to={"/ProyectoReactJS/Checkout"} className='btn-primary  '>Finalizar Compra</Link>
                
            </div> :
            <h2>El carrito está vacío :(</h2>
        }
            
    </div>
  )
}

export default Carrito