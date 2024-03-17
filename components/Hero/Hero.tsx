
import TyperWriter from "./TypeWriter/TypeWriter";
import './hero.css'
import Link from "next/link";
import { ThreeDCardDemo } from "./3dCard";
import { Grid } from "./Grid";



async function Hero() {

  

  return (
    <header className='h-[50rem] w-full relative flex bg-grid items-center justify-center gap-8 p-4 pt-24'>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-overlay z-0"></div>

      <div className="flex flex-col justify-start items-start lg:w-[30vw] h-[40rem] z-10  text-white">
        <h1 className="text-4xl sm:text-7xl font-bold h-[20rem] relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <span>Tworzymy</span><br />
          <TyperWriter /> 
        </h1>
        
        <p className="text-lg text-neutral-100 w-2/3">W dzisiejszych czasach strona internetowa i efektywny logotyp stanowią kluczowe elementy marketingu, które mają ogromne znaczenie zarówno online, jak i w świecie biznesu poza siecią.</p>
      </div>

      <Grid />
    </header>
  )
}

export default Hero
