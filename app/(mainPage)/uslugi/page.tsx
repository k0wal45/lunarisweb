import ContactSec from "@/components/ContactForm/ContactSec";
import FaqSection from "@/components/FAQ/FaqSection";
import GrowSection from "@/components/Grow/GrowSection";
import Hero from "@/components/Hero/HeroUniversal";
import Offers from "@/components/Offers/Offers";
import Packages from "@/components/Offers/OffersSlug/Packages/Packages";
import Stats from "@/components/Stats";
import Portfolio from "@/components/portfolio/Portfolio";
import Reviews from "@/components/reviews/Reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lunaris Web - Usługi",
  description: "Tworzymy innowacyjne i błyskawiczne strony internetowe, bezpieczne oraz dostosowane do potrzeb klienta. Wejdź do świata internetu już teraz!",
}

const offersPage = () => {
  return (
    <main className="overflow-x-hidden max-w-screen">
      <Hero 
        header='usługi'
        title='Profesjonalne Usługi Tworzenia Stron Internetowych i Grafiki'
        text='Projektujemy i programujemy strony internetowe dostosowane do unikalnych potrzeb klientów. Oferujemy również usługi graficzne, w tym tworzenie logo'
      />
      <Stats />
      <Offers />
      <GrowSection />
      <Packages />
      <Portfolio />
      <Reviews />
      <ContactSec />
      <FaqSection />
    </main>
  )
}

export default offersPage
