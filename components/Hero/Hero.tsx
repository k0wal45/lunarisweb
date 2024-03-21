
import TyperWriter from "./TypeWriter/TypeWriter";
import Link from "next/link";
import classes from './hero.module.css'
import { Grid } from "./Grid";



async function Hero() {

  

  return (
    <header className={`${classes.bgGrid} min-h-screen w-full relative flex flex-col lg:flex-row items-center justify-around gap-8 p-4 pt-24 lg:pt-4 lg:px-32`}>
    {/* Radial gradient for the container to give a faded look */}
    <div className={`${classes.bgOverlay} absolute pointer-events-none inset-0 flex items-center justify-center z-0`}></div>

    <div className="flex flex-col justify-start items-start lg:w-[30vw] h-[40rem] z-10 text-white gap-4 p-8">
      <h1 className="text-5xl md:text-7xl font-bold md:min-h-[20rem] relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <span>Tworzymy</span><br />
        <TyperWriter /> 
      </h1>
      
      <p className="text-lg text-neutral-100 ">W dzisiejszych czasach strona internetowa i efektywny logotyp stanowią kluczowe elementy marketingu, które mają ogromne znaczenie zarówno online, jak i w świecie biznesu poza siecią.</p>

      <div className="flex flex-wrap gap-8">
        <Link href='' className='p-4 px-8 bg-white rounded-xl text-black'>Skontaktuj sie z nami</Link>
        <Link href='' className='p-4 px-8 bg-black border-2 border-white rounded-xl '>Sprawdz nasze realizacje</Link>
      </div>
    </div>

    <Grid />
  </header>
  )
}

export default Hero
