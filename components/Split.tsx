// Rozkład „etykieta po lewej, treść po prawej” (design.md, sekcja 12: `.split`):
// nagłówek sekcji w kolumnach 1–4, treść w 6–12; poniżej 960 px jedna kolumna.
//   <Split id="problem-title" title="Problem" aside="…">…</Split>

import type { ReactNode } from "react";
import { Container, Grid, Typography } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { TermItem } from "@/lib/types";

type Props = {
  id: string;
  title: string;
  /** krótki opis pod nagłówkiem, w Popiele */
  aside?: string;
  children: ReactNode;
  className?: string;
  /** treść pod rozkładem, na pełną szerokość (zrzuty, liczby) */
  after?: ReactNode;
  mainClassName?: string;
  /** id sekcji, gdy ktoś do niej linkuje (np. #ceny) */
  sectionId?: string;
};

export default function Split({
  id,
  sectionId,
  title,
  aside,
  children,
  className,
  after,
  mainClassName,
}: Props) {
  return (
    <Container
      as="section"
      id={sectionId}
      aria-labelledby={id}
      className={cn("pt-(--section)", className)}
    >
      <Grid className="gap-y-6">
        <div className="col-span-12 md:col-span-4">
          <Typography id={id} variant="h2">
            {title}
          </Typography>
          {aside && (
            <Typography tone="muted" className="mt-6 max-w-[32ch]">
              {aside}
            </Typography>
          )}
        </div>
        <div className={cn("col-span-12 md:col-span-7 md:col-start-6", mainClassName)}>
          {children}
        </div>
      </Grid>
      {after}
    </Container>
  );
}

/** lista definicji z liniami: pojęcie po lewej, opis w Popiele po prawej (`.gets`) */
export function TermList({ items }: { items: readonly TermItem[] }) {
  return (
    <ul className="border-t border-edge">
      {items.map((it) => (
        <li
          key={it.term}
          className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-edge py-5 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
        >
          <Typography as="span" className="font-medium">
            {it.term}
          </Typography>
          <Typography as="span" tone="muted">
            {it.text}
          </Typography>
        </li>
      ))}
    </ul>
  );
}
