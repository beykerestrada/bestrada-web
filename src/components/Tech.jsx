import React from 'react'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='bg-gray-light relative '>
      <div className='w-full max-w-5xl mx-auto py-10 px-10 flex justify-evenly flex-wrap gap-10 '>
      {technologies.map((technology) => (
        <div className="w-12 h-12 flex justify-center gap" key={technology.name}>
          <img className='w-full drop-shadow-lg' src={technology.icon} alt={technology.name} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default Tech