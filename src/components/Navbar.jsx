import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import { HiMenuAlt3 } from 'react-icons/hi'

import { navLinks } from '../constants'


const Navbar = () => {
  const [active, setActive] = useState("/")
  const [toggle, setToggle] = useState(false)
  return (
    <div className='w-full z-50 mx-auto px-6 flex justify-center items-center py-5'>
      <nav className='w-full max-w-5xl flex justify-between items-center h-full'>
        <div className='flex items-center justify-start h-full'>
          <Link to={'/'} >
            <h3 className='text-2xl text-blue-darker font-heading font-black'>beykerEstrada()</h3>
          </Link>
        </div>
        <div className="h-full flex items-center">
          <ul className='list-none hidden md:flex flex-row gap-8 items-center text-[16px] h-full'
          >
            <li className="flex items-center font-sub_heading">
              <Link to={'/'}
                className={`${active === "/"
                  ? "text-[#e89a59]"
                  : "text-gray-700"
                  } hover:text-orange-light transition-all duration-200 text-[14px] lg:text-[16px] font-medium cursor-pointer`}
                onClick={() => setActive("/")}
              >{"<Inicio/>"}</Link>
            </li>
            {
              // este metodo mapea el array de arriba y devuelve un li por cada objeto
              navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                    ? "text-[#e89a59]"
                    : "text-gray-700"
                    } font-sub_heading hover:text-orange-light transition-all duration-200 flex items-center lg:text-[16px]  sm:text-[14px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{`<${link.title}/>`}</a>
                </li>
              ))}
          </ul>
        </div>


        {/* Menu responsive */}
        <div className="md:hidden z-50 flex flex-1 justify-end items-center">
          <div className=" h-full flex items-center justify-center">
            {
              toggle ?
                <MdClose
                  className='text-[30px] object-contain cursor-pointer '
                  onClick={() => setToggle(!toggle)} />
                :
                <HiMenuAlt3
                  className='my-auto text-[30px] object-contain cursor-pointer'
                  onClick={() => setToggle(!toggle)} />
            }
          </div>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6  absolute black-gradient  top-20 right-0 mx-4 my-2 min-w-[240px]  bg-blue-dark   z-50 rounded-xl items-center`}>

            <ul className='list-none  flex flex-col gap-4  items-center text-[16px] h-full w-full'
            >
              <li>
                <Link to={'/'}
                  className={`${active === "/"
                    ? "text-[#e89a59]"
                    : "text-gray-light"
                    } text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive("/")
                    setToggle(!toggle)
                  }}
                >{"<Inicio />"}</Link>
              </li>
              {
                // este metodo mapea el array de arriba y devuelve un li por cada objeto
                navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${active === link.title
                      ? "text-[#e89a59]"
                      : "text-gray-light"
                      }  text-[18px] font-medium cursor-pointer`}
                    onClick={() => {
                      setActive(link.title)
                      setToggle(!toggle)
                    }}
                  >
                    <a href={`#${link.id}`}>{`<${link.title} />`}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar