import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import NavBar from "./Components/NavBar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SobreNosotros from "./Components/Pages/SobreNosotros"
import Sponsors from "./Components/Pages/Sponsors"
import Footer from "./Components/Footer/Footer"

 


function App() {

  return (
    
      <BrowserRouter>
        < NavBar />

          <Routes>
            <Route path="/ProyectoReactJS" element= {<ItemListContainer/>}/>
            <Route path="/ProyectoReactJS/productos/:categoria" element= {<ItemListContainer/>}/>
            <Route path= "/ProyectoReactJS/item/:id" element= {<ItemDetailContainer/>}/>
            <Route path= "/ProyectoReactJS/SobreNosotros" element= {<SobreNosotros/>}/>
            <Route path= "/ProyectoReactJS/Sponsors" element={<Sponsors/>}/>
    
          </Routes>

          <Footer/>
          
          
      </BrowserRouter>
    
    
  
  )
}

export default App


