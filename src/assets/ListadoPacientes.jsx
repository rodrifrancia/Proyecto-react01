import React from 'react'
import Paciente from './Paciente'


const ListadoPacientes = () => {
  return (
    
    <div className='md:w-1/2 lg:w-3/5 '>
      <h2 className='text-3xl font-bold text-center'>ListadoPacientes</h2>

      <p className='mt-5 mb-5 text-lg text-center'> Administra tus{" "}
        <span className='font-bold text-indigo-600'>Pacientes y Citas</span>
        </p>
        <div className='h-screen overflow-y-scroll' >
        <Paciente/>
       <Paciente/>
       <Paciente/>
       <Paciente/>
       <Paciente/>
       <Paciente/>
       <Paciente/>
       <Paciente/>
        </div>
       

    </div>
    
    
  )
}

export default ListadoPacientes