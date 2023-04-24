import React from 'react';
import { useState, useEffect } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        //validacion de formulario
        if ([nombre, propietario, email, fecha, sintomas].includes("")) {
            setError(true)
        } else {
            setError(false)
            e.target.reset();
        }
    }


    return (
        <div className='md:w-1/2 lg:w-2/5 '>
            <h2 className=' text-3xl font-bold text-center ' >Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 mb-5 text-center'>Añade pacientes y {" "}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form action="" className='bg-white shadow-md rounded-lg py-5 px-5 mb-10'
                onSubmit={handleSubmit}>

                {error &&
                    <div>
                        <p className='font-bold text-center bg-red-600 text-white uppercase rounded-md'>
                            Todos los campos son obligatorios</p>
                    </div>
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

                <button className='bg-indigo-600  hover:bg-indigo-700 w-full mt-2 mb-2 p-1 rounded-lg transition-colors font-bold uppercase
                text-white cursor-pointer' type='submit '>Agregar Paciente</button>
            </form>
        </div>

    )
}

export default Formulario

