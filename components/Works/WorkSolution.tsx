// Studium: „Rozwiązanie” — co zaprojektowałem i najważniejsze decyzje w liście z liniami.

import Split from "@/components/Split";
import { Typography } from "@/components/ui";
import { WORK_PAGE, type Work } from "@/lib/realizacje";

export default function WorkSolution({ solution }: { solution: Work["solution"] }) {
  if (!solution) return null;
  return (
    <Split id="rozwiazanie-title" title={WORK_PAGE.solution}>
      <Typography variant="lead" className="max-w-[52ch]">
        {solution.lead}
      </Typography>
      {solution.decisions.length > 0 && (
        <ul className="mt-10 border-t border-edge">
          {solution.decisions.map((d) => (
            <li key={d} className="border-b border-edge py-4">
              <Typography as="span">{d}</Typography>
            </li>
          ))}
        </ul>
      )}
    </Split>
  );
}
