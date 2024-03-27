import React from 'react'
import { FaGears } from 'react-icons/fa6'

const WhyCard = ({title, icon, text, color}: any) => {

  
  return (
    <div className={`flex flex-col items-center min-w-[15rem] max-w-[20rem] h-[20rem] justify-between border-2 border-base rounded-xl p-4 flex-1 bg-gradient-to-t odd:from-primary hover:scale-110 transition-all duration-150 from-secondary odd:via-transparent via-transparent to-transparent`}>
      <div className="text-7xl">
        {icon}
      </div>

      <div className="flex flex-col items-center justify-end text-center gap-2">
        <p  className="font-bold text-2xl ">{title}</p>
        <p className='text-lg'>{text}</p>
      </div>
    </div>
  )
}

export default WhyCard
