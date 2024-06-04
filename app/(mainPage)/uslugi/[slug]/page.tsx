
import ContactSec from '@/components/ContactForm/ContactSec'
import FaqSection from '@/components/FAQ/FaqSection'
import GrowSection from '@/components/Grow/GrowSection'
import Offers from '@/components/Offers/Offers'
import { fullOffersData } from '@/components/Offers/OffersData'
import Advanteges from '@/components/Offers/OffersSlug/Advanteges/Advanteges'
import Hero from '@/components/Offers/OffersSlug/Hero'
import Packages from '@/components/Offers/OffersSlug/Packages/Packages'
import Services from '@/components/Offers/OffersSlug/Services/Services'
import Stats from '@/components/Stats'
import Portfolio from '@/components/portfolio/Portfolio'
import Reviews from '@/components/reviews/Reviews'
import { Metadata } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { redirect } from 'next/navigation'


export const metadata: Metadata = {
  title: "Lunaris Web - Usługi",
  description: "Tworzymy innowacyjne i błyskawiczne strony internetowe, bezpieczne oraz dostosowane do potrzeb klienta. Wejdź do świata internetu już teraz!",
}
export const revalidate = 10

const OfferPage = async ({params}: Params) => {

  async function findObjectBySlug(slug: any, array: any) {
    const currentPage = array.find(item => item.slug === slug);

    if (!currentPage) {
      return false
    }
  
    return currentPage
  }

  type pageData = any

  const pageData = await findObjectBySlug(params.slug, fullOffersData)


  return (
  !pageData ? redirect('/not-found') :
    <main className='overflow-x-hidden max-w-screen'>
      <Hero
        content={pageData.hero}
      />
      <Stats />
      <Services 
        content={pageData.services}
      />
      <Advanteges 
        content={pageData.advanteges}
      />
      <Packages />
      <GrowSection />
      <Portfolio />
      <Offers />
      <Reviews />
      <ContactSec />
      <FaqSection />
    </main>
  )
}

export default OfferPage