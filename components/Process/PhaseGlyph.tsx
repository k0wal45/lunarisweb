// Glif fazy 44 px (design.md, sekcja 11): obrys tarczy w Popiele + oświetlona część.
// Używany w sekcji procesu na stronie głównej i w etapach na stronach usług.

import { litShape, sunForPhase } from "@/lib/moon";
import { cn } from "@/lib/cn";

export default function PhaseGlyph({
  fraction,
  active = true,
}: {
  /** faza: 0 nów, 0,5 pełnia */
  fraction: number;
  /** nieaktywny etap: oświetlona część w Popiele */
  active?: boolean;
}) {
  const { d, angle } = litShape(sunForPhase(fraction));
  return (
    <svg viewBox="0 0 100 100" className="size-11 shrink-0" aria-hidden="true" focusable="false">
      <path
        d={d}
        transform={`rotate(${angle.toFixed(1)} 50 50)`}
        className={cn(
          "transition-[fill] duration-(--dur-phase) ease-terminator",
          active ? "fill-moon" : "fill-ash",
        )}
      />
      <circle cx="50" cy="50" r="48" fill="none" strokeWidth="4" className="stroke-ash" />
    </svg>
  );
}
