import ContactSec from "@/components/ContactForm/ContactSec";
import FaqSection from "@/components/FAQ/FaqSection";
import GrowSection from "@/components/Grow/GrowSection";
import Hero from "@/components/Hero/HeroUniversal";
import Offers from "@/components/Offers/Offers";
import Packages from "@/components/Offers/OffersSlug/Packages/Packages";
import Stats from "@/components/Stats";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lunaris Web - Kontakt",
  description: "Tworzymy innowacyjne i błyskawiczne strony internetowe, bezpieczne oraz dostosowane do potrzeb klienta. Wejdź do świata internetu już teraz!",
}

const ContactPage = () => {
  return (
    <main className="overflow-x-hidden max-w-screen">
      <Hero 
        header='kontakt'
        title='Skontaktuj się z nami już teraz, jesteśmy tu, aby pomóc'
        text='Masz pytania lub potrzebujesz wyceny? Skontaktuj się z nami! Oferujemy profesjonalne usługi tworzenia stron internetowych, grafiki i logo. Jesteśmy dostępni, aby odpowiedzieć na wszystkie Twoje pytania i dostosować nasze usługi do Twoich potrzeb'
      />
      <Stats />
      <ContactSec />
      <Packages />
      <GrowSection />
      <Offers />
      <FaqSection />

    </main>
  )
}

export default ContactPage