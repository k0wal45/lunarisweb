'use client'
import Image from 'next/image'
import {motion} from 'framer-motion'
import UnderlineOnHover from '../Animations/UnderlineOnHover'

const GrowItem = ({content}: any) => {
  return (
    <UnderlineOnHover>
      <motion.div
        whileHover='hover'
        initial='initial'
        className='xl:aspect-square h-full w-full flex flex-col gap-6 p-8 relative overflow-hidden bg-black rounded-xl group z-10 '
      >
        <Image src={content.img} alt='' width={800} height={800} className='absolute top-0 left-0 w-full h-full z-10 brightness-50 object-cover object-top origin-top-left group-hover:scale-125 transition-transform ease-in-out duration-700' />


        <motion.h6 
          variants={{
            initial: {
              scale: 0.8
            },
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1.3,
            ease: "backInOut",
          }}
          className="text-5xl font-bold z-20 origin-top-left"
        >{content.title}</motion.h6>
        <p className="text-lg z-20">{content.description}</p>
      </motion.div>
    </UnderlineOnHover>
  )
}

export default GrowItem