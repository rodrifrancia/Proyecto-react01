import { useState, useEffect } from "react"
import Formulario from "./assets/Formulario"
import ListadoPacientes from "./assets/ListadoPacientes"
import Header from "./assets/header"
import url from "./Data/url"


function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const enviarPost = async (id, nombre, apellido) => {
    console.log(`ID : ${id} NOMBRE: ${nombre}  APELLIDO:${apellido}`)
    try {
      let respuesta = await fetch(url + "/alumnas/agregar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: id,
          nombre: nombre,
          apellido: apellido
        })

      })

      if (!respuesta.ok) {
        throw new Error("Error en la solicitud : " + respuesta.statusText)
      }
      let data = await respuesta.json()
      console.log("Registro creado: ", data)
      alert("alumno creado cone xito")

      async function fetchData() {
        try {
          const response = await fetch(url +'/alumnas');
          const data = await response.json();
          setPacientes(data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData()

    } catch (error) {
      console.error("algo salio mal al crear el registro", error)
    }



  }


  const eliminarPaciente = (id) => {

    const pacientesActualizados = pacientes.filter(pacien => pacien.id !== id)
    setPacientes(pacientesActualizados)
    console.log(pacientesActualizados)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url + '/alumnas');
        const data = await response.json();
        setPacientes(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, []);


  return (

    <div className="container mx-auto">
      <Header />
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
          eliminarPaciente={eliminarPaciente}
          enviarPost={enviarPost}
        />

      </div>

    </div>
  )
}

export default App
