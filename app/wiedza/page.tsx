// Wiedza (kanwas: „Wiedza (blog) /wiedza”): nagłówek, wpisy z filtrem, pasek CTA.
// Treść w lib/wiedza.ts.

import CtaBand from "@/components/CtaBand";
import PageHead from "@/components/PageHead";
import PostsList from "@/components/Posts/PostsList";
import { Container } from "@/components/ui";
import { KNOWLEDGE_PAGE, POSTS, postMeta } from "@/lib/wiedza";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ ...KNOWLEDGE_PAGE.meta, path: "/wiedza" });

// lista po stronie klienta dostaje tylko dane (bez komponentu treści wpisu)
const SUMMARIES = POSTS.map((p) => ({
  slug: p.slug,
  kind: p.kind,
  title: p.title,
  desc: p.desc,
  meta: postMeta(p),
}));

export default function KnowledgePage() {
  return (
    <main id="tresc">
      <PageHead
        id="wiedza-title"
        crumb={KNOWLEDGE_PAGE.title}
        title={KNOWLEDGE_PAGE.title}
        lead={KNOWLEDGE_PAGE.lead}
      />
      <Container as="section" aria-label="Wpisy" className="pt-16 md:pt-24">
        <PostsList posts={SUMMARIES} />
      </Container>
      <CtaBand title={KNOWLEDGE_PAGE.cta} />
    </main>
  );
}
