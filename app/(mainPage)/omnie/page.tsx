import About from "@/components/About/About";
import Programing from "@/components/About/AboutPage/Programing";
import WhoAmI from "@/components/About/AboutPage/WhoAmI";
import BlogSection from "@/components/Blog/BlogSection";
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
      <WhoAmI />
      <Programing />
      <Portfolio />
      <WhyUs />
      <BlogSection />
      <Map />
      <ContactSec />
      <FaqSection />
    </main>
  )
}

export default AboutPage
