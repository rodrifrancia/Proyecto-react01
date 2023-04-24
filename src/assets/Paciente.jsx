import React from 'react'

const Paciente = () => {
    return (
        <div className='bg-white shadow-md rounded-lg mb-10 pl-10 ml-7 py-5 px-5'>
            <p className='font-bold text-gray-700 uppercase pb-1'>
                Nombre: {" "} <span className='font-normal normal-case '>Loly</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-1'>
                Propietario: {" "} <span className='font-normal normal-case'>Rodri</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-1'>
                Email: {" "} <span className='font-normal normal-case'>rodrigofrancia98@gmail.com</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-1'>
                Fecha de Alta: {" "} <span className='font-normal normal-case'>21 de Abril de 2023</span>
            </p>

            <p className='font-bold text-gray-700 uppercase pb-1'>
                Síntomas: {" "} <span className='font-normal normal-case'>Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Sed laboriosam dignissimos nihil unde, doloribus rem nulla consectetur fugit
                    quaerat possimus facilis quasi nam aliquid error omnis eius. At, laboriosam impedit.</span>
            </p>
        </div>
    )
}

export default Paciente