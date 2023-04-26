import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente,enviarPost }) => {

    const { nombre, apellido, dni, direccion, telefono,fecha,
        id,actividad,horario} = paciente


    const handleEliminar = () => {
        const respuesta = confirm("Deseas eliminar este paciente?")

        if (respuesta) {
            eliminarPaciente(id)
        }
    }


    return (
        <div className='bg-white shadow-md rounded-lg mb-10 mx-3 py-5 px-5'>
            <p className='font-bold text-gray-700 uppercase pb-2'>
                Nombre: {" "} <span className='font-normal normal-case'>{nombre}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-2'>
                Apellido: {" "} <span className='font-normal normal-case'>{apellido}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-2'>
                Dni: {" "} <span className='font-normal normal-case'>{dni}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-2'>
                Direccion: {" "} <span className='font-normal normal-case'>{direccion}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-2'>
                Teléfono: {" "} <span className='font-normal normal-case'>{telefono}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-2'>
                Fecha: {" "} <span className='font-normal normal-case'>{fecha}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-2'>
                Actividad: {" "} <span className='font-normal normal-case'>{actividad}</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-2'>
                Horario: {" "} <span className='font-normal normal-case'>{horario}</span>
            </p>


            <div className='flex justify-end space-x-8'>

                <button className='bg-indigo-600 hover:bg-indigo-700 py-2 px-5 text-white font-bold uppercase rounded-md'
                    onClick={() => setPaciente(paciente)}>
                    Editar</button>

                <button className='bg-red-600 hover:bg-red-700 py-2 px-5 text-white font-bold uppercase rounded-md'
                    onClick={handleEliminar}
                >
                    Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente