// Chip (design.md, sekcja 12: `.chip`): tarcza z obrysem Popiół, wybrany zalany Księżycem.
// Bez `href` to przycisk-filtr (`pressed` → aria-pressed), z `href` link-zakładka (`current` → aria-current).
//   <Chip pressed={on} onClick={…}>Strony</Chip>
//   <Chip href="/uslugi/strony-internetowe" current>Strony internetowe</Chip>

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const CHIP = cn(
  "inline-flex h-11 cursor-pointer items-center rounded-disc border border-ash bg-transparent px-[18px]",
  "text-ui font-medium whitespace-nowrap text-moon no-underline",
  "transition-colors duration-(--dur-micro) ease-terminator hover:border-moon",
  "aria-pressed:border-moon aria-pressed:bg-moon aria-pressed:text-night",
  "aria-[current=page]:border-moon aria-[current=page]:bg-moon aria-[current=page]:text-night",
);

type Props = { children: ReactNode; className?: string } & (
  | { href: string; current?: boolean; pressed?: never; onClick?: never }
  | { href?: never; current?: never; pressed: boolean; onClick: () => void }
);

export function Chip({ children, className, ...rest }: Props) {
  if (rest.href !== undefined) {
    return (
      <Link
        href={rest.href}
        aria-current={rest.current ? "page" : undefined}
        className={cn(CHIP, className)}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type="button"
      aria-pressed={rest.pressed}
      onClick={rest.onClick}
      className={cn(CHIP, className)}
    >
      {children}
    </button>
  );
}

/** grupa chipów z odstępem 8 px */
export function ChipGroup({
  children,
  className,
  label,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** nazwa grupy dla czytników ekranu */
  label: string;
  as?: "div" | "nav";
}) {
  return (
    <Tag
      role={Tag === "div" ? "group" : undefined}
      aria-label={label}
      className={cn("flex flex-wrap gap-2", className)}
    >
      {children}
    </Tag>
  );
}
