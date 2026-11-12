// Realizacje (kanwas: „Realizacje /realizacje”): nagłówek, lista z filtrem, pasek CTA.
// Treść w lib/realizacje.ts.

import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHead from "@/components/PageHead";
import WorksList from "@/components/Works/WorksList";
import { Container } from "@/components/ui";
import { WORKS, WORKS_PAGE } from "@/lib/realizacje";

export const metadata: Metadata = {
  title: "Realizacje — Lunaris web",
  description: WORKS_PAGE.lead,
  alternates: { canonical: "/realizacje" },
};

export default function WorksPage() {
  return (
    <main id="tresc">
      <PageHead
        id="realizacje-title"
        crumb={WORKS_PAGE.title}
        title={WORKS_PAGE.title}
        lead={WORKS_PAGE.lead}
      />
      <Container as="section" aria-label="Lista realizacji" className="pt-16 md:pt-24">
        <WorksList works={WORKS} />
      </Container>
      <CtaBand title={WORKS_PAGE.cta} />
    </main>
  );
}
