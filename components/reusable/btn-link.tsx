'use client'
import Link from 'next/link';
import { motion } from "framer-motion"


const BtnLink = ({link, children}: {link: string, children?: React.ReactNode;}) => {
  return (
    
      <Link href={link} className='p-4 px-8 bg-gradient-to-r from-secondary to-primary text-center rounded-md text-white font-bold grid place-items-center text-xl transition-all duration-300
      hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] 
      active:translate-x-[0px] active:translate-y-[0px] active:shadow-none
      '>
        {children}
      </Link>
    
  )
}

export default BtnLink
