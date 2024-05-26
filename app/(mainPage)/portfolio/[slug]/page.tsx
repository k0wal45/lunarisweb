// 'use client'
import { TextParallaxContentExample } from "@/components/portfolio/PortfolioSlug/PortfolioSection"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { GetFullPortfolioData } from "@/components/portfolio/fullData"
import { useEffect, useState } from "react"
import Portfolio from "@/components/portfolio/Portfolio"
import Offers from "@/components/Offers/Offers"
import ContactSec from "@/components/ContactForm/ContactSec"
import FaqSection from "@/components/FAQ/FaqSection"

const page = async ({params}: Params) => {
  
  const revalidate = 10

  async function findObjectBySlug(slug: any, array: any) {
    const currentPage = array.find(item => item.link === slug);
  
    return currentPage.slugPage
  }

  type pageData = any

    
  const pageData = await findObjectBySlug(params.slug, GetFullPortfolioData())

  return (
    <main className="overflow-x-hidden max-w-screen">
      {
        pageData.map((data, index) => (
          <TextParallaxContentExample content={data} key={index} />
        ))
      }
      <Portfolio />
      <Offers />
      <ContactSec />
      <FaqSection />
      
    </main>
  )
}

export default page
