
import Image from 'next/image'
import React from 'react'

import TyperWriter from '../Hero/TypeWriter/TypeWriter'
import BtnLink from '../reusable/btn-link'
import { FaArrowRight } from 'react-icons/fa'

const sequence = [
  'Student',
  3000, 
  'Web Developer',
  3000,
  'Grafik',
  3000,
  
]

const border ='border-[1px] border-base p-4 rounded-xl '

const About = () => {
  return (
    <section className="
      flex flex-col-reverse lg:flex-row items-center justify-center gap-8
      p-4 text-white 
    ">
      <div className="flex flex-col justify-center items-center gap-2  w-full lg:max-w-[25rem] *:w-full" >
        <Image src='/img/me.jpg' alt='Daniel Kowalski Lunaris Web' width={600} height={500} className='rounded-xl h-[25rem] object-cover'/>
        <BtnLink link='https://daniel-kowalski.com/'>Sprawdź Moją Stronę</BtnLink>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:max-w-[38rem]">
        <h3 className={`${border} text-3xl font-bold`}>
          Kim Jestem?
          <span className="text-neutral-400 w-full text-lg font-normal whitespace-nowrap">
            <TyperWriter
              sequence={sequence}
            />
          </span>
        </h3>
        
        <BtnLink link='kontakt'>Skontaktuj sie ze mną</BtnLink>
        <p className={`${border} sm:col-span-2`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae quod laborum nisi. Ea repellat nostrum, ipsum autem voluptates fugiat ipsa a quaerat? Nihil mollitia necessitatibus nostrum nesciunt distinctio nisi, nam voluptates quidem neque tempora. Dolorum cum autem id sunt!</p>
        <ul className={border}>
          <span className='whitespace-nowrap text-xl font-bold'>Czym sie zajmuje?</span>
          <li className='flex gap-4 flex-nowrap items-center pt-2'><FaArrowRight className='text-primary text-sm' /> Strony Internetowe</li>
          <li className='flex gap-4 flex-nowrap items-center pt-2'><FaArrowRight className='text-primary text-sm' />Grafika Komputerowa</li>
          <li className='flex gap-4 flex-nowrap items-center pt-2'><FaArrowRight className='text-primary text-sm' />Cyberbezpieczeństwo</li>
          <li className='flex gap-4 flex-nowrap items-center pt-2'><FaArrowRight className='text-primary text-sm' />Studia Informatyczne</li>
        </ul>
        <Image src='/img/me.jpg' alt='Daniel Kowalski Lunaris Web' width={400} height={500} className='h-52 object-cover rounded-xl w-full hidden sm:block'/>
      </div>
    </section>
  )
}

export default About