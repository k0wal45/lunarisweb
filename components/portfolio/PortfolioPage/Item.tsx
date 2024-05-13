import classes from './portfolio.module.css'
import BtnLink from '@/components/reusable/btn-link'
import Image from 'next/image'

const PortfolioItem = ({title, link, techStack, id, image}: {title: string, link: string, techStack: any, id: number, image: string}) => {

  return (
    <div key={id} className='relative w-full lg:w-2/3 h-80 rounded-xl p-4'>
      <Image src={`/img/${image}`} alt='' width={1400} height={300} className='absolute top-0 right-0 w-full h-full rounded-xl object-cover z-[-1] brightness-50 lg:brightness-100'/>
      <div className={`${classes.clipObject} w-full h-full lg:bg-white rounded-xl p-4 flex items-center justify-start z-10 text-white lg:text-black`}>

        <div className="flex flex-col gap-8 items-center justify-center text-center">
          <p className="text-3xl font-bold max-w-72">{title}</p>
          <BtnLink link={`/portfolio/${link}`}>Zobacz Realizacje</BtnLink>
          <div className="flex flex-wrap gap-2 items-center justify-center text-3xl">
            {
              techStack.map((stack: any) => (stack))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default PortfolioItem
