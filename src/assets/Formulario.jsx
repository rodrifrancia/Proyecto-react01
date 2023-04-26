import React from 'react';
import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
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
        if ([nombre, propietario, email, fecha, sintomas].includes("")) {
            setError(true)
            return;
        }
        setError(false)
        //creamos el objeto paciente
        const objPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
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
            paciente.id = generarId()
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
                    <label className='block uppercase font-bold text-gray-700' htmlFor="nombre">Nombre Mascota</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        type="text"
                        id='nombre'
                        placeholder='Nombre de la Mascota'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="propietario">Nombre Propietario</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        type="text"
                        id='propietario'
                        placeholder='Nombre del Propietario'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="email">Email</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        type="text"
                        id='email'
                        placeholder='Email del Propietario'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="alta">Alta</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        type="date"
                        id='alta'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="sintomas">Síntomas</label>
                    <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-lg'
                        id='sintomas'
                        placeholder='Describa los Síntomas'
                        value={sintomas}
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

