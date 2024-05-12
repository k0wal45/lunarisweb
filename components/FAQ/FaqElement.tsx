'use client'
import React, { useRef, useState } from "react";
import {motion, useInView} from 'framer-motion'

const FaqElement = ({ title, answer }: {title: string, answer: string}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
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
      className="p-4 border-2 border-base rounded-xl text-lg" 
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full text-start"
      >
        <p>{title}</p>
        <svg
          className="fill-primary shrink-0 ml-2 "
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 p-4 border-l-2 py-2 my-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </motion.div>
  );
};

export default FaqElement;