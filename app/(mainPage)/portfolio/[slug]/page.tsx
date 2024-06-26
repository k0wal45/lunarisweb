
import { TextParallaxContentExample } from "@/components/portfolio/PortfolioSlug/PortfolioSection"
import { GetFullPortfolioData } from "@/components/portfolio/fullData"
import Portfolio from "@/components/portfolio/Portfolio"
import Offers from "@/components/Offers/Offers"
import ContactSec from "@/components/ContactForm/ContactSec"
import FaqSection from "@/components/FAQ/FaqSection"
import { redirect } from "next/navigation"

export const revalidate = 3600

async function findObjectBySlug(slug: any, array: any) {
  const currentPage = array.find((item:any) => item.link === slug);

  if (!currentPage || !currentPage.slugPage) {
    return false
  }

  return currentPage.slugPage
}


const page = async ({params}: any) => {

  type pageData = any

  const pageData = await findObjectBySlug(params.slug, GetFullPortfolioData())

  return (!pageData ? redirect('/not-found') :
    <main className="max-w-screen">
      {
        pageData.map((data:any, index:any)  => (
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
