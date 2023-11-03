import React from 'react'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='bg-gray-light relative '>
      <div className='w-full max-w-5xl mx-auto py-10 px-10 flex justify-center items-center flex-wrap gap-10 lg:gap-14'>
      {technologies.map((technology) => (
        <div className="w-10 h-10 lg:w-16 lg:h-16  flex flex-col justify-center relative gap-1 group/tech" key={technology.name}>
          <img className='w-full h-full drop-shadow-lg transition-all duration-300 group-hover/tech:scale-125 group-hover/tech:-translate-y-2' src={technology.icon} alt={technology.name} />
          <p className='text-xs text-gray-darker absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap  transition-all duration-300 font-special text-center opacity-0 group-hover/tech:opacity-100 group-hover/tech:scale-150'>{technology.name}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Tech