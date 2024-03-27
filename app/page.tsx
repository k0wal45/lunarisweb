
import About from "@/components/About/About";
import Hero  from "@/components/Hero/Hero";
import Offers from "@/components/Offers/Offers";
import WhyUs from "@/components/WhyUs/WhyUs";
import Portfolio from "@/components/portfolio/Portfolio";
import Panel from "@/components/reusable/Panel";
import Reviews from "@/components/reviews/Reviews";
import ContactSec from "@/components/ContactForm/ContactSec";

export default async function Home() {


  return (
    <main className="overflow-x-hidden max-w-screen">
      <Hero />
      <About />
      <Offers />
      <Portfolio />
      <Panel 
        title='Marketing w internecie to 1 krok do sukcesu!'
        text='Strona Internetowa to pierwszy krok jaki możesz podjąć aby rozbudować swój biznes i dać o sobie znać w internecie'
        link=''
      /> 
      <WhyUs />
      <Reviews />
      <ContactSec />
      <div className="h-[100vh] bg-red-950"></div>
    </main> 
  );
}
