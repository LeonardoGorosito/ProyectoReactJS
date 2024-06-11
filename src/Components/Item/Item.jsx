import React from 'react'
import './Item.css'


const Item = ({producto}) => {
  return (
    
    
    <div className="card" >
      <img src={producto.imagen} className="card-img-top" alt={producto.titulo}/>

      <div className="card-body">
        <h5 className="card-title">{producto.titulo}</h5>
        <p className="card-text">$ {producto.precio}</p>

        <a href="#" className="btn btn-primary">Añadir al carrito</a>
        <a href={`/item/${producto.id}`} className="btn btn-info">Ver más</a>
  </div>
</div>


  )
}

export default Item