import React from 'react'

const Paciente = ({ paciente,setPaciente }) => {

    const { nombre, propie, email, fecha, sintomas } = paciente


    return (
        <div className='bg-white shadow-md rounded-lg mb-10 mx-3 py-5 px-5'>
            <p className='font-bold text-gray-700 uppercase pb-2'>
                Nombre: {" "} <span className='font-normal normal-case '>{nombre}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-2'>
                Propietario: {" "} <span className='font-normal normal-case'>{propie}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-2'>
                Email: {" "} <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-2'>
                Fecha de Alta: {" "} <span className='font-normal normal-case'>{fecha}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-2'>
                Síntomas: {" "} <span className='font-normal normal-case'>{sintomas}</span>
            </p>
            <div className='flex justify-end space-x-8'>

                <button className='bg-indigo-600 hover:bg-indigo-700 py-2 px-5 text-white font-bold uppercase rounded-md'
                onClick={()=>setPaciente(paciente)}>
                    Editar</button>

                <button className='bg-red-600 hover:bg-red-700 py-2 px-5 text-white font-bold uppercase rounded-md'>
                    Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente