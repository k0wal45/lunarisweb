'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import BtnLink from '../reusable/btn-link'


const OfferCard = ({title, text, link, img, icon}: any) => {
  return (
    <div className={`bg-white relative w-full max-w-[25rem] aspect-square flex-1 z-10 group `}>
      <Image src={'/img/' + img} alt='title' width={700} height={800} className='w-full h-full object-cover absolute z-[-1]'/>
      <div className="w-full h-full p-2">
        <motion.div 
          whileHover={{clipPath: 'polygon(0 0, 100% 0, 11% 11%, 0 100%)'}}
          initial={{clipPath: ''}}
          className="flex flex-col z-20 bg-white w-full h-full"
        >

        </motion.div>
          
      </div>


    </div>
  )
}

export default OfferCard
