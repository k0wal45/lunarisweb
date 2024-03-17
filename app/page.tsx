import Hero  from "@/components/Hero/Hero";
import { LayoutGridDemo } from "@/components/portfolio/grid";

export default async function Home() {


  return (
    <main className="overflow-x-hidden max-w-screen">
      <Hero />
      <LayoutGridDemo />
      <div className="h-[400vh] bg-red-200"></div>
    </main> 
  );
}
