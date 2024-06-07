import React from 'react';
import { github_white } from '../assets/tech';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-full bg-blue-darker flex flex-col items-center justify-center gap-4 p-5'>
      <div className='flex justify-center gap-3'>
        <a href="https://github.com/BeykerEstrada" target='_blank' rel='noopener noreferrer'>
          <img src={github_white} alt="GitHub" className='w-7 h-8 -translate-y-1' />
        </a>
        <a href="https://www.linkedin.com/in/beykerestrada" target='_blank' rel='noopener noreferrer'>
          <img src={linkedin} alt="LinkedIn" className='w-6 h-6' />
        </a>
        <a href="https://twitter.com/BeykerEstrada" target='_blank' rel='noopener noreferrer'>
          <img src={twitter} alt="Twitter" className='w-6 h-6' />
        </a>
      </div>
      <p className='font-special text-gray-light'>Copyright {currentYear} &#169; | Beyker Estrada</p>
    </div>
  );
}

export default Footer;
