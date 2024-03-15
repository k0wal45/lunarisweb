import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { TypewriterEffectDemo } from "@/components/Hero";


const EVENTS_QUERY = `*[_type == "post"]`;


export default async function Home() {

  const events = await client.fetch<SanityDocument[]>(EVENTS_QUERY);

  // console.log(events)

  return (
    <main className=" h-screen overflow-x-hidden max-w-screen">
      <TypewriterEffectDemo /> 
      <div className="h-[400vh] bg-red-200"></div>
    </main> 
  );
}
