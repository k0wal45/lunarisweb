'use client'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Description = () => {
  const ref: any = useRef()

  const IsInView = useInView(ref, {once: true, amount: 0.2})

  return (
    <motion.div 
      ref={ref} 
      variants={{
        hidden: {
          opacity: 0,
          x: -100
        },
        visible: {
          opacity: 1,
          x:0
        },
      }}
      animate={IsInView ? 'visible' : 'hidden'}
      transition={{duration: 0.35, ease: 'easeInOut'}}

      className="m-4 flex-1  flex flex-col gap-4 items-center lg:items-end justify-center lg:max-w-[30rem]"
    >
      <Image height={700} width={700} src='/img/me.jpg' alt='Daniel Kowalski LunarisWeb' className=' aspect-square object-cover rounded-xl' />
      <div className="flex flex-col gap-4 items-center justify-center w-full border-2 border-base rounded-xl p-4 bg-white">
        <a href='tel:+48664447556' className="flex gap-4  items-center justify-start w-full text-xl font-bold p-4 border-2 border-base rounded-xl">
          <FaPhone />
          +48 664 447 556
        </a>
        <a href='mailto:lunarisweb.pl@gmail.com' className="flex gap-4  items-center justify-start w-full text-xl font-bold p-4 border-2 border-base rounded-xl">
          <FaEnvelope />
          lunarisweb.pl@gmail.com
        </a>
        <div className="flex gap-4  items-center justify-start w-full text-xl font-bold p-4 border-2 border-base rounded-xl">
          <FaLocationDot />
          Polska, Katowice
        </div>
      </div>
    </motion.div>
  )
}

export default Description
