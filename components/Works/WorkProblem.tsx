// Studium: „Problem” — z czym przyszedł klient i kontekst. Bez bloku `problem` sekcja się nie pokazuje.

import Split from "@/components/Split";
import { Typography } from "@/components/ui";
import { WORK_PAGE, type Work } from "@/lib/realizacje";

export default function WorkProblem({ problem }: { problem: Work["problem"] }) {
  if (!problem) return null;
  return (
    <Split id="problem-title" title={WORK_PAGE.problem}>
      <Typography variant="lead" className="max-w-[52ch]">
        {problem.lead}
      </Typography>
      {problem.context && (
        <Typography tone="muted" className="mt-6 max-w-[58ch]">
          {problem.context}
        </Typography>
      )}
    </Split>
  );
}
