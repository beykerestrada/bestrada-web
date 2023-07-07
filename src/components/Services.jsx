import React from 'react'
import { services } from '../constants'

const ServiceCard = ({ index, title, icon }) => {
    return (
            <div className='py-5 px-12 shadow-2xl rounded-[20px] min-h-[280px] min-w-[280px] flex justify-evenly items-center flex-col'>
                <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>


    )
}

const Services = () => {
    return (
        <div className='w-full max-w-5xl mx-auto py-10  px-10 xl:px-0 '>
            <span id=''></span>
            <p className='text-md uppercase opacity-60 font-sub_heading font-black text-orange-light '>Que hago</p>
            <h2 className='text-5xl opacity-90 font-heading text-blue-darker  mb-10'>Servicios.</h2>

            <div className='mt-20 flex flex-wrap gap-7 justify-evenly'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>
    )
}

export default Services