// O mnie: „Jak pracuję” — zasady w wierszach z liniami, tytuł po lewej, opis po prawej.

import { Container, Typography } from "@/components/ui";
import { ABOUT_PRINCIPLES } from "@/lib/o-mnie";

export default function AboutPrinciples() {
  return (
    <Container as="section" aria-labelledby="jak-title" className="pt-(--section)">
      <Typography id="jak-title" variant="h2" className="mb-12">
        {ABOUT_PRINCIPLES.title}
      </Typography>
      <ul className="border-t border-edge">
        {ABOUT_PRINCIPLES.items.map((p) => (
          <li
            key={p.title}
            className="grid grid-cols-12 gap-x-(--gutter) gap-y-3 border-b border-edge py-10"
          >
            <Typography variant="item" className="col-span-12 md:col-span-5">
              {p.title}
            </Typography>
            <Typography tone="muted" className="col-span-12 max-w-[52ch] md:col-span-6 md:col-start-7">
              {p.text}
            </Typography>
          </li>
        ))}
      </ul>
    </Container>
  );
}
