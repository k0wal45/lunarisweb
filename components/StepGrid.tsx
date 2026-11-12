// Etapy w kolumnach z liniami Krawędź (etapy na stronie usługi, „Co będzie dalej” w kontakcie).
// Nad tytułem znacznik: glif fazy albo duża cyfra.
//   <StepGrid items={steps} columns={4} numbered marker={(i) => <PhaseGlyph … />} />

import type { ReactNode } from "react";
import { Typography } from "@/components/ui";
import { cn } from "@/lib/cn";

const COLS = {
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 md:grid-cols-4",
};

export default function StepGrid({
  items,
  columns,
  marker,
  numbered = false,
}: {
  items: readonly { title: string; text: string }[];
  columns: keyof typeof COLS;
  /** znacznik nad tytułem; domyślnie numer etapu Brygadą */
  marker?: (i: number) => ReactNode;
  /** numer przed tytułem (gdy znacznikiem jest glif) */
  numbered?: boolean;
}) {
  return (
    <ol className={cn("grid grid-cols-1 gap-x-(--gutter) border-t border-edge", COLS[columns])}>
      {items.map((s, i) => (
        <li key={s.title} className="border-b border-edge py-7">
          {marker ? (
            marker(i)
          ) : (
            <span className="font-display text-[2.25rem] leading-none tabular-nums">{i + 1}</span>
          )}
          <Typography as="h3" variant="h3" className={cn("font-normal", marker ? "mt-5" : "mt-4")}>
            {numbered && (
              <>
                <span className="tabular-nums">{i + 1}</span>
                {"  "}
              </>
            )}
            {s.title}
          </Typography>
          <Typography variant="ui" tone="muted" className="mt-2 max-w-[32ch] font-normal">
            {s.text}
          </Typography>
        </li>
      ))}
    </ol>
  );
}
