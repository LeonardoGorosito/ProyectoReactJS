import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import NavBar from "./Components/NavBar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SobreNosotros from "./Components/Pages/SobreNosotros"
import Sponsors from "./Components/Pages/Sponsors"
import Footer from "./Components/Footer/Footer"
import { CartProvider } from "./Components/context/CartContext"
import Carrito from "./Components/Cart/Carrito"


function App() {
  return (
    

    <div>
      <CartProvider>

      <BrowserRouter>
        < NavBar />

          <Routes>
            <Route path="/ProyectoReactJS" element= {<ItemListContainer/>}/>
            <Route path="/ProyectoReactJS/productos/:categoria" element= {<ItemListContainer/>}/>
            <Route path= "/ProyectoReactJS/item/:id" element= {<ItemDetailContainer/>}/>
            <Route path= "/ProyectoReactJS/SobreNosotros" element= {<SobreNosotros/>}/>
            <Route path= "/ProyectoReactJS/Sponsors" element={<Sponsors/>}/>
            <Route path= "/ProyectoReactJS/Carrito" element={<Carrito/>}/>
    
          </Routes>

          <Footer/>
          
          
      </BrowserRouter>      
      </CartProvider>
      </div>
  
  )
}

export default App


