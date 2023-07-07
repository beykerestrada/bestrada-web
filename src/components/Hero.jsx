import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { bkPortada } from '../assets'

import { heroDescription } from '../constants'

const heading = heroDescription[0].heading
const subHeading1 = heroDescription[0].subHeading1
const subHeading2 = heroDescription[0].subHeading2
const buttonText = heroDescription[0].buttonText

const Hero = () => {
  return (
    <div className='bg-gray-light -z-50'>
      <section className='w-full  flex flex-col relative bg-gradient-to-r from-[#fafafa] to-[white] rounded-br-[30%] overflow-hidden'>
        <Navbar />
        <div className='w-full   max-w-5xl mx-auto px-10 xl:px-0 flex flex-col sm:flex-row sm:flex-wrap justify-between py-5 mt-5'>
          <div className=' z-20 flex  flex-col justify-center items-start gap-10 md:w-[60%] mb-10'>
            <h2 className='text-3xl lg:text-6xl font-heading text-blue-dark'>{heading}</h2>
            <h1 className='text-2xl lg:text-3xl font-sub_heading text-orange-dark'>
              <span>{subHeading1}</span>
              <br />
              <span>{subHeading2}</span>
            </h1>
            <Link to={'/'} className='font-special  sm:text-xl bg-blue-dark px-5 py-2 sm:px-10 md:py-2 w-[180px] sm:w-60 text-gray-light rounded-lg hover:opacity-90 hover:shadow-lg text-center'>
              {buttonText}
            </Link>
          </div>
          <div className='w-full md:w-[40%] flex justify-center relative'>
            <div className='absolute  w-[350px] h-[350px] top-20 right-40 bg-gradient-to-br from-blue-light to-gray-light  shadow-2xl rounded-full  motion-safe:animate-pulse'></div>
            <div className='absolute  w-[350px] h-[350px] top-20 right-40 bg-gradient-to-br from-blue-light to-gray-light  shadow-2xl rounded-full  motion-safe:animate-pulse'></div>
            <div className='absolute  w-[150px] h-[150px] -top-10 right-0 bg-gradient-to-br from-orange-darker via-orange-dark to-orange-light-light  shadow-2xl rounded-full  motion-safe:animate-pulse'></div>
            <div className='absolute  w-[150px] h-[150px] -top-10 right-0 bg-gradient-to-br from-orange-darker via-orange-dark to-orange-light-light  shadow-2xl rounded-full  motion-safe:animate-pulse'></div>
            <div className='absolute  w-[100px] h-[100px] top-60 -right-20 bg-gradient-to-br  from-yellow-dark to-yellow-light  shadow-2xl rounded-full  animate-pulse'></div>
            <div className='absolute  w-[100px] h-[100px] top-60 -right-20 bg-gradient-to-br  from-yellow-dark to-yellow-light  shadow-2xl rounded-full  animate-pulse'></div>
            <div className={` w-[80%] sm:w-[50%] md:w-full  rounded-b-[25%] flex`}  >
              <img src={bkPortada} alt="Foto de Beyker Estrada" className='translate-y-6' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero