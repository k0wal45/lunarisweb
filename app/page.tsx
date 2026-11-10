import AboutHomePage from "@/components/About/AboutHomePage";
import Hero from "@/components/Hero/Hero";
import Process from "@/components/Process/Process";
import Results from "@/components/Results/Results";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main id="tresc">
      <Hero />
      <Stats />
      <Results />
      <Services />
      <Process />
      <AboutHomePage />
      <div className="h-[400vh]"></div>
    </main>
  );
}
