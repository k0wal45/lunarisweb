'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import BtnLink from '../reusable/btn-link'


const OfferCard = ({title, text, link, img, icon}: any) => {

  const clipPath = {
    initial: {clipPath: 'polygon(0 0, 100% 0, 11% 11%, 0 100%)'},
    animate: {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}
  }


  return (
    <motion.div 
      className={`bg-white relative w-full max-w-[25rem] aspect-square flex-1 z-10 group `}
      whileHover='animate'
      initial='initial'
      animate="initial"
    >
      <Image src={'/img/' + img} alt='title' width={700} height={800} className='w-full h-full object-cover absolute z-[-1]'/>
      <div className="w-full h-full p-2">
        <motion.div 
          variants={clipPath}
          className="flex flex-col z-20 bg-white w-full h-full items-center justify-center text-center p-4 gap-2"
          transition={{ease: 'backOut', duration: 1}}
        >
          <motion.p 
            className="text-8xl text-primary"
            transition={{duration: 0.5, delay: 0.2}}  
            variants={{
              initial: {opacity: 0, translateY: '20px'},
              animate: {opacity: 1, translateY: 0}
            }}
          >
            {icon}
          </motion.p>

          <motion.h6 
            transition={{duration: 0.6, delay: 0.3}}  
            variants={{
              initial: {opacity: 0, translateY: '20px'},
              animate: {opacity: 1, translateY: 0}
            }}
            className="text-2xl font-bold">{title}</motion.h6>
          <motion.p 
            transition={{duration: 0.7, delay: 0.4}}
            variants={{
              initial: {opacity: 0, translateY: '20px'},
              animate: {opacity: 1, translateY: 0}
            }}>{text}</motion.p >
          <motion.div
            transition={{duration: 0.8, delay: 0.5}}
            variants={{
              initial: {opacity: 0, translateY: '20px'},
              animate: {opacity: 1, translateY: 0}
            }}
          >
            <BtnLink link={link}>Sprawdź Teraz</BtnLink>
          </motion.div>
        </motion.div>
          
      </div>


    </motion.div>
  )
}

export default OfferCard
