import React from 'react'
import { services } from '../constants'

const ServiceCard = ({ index, title, icon }) => {
    return (
            <div className='bg-gray-light border border-gray-darker py-5 px-12 shadow-2xl rounded-[20px] min-h-[280px] min-w-[280px] flex justify-evenly items-center flex-col '>
                <img src={icon} alt={title} className='w-24 h-24 object-contain' />
                <h3 className='text-blue-dark text-[20px] font-special font-bold text-center'>{title}</h3>
            </div>


    )
}

const Services = () => {
    return (
        <div className='w-full max-w-5xl mx-auto py-10  '>
            <span id=''></span>
            <p className='text-md uppercase opacity-60 font-sub_heading font-black text-orange-light '>What I do</p>
            <h2 className='text-5xl opacity-90 font-heading text-blue-darker  mb-10'>Services.</h2>

            <div className='mt-20 flex flex-wrap gap-7 justify-evenly '>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>
    )
}

export default Services