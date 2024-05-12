import WhyUs from "@/components/About/AboutPage/WhyUs";
import Hero from "@/components/Hero/HeroUniversal";
import Stats from "@/components/Stats";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lunaris Web - O mnie",
  description: "Tworzymy innowacyjne i błyskawiczne strony internetowe, bezpieczne oraz dostosowane do potrzeb klienta. Wejdź do świata internetu już teraz!",
}

const AboutPage = () => {
  return (
    <main className="overflow-x-hidden max-w-screen">
      <Hero 
        slug='o mnie'
        title='Twórca Stron Internetowych z Indywidualnym Podejściem'
        text='Indywidualne podejście do każdego projektu'
      />
      <WhyUs />
      <Stats />
    </main>
  )
}

export default AboutPage