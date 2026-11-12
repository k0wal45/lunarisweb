// Studium: „Efekt” — duże liczby zmierzone po publikacji (`.nums`).

import Split from "@/components/Split";
import { Typography } from "@/components/ui";
import { WORK_PAGE, type Work } from "@/lib/realizacje";

export default function WorkResults({ results }: { results: Work["results"] }) {
  if (!results || results.stats.length === 0) return null;
  return (
    <Split
      id="efekt-title"
      title={WORK_PAGE.results}
      after={
        <dl className="mt-12 grid grid-cols-1 gap-x-(--gutter) border-t border-edge sm:grid-cols-3">
          {results.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse border-b border-edge py-8">
              <dt className="text-small font-medium text-ash">{s.label}</dt>
              <dd className="m-0 font-display text-[clamp(3rem,2rem+3vw,4.5rem)] leading-none tabular-nums">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      }
    >
      <Typography variant="lead" className="max-w-[52ch]">
        {results.note ? `${WORK_PAGE.resultsLead} ${results.note}` : WORK_PAGE.resultsLead}
      </Typography>
    </Split>
  );
}
