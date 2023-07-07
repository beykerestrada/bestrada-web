import React, { useState, useRef } from 'react'

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
    setLoading(true)

    emailjs.send(
      'service_gny2tdf',
      'template_sij2aum',
      {
        from_name: form.name,
        to_name: 'Beyker',
        from_email: form.email,
        reply_to: form.email,
        to_email: 'bestrada.web@gmail.com',
        message: form.message
      },
      'vCnvAYVomSFLoOFgM'
    )
      .then(() => {
        setLoading(false)
        alert('Gracias por tu mensaje. Te responderé en breve.')

        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false)
        console.log(error)

        alert('Ha ocurrido un error.')
      })
  }

  return (
    <div className='w-full max-w-5xl mx-auto py-20 px-10 xl:px-0'>
      <div className='bg-gray-light   w-full md:w-[50%] rounded-2xl p-10 shadow-xl'>
      <span id='contact'></span>
      <p className='text-md uppercase font-sub_heading font-black text-orange-light '>Hablemos</p>
      <h2 className='text-5xl font-heading text-blue-darker  mb-10'>Contacto.</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-4 w-full'
          netlify='true'
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
    </div>
  )
}

export default Contact