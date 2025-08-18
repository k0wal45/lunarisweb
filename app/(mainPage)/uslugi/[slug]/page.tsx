import ContactSec from "@/components/ContactForm/ContactSec";
import FaqSection from "@/components/FAQ/FaqSection";
import GrowSection from "@/components/Grow/GrowSection";
import Offers from "@/components/Offers/Offers";
import { fullOffersData } from "@/components/Offers/OffersData";
import Hero from "@/components/Offers/OffersSlug/Hero";
import Packages from "@/components/Offers/OffersSlug/Packages/Packages";
import OfferPrice from "@/components/Offers/OffersSlug/OfferPrice/OfferPrice";
import Services from "@/components/Offers/OffersSlug/Services/Services";
import Step from "@/components/Offers/OffersSlug/Step/Step";
import Portfolio from "@/components/portfolio/Portfolio";
import Reviews from "@/components/reviews/Reviews";
import { redirect } from "next/navigation";

async function findObjectBySlug(slug: any, array: any) {
  const currentPage = array.find((item: any) => item.slug === slug);

  if (!currentPage) {
    return false;
  }

  return currentPage;
}

export const revalidate = 3600;

export async function generateMetadata({ params }: any) {
  if (params.slug === "strony-internetowe") {
    return {
      title: "Tworzenie Stron Internetowych - Lunaris Web",
      description:
        "Profesjonalne tworzenie stron internetowych dostosowanych do indywidualnych potrzeb klientów. Lunaris Web oferuje nowoczesne, responsywne i bezpieczne strony.",
      keywords:
        "tworzenie stron internetowych, strony internetowe, responsywne strony, bezpieczne strony, Lunaris Web,",
      openGraph: {
        title: "Tworzenie Stron Internetowych - Lunaris Web",
        description:
          "Profesjonalne tworzenie stron internetowych dostosowanych do indywidualnych potrzeb klientów. Lunaris Web oferuje nowoczesne, responsywne i bezpieczne strony.",
        url: "https://www.lunarisweb.com/oferta/strony-internetowe",
        type: "website",
        locale: "pl_PL",
      },
      twitter: {
        card: "summary_large_image",
        site: "@LunarisWeb",
        title: "Tworzenie Stron Internetowych - Lunaris Web",
        description:
          "Profesjonalne tworzenie stron internetowych dostosowanych do indywidualnych potrzeb klientów. Lunaris Web oferuje nowoczesne, responsywne i bezpieczne strony.",
      },
    };
  }

  if (params.slug === "logotypy") {
    return {
      title: "Projektowanie Logotypów - Lunaris Web",
      description:
        "Oferujemy unikalne i profesjonalne projekty logotypów, które wyróżnią Twoją markę. Lunaris Web zapewnia indywidualne podejście i wysoką jakość usług.",
      keywords:
        "projektowanie logotypów, logotypy, unikalne logotypy, Lunaris Web",
      openGraph: {
        title: "Projektowanie Logotypów - Lunaris Web",
        description:
          "Oferujemy unikalne i profesjonalne projekty logotypów, które wyróżnią Twoją markę. Lunaris Web zapewnia indywidualne podejście i wysoką jakość usług.",
        url: "https://www.lunarisweb.com/oferta/logotypy",
        type: "website",
        locale: "pl_PL",
      },
      twitter: {
        card: "summary_large_image",
        site: "@LunarisWeb",
        title: "Projektowanie Logotypów - Lunaris Web",
        description:
          "Oferujemy unikalne i profesjonalne projekty logotypów, które wyróżnią Twoją markę. Lunaris Web zapewnia indywidualne podejście i wysoką jakość usług.",
      },
    };
  }

  if (params.slug === "grafika-komputerowa") {
    return {
      title: "Grafika Komputerowa - Lunaris Web",
      description:
        "Profesjonalne usługi graficzne: projektowanie ulotek, banerów, wizytówek i innych materiałów promocyjnych. Lunaris Web oferuje kreatywne i unikalne projekty.",
      keywords:
        "grafika komputerowa, projektowanie graficzne, materiały promocyjne, Lunaris Web",
      openGraph: {
        title: "Grafika Komputerowa - Lunaris Web",
        description:
          "Profesjonalne usługi graficzne: projektowanie ulotek, banerów, wizytówek i innych materiałów promocyjnych. Lunaris Web oferuje kreatywne i unikalne projekty.",
        url: "https://www.lunarisweb.com/oferta/grafika-komputerowa",
        type: "website",
        locale: "pl_PL",
      },
      twitter: {
        card: "summary_large_image",
        site: "@LunarisWeb",
        title: "Grafika Komputerowa - Lunaris Web",
        description:
          "Profesjonalne usługi graficzne: projektowanie ulotek, banerów, wizytówek i innych materiałów promocyjnych. Lunaris Web oferuje kreatywne i unikalne projekty.",
      },
    };
  }

  return;
}

const OfferPage = async ({ params }: any) => {
  type pageData = any;

  const pageData = await findObjectBySlug(params.slug, fullOffersData);

  return !pageData ? (
    redirect("/not-found")
  ) : (
    <main className="overflow-x-hidden">
      <Hero content={pageData.hero} />
      <Services content={pageData.services} />
      <OfferPrice content={pageData.offer} />
      <Step content={pageData.step} />
      <Packages />
      <GrowSection />
      <Portfolio />
      <Offers />
      <Reviews />
      <ContactSec />
      <FaqSection />
    </main>
  );
};

export default OfferPage;

export async function generateStaticParams() {
  const slugs: string[] = fullOffersData.map((item) => item.slug);

  return slugs.map((slug) => ({ slug }));
}
