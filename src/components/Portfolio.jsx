import React from 'react'

import { projects } from '../constants'
import { github_white, link } from '../assets/tech'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, deploy_link }) => {
  return (
    <div className='bg-[#192a3ada] shadow-2xl p-5 rounded-2xl sm:w-[360px] w-full hover:-translate-y-1 hover:scale-105 transition-all duration-300'>
      <div className='relative w-full  h-[230px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-2 gap-1 card-img_hove'>
          <div
            onClick={() => window.open(deploy_link, "_blank")}
            className='bg-gradient-to-r from-[#000] to-gray-darker w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-1 hover:scale-105 transition duration-300'
          >
            <img
              src={link}
              alt={link}
              className='w-1/2 h-1/2 object-contain '
            />
          </div>
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-gradient-to-r from-[#000] to-gray-darker w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-1 hover:scale-105 transition duration-300'
            >
              <img
                src={github_white}
                alt={github_white}
                className='w-1/2 h-1/2 object-contain '
              />
            </div>
          )}
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-orange-light font-bold text-[24px] font-special'>{name}</h3>
        <p className='mt-2 text-secondary font-body text-gray-light text-[14px]'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] font-body ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  )
}
const Portfolio = () => {
  return (
    <div className='w-full max-w-5xl py-20 px-10 mx-auto xl:px-0'>
      <span id='portfolio'></span>
      <p className='text-md uppercase font-black font-sub_heading text-orange-light opacity-60'>My work</p>
      <h2 className='text-5xl font-heading text-blue-dark opacity-90  mb-10'>Proyects</h2>

      <p className='text-lg text-gray-darker font-body'>
        Here you can see some of my projects. Through these, I have had the opportunity to practice with different technologies, progressively improve my skills and programming logic, and add tools to my development stack.
      </p>

      <div className='mt-20 flex flex-wrap justify-evenly gap-10'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
            index={index}
            {...project} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio