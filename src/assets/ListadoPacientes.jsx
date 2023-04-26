import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente,enviarPost }) => {


  return (



    <div className='md:w-1/2 lg:w-3/5 '>

      {pacientes && pacientes.length? (
        <>
          <h2 className='text-3xl font-bold text-center'>Listado Pacientes</h2>

          <p className='mt-5 mb-5 text-lg text-center'> Administra tus{" "}
            <span className='font-bold text-indigo-600'>Pacientes y Citas</span>
          </p>

          <div className='h-screen overflow-y-scroll' >

            {pacientes.map(paciente => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
                enviarPost={enviarPost}
              />
            ))}
          </div>

        </>
      ) : (
        <>
        <h2 className='text-3xl font-bold text-center'>Listado Pacientes</h2>
          <p className='mt-5 mb-5 text-lg text-center'> Actualmente no tienes pacientes, comienza a{" "}
            <span className='font-bold text-indigo-600'>agregar y aparecerán aquí</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes