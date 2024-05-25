'use client'
import { TextParallaxContentExample } from "@/components/portfolio/PortfolioSlug/PortfolioSection"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { GetFullPortfolioData, bqCars, oktech } from "@/components/portfolio/fullData"
import { useEffect, useState } from "react"
import Portfolio from "@/components/portfolio/Portfolio"
import Offers from "@/components/Offers/Offers"
import ContactSec from "@/components/ContactForm/ContactSec"
import FaqSection from "@/components/FAQ/FaqSection"

const page = ({params}: Params) => {

  const revalidate = 10

  const [pageData, setPageData] = useState([])


  type pageData = any

  useEffect(() => {
    async function findObjectBySlug(slug: any, array: any) {
      const currentPage = array.find(item => item.link === slug);

      setPageData(currentPage.slugPage)
    }

    findObjectBySlug(params.slug, GetFullPortfolioData())

  }, [params])

  return (
    <main className="overflow-x-hidden max-w-screen">
      {
        pageData.map((data) => (
          <TextParallaxContentExample content={data} />
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
