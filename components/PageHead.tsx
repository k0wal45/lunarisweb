// Nagłówek podstrony (design.md, sekcja 12: `.page-head`): okruszki, h1 (do 18 znaków na linię),
// opcjonalny lead w Popiele i dodatkowa treść pod spodem (metryczka, podpis autora).
//   <PageHead id="kontakt-title" crumb="Kontakt" title="Masz projekt?…" lead="…" />
//   <PageHead id="t" trail={[{ href: "/realizacje", label: "Realizacje" }]} crumb="Merkury Medica" … />

import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Typography } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { cn } from "@/lib/cn";
import { breadcrumbLd } from "@/lib/seo";

export type Crumb = { label: string; href?: string };

type Props = {
  /** id nagłówka, do aria-labelledby sekcji */
  id: string;
  /** nazwa bieżącej strony w okruszkach; bez niej ostatni element `trail` kończy okruszki */
  crumb?: string;
  /** strony nadrzędne między „Strona główna” a bieżącą; bez `href` = pozycja bez linku */
  trail?: readonly Crumb[];
  title: string;
  lead?: string;
  /** szerokość h1 w znakach (domyślnie 18) */
  titleClassName?: string;
  leadClassName?: string;
  /** treść między okruszkami a h1 (np. przełącznik usług) */
  before?: ReactNode;
  children?: ReactNode;
  as?: "section" | "header";
};

const HOME_CRUMB = "Strona główna";

const CRUMB_LINK = "no-underline underline-offset-[0.2em] hover:underline";

export default function PageHead({
  id,
  crumb,
  trail = [],
  title,
  lead,
  titleClassName,
  leadClassName,
  before,
  children,
  as = "section",
}: Props) {
  return (
    <Container as={as} aria-labelledby={as === "section" ? id : undefined} className="pt-30">
      {/* te same okruszki dla wyszukiwarek; pozycje bez adresu są pomijane, ostatnia = ta strona */}
      <JsonLd
        data={breadcrumbLd([
          { label: HOME_CRUMB, href: "/" },
          ...trail.filter((t) => t.href),
          { label: crumb ?? title },
        ])}
      />
      <nav aria-label="Okruszki">
        <ol className="flex flex-wrap gap-2 text-small font-medium text-ash">
          <li>
            <Link href="/" className={CRUMB_LINK}>
              {HOME_CRUMB}
            </Link>
          </li>
          {trail.map((t) => (
            <li key={t.label} className="contents">
              <span aria-hidden="true">/</span>
              {t.href ? (
                <Link href={t.href} className={CRUMB_LINK}>
                  {t.label}
                </Link>
              ) : (
                <span>{t.label}</span>
              )}
            </li>
          ))}
          {crumb && (
            <>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{crumb}</li>
            </>
          )}
        </ol>
      </nav>
      {before}
      <Typography id={id} variant="h1" className={cn("mt-6 max-w-[18ch]", titleClassName)}>
        {title}
      </Typography>
      {lead && (
        <Typography variant="lead" tone="muted" className={cn("mt-8", leadClassName)}>
          {lead}
        </Typography>
      )}
      {children}
    </Container>
  );
}
