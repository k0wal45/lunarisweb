
import classes from './services.module.css'
import AppearFromLeft from '@/components/Animations/AppearFromLeft'
import AppearFromRight from '@/components/Animations/AppearFromRight'
import AdvantegesItem from './AdvantegesItem'


const Advanteges = ({content}: any) => {
  return (
    <section className={classes.bgServices + " flex flex-col gap-8 items-center justify-center p-4 py-24 text-white relative z-[-2] lg:rounded-tl-[50%] lg:rounded-br-[50%]"}>
      <AppearFromLeft>
        <h2 className="text-5xl font-bold lg:max-w-[70vw] text-center">{content.title}</h2>
      </AppearFromLeft>
      <AppearFromRight>
        <p className="text-lg lg:max-w-[70vw] text-center">{content.text}</p>
      </AppearFromRight>
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-75 z-[-1] lg:rounded-tl-[50%] lg:rounded-br-[50%]"></div>
      <ul className=" flex flex-wrap items-start justify-around gap-8">
        {
          content.list.map((item: any) => (
            <AdvantegesItem 
              content={item}
              key={item.title}
            />
          ))
        }
      </ul>

      
      
    </section>
  )
}

export default Advanteges