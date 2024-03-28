import React from 'react'
import OfferCard from '../Offers/Card'
import WhyCard from './WhyCard'
import { FaArrowsToDot, FaGear, FaPerson } from 'react-icons/fa6'
import { FaClock, FaLeaf } from 'react-icons/fa'

const WhyUs = () => {
  return (
    <section className="flex flex-col gap-8 p-4 my-4 text-center text-white">
      <div className="flex flex-col gap-2 justify-center items-center text-center">
        <h5 className="font-bold text-4xl">Czemu my?</h5>
        <p>Ale jakie właściwie są powody abyś właśnie ze mną powinieneś rozpocząć współpracę?</p>
      </div>
      <div className="flex gap-8 flex-wrap items-center justify-center">
        <WhyCard 
          title='Oszczędność czasu i zasobów'
          text='Zaoszczędzony czas przekłada się na większą produktywność i większe zyski'
          icon={<FaClock />}
          color='#bd00ff'
        />
        <WhyCard 
          title='Wszystko w jednym miejscu'
          text='Grafika, Strony Internetowe i Logotypy w jendym miejscu co pozwala zaoszczędzić czas i nerwy'
          icon={<FaArrowsToDot />}
          color='#bd00ff'
        />
        <WhyCard 
          title='Świeże spojrzenie'
          text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur atque nihil odit earum animi pariatur'
          icon={<FaLeaf />}
          color='#bd00ff'
        />
        <WhyCard 
          title='Jedna osoba od wszystkiego'
          text='Od kontaktu po realizacje, od stron po grafikę, a to wszystko w rękach jednej osoby'
          icon={<FaPerson />}
          color='#bd00ff'
        />
        
      </div>
    </section>
  )
}

export default WhyUs
