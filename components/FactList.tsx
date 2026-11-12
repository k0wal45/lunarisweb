// Metryczka (design.md, sekcja 12: `.meta`): definicje w rzędzie, etykieta w Popiele nad wartością,
// linie Krawędź. 2 kolumny, na desktopie opcjonalnie 4. Pozycje bez wartości są pomijane.
//   <FactList items={[{ label: "Branża", value: "przychodnia" }]} columns={4} />

import { cn } from "@/lib/cn";
import { sierotki } from "@/lib/sierotki";
import type { Fact } from "@/lib/types";

export default function FactList({
  items,
  columns = 2,
  className,
}: {
  items: readonly Fact[];
  columns?: 2 | 4;
  className?: string;
}) {
  const facts = items.filter((f): f is { label: string; value: string } => Boolean(f.value));
  if (facts.length === 0) return null;
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-x-(--gutter) border-t border-edge",
        columns === 4 && "md:grid-cols-4",
        className,
      )}
    >
      {facts.map((f) => (
        <div key={f.label} className="border-b border-edge py-5">
          <dt className="text-small font-medium text-ash">{f.label}</dt>
          <dd className="m-0 mt-1 text-body tabular-nums">{sierotki(f.value)}</dd>
        </div>
      ))}
    </dl>
  );
}
