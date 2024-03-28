import classes from '../Hero/hero.module.css'
import Image from 'next/image'
import { FaComputer } from 'react-icons/fa6'
import BtnLink from '../reusable/btn-link'


const OfferCard = ({title, text, link, img, icon}: any) => {
  return (
    <div className={`bg-black relative h-[27rem] min-w-[20rem] lg:even:scale-125 rounded-xl flex-1 p-4 z-10 group border-2 border-base group`}>
      <Image width={800} 
        height={700} 
        src={`/img/${img}`} 
        alt={title}
        className='w-full h-48 max-h-full lg:h-full lg:group-hover:h-1/3 rounded-xl object-cover transition-all duration-1000 z-20' 
      />

      <div className="grid place-items-center p-6 rounded-full bg-black border-2 border-base w-min mx-auto aspect-square mt-4 lg:mt-0 lg:translate-y-[-50%] text-5xl text-primary group-even:text-secondary">
        
        {icon}
      </div>

      <div className="lg:absolute bottom-0 left-0 text-center w-full p-4 z-[-1] flex flex-col items-center justify-center gap-4">
        <p className="font-bold text-xl">{title}</p>
        <p className='text-md text-neutral-400'>{text}</p>
        <div className="scale-[0.8]">
          <BtnLink link={`/oferta/${link}`}>Sprawdź Teraz</BtnLink>
        </div>
      </div>

    </div>
  )
}

export default OfferCard
