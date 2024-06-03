'use client'
import React, { useRef, useState } from "react";
import {motion, useInView} from 'framer-motion'

const AppearFromBottom = ({children}: any) => {
  const ref: any = useRef()

  const IsInView = useInView(ref, {once: true, amount: 0.2})

  return (
    <motion.div 
      ref={ref} 
      variants={{
        hidden: {
          opacity: 0,
          y: 100
        },
        visible: {
          opacity: 1,
          y:0
        },
      }}
      animate={IsInView ? 'visible' : 'hidden'}
      transition={{duration: 0.35, ease: 'easeInOut', delay: 0.4}}  
    >
      {children}
    </motion.div>
  )
}

export default AppearFromBottom
