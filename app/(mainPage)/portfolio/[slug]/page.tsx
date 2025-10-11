import { GetFullPortfolioData } from "@/components/portfolio/fullData";
import Offers from "@/components/Offers/Offers";
import ContactSec from "@/components/ContactForm/ContactSec";
import FaqSection from "@/components/FAQ/FaqSection";
import { redirect } from "next/navigation";
import PortfolioSlugHero from "@/components/portfolio/PortfolioSlug/PortfolioSlugHero";
import ProjectGlance from "@/components/portfolio/PortfolioSlug/ProjectGlance";
import ProjectInfo from "@/components/portfolio/PortfolioSlug/ProjectInfo";

export const revalidate = 3600;

async function findObjectBySlug(slug: any, array: any) {
  const currentPage = array.find((item: any) => item.link === slug);

  if (!currentPage || !currentPage.slugPage) {
    return false;
  }

  return currentPage.slugPage;
}

const page = async ({ params }: any) => {
  type pageData = any;

  const pageData = await findObjectBySlug(params.slug, GetFullPortfolioData());

  return !pageData ? (
    redirect("/not-found")
  ) : (
    <main className="max-w-screen">
      {/* {pageData.map((data: any, index: any) => (
        <TextParallaxContentExample content={data} key={index} />
      ))} */}
      <PortfolioSlugHero
        title="Strona internetowa i materiały reklamowe dla branży budowniczo usługowej"
        name="Oktech HDS"
        images={[IMG_PLACEHOLDER, IMG_PLACEHOLDER, IMG_PLACEHOLDER]}
        color="yellow-300"
      />
      <ProjectGlance
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam, odit est ea eligendi excepturi cupiditate sapiente praesentium amet nostrum odio velit eum quam, officiis aperiam quasi assumenda eaque ducimus ratione nulla laudantium aliquam labore reprehenderit dolore! Mollitia, nihil sunt?"
        images={[IMG_PLACEHOLDER, IMG_PLACEHOLDER]}
        website={"https://www.lunarisweb.pl/"}
      />
      <ProjectInfo
        data={[
          {
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, soluta dignissimos, quis tempora odit iure recusandae sed veritatis velit illum, eveniet corrupti? Quisquam ipsam quasi natus placeat nam voluptas! Incidunt inventore doloribus ducimus nesciunt voluptates nulla accusantium provident odit, aut ab blanditiis porro tempore debitis modi, consectetur repellat ad qui cum nihil, expedita temporibus optio perferendis? Exercitationem quasi, incidunt atque error assumenda architecto, dolorem voluptatem tempora laboriosam perferendis eveniet reprehenderit id alias libero nemo possimus hic minima recusandae. Fuga, minima.",
            image: IMG_PLACEHOLDER,
          },
        ]}
      />
      <Offers />
      <ContactSec />
      <FaqSection />
    </main>
  );
};

export default page;

const IMG_PLACEHOLDER =
  "https://images.unsplash.com/photo-1756296576509-e0d97f11cd3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
