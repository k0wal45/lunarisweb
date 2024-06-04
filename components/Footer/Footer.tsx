'use client'
import Image from 'next/image'
import classes from './footer.module.css'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()


  return (
    

    <footer className={`rounded-t-3xl grid grid-cols-1 lg:grid-cols-3 lg:h-56 items-center justify-center gap-12 px-4 pt-6 overflow-hidden relative`}>

      <div className={classes.box}>
          <div className={classes.boxInner}></div>
      </div>

        <ul className="flex gap-2 items-center justify-center h-full z-30">
          <li className='text-3xl text-black hover:text-primary transition-all duration-75 active:scale-110'>
            <a href="https://www.facebook.com/LunarisWeb?locale=pl_PL">
              <FaFacebookF />
            </a>
          </li>
          <li className='text-3xl text-black hover:text-primary transition-all duration-75 active:scale-110'>
            <a href="https://www.instagram.com/lunarisweb.pl/">
              <FaInstagram />
            </a>
          </li>

        </ul>
      
        <p className='font-bold text-3xl h-full grid place-items-center'>©{year} Lunaris Web</p>

        <div onClick={() => window.scrollTo(0, 0)} className="flex flex-col gap-2 justify-center items-center cursor-pointer translate-y-[-10px]">
          <Image src='/img/logo.png' alt='Logo Lunaris Web' className='w-32' width={200} height={200} />
          <p className='text-3xl font-bold'>Strony Internetowe</p>
        </div>
        
        
      
    </footer>

  )
}

export default Footer