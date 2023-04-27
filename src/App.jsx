import { useState, useEffect } from "react"
import Formulario from "./assets/Formulario"
import ListadoPacientes from "./assets/ListadoPacientes"
import Header from "./assets/header"
import url from "./Data/url"


function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const enviarPost = async ({ nombre, apellido, dni, direccion, telefono,
    fecha, id, actividad, horario }) => {
    console.log(`NOMBRE: ${nombre}  APELLIDO:${apellido} DNI : ${dni} DIRECCION: ${direccion}  TELEFONO:${telefono}
    FECHA: ${fecha} ID : ${id} ACTIVIDAD:${actividad} HORARIO:${horario}`)
    try {
      let respuesta = await fetch(url + "/alumnas/agregar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          dni: dni,
          direccion: direccion,
          telefono: telefono,
          fecha: fecha,
          id: id,
          actividad: actividad,
          horario: horario
        })

      })

      if (!respuesta.ok) {
        throw new Error("Error en la solicitud : " + respuesta.statusText)
      }
      let data = await respuesta.json()
      console.log("Registro creado: ", data)
      alert("alumno creado con exito")

      fetchData()

    } catch (error) {
      console.error("algo salio mal al crear el registro", error)
    }
  }

  const enviarPut = async ({ nombre, apellido, dni, direccion, telefono,
    fecha, id, actividad, horario }) => {

    console.log(`NOMBRE: ${nombre}  APELLIDO:${apellido} DNI : ${dni} DIRECCION: ${direccion}  TELEFONO:${telefono}
    FECHA: ${fecha} ID : ${id} ACTIVIDAD:${actividad} HORARIO:${horario}`)
    try {
      let respuesta = await fetch(url + "/alumnas/" +id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          dni: dni,
          direccion: direccion,
          telefono: telefono,
          fecha: fecha,
          id: id,
          actividad: actividad,
          horario: horario
        })

      })

      if (!respuesta.ok) {
        throw new Error("Error en la solicitud : " + respuesta.statusText)
      }
      let data = await respuesta.json()
      console.log("Registro ACTUALIZADO: ", data)
      alert("alumno ACTUALIZADO con exito")

      fetchData()

    } catch (error) {
      console.error("algo salio mal al crear el registro", error)
    }
  }

  async function fetchData() {
    try {
      const response = await fetch(url + '/alumnas');
      const data = await response.json();
      setPacientes(data);
    } catch (error) {
      console.log(error);
    }
  }


  const eliminarPaciente = async (id) => {

    const pacientesActualizados = pacientes.filter(pacien => pacien.id !== id)
    setPacientes(pacientesActualizados)
    console.log(pacientesActualizados)     
    const response = await fetch(url + "/alumnas",{
    
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      id:id})
  })    
  const data = await response.json();
    
  fetchData();
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
          enviarPost={enviarPost}
          enviarPut={enviarPut}
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
