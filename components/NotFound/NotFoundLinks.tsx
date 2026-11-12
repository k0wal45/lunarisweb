// Strona 404: „Może tego szukasz” — najważniejsze podstrony jako wiersze-linki.

import LinkList from "@/components/LinkList";
import SectionHead from "@/components/SectionHead";
import { Container } from "@/components/ui";
import { NOT_FOUND } from "@/lib/not-found";

export default function NotFoundLinks() {
  return (
    <Container as="section" aria-labelledby="404-linki-title" className="pt-(--section)">
      <SectionHead id="404-linki-title" title={NOT_FOUND.linksTitle} />
      <LinkList size="lg" layout="split" items={NOT_FOUND.links} />
    </Container>
  );
}
