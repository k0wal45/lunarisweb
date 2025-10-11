import Offers from "@/components/Offers/Offers";
import ContactSec from "@/components/ContactForm/ContactSec";
import FaqSection from "@/components/FAQ/FaqSection";
import { redirect } from "next/navigation";
import PortfolioSlugHero from "@/components/portfolio/PortfolioSlug/PortfolioSlugHero";
import ProjectGlance from "@/components/portfolio/PortfolioSlug/ProjectGlance";
import ProjectInfo from "@/components/portfolio/PortfolioSlug/ProjectInfo";
import { PortfolioPage } from "@/utils/interface";
import {
  fullPortfolioData,
  oktechLaweta,
} from "@/components/portfolio/fullData_converted";

export const revalidate = 3600;

function findObjectBySlug(slug: any, array: any) {
  console.log(
    array.find(
      (item: any) => item.name.replaceAll(" ", "-").toLowerCase() === slug
    )
  );

  const currentPage = array.find(
    (item: any) => item.name.replaceAll(" ", "-").toLowerCase() === slug
  );

  if (!currentPage || !currentPage.slugPage) {
    return false;
  }

  return currentPage.slugPage;
}

const page = ({ params }: any) => {
  type pageData = PortfolioPage;

  const pageData = findObjectBySlug(params.slug, fullPortfolioData);

  // !pageData ? (
  //   redirect("/not-found")
  // ) :
  return (
    <main className="max-w-screen">
      {/* <PortfolioSlugHero
        title={pageData.title}
        name={pageData.name}
        images={pageData.imagesHero}
        color={pageData.color}
      />
      <ProjectGlance
        desc={pageData.desc}
        images={pageData.imagesGlance}
        website={"https://www.lunarisweb.pl/"}
      />
      <ProjectInfo data={pageData.data} /> */}
      <Offers />
      <ContactSec />
      <FaqSection />
    </main>
  );
};

export default page;
