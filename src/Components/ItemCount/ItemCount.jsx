import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({cantidad, handleSumar, handleRestar, handleAgregar}) => {

    
    
    return (
        <div>
        <div className="item-count container text-center">
          <div className="row align-items-start">
        <button onClick ={handleRestar}  >-</button>
            <p className='col'>{cantidad}</p>
            <button onClick ={handleSumar}>+</button>
        </div>
        </div>
        <button className="btn btn-primary" onClick={handleAgregar}>Añadir al carrito</button>
        
    </div>
  )
}

export default ItemCount