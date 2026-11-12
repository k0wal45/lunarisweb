// Pytania o usługę w układzie split. Bez pytań sekcja się nie pokazuje.

import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { faqLd } from "@/lib/seo";
import Split from "@/components/Split";
import type { Service } from "@/lib/uslugi";

export default function ServiceFaq({ service }: { service: Service }) {
  if (service.faq.length === 0) return null;
  return (
    <Split id="faq-title" title={service.faqTitle}>
      <Faq items={service.faq} />
      <JsonLd data={faqLd(service.faq)} />
    </Split>
  );
}
