
import Hero  from "@/components/Hero/Hero";

export default async function Home() {


  return (
    <main className="overflow-x-hidden max-w-screen p-4">
      <Hero />
      
      <div className="h-[400vh] bg-red-200"></div>
    </main> 
  );
}
