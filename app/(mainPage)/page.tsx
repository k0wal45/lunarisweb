
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
import BlogSection from "@/components/Blog/BlogSection";
import GrowSection from "@/components/Grow/GrowSection";

export const revalidate = 3600

export default async function Home() {


  return (
    <main className="overflow-x-hidden max-w-screen">
        <Hero />
        <Stats />
        <About />
        <Offers />
        <GrowSection />
        <WhyUs />
        <Portfolio />
        <Panel 
          title='Marketing w internecie to pierwszy krok do sukcesu!'
          text='Strona Internetowa to pierwszy krok jaki możesz podjąć aby rozbudować swój biznes i dać o sobie znać w internecie'
        /> 
        <Reviews />
        {/* <BlogSection /> */}
        <ContactSec />
        <Map />
        <FaqSection />
    </main> 
  );
}
