import ShuffleHero from '@/components/portfolio/PortfolioPage/Hero/Hero';
import PortfolioItem from '@/components/portfolio/PortfolioPage/Item'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lunaris Web - Portfolio",
  description: "Tworzymy innowacyjne i błyskawiczne strony internetowe, bezpieczne oraz dostosowane do potrzeb klienta. Wejdź do świata internetu już teraz!",
}

const PortfolioPage = () => {
  return (
    <main className='overflow-x-hidden max-w-screen'>
      <ShuffleHero />
      <PortfolioItem />
    </main>
  )
}

export default PortfolioPage
