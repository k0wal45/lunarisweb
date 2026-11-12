// Stopka: logo z opisem, mapa strony, usługi i kontakt; pod linią dane firmy i linki prawne.

import Link from "next/link";
import CookieSettingsButton from "@/components/Consent/CookieSettingsButton";
import Logo, { Wordmark } from "@/components/Logo";
import { Container, TextLink, Typography, textLinkVariants } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  COMPANY,
  CONTACT_LINK,
  LEGAL_LINKS,
  MAIL,
  NAV_LINKS,
  PHONE,
  PREFETCH,
  SERVICES,
  SOCIAL,
  type SiteLink,
} from "@/lib/site";

// Usługi mają własną kolumnę, więc w „Stronie” zostają linki bez podmenu + Kontakt.
const PAGES: readonly SiteLink[] = [
  ...NAV_LINKS.filter((l) => !l.children),
  CONTACT_LINK,
];

const LINK = textLinkVariants({ variant: "nav", target: "touch" });

// Przy cacheComponents `new Date()` w prerenderze to błąd builda; w "use cache" wolno.
async function Year() {
  "use cache";
  return new Date().getFullYear();
}

function Heading({ children }: { children: string }) {
  return (
    <Typography as="h2" variant="small" tone="muted" className="mb-2">
      {children}
    </Typography>
  );
}

function Column({ title, links }: { title: string; links: readonly SiteLink[] }) {
  return (
    <nav aria-label={title} className="min-w-0 md:col-span-2">
      <Heading>{title}</Heading>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <TextLink href={l.href} prefetch={PREFETCH} variant="nav" target="touch">
              {l.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <Container>
        <div className="grid grid-cols-2 gap-x-(--gutter) gap-y-10 py-14 md:grid-cols-12 md:py-20">
          <div className="col-span-2 flex min-w-0 flex-col items-start gap-4 md:col-span-5">
            <Link
              href="/"
              aria-label="Lunaris web — strona główna"
              className="group inline-flex items-center gap-3.5 text-moon no-underline"
            >
              <Logo />
              <Wordmark />
            </Link>
            <Typography variant="ui" as="p" tone="muted" className="max-w-[36ch]">
              Projekt i kod w jednych rękach. Strony internetowe i identyfikacja
              wizualna dla firm usługowych.
            </Typography>
          </div>

          <Column title="Strona" links={PAGES} />
          <Column title="Usługi" links={SERVICES} />

          <div className="col-span-2 min-w-0 md:col-span-3">
            <Heading>Kontakt</Heading>
            <address className="flex flex-col items-start not-italic">
              <a className={LINK} href={`mailto:${MAIL}`}>
                {MAIL}
              </a>
              <a className={cn(LINK, "tabular-nums")} href={PHONE.href}>
                {PHONE.label}
              </a>
              {SOCIAL.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className={LINK}
                >
                  {l.label}
                </a>
              ))}
              <Typography variant="ui" as="span" tone="muted" className="mt-2">
                {COMPANY.area}
              </Typography>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-edge py-6 text-small font-medium text-ash md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>
              © <Year /> {COMPANY.name}
            </span>
            <span className="tabular-nums">NIP {COMPANY.nip}</span>
            <span className="tabular-nums">REGON {COMPANY.regon}</span>
            <span>{COMPANY.address}</span>
          </p>
          <ul className="flex flex-wrap gap-x-6">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <TextLink
                  href={l.href}
                  prefetch={PREFETCH}
                  variant="nav"
                  target="touch"
                  className="text-small"
                >
                  {l.label}
                </TextLink>
              </li>
            ))}
            <li>
              <CookieSettingsButton className={cn(LINK, "cursor-pointer text-small")} />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
