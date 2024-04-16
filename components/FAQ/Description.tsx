import Image from 'next/image'
import React from 'react'

const Description = () => {
  return (
    <div className="p-4 flex-1 flex items-end justify-start flex-col gap-4 text-center lg:text-end lg:max-w-[30rem]">
      <h6 className="text-3xl font-bold">Często zadawane pytania</h6>
      <p className="">Znajdziesz tu pytania które często padają, abyś mógł odrazu poznać odpowiedź nie musząc się z nami kontaktować.</p>
      <Image width={600} height={600} className='h-72 object-contain' src='/img/faq.png' alt='FAQ LunarisWeb'/>
    </div>
  )
}

export default Description
