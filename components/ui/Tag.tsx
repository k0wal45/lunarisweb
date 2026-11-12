// Etykieta (design.md, sekcja 12: `.tag`): mała tarcza z obrysem Krawędź, tekst Popiół.
//   <Tag>Artykuł</Tag>   <Tag as="li">Next.js</Tag>

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Tag({
  children,
  className,
  as: El = "span",
}: {
  children: ReactNode;
  className?: string;
  as?: "span" | "li";
}) {
  return (
    <El
      className={cn(
        "inline-flex h-7 w-fit items-center rounded-disc border border-edge px-3 text-small font-medium whitespace-nowrap text-ash",
        className,
      )}
    >
      {children}
    </El>
  );
}
