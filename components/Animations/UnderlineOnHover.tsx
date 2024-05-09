import {motion} from 'framer-motion'
import { JSXElementConstructor } from 'react'

const UnderlineOnHover = ({children}: {children: JSX.Element}) => {
  return (
    <motion.div
      whileHover='animate'
      initial='initial'
      animate="initial"
      className='flex flex-col items-start justify-center p-4'
    >
      {children}
      <motion.div
        variants={{
          initial: {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
          },
          animate: {
            clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'
          }
        }}
        transition={{duration: 0.4, ease: 'easeOut'}}
        className='h-[2px] w-full origin-left roudned-full bg-white'
      >

      </motion.div>
    </motion.div>
  )
}

export default UnderlineOnHover
