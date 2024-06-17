
import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { Post } from "@/utils/interface";
import BlogItem from "@/components/Blog/BlogItem";
import Hero from "@/components/Hero/HeroUniversal";
import Portfolio from "@/components/portfolio/Portfolio";
import WhyUs from "@/components/WhyUs/WhyUs";
import ContactSec from "@/components/ContactForm/ContactSec";
import FaqSection from "@/components/FAQ/FaqSection";
import Map from "@/components/Map";
import Offers from "@/components/Offers/Offers";
import Packages from "@/components/Offers/OffersSlug/Packages/Packages";

export const revalidate = 3600

export const metadata: Metadata = {
  title: "Blog - Lunaris Web",
}

const getPost = async () => {
  const EVENTS_QUERY = `*[
    _type == "post"
    ] | order(publishedAt) {
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    _id,
    tags[]-> {
      _id,
      slug,
      name
    }
    
    }`
  ;
    const event = await client.fetch(EVENTS_QUERY);
    return event
}



const BlogPage = async () => {

  const event: any = await getPost()

  return (
    <main className="overflow-x-hidden max-w-screen">
      <Hero 
        header='blog'
        title='Przeczytaj nasze artykuły o świecie stron internetowych'
        text=''
      />
      <section className="flex flex-col items-center justify-center text-center gap-12 my-12">
        <h2 className="text-5xl font-bold">Sprawdź nasze wpisy na blogu</h2>
      </section>
      <section className="flex flex-wrap p-4 gap-12 items-center justify-center">
        {
          event.map((post: Post, index: number) => (
            <BlogItem post={post} key={index}/>
          ))
        }
      </section>
      <Offers />
      <Portfolio />
      <Packages />
      <WhyUs />
      <ContactSec />
      <Map />
      <FaqSection />
    </main>
  )
}

export default BlogPage