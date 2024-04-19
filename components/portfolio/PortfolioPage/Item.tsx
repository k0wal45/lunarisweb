'use client'
import {motion} from 'framer-motion'

const PortfolioItem = () => {
  return (
    <motion.div 
      variants={{
        initial: {
          clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 48% 100%, 48% 100%, 84% 0)',
        },
        hovered: {
          clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 29% 100%, 24% 50%, 0 0)',
        },
      }}
      animate={'initial'}
      whileHover={'hovered'}
      transition={{ duration: 0.8, ease: 'backOut' }}
      className={' w-2/3 h-72 bg-primary rounded-xl transition-all duration-200 ease-out'}
    >

    </motion.div>
  )
}

export default PortfolioItem
