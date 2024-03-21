import Link from 'next/link'
import React from 'react'
import Pop from './Pop'

const Navbar = () => {
  return (
    <nav className="fixed border-b-2 border-white bg-black w-full p-8 z-40 text-white flex justify-between lg:px-20">
      <Link href='/' className='text-3xl font-[700]'>LunarisWeb</Link>
      <ul  className='hidden lg:flex gap-8 items-center justify-center '>
        <li>
          <Link href='/'>Strona Główna</Link>
        </li>
        <li>
          <Link href='/'>O Mnie</Link>
        </li>
        <li>
          <Link href='/'>Oferta</Link>
        </li>
        <li>
          <Pop />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
