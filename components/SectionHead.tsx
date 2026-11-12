// Nagłówek sekcji (design.md, sekcja 12: `.sec-head`): h2 po lewej, opis albo przycisk po prawej,
// wyrównane do dołu; na telefonie jedno pod drugim.
//   <SectionHead id="ref-title" title="Strony, które zrobiłem">
//     <Button variant="secondary" href="/realizacje">Wszystkie realizacje</Button>
//   </SectionHead>

import type { ReactNode } from "react";
import { Typography } from "@/components/ui";
import { cn } from "@/lib/cn";

type Props = {
  id: string;
  title: string;
  /** opis w Popiele (string) albo przycisk */
  children?: ReactNode;
  className?: string;
};

export default function SectionHead({ id, title, children, className }: Props) {
  return (
    <div className={cn("mb-12 flex flex-wrap items-end justify-between gap-6", className)}>
      <Typography id={id} variant="h2">
        {title}
      </Typography>
      {typeof children === "string" ? (
        <Typography tone="muted" className="max-w-[40ch]">
          {children}
        </Typography>
      ) : (
        children
      )}
    </div>
  );
}
