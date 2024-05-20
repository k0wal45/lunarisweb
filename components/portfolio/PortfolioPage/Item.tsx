import classes from './portfolio.module.css'
import BtnLink from '@/components/reusable/btn-link'
import Image from 'next/image'

const PortfolioItem = ({title, link, techStack, id, image}: {title: string, link: string, techStack: any, id: number, image: string}) => {

  return (
    <div key={id } className='relative w-full xl:w-2/3 h-[23rem] lg:h-80 rounded-xl p-4'>
      <Image src={`/img/${image}`} alt='' width={1400} height={300} className='absolute top-0 left-0 w-full h-full rounded-xl object-cover object-right-top z-[-1] brightness-50 xl:brightness-100 ml'/>
      <div className={`${classes.clipObject} w-full h-full xl:bg-white rounded-xl p-4 flex items-center justify-start z-10 text-white xl:text-black`}>

        <div className="flex flex-col gap-6 items-center justify-center text-center px-4 max-w-72">
          <p className="text-3xl font-bold max-w-72">{title}</p>
          <BtnLink link={`/portfolio/${link}`}>Zobacz Realizacje</BtnLink>
          <div className="flex flex-wrap gap-2 items-center justify-center text-3xl">
            {
              techStack.map((stack: any) => <div key={stack}>
                {stack}
              </div>)
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default PortfolioItem
