// Usługa (kanwas: „Usługa /uslugi/[slug]”). Strona tylko układa sekcje;
// treść w lib/uslugi.ts i lib/proces.ts, układ w components/ServicePage/.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import ServiceFaq from "@/components/ServicePage/ServiceFaq";
import ServiceHead from "@/components/ServicePage/ServiceHead";
import ServicePaths from "@/components/ServicePage/ServicePaths";
import ServiceProcess from "@/components/ServicePage/ServiceProcess";
import ServiceTerms from "@/components/ServicePage/ServiceTerms";
import ServiceWorks from "@/components/ServicePage/ServiceWorks";
import { getService, SERVICE_LIST, SERVICE_PAGE } from "@/lib/uslugi";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICE_LIST.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: `${s.label} — usługi — Lunaris web`,
    description: s.lead,
    alternates: { canonical: s.href },
  };
}

// Wszystkie adresy są znane z generateStaticParams i prerenderowane przy buildzie. `params` czytamy
// na górze strony, żeby nieznany slug dostał prawdziwy status 404 (w <Suspense> byłby to 200
// ze stroną „nie znaleziono”), a `instant = false` mówi Next.js, że ta trasa może blokować nawigację.
export const instant = false;

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const service = getService((await params).slug);
  if (!service) notFound();

  return (
    <main id="tresc">
      <ServiceHead service={service} />
      <ServiceTerms
        id="dostajesz-title"
        title={SERVICE_PAGE.getsTitle}
        note={service.getsNote}
        items={service.gets}
      />
      <ServicePaths paths={service.paths} />
      <ServiceProcess />
      <ServiceTerms
        id="ceny-title"
        sectionId="ceny"
        title={SERVICE_PAGE.priceTitle}
        note={service.priceNote}
        items={service.priceFactors}
      />
      <ServiceWorks service={service} />
      <ServiceFaq service={service} />
      <CtaBand title={service.ctaTitle} />
    </main>
  );
}
