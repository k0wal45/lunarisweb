'use client'
import {motion} from 'framer-motion'

const PortfolioItem = () => {

  const clipPath = {
    initial: {
      clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 48% 100%, 48% 100%, 84% 0)',
    },
    animate: {
      clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 29% 100%, 24% 50%, 0 0)',
    },
  }

  return (
    <motion.div 
      className={' w-2/3 h-72 rounded-xl'}
      whileHover='animate'
      initial='initial'
      animate="initial"
   
    >
      
      <motion.div 
        variants={clipPath}
        transition={{duration: 0.6, ease: 'backOut'}}
        className='w-full h-full  bg-primary'
      >

      </motion.div>
    </motion.div>
  )
}

export default PortfolioItem
