import PortfolioItem from '@/components/portfolio/PortfolioPage/Item'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lunaris Web - Portfolio",
  description: "Tworzymy innowacyjne i błyskawiczne strony internetowe, bezpieczne oraz dostosowane do potrzeb klienta. Wejdź do świata internetu już teraz!",
}

const PortfolioPage = () => {
  return (
    <main className=' w-full h-screen grid place-items-center'>
      <PortfolioItem />
    </main>
  )
}

export default PortfolioPage
