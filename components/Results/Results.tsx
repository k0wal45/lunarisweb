// „Wyniki, nie obietnice”: wybrane realizacje z liczbą. Lista w lib/home.ts (RESULTS.items, po slugu),
// nazwy i adresy z lib/realizacje.ts, więc zmiana realizacji działa tu od razu.

import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import { Button, Container, Typography } from "@/components/ui";
import { RESULTS } from "@/lib/home";
import { getWork, workHref } from "@/lib/realizacje";

const ITEMS = RESULTS.items.flatMap((item) => {
  const work = getWork(item.slug);
  return work ? [{ ...item, name: work.name, href: workHref(work.slug) }] : [];
});

export default function Results() {
  return (
    <Container as="section" size="base" aria-labelledby="wyniki-title" className="flex-col">
      <SectionHead id="wyniki-title" title={RESULTS.title} className="mb-0 items-center gap-4 p-8">
        <Button variant="secondary" href={RESULTS.more.href}>
          {RESULTS.more.label}
        </Button>
      </SectionHead>
      {ITEMS.map((r) => (
        <Link
          key={r.slug}
          href={r.href}
          className="group grid grid-cols-1 gap-4 border-y border-edge bg-transparent p-8 duration-200 last:items-end hover:border-white sm:grid-cols-3"
        >
          <Typography as="span" variant="h2" className="relative w-fit">
            {r.name}
            <span className="absolute top-0 block h-full w-full origin-left scale-x-0 border-b border-white duration-100 group-hover:scale-x-100" />
          </Typography>
          <Typography as="span" tone="muted" className="self-center sm:text-center">
            {r.tag}
          </Typography>
          <span className="flex items-end gap-2 self-center sm:justify-end">
            {r.stat && (
              <Typography as="span" variant="stat">
                {r.stat}
              </Typography>
            )}
            <Typography as="span" tone="muted">
              {r.statLabel}
            </Typography>
          </span>
        </Link>
      ))}
    </Container>
  );
}
