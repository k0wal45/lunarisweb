// Treść strony głównej (app/page.tsx). Usługi: lib/uslugi.ts, proces: lib/proces.ts,
// realizacje w sekcji „Wyniki”: wybrane z lib/realizacje.ts po slugu.

import { WEBSITE_PRICE } from "@/lib/uslugi";

export const HERO = {
  title: "Pokażmy Twoją firmę w pełni.",
  lead: "Projektuję i koduję strony oraz identyfikacje dla firm.",
  cta: { href: "/kontakt", label: "Umów rozmowę" },
  more: { href: "/realizacje", label: "Zobacz realizacje" },
} as const;

/** pasek liczb pod hero */
export const STATS: { value: string; label: string }[] = [
  { value: "5.0", label: "średnia ocena w Google" },
  ...(WEBSITE_PRICE ? [{ value: `od ${WEBSITE_PRICE}`, label: "strona już od" }] : []),
  { value: "48h", label: "więcej nie będziesz czekał na odpowiedź" },
];

/** sekcja „Wyniki, nie obietnice”: realizacja (slug z lib/realizacje.ts) + rodzaj i liczba */
export const RESULTS = {
  title: "Wyniki, nie obietnice",
  more: { href: "/realizacje", label: "Zobacz realizacje" },
  items: [
    { slug: "bielik-summit-2025", tag: "wydarzenie AI", stat: "450+", statLabel: "uczestników" },
    { slug: "stan-floty", tag: "aplikacja internetowa", statLabel: "aplikacja do zarządzania wypożyczalnią" },
    { slug: "oktech-slask", tag: "identyfikacja wizualna", stat: "1", statLabel: "styl w całej firmie" },
  ] as { slug: string; tag: string; stat?: string; statLabel: string }[],
};

// TODO: uzupełnić FACTS — wiersze 2 i 3 są kopią pierwszego
export const ABOUT_HOME = {
  title: "Rozmawiasz z osobą, która robi pracę.",
  text: "Nazywam się Daniel Kowalski. Projektuję i koduję sam, więc od pierwszej rozmowy do publikacji masz jedną osobę i jeden numer telefonu.",
  more: "Mam komercyjne doświadczenie jako front-end developer i studiuję informatykę na Politechnice Śląskiej. Dlatego biorę mniej projektów naraz i każdy prowadzę do końca.",
  facts: [
    { label: "Projekt i kod", value: "w jednych rękach" },
    { label: "Projekt i kod", value: "w jednych rękach" },
    { label: "Projekt i kod", value: "w jednych rękach" },
  ],
  link: { href: "/o-mnie", label: "Więcej o mnie" },
};
