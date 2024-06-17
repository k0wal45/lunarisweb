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
  title: 'Nasza Oferta - Lunaris Web',
  description: 'Zapoznaj się z kompleksową ofertą Lunaris Web. Oferujemy tworzenie stron internetowych, projektowanie logotypów oraz grafikę komputerową, dostosowane do indywidualnych potrzeb klientów.',
  keywords: 'oferta, tworzenie stron internetowych, projektowanie logotypów, grafika komputerowa, Lunaris Web',
  openGraph: {
    title: 'Nasza Oferta - Lunaris Web',
    description: 'Zapoznaj się z kompleksową ofertą Lunaris Web. Oferujemy tworzenie stron internetowych, projektowanie logotypów oraz grafikę komputerową, dostosowane do indywidualnych potrzeb klientów.',
    url: 'https://www.lunarisweb.com/oferta',
    type: 'website',
    locale: 'pl_PL',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@LunarisWeb',
    title: 'Nasza Oferta - Lunaris Web',
    description: 'Zapoznaj się z kompleksową ofertą Lunaris Web. Oferujemy tworzenie stron internetowych, projektowanie logotypów oraz grafikę komputerową, dostosowane do indywidualnych potrzeb klientów.',
  },
};


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
