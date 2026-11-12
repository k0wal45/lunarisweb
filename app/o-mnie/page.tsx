// O mnie (kanwas: „O mnie /o-mnie”). Strona tylko układa sekcje;
// treść w lib/o-mnie.ts, układ w components/About/.

import type { Metadata } from "next";
import AboutIntro from "@/components/About/AboutIntro";
import AboutPrinciples from "@/components/About/AboutPrinciples";
import AboutTools from "@/components/About/AboutTools";
import CtaBand from "@/components/CtaBand";
import PageHead from "@/components/PageHead";
import { ABOUT_PAGE } from "@/lib/o-mnie";

export const metadata: Metadata = {
  ...ABOUT_PAGE.meta,
  alternates: { canonical: "/o-mnie" },
};

export default function AboutPage() {
  return (
    <main id="tresc">
      <PageHead
        id="o-mnie-title"
        crumb={ABOUT_PAGE.crumb}
        title={ABOUT_PAGE.title}
        titleClassName="max-w-[16ch]"
      />
      <AboutIntro />
      <AboutPrinciples />
      <AboutTools />
      <CtaBand />
    </main>
  );
}
