// Sekcja usługi w układzie split z listą pojęć: „Co dostajesz” i „Co wpływa na cenę”.
// Pusta lista = brak sekcji.

import Split, { TermList } from "@/components/Split";
import type { TermItem } from "@/lib/types";

export default function ServiceTerms({
  id,
  sectionId,
  title,
  note,
  items,
}: {
  id: string;
  /** kotwica sekcji, np. "ceny" dla linku z nagłówka */
  sectionId?: string;
  title: string;
  note?: string;
  items: readonly TermItem[];
}) {
  if (items.length === 0) return null;
  return (
    <Split id={id} sectionId={sectionId} title={title} aside={note}>
      <TermList items={items} />
    </Split>
  );
}
