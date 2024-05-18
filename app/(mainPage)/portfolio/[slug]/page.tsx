'use client'
import { TextParallaxContentExample } from "@/components/portfolio/PortfolioSlug/PortfolioSection"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { bqCars, oktech } from "@/components/portfolio/fullData"
import { useEffect, useState } from "react"

const page = ({params}: Params) => {

  const [pageData, setPageData] = useState([])

  type pageData = any

  useEffect(() => {
    if (params.slug === 'oktech-klimatyzacje') {
      setPageData(oktech.slugPage)
    } else if (params.slug === 'bq-cars-katowice') {
      setPageData(bqCars.slugPage)
    }
  }, [params])

  return (
    <main className="overflow-x-hidden max-w-screen">
      {
        pageData.map((data) => (
          <TextParallaxContentExample content={data} />
        ))
      }
      
    </main>
  )
}

export default page
