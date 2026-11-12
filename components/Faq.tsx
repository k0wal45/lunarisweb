// Pytania i odpowiedzi (design.md, sekcja 12: `.row`): <details> bez JS, pytanie Brygadą,
// tarcza z plusem obraca się do krzyżyka po rozwinięciu.

import { PlusDisc, Typography } from "@/components/ui";
import type { FaqItem } from "@/lib/types";

export default function Faq({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="border-t border-edge">
      {items.map((it) => (
        <details key={it.q} className="group/row border-b border-edge">
          <summary className="flex cursor-pointer list-none items-center gap-6 py-7 [&::-webkit-details-marker]:hidden">
            <Typography as="span" variant="h3" className="flex-1">
              {it.q}
            </Typography>
            <PlusDisc />
          </summary>
          <Typography tone="muted" className="max-w-[60ch] pr-16 pb-7">
            {it.a}
          </Typography>
        </details>
      ))}
    </div>
  );
}
