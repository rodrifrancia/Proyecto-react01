import { useState } from "react"
import Formulario from "./assets/Formulario"
import ListadoPacientes from "./assets/ListadoPacientes"
import Header from "./assets/header"


function App() {
  const[pacientes,setPacientes] = useState([])
  const[paciente, setPaciente] = useState({})

  return (

    <div className="container mx-auto">
      <Header/>
      <div className="mt-12 md:flex ">

      <Formulario
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      />
      <ListadoPacientes
      pacientes={pacientes}
      setPaciente={setPaciente}
      />

      </div>
      
    </div>
  )
}

export default App
