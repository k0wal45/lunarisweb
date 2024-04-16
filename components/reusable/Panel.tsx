import { SparklesCore } from '@/ui/sparkles'
import classes from './reUse.module.css'
import BtnLink from './btn-link'

const Panel = ({title, text}: {title: string, text: string}) => {
  return (
    <section className={`${classes.bgGradinet} w-full text-center p-4 overflow-hidden py-24 flex flex-col text-white items-center justify-center gap-4 relative z-10`}>

        <SparklesCore
          id="another"
          background="transparent"
          minSize={0.7}
          maxSize={1.5}
          particleDensity={30}
          className="w-full h-full absolute top-0 left-0 z-20"
          particleColor="#FFFFFF"
        />
      
      <h6 className="text-3xl lg:text-5xl font-bold">{title}</h6>
      <p className="text-xl">{text}</p>
      <div className="z-30">
        <BtnLink link='/kontakt' >Skontaktuj sie już Teraz</BtnLink>
      </div>
    </section>
  )
}

export default Panel
