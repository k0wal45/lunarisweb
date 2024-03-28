import Image from 'next/image'
import React from 'react'

const Description = () => {
  return (
    <div className="p-4 flex-1 text-white flex items-end justify-start flex-col gap-4 text-center lg:text-end lg:max-w-[30rem]">
      <h6 className="text-3xl font-bold">Często zadawane pytania</h6>
      <p className="text-neutral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis harum doloribus obcaecati blanditiis ipsa. Quod iure harum quae est aut!</p>
      <Image width={800} height={800} className='h-72 object-contain' src='/img/faq.png' alt='FAQ LunarisWeb'/>
    </div>
  )
}

export default Description
