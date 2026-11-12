// „Czytaj dalej”: do dwóch innych wpisów jako wiersze-linki z etykietą rodzaju.

import LinkList from "@/components/LinkList";
import SectionHead from "@/components/SectionHead";
import { Button, Container, Tag } from "@/components/ui";
import { POST_KINDS, POST_PAGE, POSTS, type Post } from "@/lib/wiedza";
import { postHref } from "@/lib/wiedza-kinds";

export default function RelatedPosts({ post }: { post: Post }) {
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  if (related.length === 0) return null;
  return (
    <Container as="section" aria-labelledby="dalej-title" className="pt-(--section)">
      <SectionHead id="dalej-title" title={POST_PAGE.related}>
        <Button variant="secondary" href={POST_PAGE.all.href}>
          {POST_PAGE.all.label}
        </Button>
      </SectionHead>
      <LinkList
        items={related.map((p) => ({
          href: postHref(p.slug),
          title: p.title,
          aside: <Tag>{POST_KINDS[p.kind]}</Tag>,
        }))}
      />
    </Container>
  );
}
