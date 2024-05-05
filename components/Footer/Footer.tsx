'use client'
import Image from 'next/image'
import classes from './footer.module.css'
import { FaFacebook, FaFacebookF, FaInstagram } from 'react-icons/fa'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()


  return (
    

    <footer className={`${classes.bgWave} bg-neutral-200 rounded-t-3xl grid grid-cols-1 lg:grid-cols-3 lg:h-56 items-center justify-center gap-12 p-4`}>
      
        <p className='font-bold text-3xl h-full grid place-items-center'>©{year} Lunaris Web</p>

        <div onClick={() => window.scrollTo(0, 0)} className="flex flex-col gap-2 justify-center items-center cursor-pointer">
          <Image src='/img/logo.png' alt='Logo Lunaris Web' className='w-32' width={200} height={200} />
          <p className='text-3xl font-bold'>Strony Internetowe</p>
        </div>
        
        <ul className="flex gap-2 items-center justify-center">
          <li className='text-3xl text-black hover:text-primary transition-all duration-75 active:scale-110'>
            <a href="">
              <FaFacebookF />
            </a>
          </li>
          <li className='text-3xl text-black hover:text-primary transition-all duration-75 active:scale-110'>
            <a href="">
              <FaInstagram />
            </a>
          </li>
          
        </ul>
      
    </footer>

  )
}

export default Footer