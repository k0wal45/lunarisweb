// Lista wierszy-linków z liniami Krawędź (realizacje na stronie usługi, „Czytaj dalej” we wpisie).
// Tytuł Brygadą podkreśla się przy najechaniu na cały wiersz; obok dopisek (tekst albo <Tag>).
//   <LinkList items={[{ href: "/realizacje/x", title: "Merkury Medica", aside: "przychodnia" }]} />

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type LinkListItem = { href: string; title: string; aside?: ReactNode };

const SIZE = {
  /** 28 px: wpisy */
  md: "text-[1.75rem] leading-[1.2]",
  /** 28 → 36 px: realizacje */
  lg: "text-[1.75rem] leading-[1.1] sm:text-[2.25rem]",
};

const LAYOUT = {
  /** tytuł + dopisek na końcu wiersza */
  end: "grid-cols-[minmax(0,1fr)_auto]",
  /** tytuł 7/12, dopisek 5/12; na telefonie pod spodem */
  split: "grid-cols-1 sm:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]",
};

export default function LinkList({
  items,
  size = "md",
  layout = "end",
}: {
  items: readonly LinkListItem[];
  size?: keyof typeof SIZE;
  layout?: keyof typeof LAYOUT;
}) {
  return (
    <ul className="border-t border-edge">
      {items.map((it) => (
        <li key={it.href} className="border-b border-edge">
          <Link
            href={it.href}
            className={cn(
              "group grid items-baseline gap-x-6 gap-y-2 py-7 text-moon no-underline",
              LAYOUT[layout],
            )}
          >
            <span
              className={cn(
                "font-display decoration-1 underline-offset-[0.15em] group-hover:underline",
                SIZE[size],
              )}
            >
              {it.title}
            </span>
            {typeof it.aside === "string" ? (
              <span className="text-small font-medium text-ash">{it.aside}</span>
            ) : (
              it.aside
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
