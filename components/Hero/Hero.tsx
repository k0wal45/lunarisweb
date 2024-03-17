import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import TyperWriter from "./TypeWriter/TypeWriter";
import './hero.css'
import Link from "next/link";
import { ThreeDCardDemo } from "./3dCard";

const EVENTS_QUERY = `*[_type == "post"]`;


async function Hero() {

  const events = await client.fetch<SanityDocument[]>(EVENTS_QUERY);


  return (
    <div className='h-[50rem] w-full relative flex bg-grid items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-overlay z-0"></div>

      <div className="flex flex-col justify-start items-start lg:w-[50vh] z-10">
        <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <span>Tworzymy</span><br />
          <TyperWriter /> 
        </h1>
        {
          events.map((event) => (
            <Link key={event._id} href={event.slug.current} className="z-10 bg-blue-400 p-4 rounded-xl text-xl text-white">{event.title}</Link>
          ))
        }
      </div>
      <ThreeDCardDemo />
    </div>
  )
}

export default Hero
