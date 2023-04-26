import React from 'react';
import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [dni, setDni] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fecha, setFecha] = useState("");
    const [actividad, setActividad] = useState("");
    const [horario, setHorario] = useState("");

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setApellido(paciente.apellido)
            setDni(paciente.dni)
            setDireccion(paciente.direccion)
            setTelefono(paciente.telefono)
            setFecha(paciente.fecha)
            setActividad(paciente.actividad)
            setHorario(paciente.setHorario)
        }
    }, [paciente])



    const generarId = () => {

        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //validacion de formulario
        if ([nombre, apellido, dni, direccion, telefono, fecha, actividad, horario].includes("")) {
            setError(true)
            return;
        }
        setError(false)
        //creamos el objeto paciente
        const objPaciente = {
            nombre,
            apellido,
            dni,
            direccion,
            telefono,
            fecha,
            actividad,
            horario
        }

        if (paciente.id) {
            //Editando el objeto
            objPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
                paciente.id ? objPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            //Nuevo objeto
            objPaciente.id = generarId()
            setPacientes([...pacientes, objPaciente])

        }

        //reiniciar el form
        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")
    }


    return (
        <div className='md:w-1/2 lg:w-2/5 '>
            <h2 className=' text-3xl font-bold text-center ' >Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 mb-5 text-center'>Añade pacientes y {" "}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form action="" className='bg-white shadow-md rounded-lg py-5 px-5 mb-10 mx-3'
                onSubmit={handleSubmit}>

                {error &&
                    <Error><p>Todos los campos deben estar completos</p></Error>
                }
                <div className='mb-2'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="nombre">Nombre</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        type="text"
                        id='nombre'
                        placeholder='Nombre'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="apellido">Apellido</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        type="text"
                        id='apellido'
                        placeholder='Apellido'
                        value={apellido}
                        onChange={(e) => setPropietario(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="dni">DNI</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        type="text"
                        id='dni'
                        placeholder='Dni'
                        value={dni}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="direccion">Direccion</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        type="text"
                        id='direccion'
                        placeholder='Direccion'
                        value={direccion}
                        onChange={(e) => setFecha(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="telefono">Teléfono</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        id='telefono'
                        placeholder='Teléfono de contacto'
                        value={telefono}
                        onChange={(e) => setSintomas(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="fecha">fecha</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        type="date"
                        id='fecha'
                        placeholder='fecha'
                        value={fecha}
                        onChange={(e) => setSintomas(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="actividad">actividad</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        type="text"
                        id='actividad'
                        placeholder='Actividad'
                        value={actividad}
                        onChange={(e) => setSintomas(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="horario">horario</label>
                    <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        id='horario'
                        placeholder='horario'
                        value={horario}
                        onChange={(e) => setSintomas(e.target.value)} />
                </div>              

                <button className='bg-indigo-600  hover:bg-indigo-700 w-full mt-2 mb-2 p-2 rounded-lg transition-colors font-bold uppercase
                text-white cursor-pointer'
                    type='submit '>
                    {paciente.id ? ' Actualizar Paciente' : 'Agregar Paciente'}

                </button>
            </form>
        </div>

    )
}

export default Formulario

