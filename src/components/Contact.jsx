import React, { useState, useRef } from 'react'
import sendMail from '../helpers/sendMail';

const Contact = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = 'Nuevo mensaje en beykerestrada.com'
    const text = `Nombre: ${form.name}\nEmail: ${form.email}\nMensaje: ${form.message}`
    const html = `Nombre: ${form.name}\nEmail: ${form.email}\nMensaje: ${form.message}`

    setLoading(true)

    sendMail(subject, text, html)

    setLoading(false)
  }

  return (
    <div className='w-full max-w-5xl mx-auto py-20 px-10 xl:px-0 flex justify-center items-center relative'>
      <div className='bg-gray-light border border-gray-darker  w-full md:w-[50%] rounded-2xl p-10 shadow-xl'>
        <span id='contact'></span>
        <p className='text-md uppercase font-sub_heading font-black text-orange-light '>Hablemos</p>
        <h2 className='text-5xl font-heading text-blue-darker  mb-10'>Contacto.</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-4 w-full'
        >
          <label className='flex flex-col'>
            <span className='text-gray-darker font-special font-medium mb-4'>Tu nombre</span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cómo te llamas?"
              className='bg-[white] font-body py-4 px-6 placeholder:text-secondary text-gray-darker rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-darker font-special font-medium mb-4'>Tu correo</span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cuál es tu correo?"
              className='bg-[white] font-body py-4 px-6 placeholder:text-secondary text-gray-darker rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-darker font-special font-medium mb-4'>Tu mensaje</span>
            <textarea
              rows={'7'}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="¿Qué me quieres consultar?"
              className='bg-[white] font-body py-4 px-6 placeholder:text-secondary text-gray-darker rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-blue-darker py-3 px-8 outline-none w-fit text-gray-light font-special font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
      <div className=' h-full flex justify-center items-center absolute -z-30'>
        <div className='w-[300px] h-[300px] absolute translate-x-60'>
          <div className=' w-full h-full absolute rounded-full bg-gradient-to-br from-blue-light to-gray-light  shadow-2xl motion-safe:animate-pulse'></div>
          <div className=' w-full h-full absolute rounded-full bg-gradient-to-br from-blue-light to-gray-light  shadow-2xl motion-safe:animate-pulse'></div>
        </div>



        <div className='w-[300px] h-[300px] absolute -translate-y-60 -translate-x-60 '>
          <div className='bg-orange-light rounded-full  w-full h-full absolute bg-gradient-to-br from-orange-darker via-orange-dark to-orange-light-light  shadow-2xl motion-safe:animate-pulse'></div>
          <div className='bg-orange-light rounded-full  w-full h-full absolute bg-gradient-to-br from-orange-darker via-orange-dark to-orange-light-light  shadow-2xl motion-safe:animate-pulse'></div>
        </div>

        <div className='w-[300px] h-[300px] absolute translate-y-80 -translate-x-40'>
          <div className='bg-gradient-to-br w-full h-full absolute  from-yellow-dark to-yellow-light  shadow-2xl rounded-full motion-safe:animate-pulse'></div>
          <div className='bg-gradient-to-br w-full h-full absolute from-yellow-dark to-yellow-light  shadow-2xl rounded-full motion-safe:animate-pulse'></div>
        </div>
      </div>
    </div>
  )
}

export default Contact