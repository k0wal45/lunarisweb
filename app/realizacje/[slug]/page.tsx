// Realizacja (kanwas: „Realizacja /realizacje/[slug]”). Strona tylko układa sekcje;
// treść w lib/realizacje.ts, układ sekcji w components/Works/. Sekcje bez treści się nie pokazują.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import NextWork from "@/components/Works/NextWork";
import WorkHead from "@/components/Works/WorkHead";
import WorkProblem from "@/components/Works/WorkProblem";
import WorkQuote from "@/components/Works/WorkQuote";
import WorkResults from "@/components/Works/WorkResults";
import WorkSolution from "@/components/Works/WorkSolution";
import { getWork, nextWork, WORK_PAGE, workHref, WORKS } from "@/lib/realizacje";
import { pageMeta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return WORKS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const work = getWork((await params).slug);
  if (!work) return {};
  return pageMeta({
    ownImage: true,
    title: `${work.name} — realizacja`,
    description: work.lead ?? [work.name, work.scope, work.sector].filter(Boolean).join(" · "),
    path: workHref(work.slug),
  });
}

// Wszystkie adresy są znane z generateStaticParams i prerenderowane przy buildzie. `params` czytamy
// na górze strony, żeby nieznany slug dostał prawdziwy status 404 (w <Suspense> byłby to 200
// ze stroną „nie znaleziono”), a `instant = false` mówi Next.js, że ta trasa może blokować nawigację.
export const instant = false;

export default async function WorkPage({ params }: { params: Promise<Params> }) {
  const work = getWork((await params).slug);
  if (!work) notFound();
  const next = nextWork(work.slug);

  return (
    <main id="tresc">
      <WorkHead work={work} />
      <WorkProblem problem={work.problem} />
      <WorkSolution solution={work.solution} />
      <WorkResults results={work.results} />
      <WorkQuote quote={work.quote} />
      {next.slug !== work.slug && <NextWork work={next} />}
      <CtaBand title={WORK_PAGE.cta} />
    </main>
  );
}
