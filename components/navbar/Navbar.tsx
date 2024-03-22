'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import './hamburger.css'
import Pop from './Pop'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Navbar = () => {

  const [visible, setVisible] = useState(false)


  return (
    <nav className="absolute top-0 left-0 rounded-t-xl w-full p-8 z-40 text-white flex justify-between lg:px-20">
      <Link href='/' className='text-3xl font-[700]'>LunarisWeb</Link>
      
      <label className='flex lg:hidden z-50'>
        <input type="checkbox" id="check" onClick={(e) => {e.target.checked ? setVisible(true) : setVisible(false)}}/> 
        <span></span>
        <span></span>
        <span></span>
      </label>

      
      <div
      className={`fixed top-0 right-0 h-screen w-screen bg-black pt-32 bg-opacity-90 border-l-2 border-white transition-all duration-1000 origin-right ease-in-out
        ${
          visible
          ? 'scale-x-1'
          : 'scale-x-0'
        }
      `}>

        <ul className="flex flex-col justify-center items-center gap-8 text-xl font-bold">
          <li>
            <Link href='/'>Strona Główna</Link>
          </li>
          <li>
            <Link href='/omnie'>O Mnie</Link>
          </li>
          <li>
            <Link href='/oferta'>Oferta</Link>
          </li>
          <li>
            <Link href='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='/kontakt' className='p-4 px-6 bg-white text-black rounded-lg font-bold'>Kontakt</Link>
          </li>
          <div className="w-48 border-b-2 border-white my-6"></div>
          <li className='flex gap-8'>
            <Link href='' className='text-5xl active:text-primary'><FaInstagram /></Link>
            <Link href='' className='text-5xl active:text-primary'><FaFacebook /></Link>
          </li>
        </ul>

      </div>

      <ul  className='hidden lg:flex gap-8 items-center justify-center '>
        <li>
          <Link href='/' className='hover:underline'>Strona Główna</Link>
        </li>
        <li>
          <Link href='/omnie' className='hover:underline'>O Mnie</Link>
        </li>
        <li>
          <Link href='/oferta' className='hover:underline'>Oferta</Link>
        </li>
        <li>
          <Link href='/portfolio' className='hover:underline'>Portfolio</Link>
        </li>
        <li>
          <Pop />
        </li>
          <li>
            <Link href='/kontakt' className='p-4 px-6 bg-white text-black rounded-lg font-bold'>Kontakt</Link>
          </li>
      </ul>

      <div className="absolute bottom-0 left-0 bg-gradient-to-r from-transparent via-[#555] to-transparent w-full h-[1px]"></div>
    </nav>
  )
}

export default Navbar
