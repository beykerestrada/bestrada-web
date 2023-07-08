import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Thankyou = () => {
    return (
        <>
            <Navbar />
            <div className='w-full max-w-5xl mx-auto py-20 px-10 xl:px-0 flex flex-col gap-5 justify-center items-center relative h-[75vh]'>
                <h3 className='font-heading text-3xl'>
                    ¡Gracias por tu mensaje!
                </h3>
                <h4 className='text-xl font-special text-orange-darker'>
                    Te responderé a la brevedad posible.
                </h4>
                <Link to={"/"} className='text-xl font-special text-gray-light px-5 py-2 rounded-md bg-blue-darker hover:opacity-90 transition-all duration-300'>
                    Volver al inicio
                </Link>
            </div>
        </>
    )
}

export default Thankyou