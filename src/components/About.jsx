import React from 'react'
import Services from './Services'

const About = () => {
  return (
    <div className=' w-full max-w-5xl mx-auto py-20 px-10 xl:px-0'>
      <span id='about'></span>
      <p className='text-md uppercase font-sub_heading font-black text-orange-light opacity-60'>Who I am</p>
      <h2 className='text-5xl font-heading text-blue-dark opacity-90  mb-10'>About</h2>
      <p className='text-lg text-gray-darker font-body '>
      Self-taught Frontend Web Developer seeking new freelance opportunities to create unique and personality-driven websites. I'm passionate about coding, learning new technologies, and building innovative solutions.
      </p>
      <Services/>
    </div>
  )
}

export default About