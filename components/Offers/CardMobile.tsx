import Image from 'next/image'
import React from 'react'
import BtnLink from '../reusable/btn-link'

const CardMobile = ({title, text, link, img, icon}: any) => {
  return (
    <div className={`bg-white relative w-full max-w-[25rem] aspect-square flex-1 z-10 group lg:hidden block`}>
      <Image src={'/img/' + img} alt='title' width={1000} height={1000} className='w-full h-full object-cover absolute z-[-1]'/>
      <div className="w-full h-full p-2">
        <div className="flex flex-col z-20 bg-white w-full h-full items-center justify-center text-center p-4 gap-2" >
          <p className="text-8xl text-primary">
            {icon}
          </p>
          <h6 
            className="text-2xl font-bold">{title}</h6>
          <p >{text}</p >
          <div>
            <BtnLink link={`/uslugi/${link}`}>Sprawdź Teraz</BtnLink>
          </div>
        </div>
          
      </div>

    </div>
  )
}

export default CardMobile