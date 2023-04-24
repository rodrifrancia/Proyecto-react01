import Formulario from "./assets/Formulario"
import ListadoPacientes from "./assets/ListadoPacientes"
import Header from "./assets/header"


function App() {
  

  return (

    <div className="container mx-auto">
      <Header/>
      <div className="mt-12 md:flex ">

      <Formulario/>
      <ListadoPacientes/>

      </div>
      
    </div>
  )
}

export default App
