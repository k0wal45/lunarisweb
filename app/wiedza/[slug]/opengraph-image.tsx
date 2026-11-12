// Obrazek do udostępniania wpisu: rodzaj wpisu i tytuł.

import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/lib/og";
import { getPost, POST_KINDS, POSTS } from "@/lib/wiedza";

export const alt = "Wpis z działu Wiedza, Lunaris web";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  return ogImage({
    eyebrow: post ? `Wiedza · ${POST_KINDS[post.kind]}` : "Wiedza",
    title: post?.title ?? "Wiedza",
  });
}
