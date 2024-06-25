import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import { db } from '../../Firebase/client'
import { collection, addDoc, doc } from 'firebase/firestore'

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    const { register, handleSubmit } = useForm ()

  const comprar = (data) =>{
    const pedido = {

        cliente: data,
        productos: carrito,
        total: precioTotal()

    }

    console.log(pedido)

    const pedidosRef = collection(db, "pedidos")

    addDoc(pedidosRef, pedido)
        .then ((doc) => {
            setPedidoId(doc.id)
            vaciarCarrito()
        })
  }
    if(pedidoId) {
        return(
            <div>
                <h1>Muchas gracias por tu compra!</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }


  return (
    <div>
        <h1>Finalizar tu pedido</h1>
        <form onSubmit={handleSubmit(comprar)}>
        <   input type="text" placeholder='Ingresá tu nombre' {...register("nombre")}/>
            <input type="email" placeholder='Ingresá tu e-mail' {...register("email")}/>
            <input type="phone" placeholder='Ingresá tu número de celular' {...register("celular")}/>

            <button type="submit">Comprar</button>
        </form>


    </div>
  )
}

export default Checkout