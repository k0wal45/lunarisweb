
import About from "@/components/About/About";
import Hero  from "@/components/Hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";

export default async function Home() {


  return (
    <main className="overflow-x-hidden max-w-screen">
      <Hero />
      <About />
      <Portfolio />
      <div className="h-[400vh] bg-red-200"></div>
    </main> 
  );
}
