import Hero  from "@/components/Hero/Hero";

export default async function Home() {


  return (
    <main className=" h-screen overflow-x-hidden max-w-screen">
      <Hero />
      <div className="h-[400vh] bg-red-200"></div>
    </main> 
  );
}
