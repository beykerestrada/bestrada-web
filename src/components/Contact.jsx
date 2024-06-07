

const Contact = () => {

  return (
    <div className='w-full max-w-5xl mx-auto py-20 px-10 xl:px-0 flex justify-center items-center relative'>
      <div className='bg-gray-light border border-gray-darker  w-full md:w-[50%] rounded-2xl p-5 shadow-xl'>
        <span id='contact'></span>
        <p className='text-md uppercase font-sub_heading font-black text-orange-light '>Let's talk</p>
        <h2 className='text-5xl font-heading text-blue-darker  mb-10'>Contact.</h2>
        <form          
          className='mt-12 flex flex-col gap-4 w-full'
          action="https://formsubmit.co/contacto@beykerestrada.com" 
          method="POST"
        >
          <input type="hidden" name="_subject" value={'Nuevo mensaje en beykerestrada.com'} />
          <input type="hidden" name="_next" value={'https://beykerestrada.com/thankyou.html'} />
          <input type="hidden" name="_captcha" value="false"></input>
          <label className='flex flex-col'>
            <span className='text-gray-darker font-special font-medium mb-4'>Name</span>
            <input
              type="text"
              name='name'
              placeholder="Jon Doe"
              required
              className='bg-[white] font-body py-4 px-6 placeholder:text-secondary text-gray-darker rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-darker font-special font-medium mb-4'>Email</span>
            <input
              type="email"
              name='email'
              placeholder="hello@world.com"
              required
              className='bg-[white] font-body py-4 px-6 placeholder:text-secondary text-gray-darker rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-darker font-special font-medium mb-4'>Message</span>
            <textarea
              rows={'7'}
              name='message'
              placeholder="Insert your message here"
              required
              className='bg-[white] font-body py-4 px-6 placeholder:text-secondary text-gray-darker rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-blue-darker py-3 px-8 outline-none w-fit text-gray-light font-special self-end font-bold shadow-md shadow-primary rounded-xl'
          >
            Send
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