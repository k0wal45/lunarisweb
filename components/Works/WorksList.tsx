"use client";

// Lista realizacji z filtrem (kanwas: „Realizacje /realizacje”). Wiersz: nazwa Brygadą, branża,
// zakres i rok. Najechanie przygasza pozostałe wiersze do Popiołu, a z prawej wjeżdża terminatorem
// miniatura (zamiast zakresu). Na telefonie i ekranach dotykowych miniatura stoi pod nazwą.

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Chip, ChipGroup, TextLink } from "@/components/ui";
import {
  WORK_FILTERS,
  WORKS_PAGE,
  workHref,
  worksLabel,
  type Work,
  type WorkCategory,
} from "@/lib/realizacje";
import { sierotki } from "@/lib/sierotki";

// najechanie: miniatura wchodzi łukiem od lewej (jak zalanie terminatorem)
const THUMB =
  "pointer-events-none absolute top-1/2 right-0 z-10 -mt-22 hidden aspect-16/10 w-70 bg-mare [clip-path:ellipse(0%_120%_at_0%_50%)] transition-[clip-path] duration-(--dur-phase) ease-terminator group-hover/port:[clip-path:ellipse(160%_160%_at_0%_50%)] group-focus-visible/port:[clip-path:ellipse(160%_160%_at_0%_50%)] md:pointer-fine:block";

export default function WorksList({ works }: { works: readonly Work[] }) {
  const [filter, setFilter] = useState<WorkCategory | "all">("all");
  const items = works.filter(
    (w) => filter === "all" || w.categories.includes(filter),
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <ChipGroup label="Filtr realizacji">
          {WORK_FILTERS.map((f) => (
            <Chip key={f.value} pressed={filter === f.value} onClick={() => setFilter(f.value)}>
              {f.label}
            </Chip>
          ))}
        </ChipGroup>
        <p className="text-small font-medium text-ash tabular-nums" aria-live="polite">
          {worksLabel(items.length)}
        </p>
      </div>

      {items.length > 0 ? (
        <ul className="group/list border-t border-edge">
          {items.map((w) => (
            <li key={w.slug} className="border-b border-edge">
              <Link
                href={workHref(w.slug)}
                className="group/port relative grid grid-cols-1 items-baseline gap-x-6 gap-y-1.5 py-9 text-moon no-underline transition-colors duration-(--dur-micro) ease-terminator md:pointer-fine:grid-cols-[minmax(0,6fr)_minmax(0,3fr)_minmax(0,3fr)] md:pointer-fine:group-hover/list:text-ash md:pointer-fine:hover:text-moon! focus-visible:text-moon"
              >
                <span className="font-display text-[clamp(2rem,1.4rem+1.6vw,3rem)] leading-[1.05]">
                  {w.name}
                </span>
                <span className="text-small font-medium text-ash">{w.sector}</span>
                <span className="text-small font-medium text-ash transition-opacity duration-(--dur-micro) ease-terminator md:pointer-fine:group-hover/port:opacity-0 md:pointer-fine:group-focus-visible/port:opacity-0">
                  {w.scope}
                  {w.year && (
                    <>
                      {" · "}
                      <span className="tabular-nums">{w.year}</span>
                    </>
                  )}
                </span>
                {w.thumb && (
                  <>
                    <span className={THUMB} aria-hidden="true">
                      <Image
                        src={w.thumb}
                        alt=""
                        sizes="280px"
                        className="block size-full object-cover"
                      />
                    </span>
                    <span
                      className="mt-4 block aspect-16/10 w-full bg-mare md:pointer-fine:hidden"
                      aria-hidden="true"
                    >
                      <Image
                        src={w.thumb}
                        alt=""
                        sizes="92vw"
                        className="block size-full object-cover"
                      />
                    </span>
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-12 text-ash">
          {sierotki(WORKS_PAGE.empty)}
        </p>
      )}

      <p className="mt-12 max-w-[56ch] text-ash">
        {sierotki(WORKS_PAGE.outro)}{" "}
        <TextLink href="/kontakt" className="text-moon">
          {WORKS_PAGE.outroLink}
        </TextLink>
        .
      </p>
    </>
  );
}
