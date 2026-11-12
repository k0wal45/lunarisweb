// Pasek liczb pod hero: liczba Brygadą + opis w Popiele. Dane: lib/home.ts (STATS).

import { Container, Typography } from "@/components/ui";
import { STATS } from "@/lib/home";

export default function Stats() {
  return (
    <Container
      as="section"
      aria-label="W liczbach"
      className="my-7 flex flex-wrap justify-start gap-8 border-y border-y-edge py-8 sm:justify-around"
    >
      {STATS.map((s) => (
        <div key={s.label} className="flex items-end gap-4">
          <Typography as="p" variant="stat">
            {s.value}
          </Typography>
          <Typography as="p" variant="body" tone="muted">
            {s.label}
          </Typography>
        </div>
      ))}
    </Container>
  );
}
