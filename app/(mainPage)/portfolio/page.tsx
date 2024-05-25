import Stats from '@/components/Stats';
import ShuffleHero from '@/components/portfolio/PortfolioPage/Hero/Hero';
import PortfolioItem from '@/components/portfolio/PortfolioPage/Item'
import type { Metadata } from "next";
import FaqSection from '@/components/FAQ/FaqSection';
import Offers from '@/components/Offers/Offers';
import ContactSec from '@/components/ContactForm/ContactSec';
import Reviews from '@/components/reviews/Reviews';
import { GetFullPortfolioData, bqCars, merkuryMedica, oktech, werva } from '@/components/portfolio/fullData';
import { revalidate } from '../page';
export const metadata: Metadata = {
  title: "Lunaris Web - Portfolio",
  description: "Tworzymy innowacyjne i błyskawiczne strony internetowe, bezpieczne oraz dostosowane do potrzeb klienta. Wejdź do świata internetu już teraz!",
}


const PortfolioPage = () => {

  const revalidate = 10

  const data = GetFullPortfolioData()

  return (
    <main className='overflow-x-hidden max-w-screen'>
      <ShuffleHero />
      <Stats />
      <section className="flex flex-col gap-12 items-center justify-cente p-4 my-12">
        <div className="flex flex-col gap-8 items-center justify-center lg:w-1/2 text-center">
          <h3 className="text-3xl lg:text-6xl font-bold">Sprawdź moje wybrane realizacje</h3>
          <p className='text-lg'>Znajdziesz tu najciekawsze realizacje z poszczególnych kategorii</p>
        </div>
        {
          data.map((item) => (
            <PortfolioItem
              id={item.id} 
              title={item.title}
              link={item.link}
              techStack={item.techStack}
              image={item.image}
            />
          ))
        }
      </section>
      <Reviews />
      <Offers />
      <ContactSec />
      <FaqSection />

    </main>
  )
}

export default PortfolioPage
