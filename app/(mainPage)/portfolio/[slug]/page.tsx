import { TextParallaxContentExample } from "@/components/portfolio/PortfolioSlug/PortfolioSection"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import data from "./data"

const page = async ({params}: Params) => {

  
  const events = page

  return (
    <main className="overflow-x-hidden max-w-screen">
      <TextParallaxContentExample />
    </main>
  )
}

export default page
