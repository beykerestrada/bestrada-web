import React from 'react'
import { github_white } from '../assets/tech'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'

const Footer = () => {
  return (
    <div className='w-full  bg-blue-darker flex flex-col items-center justify-center gap-4 p-5'>
      <div className=' flex justify-center gap-3'>
        <a href="https://github.com/BeykerEstrada" target='_blank'>
          <img src={github_white} alt="linkedin" className='w-7 h-8 -translate-y-1' />
        </a>
        <a href="https://www.linkedin.com/in/beykerestrada" target='_blank'>
          <img src={linkedin} alt="linkedin" className='w-6 h-6' />
        </a>
        <a href="https://twitter.com/BeykerEstrada" target='_blank'>
          <img src={twitter} alt="linkedin" className='w-6 h-6' />
        </a>
      </div>
      <p className='font-special text-gray-light'>Copyright 2023 &#169; | Beyker Estrada</p>
    </div>
  )
}

export default Footer