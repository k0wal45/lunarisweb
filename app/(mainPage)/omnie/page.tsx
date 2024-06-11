import About from "@/components/About/About";
import Programing from "@/components/About/AboutPage/Programing";
import WhoAmI from "@/components/About/AboutPage/WhoAmI";
import ContactSec from "@/components/ContactForm/ContactSec";
import FaqSection from "@/components/FAQ/FaqSection";
import Hero from "@/components/Hero/HeroUniversal";
import Map from "@/components/Map";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs/WhyUs";
import Portfolio from "@/components/portfolio/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lunaris Web - O mnie",
  description: "Tworzymy innowacyjne i błyskawiczne strony internetowe, bezpieczne oraz dostosowane do potrzeb klienta. Wejdź do świata internetu już teraz!",
}

const AboutPage = () => {
  return (
    <main className="overflow-x-hidden max-w-screen">
      <Hero 
        header='o mnie'
        title='Twórca Stron Internetowych z Indywidualnym Podejściem'
        text='Indywidualne podejście do każdego projektu. Techniczne wykształcenie w dziedzinie informatyki i tworzenia stron internetowych.'
      />
      <Stats />
      <About />
      <Programing />
      <WhoAmI />
      <Portfolio />
      <WhyUs />
      <Map />
      <ContactSec />
      <FaqSection />
    </main>
  )
}

export default AboutPage