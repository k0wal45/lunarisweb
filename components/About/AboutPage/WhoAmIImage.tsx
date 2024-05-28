'use client'
import {motion, useScroll, useTransform} from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const WhoAmIImage = () => {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"])

  return (
    <div className="h-full relative flex justify-end items-end">
      <motion.div
      ref={ref}
      style={{translateY}}
      className='mx-auto'
      >
        <Image src='/img/me2.jpg' alt='' width={700} height={1000} className='w-auto object-contain top-0 left-0 h-full z-10  rounded-2xl' />

      </motion.div>
    </div>
  )
}

export default WhoAmIImage