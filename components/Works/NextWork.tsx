// „Następna realizacja”: jeden duży wiersz-link między liniami, nazwa w rozmiarze h1.

import Link from "next/link";
import { Container } from "@/components/ui";
import { WORK_PAGE, workHref, type Work } from "@/lib/realizacje";

export default function NextWork({ work }: { work: Work }) {
  return (
    <Container as="section" aria-label={WORK_PAGE.next} className="pt-(--section)">
      <Link
        href={workHref(work.slug)}
        className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 border-y border-edge py-12 text-moon no-underline"
      >
        <span className="text-small font-medium text-ash">{WORK_PAGE.next}</span>
        <span className="font-display text-h1 decoration-1 underline-offset-[0.12em] group-hover:underline">
          {work.name}
        </span>
        <span className="text-small font-medium text-ash">{work.sector}</span>
      </Link>
    </Container>
  );
}
