
import About from "@/components/About/About";
import Hero  from "@/components/Hero/Hero";
import Offers from "@/components/Offers/Offers";
import WhyUs from "@/components/WhyUs/WhyUs";
import Portfolio from "@/components/portfolio/Portfolio";
import Panel from "@/components/reusable/Panel";
import Reviews from "@/components/reviews/Reviews";
import ContactSec from "@/components/ContactForm/ContactSec";
import FaqSection from "@/components/FAQ/FaqSection";
import Stats from "@/components/Stats";
import Map from "@/components/Map";
import PreLoader from "@/components/PreLoader/Preloader";

export default async function Home() {
 
  return (
    <main className="overflow-x-hidden max-w-screen">
        <Hero />
        <Stats />
        <About />
        <Offers />
        <WhyUs />
        <Portfolio />
        <Panel 
          title='Marketing w internecie to 1 krok do sukcesu!'
          text='Strona Internetowa to pierwszy krok jaki możesz podjąć aby rozbudować swój biznes i dać o sobie znać w internecie'
        /> 
        <Reviews />
        <ContactSec />
        <Map />
        <FaqSection />
    </main> 
  );
}
