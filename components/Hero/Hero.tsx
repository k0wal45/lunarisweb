
import TyperWriter from './TypeWriter/TypeWriter'
import './hero.css'
import { LayoutGridDemo } from './Grid'

const Hero = () => {
  
  return (
    <div className='h-[50rem] w-full relative flex bg-grid items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-overlay"></div>

      <div className="flex flex-col justify-start items-start lg:w-[50vh]">
        <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <span>Lorem, ipsum dolor.</span><br />
          {/* <TyperWriter  */}
          
          {/* /> */}
        </h1>
      </div>
      <LayoutGridDemo />
    </div>
  )
}

export default Hero
