import Image from 'next/image'
import classes from './about.module.css'

const AboutPhoto = () => {
  return (
    <div className={classes.bgObject + ' relative overflow-y-hidden flex justify-end max-w-[30rem]'}>
      <Image src='/img/beztla2.png' alt='Daniel Kowalski Lunaris Web - Strony Internetowe Katowice' width={800} height={800} className=' object-contain'/>
    </div>
  )
}

export default AboutPhoto
