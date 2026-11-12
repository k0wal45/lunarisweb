// Realizacje: jedno źródło dla listy (/realizacje), studium przypadku (/realizacje/[slug]),
// sekcji „Wyniki” na stronie głównej (przez lib/home.ts) i odnośników na stronach usług.
// Kolejność w tablicy = kolejność na liście i „Następna realizacja”.
//
// Każdy blok studium (problem, solution, results, quote) jest opcjonalny: sekcja pojawia się,
// gdy blok ma treść. Nowy rodzaj sekcji = nowe pole tutaj + komponent w components/Works/.

import type { StaticImageData } from "next/image";

export type WorkCategory = "strony" | "identyfikacja" | "wydarzenia";

export const WORK_FILTERS: { value: WorkCategory | "all"; label: string }[] = [
  { value: "all", label: "Wszystkie" },
  { value: "strony", label: "Strony" },
  { value: "identyfikacja", label: "Identyfikacja" },
  { value: "wydarzenia", label: "Wydarzenia" },
];

export type Work = {
  slug: string;
  name: string;
  /** branża klienta; null = nieznana, nie wyświetla się */
  sector: string | null;
  scope: string;
  year: string | null;
  categories: WorkCategory[];
  /** miniatura na liście (desktop: wjeżdża przy najechaniu) i kadr na telefonie */
  thumb?: StaticImageData;
  /** jedno zdanie o efekcie, lead pod tytułem */
  lead?: string;
  technology?: string;
  liveUrl?: string;
  problem?: { lead: string; context?: string };
  solution?: { lead: string; decisions: string[] };
  /** wyniki zmierzone po publikacji, na telefonie */
  results?: { note?: string; stats: { value: string; label: string }[] };
  quote?: { text: string; author: string; sourceUrl?: string };
  /** Lighthouse (wydajność) do odnośników na stronach usług */
  lighthouse?: string;
};

// TODO: uzupełnić rok, zakres, teksty studium, wyniki i opinie (w projekcie oznaczone nawiasami).
export const WORKS: Work[] = [
  {
    slug: "merkury-medica",
    name: "Merkury Medica",
    sector: "przychodnia medyczna",
    scope: "strona internetowa",
    year: null,
    categories: ["strony"],
  },
  {
    slug: "bielik-summit-2025",
    name: "Bielik Summit",
    sector: "wydarzenie AI",
    scope: "strona wydarzenia",
    year: null,
    categories: ["strony", "wydarzenia"],
  },
  {
    slug: "stan-floty",
    name: "Stan Floty",
    sector: "wypożyczalnia",
    scope: "aplikacja internetowa",
    year: null,
    categories: ["strony"],
  },
  {
    slug: "oktech-autolaweta",
    name: "Oktech Autolaweta",
    sector: "pomoc drogowa",
    scope: "strona internetowa",
    year: null,
    categories: ["strony"],
  },
  {
    slug: "oktech-slask",
    name: "Oktech Śląsk",
    sector: null,
    scope: "identyfikacja wizualna",
    year: null,
    categories: ["identyfikacja"],
  },
  {
    slug: "ai-create-2024",
    name: "AI Create 2024",
    sector: "wydarzenie",
    scope: "strona wydarzenia",
    year: "2024",
    categories: ["strony", "wydarzenia"],
  },
  {
    slug: "lunaris-web",
    name: "Lunaris web",
    sector: "studio projektowe",
    scope: "identyfikacja i strona",
    year: "2026",
    categories: ["strony", "identyfikacja"],
  },
];

export const getWork = (slug: string) => WORKS.find((w) => w.slug === slug);

export const workHref = (slug: string) => `/realizacje/${slug}`;

/** następna realizacja na liście, po ostatniej wraca do pierwszej */
export function nextWork(slug: string) {
  const i = WORKS.findIndex((w) => w.slug === slug);
  return WORKS[(i + 1) % WORKS.length];
}

/** „1 realizacja”, „3 realizacje”, „5 realizacji” */
export function worksLabel(n: number) {
  const few = n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20);
  return `${n} ${n === 1 ? "realizacja" : few ? "realizacje" : "realizacji"}`;
}

/** teksty strony /realizacje */
export const WORKS_PAGE = {
  title: "Realizacje",
  lead: "Strony i identyfikacje dla firm usługowych oraz wydarzeń technologicznych. Przy każdej: problem, rozwiązanie i wynik w liczbach.",
  empty: "W tej kategorii nie ma jeszcze realizacji.",
  outro: "Nie widzisz swojej branży? Większość moich projektów to firmy usługowe, a dobra strona działa podobnie w każdej z nich.",
  outroLink: "Napisz, czego potrzebujesz",
  cta: "Masz projekt? Napisz albo umów rozmowę.",
} as const;

/** teksty studium przypadku /realizacje/[slug] */
export const WORK_PAGE = {
  facts: { sector: "Branża", scope: "Zakres", technology: "Technologia", year: "Rok" },
  live: "Zobacz stronę na żywo",
  problem: "Problem",
  solution: "Rozwiązanie",
  results: "Efekt",
  resultsLead: "Wyniki zmierzone po publikacji, na telefonie.",
  quoteSource: "Opinia w Google",
  next: "Następna realizacja",
  cta: "Chcesz podobną stronę dla swojej firmy?",
} as const;
