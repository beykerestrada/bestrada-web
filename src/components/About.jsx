import React from 'react'
import Services from './Services'

const About = () => {
  return (
    <div className=' w-full max-w-5xl mx-auto py-20 px-10 xl:px-0'>
      <span id='about'></span>
      <p className='text-md uppercase font-sub_heading font-black text-orange-light opacity-60'>Quién soy</p>
      <h2 className='text-5xl font-heading text-blue-dark opacity-90  mb-10'>Acerca de</h2>
      <p className='text-lg text-gray-darker font-body '>
        Desarrollador Web Frontend autodidacta, en busca de nuevas oportunidades freelance para desarrollar sitios web únicos y con personalidad. Estoy constantemente actualizándome y poniendo mis habilidades a prueba con proyectos autónomos. 
      </p>
      <Services/>
    </div>
  )
}

export default About