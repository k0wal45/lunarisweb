// „Od nowiu do pełni” na stronie usługi: cztery etapy z glifami faz (dane: lib/proces.ts,
// te same co w sekcji procesu na stronie głównej).

import PhaseGlyph from "@/components/Process/PhaseGlyph";
import StepGrid from "@/components/StepGrid";
import { Container, Typography } from "@/components/ui";
import { PROCESS, PROCESS_STEPS } from "@/lib/proces";

const STEPS = PROCESS_STEPS.map((s) => ({ title: s.title, text: s.short }));

export default function ServiceProcess() {
  return (
    <Container as="section" aria-labelledby="proces-title" className="pt-(--section)">
      <Typography id="proces-title" variant="h2" className="mb-12">
        {PROCESS.title}
      </Typography>
      <StepGrid
        items={STEPS}
        columns={4}
        numbered
        marker={(i) => <PhaseGlyph fraction={PROCESS_STEPS[i].fraction} />}
      />
    </Container>
  );
}
