
import ContactSec from '@/components/ContactForm/ContactSec'
import FaqSection from '@/components/FAQ/FaqSection'
import Hero from '@/components/Hero/HeroUniversal'
import { fullOffersData } from '@/components/Offers/OffersData'
import Advanteges from '@/components/Offers/OffersSlug/Advanteges/Advanteges'
import Packages from '@/components/Offers/OffersSlug/Packages/Packages'
import Services from '@/components/Offers/OffersSlug/Services/Services'
import Portfolio from '@/components/portfolio/Portfolio'
import Reviews from '@/components/reviews/Reviews'
import { Metadata } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'


export const metadata: Metadata = {
  title: "Lunaris Web - Usługi",
  description: "Tworzymy innowacyjne i błyskawiczne strony internetowe, bezpieczne oraz dostosowane do potrzeb klienta. Wejdź do świata internetu już teraz!",
}

const OfferPage = async ({params}: Params) => {
  const revalidate = 10

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
  // !pageData ? redirect('/not-found') :
    <main className='overflow-x-hidden max-w-screen'>
      <Hero
        header={pageData.hero.header}
        title={pageData.hero.title}
        text={pageData.hero.text}
      />
      <Advanteges />
      <Services 
        content={pageData.services}
      />
      <Packages />
      <Portfolio />
      <Reviews />
      <ContactSec />
      <FaqSection />
    </main>
  )
}

export default OfferPage