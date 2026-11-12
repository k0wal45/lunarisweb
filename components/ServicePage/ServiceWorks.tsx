// Realizacje z kategorii usługi (do trzech) jako wiersze-linki.

import LinkList from "@/components/LinkList";
import SectionHead from "@/components/SectionHead";
import { Button, Container } from "@/components/ui";
import { workHref, WORKS } from "@/lib/realizacje";
import { SERVICE_PAGE, type Service } from "@/lib/uslugi";

export default function ServiceWorks({ service }: { service: Service }) {
  const works = WORKS.filter((w) => w.categories.includes(service.works)).slice(0, 3);
  if (works.length === 0) return null;
  return (
    <Container as="section" aria-labelledby="ref-title" className="pt-(--section)">
      <SectionHead id="ref-title" title={service.worksTitle}>
        <Button variant="secondary" href="/realizacje">
          {SERVICE_PAGE.allWorks}
        </Button>
      </SectionHead>
      <LinkList
        size="lg"
        layout="split"
        items={works.map((w) => ({
          href: workHref(w.slug),
          title: w.name,
          aside: [w.sector, w.lighthouse && `Lighthouse ${w.lighthouse}`].filter(Boolean).join(" · "),
        }))}
      />
    </Container>
  );
}
