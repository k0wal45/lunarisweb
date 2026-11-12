// Nagłówek strony usługi: okruszki, przełącznik usług (chipy-linki), tytuł, lead,
// przycisk rozmowy z linkiem do cen i ramka z ceną „od” po prawej.

import PageHead from "@/components/PageHead";
import { Button, Chip, ChipGroup, TextLink } from "@/components/ui";
import { SERVICE_LIST, SERVICE_PAGE, type Service } from "@/lib/uslugi";

export default function ServiceHead({ service }: { service: Service }) {
  return (
    <PageHead
      id="usluga-title"
      trail={[{ label: "Usługi" }]}
      crumb={service.label}
      title={service.title}
      lead={service.lead}
      titleClassName="max-w-[16ch]"
      leadClassName="max-w-[46ch]"
      before={
        <ChipGroup as="nav" label="Usługi" className="mt-6">
          {SERVICE_LIST.map((s) => (
            <Chip key={s.slug} href={s.href} current={s.slug === service.slug}>
              {s.label}
            </Chip>
          ))}
        </ChipGroup>
      }
    >
      <div className="mt-12 flex flex-wrap items-end justify-between gap-x-(--gutter) gap-y-12">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
          <Button href="/kontakt">{SERVICE_PAGE.cta}</Button>
          {service.priceFactors.length > 0 && (
            <TextLink href="#ceny" className="text-ui font-medium">
              {SERVICE_PAGE.priceTitle}
            </TextLink>
          )}
        </div>
        {service.price && (
          <p className="flex w-full flex-col border-t border-edge pt-5 md:w-72">
            <span className="text-small font-medium text-ash">{SERVICE_PAGE.priceLabel}</span>
            <span className="mt-1 font-display text-[3rem] leading-[1.05] whitespace-nowrap tabular-nums">
              od {service.price}
            </span>
            <span className="text-small text-ash">{SERVICE_PAGE.priceTerms}</span>
          </p>
        )}
      </div>
    </PageHead>
  );
}
