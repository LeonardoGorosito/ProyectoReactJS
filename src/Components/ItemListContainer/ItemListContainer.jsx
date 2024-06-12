import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { pedirDatos } from '../helpers/pedirDatos'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria

    
    useEffect (() => {
        pedirDatos ()
        .then((res) => {
          if(categoria){
            setProductos(res.filter((prod) => prod.categoria === categoria));
          }else{
            setProductos(res);
          }
        })
    }, [categoria])
    
  return (

    <div>
        <ItemList productos={productos}/>
    </div>
    
  )
}

export default ItemListContainer