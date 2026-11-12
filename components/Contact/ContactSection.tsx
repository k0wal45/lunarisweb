// Kontakt: kanały (mail, telefon), zdjęcie i dane firmy po lewej, formularz po prawej.

import Image from "next/image";
import { cn } from "@/lib/cn";
import { CONTACT_PAGE } from "@/lib/kontakt";
import { COMPANY, MAIL, PHONE } from "@/lib/site";
import { Container } from "@/components/ui";
import portrait from "@/public/img/daniel-kowalski.jpg";
import ContactForm from "./ContactForm";

const CHANNEL =
  "font-display text-[1.75rem] leading-[1.2] no-underline underline-offset-[0.15em] decoration-1 hover:underline";

export default function ContactSection() {
  return (
    <Container as="section" aria-label="Formularz i dane kontaktowe" className="pt-16 md:pt-24">
      <div className="grid grid-cols-12 items-start gap-x-(--gutter) gap-y-16">
        <div className="col-span-12 flex flex-col gap-12 md:col-span-4">
          <div className="flex flex-col items-start gap-3">
            <a href={`mailto:${MAIL}`} className={CHANNEL}>
              {MAIL}
            </a>
            <a href={PHONE.href} className={cn(CHANNEL, "tabular-nums")}>
              {PHONE.label}
            </a>
          </div>

          <figure className="m-0 w-full max-w-80 bg-mare">
            <Image
              src={portrait}
              alt={CONTACT_PAGE.photoAlt}
              placeholder="blur"
              sizes="320px"
              className="block aspect-4/5 h-auto w-full object-cover"
            />
          </figure>

          <dl className="m-0 flex flex-col gap-1 text-small">
            <dt className="font-medium text-ash">{CONTACT_PAGE.companyLabel}</dt>
            <dd className="m-0">{COMPANY.name}</dd>
            <dd className="m-0 tabular-nums">NIP {COMPANY.nip}</dd>
            <dd className="m-0">{COMPANY.address}</dd>
          </dl>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
