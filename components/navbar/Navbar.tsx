import Link from 'next/link'
import React from 'react'
import Pop from './Pop'

const Navbar = () => {
  return (
    <nav className="fixed border-b-2 border-white bg-black w-full p-4 z-40 text-white flex justify-between px-20">
      <Link href='/' className='text-xl font-black'>LunarisWeb</Link>
      <ul  className='flex gap-8 items-center justify-center'>
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
