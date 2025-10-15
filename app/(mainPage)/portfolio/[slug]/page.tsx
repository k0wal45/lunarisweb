import Offers from "@/components/Offers/Offers";
import ContactSec from "@/components/ContactForm/ContactSec";
import FaqSection from "@/components/FAQ/FaqSection";
import { redirect } from "next/navigation";
import PortfolioSlugHero from "@/components/portfolio/PortfolioSlug/PortfolioSlugHero";
import ProjectGlance from "@/components/portfolio/PortfolioSlug/ProjectGlance";
import ProjectInfo from "@/components/portfolio/PortfolioSlug/ProjectInfo";
import { PortfolioPage } from "@/utils/interface";
import { GetFullPortfolioData } from "@/components/portfolio/fullData";

function findObjectBySlug(slug: any, array: any) {
  const currentPage = array.find(
    (item: any) => item.name.replaceAll(" ", "-").toLowerCase() == slug
  );

  if (!currentPage) {
    return false;
  }

  return currentPage;
}

const page = async ({ params }: any) => {
  type pageData = PortfolioPage;

  const pageData = await findObjectBySlug(params.slug, GetFullPortfolioData());

  return !pageData ? (
    redirect("/not-found")
  ) : (
    <main className="max-w-screen">
      <PortfolioSlugHero
        title={pageData.title}
        name={pageData.name}
        images={pageData.imagesHero}
        color={pageData.color}
      />
      <ProjectGlance
        desc={pageData.desc}
        images={pageData.imagesGlance}
        website={pageData.website ? pageData.website : undefined}
      />
      <ProjectInfo data={pageData.data} />
      <Offers />
      <ContactSec />
      <FaqSection />
    </main>
  );
};

export default page;

export async function generateStaticParams() {
  const fullPortfolioData = GetFullPortfolioData();

  const slugs: string[] = fullPortfolioData.map((item) =>
    item.name.toLowerCase().replace(" ", "-")
  );

  return slugs.map((slug) => ({ slug }));
}
