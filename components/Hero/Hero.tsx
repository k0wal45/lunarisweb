
import TyperWriter from "./TypeWriter/TypeWriter";
import Link from "next/link";
import classes from './hero.module.css'
import BtnLink from "../reusable/btn-link";
import { SparklesCore } from "@/ui/sparkles";
import Navbar from "../navbar/Navbar";



async function Hero() {

  

  return (
    <header className={`${classes.bgGrid} mb-12 min-h-screen min-h-[96vh] w-full relative flex flex-col lg:flex-row items-center justify-around gap-8 p-4 text-center border-[1px] border-[#5a5a5a] rounded-xl`}>
      <Navbar />

            {/* Radial gradient for the container to give a faded look */}
            <div className={`${classes.bgMask} absolute pointer-events-none inset-0 flex items-center justify-center z-0 rounded-xl`}>
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.7}
                maxSize={1.5}
                particleDensity={30}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            <div className={`${classes.bgOverlay} absolute pointer-events-none inset-0 flex items-center justify-center z-10 rounded-xl`}></div>
    
    <div className="flex flex-col justify-between items-center z-10 text-white gap-4 py-8">
      <h1 className="mt-0
      text-5xl md:text-[6rem] font-bold relative z-20
      bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-primary 
      py-8 w-screen min-h-[23rem]
      text-center hidden lg:flex flex-col items-center text-center
      ">
        Tworzymy<br/>
        <TyperWriter /> 
      </h1>

      <h1 className="mt-16
      text-5xl md:text-[6rem] font-bold relative z-20
      bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-primary 
      text-center lg:hidden flex flex-col items-center
      ">
        Tworzymy Nowoczesne Strony Internetowe
      </h1>
      
      
      <div className="flex flex-col gap-8 items-center justify-center">
        <p className="text-xl text-neutral-100 lg:w-[50vw]">W dzisiejszych czasach strona internetowa i efektywny logotyp stanowią kluczowe elementy marketingu, które mają ogromne znaczenie zarówno online, jak i w świecie biznesu poza siecią.</p>

        <div className="flex flex-wrap gap-8 font-[500] items-center justify-center">
          <BtnLink link="/kontakt">Darmowa Konsultacja</BtnLink>
          <Link href='/oferta' className='p-4 px-6 bg-black border-2 border-white rounded-xl font-bold text-xl'>Sprawdź Ofertę</Link>
        </div>
      </div>
      
    </div>

  </header>
  )
}

export default Hero
