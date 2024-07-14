import { fullOffersData } from "@/components/Offers/OffersData";
import { GetFullPortfolioData } from "@/components/portfolio/fullData";
import PortfolioItem from "@/components/portfolio/PortfolioPage/Item";
import { client } from "@/sanity/client";

const getPost = async () => {
  const EVENTS_QUERY = `*[
    _type == "post"
    ] | order(publishedAt) {
    slug,
    publishedAt,  
    }`;
  const event = await client.fetch(EVENTS_QUERY);
  return event;
};

export default async function sitemap() {
  const events: any = await getPost();

  console.log(events);

  const portfolio: any = GetFullPortfolioData();

  const staticUrls = [
    {
      url: "https://www.lunarisweb.pl",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.lunarisweb.pl/omnie",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const offerUrls = fullOffersData.map((offerItem: any) => ({
    url: "https://www.lunarisweb.pl/uslugi/" + offerItem.slug,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const portfolioUrls = portfolio.map((portfolioItem: any) => ({
    url: "https://www.lunarisweb.pl/portfolio/" + portfolioItem.link,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.3,
  }));

  const blogIrls = events.map((event: any) => ({
    url: "https://www.lunarisweb.pl/blog/" + event.slug.current,
    lastModified: event.publishedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...blogIrls, ...portfolioUrls, ...offerUrls];
}
