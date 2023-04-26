import React from 'react'

const Error = ({ children }) => {
    return (
        <div className='font-bold text-center bg-red-600 text-white uppercase rounded-md my-2'>
            {children}
        </div>
    )
}

export default Error