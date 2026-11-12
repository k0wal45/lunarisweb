// Treść strony Kontakt (/kontakt). Dane firmy, mail i telefon: lib/site.ts.

import { CALL_LENGTH, REPLY_TIME } from "@/lib/site";
import type { TextItem } from "@/lib/types";

export const CONTACT_PAGE = {
  meta: {
    title: "Kontakt — Lunaris web",
    description: `Napisz albo umów rozmowę. Odpowiadam sam, zwykle w ciągu ${REPLY_TIME}.`,
  },
  crumb: "Kontakt",
  title: "Masz projekt? Napisz albo umów rozmowę.",
  lead: `Odpowiadam sam, zwykle w ciągu ${REPLY_TIME}. Przyjmuję 1–2 nowe projekty miesięcznie.`,
  photoAlt: "Daniel Kowalski w marynarce w kratę, siedzący, na szarym tle",
  companyLabel: "Dane firmy",
} as const;

export const CONTACT_NEXT: { title: string; steps: TextItem[] } = {
  title: "Co będzie dalej",
  steps: [
    { title: "Odpiszę", text: `W ciągu ${REPLY_TIME}, z pytaniami albo propozycją terminu rozmowy.` },
    { title: "Porozmawiamy", text: `Online, około ${CALL_LENGTH}: cel, zakres, termin i budżet.` },
    { title: "Dostaniesz wycenę", text: "Z jedną ceną, zakresem i terminem. Bez zobowiązań." },
  ],
};
