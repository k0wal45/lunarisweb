import { FaClock, FaLeaf } from "react-icons/fa"
import WhyCard from "./WhyCard"
import { FaArrowsToDot, FaPerson } from "react-icons/fa6"

function WhyUs() {

  return (
    <section className='my-0 mx-auto flex flex-col items-center text-center gap-8 w-full bg-primary bg-opacity-20  p-4 pt-12  lg:py-24 '> 
      <h2 className="font-bold text-4xl lg:text-6xl">Czemu Powinieneś nas wybrać</h2>
      <p className='opacity-70 text-xl'>Wybierz nas dla skutecznych strategii marketingowych oraz elastyczności dostosowanej do Twoich potrzeb.</p>
      <div className='flex flex-col lg:flex-row justify-center items-start flex-wrap'>
        <WhyCard 
          heading='Oszczędność czasu i zasobów'
          text='Zaoszczędzony czas przekłada się na większą produktywność i większe zyski'
          icon={<FaClock />}
        />
        
        <WhyCard
          heading='Świeże spojrzenie i kreatywność'
          text='Świeże spojrzenie, kreatywność i innowacyjne pomysły, które ożywią twoją firmę w sieci i poza nią'
          icon={<FaLeaf />}
        />
        <WhyCard 
          heading='Wszystko w jednym miejscu'
          text='Grafika, Strony Internetowe i Logotypy w jendym miejscu co pozwala zaoszczędzić czas i nerwy'
          icon={<FaArrowsToDot />}
        />
        <WhyCard 
          heading='Jedna osoba od wszystkiego'
          text='Od kontaktu po realizacje, od stron po grafikę, a to wszystko w rękach jednej osoby'
          icon={<FaPerson />}
        />
      </div>
    </section>
  )
}

export default WhyUs
