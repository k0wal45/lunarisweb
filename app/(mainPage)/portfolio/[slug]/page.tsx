
import { TextParallaxContentExample } from "@/components/portfolio/PortfolioSlug/PortfolioSection"
import { GetFullPortfolioData } from "@/components/portfolio/fullData"
import Portfolio from "@/components/portfolio/Portfolio"
import Offers from "@/components/Offers/Offers"
import ContactSec from "@/components/ContactForm/ContactSec"
import FaqSection from "@/components/FAQ/FaqSection"
import { redirect } from "next/navigation"

const page = async ({params}: any) => {
  
  const revalidate = 10


  async function findObjectBySlug(slug: any, array: any) {
    const currentPage = array.find(item => item.link === slug);

    if (!currentPage || !currentPage.slugPage) {
      return false
    }
  
    return currentPage.slugPage
  }

  type pageData = any


  const pageData = await findObjectBySlug(params.slug, GetFullPortfolioData())

  return (!pageData ? redirect('/not-found') :
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
