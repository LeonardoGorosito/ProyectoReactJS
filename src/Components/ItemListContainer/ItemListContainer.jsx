import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, doc, getDocs,query, where } from 'firebase/firestore'
import { db } from '../../Firebase/client'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const [titulo, setTitulo] = useState("producto")

    const categoria = useParams().categoria

    useEffect (() => {

      const productosRef = collection( db, "producto")

      const q = categoria ? query(productosRef, where("categoria","==", categoria)) : productosRef

      getDocs(q)
        .then(resp => {
          setProductos(
            resp.docs.map((doc) => {
              return {...doc.data(), id: doc.id}
            })
          )
        })
    }, [categoria])
    
  return (

    <div>
        <ItemList productos={productos}/>
    </div>
    
  )
}

export default ItemListContainer