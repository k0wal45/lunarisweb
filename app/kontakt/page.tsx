// Kontakt (design.md, sekcja 13; kanwas: „Kontakt /kontakt”). Strona tylko układa sekcje;
// treść w lib/kontakt.ts i lib/site.ts, układ w components/Contact/.

import type { Metadata } from "next";
import ContactNext from "@/components/Contact/ContactNext";
import ContactSection from "@/components/Contact/ContactSection";
import PageHead from "@/components/PageHead";
import { CONTACT_PAGE } from "@/lib/kontakt";

export const metadata: Metadata = {
  ...CONTACT_PAGE.meta,
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <main id="tresc">
      <PageHead
        id="kontakt-title"
        crumb={CONTACT_PAGE.crumb}
        title={CONTACT_PAGE.title}
        lead={CONTACT_PAGE.lead}
      />
      <ContactSection />
      <ContactNext />
    </main>
  );
}
