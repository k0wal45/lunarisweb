export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any;
  mainImage: any;
  tags: Array<Tag>;
  _id: string;
  headings?: Array<HTMLHeadElement | string>;
}

export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
  postCount?: number;
}

export interface PortfolioPage {
  id: number;
  title: string;
  name: string;
  color: string;
  imageGrid: string;
  techstack: JSX.Element[];
  imagesHero: [string, string, string];
  desc: string;
  imagesGlance: [string, string, string];
  website?: string;
  data: {
    title: string;
    desc: string;
    image: string;
  }[];
}
