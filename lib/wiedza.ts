// Wiedza (blog): lista wpisów dla /wiedza i /wiedza/[slug]. Treść wpisu to komponent w content/wiedza/.
// Wpis bez treści (`Body` brak) nie jest listowany ani generowany. Kolejność: najnowszy pierwszy.

import type { ComponentType } from "react";
import SzybkoscStrony, { TOC as szybkoscToc } from "@/content/wiedza/jak-sprawdzic-czy-strona-jest-szybka";

import { POST_KINDS, type PostKind } from "@/lib/wiedza-kinds";

export { POST_KINDS, type PostKind };

export type Post = {
  slug: string;
  kind: PostKind;
  title: string;
  /** jedno zdanie na liście i w opisie meta */
  desc: string;
  /** lead pod tytułem wpisu */
  lead: string;
  /** ISO, np. "2026-11-12"; null = jeszcze bez daty */
  date: string | null;
  /** „6 min czytania” albo „eksperyment” */
  length: string;
  toc: { id: string; label: string }[];
  Body?: ComponentType;
};

// TODO: daty publikacji; treść wpisów „WordPress czy strona kodowana od zera?”, „Księżyc z tej strony”,
// „Fazy księżyca w 30 liniach TypeScriptu” i przeniesionych wpisów ze starego bloga.
const ALL: Post[] = [
  {
    slug: "jak-sprawdzic-czy-strona-jest-szybka",
    kind: "art",
    title: "Jak sprawdzić, czy Twoja strona jest szybka",
    desc: "Trzy liczby od Google, które mówią więcej niż „u mnie działa”. Sprawdzisz je w 5 minut.",
    lead: "Trzy liczby od Google mówią więcej niż „u mnie się ładuje”. Sprawdzisz je w 5 minut, bez instalowania czegokolwiek.",
    date: null,
    length: "6 min czytania",
    toc: szybkoscToc,
    Body: SzybkoscStrony,
  },
  {
    slug: "wordpress-czy-strona-kodowana-od-zera",
    kind: "art",
    title: "WordPress czy strona kodowana od zera?",
    desc: "Kiedy wybrać jedno, kiedy drugie i ile to kosztuje w utrzymaniu.",
    lead: "Kiedy wybrać jedno, kiedy drugie i ile to kosztuje w utrzymaniu.",
    date: null,
    length: "",
    toc: [],
  },
  {
    slug: "ksiezyc-z-tej-strony",
    kind: "lab",
    title: "Księżyc z tej strony",
    desc: "Jak powstał księżyc w nagłówku: rysowany w SVG, bez bibliotek, oświetlany kursorem.",
    lead: "Jak powstał księżyc w nagłówku: rysowany w SVG, bez bibliotek, oświetlany kursorem.",
    date: null,
    length: "eksperyment",
    toc: [],
  },
  {
    slug: "fazy-ksiezyca-w-typescripcie",
    kind: "lab",
    title: "Fazy księżyca w 30 liniach TypeScriptu",
    desc: "Dzisiejsza faza i ścieżka SVG dla dowolnego dnia, bez zewnętrznego API.",
    lead: "Dzisiejsza faza i ścieżka SVG dla dowolnego dnia, bez zewnętrznego API.",
    date: null,
    length: "eksperyment",
    toc: [],
  },
];

export const POSTS = ALL.filter((p) => p.Body);

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

/** teksty stron /wiedza i /wiedza/[slug] */
export const KNOWLEDGE_PAGE = {
  meta: {
    title: "Wiedza",
    description:
      "Teksty o stronach dla firm: szybkość, koszty i technologia bez żargonu. W dziale Lab eksperymenty z kodem.",
  },
  title: "Wiedza",
  lead: "Teksty o stronach dla firm: szybkość, koszty i technologia bez żargonu. W dziale Lab pokazuję eksperymenty z kodem.",
  cta: "Wolisz zapytać niż czytać?",
} as const;

export const POST_PAGE = {
  author: "Daniel Kowalski",
  toc: "W tym tekście",
  authorBio: "Projektuję i koduję strony w Lunaris web. Wynik Lighthouse pokazuję w każdej realizacji, także na tej stronie.",
  authorLink: { href: "/o-mnie", label: "Więcej o mnie" },
  related: "Czytaj dalej",
  all: { href: "/wiedza", label: "Wszystkie teksty" },
  cta: "Chcesz, żebym sprawdził Twoją stronę?",
} as const;

const DATE = new Intl.DateTimeFormat("pl-PL", { day: "numeric", month: "long", year: "numeric" });

/** „12 listopada 2026 · 6 min czytania”; brakujące części są pomijane */
export function postMeta(p: Post) {
  return [p.date && DATE.format(new Date(p.date)), p.length].filter(Boolean).join(" · ");
}
