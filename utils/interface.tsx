export interface Post {
  title: string
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any;
  mainImage: any;
  tags: Array<Tag>;
  _id: string;
  headings?: Array<HTMLHeadElement | string>
}

export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
  postCount?: number
}

export interface PortfolioPage {
  title: string;
  company: string;
  img: string;
  heading: string;
  text: string;
  link: string;
}