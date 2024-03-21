import { ThreeDCardDemo } from "@/components/Hero/3dCard";
import Hero  from "@/components/Hero/Hero";

export default async function Home() {


  return (
    <main className="overflow-x-hidden max-w-screen">
      <Hero />
      <section className="bg-neutral-200 flex items-center justify-center h-screen w-screen">
        <ThreeDCardDemo />
      </section>
      <div className="h-[400vh] bg-red-200"></div>
    </main> 
  );
}
