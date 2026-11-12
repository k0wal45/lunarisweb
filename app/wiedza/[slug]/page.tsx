// Wpis (kanwas: „Wpis /wiedza/[slug]”). Strona tylko układa sekcje;
// lista wpisów w lib/wiedza.ts, treść w content/wiedza/, układ w components/Posts/.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import PostBody from "@/components/Posts/PostBody";
import PostHead from "@/components/Posts/PostHead";
import RelatedPosts from "@/components/Posts/RelatedPosts";
import { pageMeta } from "@/lib/seo";
import { getPost, POST_PAGE, POSTS } from "@/lib/wiedza";
import { postHref } from "@/lib/wiedza-kinds";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return pageMeta({
    ownImage: true,
    title: `${post.title} — Wiedza`,
    description: post.desc,
    path: postHref(post.slug),
    type: "article",
    publishedTime: post.date,
  });
}

// Wszystkie adresy są znane z generateStaticParams i prerenderowane przy buildzie. `params` czytamy
// na górze strony, żeby nieznany slug dostał prawdziwy status 404 (w <Suspense> byłby to 200
// ze stroną „nie znaleziono”), a `instant = false` mówi Next.js, że ta trasa może blokować nawigację.
export const instant = false;

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <main id="tresc">
      <article>
        <PostHead post={post} />
        <PostBody post={post} />
      </article>
      <RelatedPosts post={post} />
      <CtaBand title={POST_PAGE.cta} />
    </main>
  );
}
