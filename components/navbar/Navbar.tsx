'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import './hamburger.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

const Navbar = () => {

  const [visible, setVisible] = useState(false)


  return (
    <nav className="fixed top-0 left-0 rounded-t-xl w-full px-4 z-4 flex justify-between items-center lg:px-20 z-50 bg-white">
      <Link href='/' className="flex justify-center items-center p-4 gap-4 z-50">
        <Image src='/img/logo.png' alt="Logo Lunaris Web" width={70} height={70}/>
        <h2 className={`whitespace-nowrap text-2xl md:text-4xl font-[800] mt-[5px] transition-color duration-150 ${
          visible
          ? 'text-white'
          : 'text-black'
        }`}>Lunaris Web</h2>
      </Link>
      <label className='flex lg:hidden z-50'>
        <input type="checkbox" id="check" onClick={(e: any) => {e.target.checked ? setVisible(true) : setVisible(false)}}/> 
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

        <ul className="flex flex-col justify-center items-center gap-8 text-xl font-bold text-white">
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
            <Link href='/kontakt' className='p-4 px-6 bg-white text-black rounded-lg font-bold'>Porozmawiajmy!</Link>
          </li>
          <div className="w-48 border-b-2 border-white my-6"></div>
          <li className='flex gap-8'>
            <Link href='' className='text-5xl active:text-primary'><FaInstagram /></Link>
            <Link href='' className='text-5xl active:text-primary'><FaFacebook /></Link>
          </li>
        </ul>

      </div>

      <ul  className='hidden lg:flex gap-8 items-center font-[500] justify-center text-black'>
        <li>
          <Link href='/' className='hover:underline'>Strona Główna</Link>
        </li>
        <li>
          <Link href='/omnie' className='hover:underline'>O Mnie</Link>
        </li>
        <li>
          <details>
            <summary className='cursor-pointer'>
              Oferta
            </summary>
            <ul className="p-4 flex flex-col gap-4 absolute top-20 bg-white border-2 border-base rounded-xl z-40">
              <li><Link href='/oferta/strony-internetowe'>Strony Internetowe</Link></li>
              <li><Link href='/oferta/logotypy'>Logotypy</Link></li>
              <li><Link href='/oferta/grafika'>Grafika Komputerowa</Link></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary className='cursor-pointer'>
              Portfolio
            </summary>
            <ul className="p-4 flex flex-col gap-4 absolute top-20 bg-white border-2 border-base rounded-xl z-40">
              <li><Link href='/portfolio/strony-internetowe'>Strony Internetowe</Link></li>
              <li><Link href='/portfolio/wizytówki'>Wizytówki</Link></li>
              <li><Link href='/portfolio/banery-reklamowe'>Banery Reklamowe</Link></li>
              <li><Link href='/portfolio/logotypy'>Logotypy</Link></li>
            </ul>
          </details>
        </li>
          <li>
            <Link href='/kontakt' className='p-4 px-6 bg-black text-white rounded-lg font-bold'>Porozmawiajmy!</Link>
          </li>
      </ul>

      <div className="absolute bottom-0 left-0 bg-gradient-to-r from-transparent via-base to-transparent w-full h-[1px]"></div>
    </nav>
  )
}

export default Navbar
