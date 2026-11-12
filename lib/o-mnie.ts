// Treść strony O mnie (/o-mnie). Pozycje z wartością `null` nie są pokazywane,
// żeby na stronie nie było nawiasów zastępczych z projektu.

import type { Fact, TextItem } from "@/lib/types";

export const ABOUT_PAGE = {
  meta: {
    title: "O mnie",
    description:
      "Daniel Kowalski: projektuję i koduję strony oraz identyfikacje dla firm usługowych. Jedna osoba od rozmowy do publikacji.",
  },
  crumb: "O mnie",
  title: "Jedna osoba od rozmowy do publikacji",
} as const;

export const ABOUT_INTRO = {
  lead: "Nazywam się Daniel Kowalski i prowadzę Lunaris web. Projektuję i koduję strony oraz identyfikacje dla firm usługowych ze Śląska i całej Polski.",
  text: "Mam komercyjne doświadczenie jako front-end developer, a informatykę studiuję na Politechnice Śląskiej. Nie ma u mnie handlowca ani podwykonawców: z kim rozmawiasz, ten robi pracę.",
  photoAlt: "Daniel Kowalski siedzący na wysokim stołku, w białej koszuli, w bocznym świetle",
  // TODO: uzupełnić wartości `null` (w projekcie [rok startu], [X] stron).
  facts: [
    { label: "Miejsce", value: "Katowice, Śląsk" },
    { label: "Projekty", value: "1–2 nowe miesięcznie" },
    { label: "Od", value: null },
    { label: "Realizacje", value: null },
  ] satisfies Fact[],
};

export const ABOUT_PRINCIPLES: { title: string; items: TextItem[] } = {
  title: "Jak pracuję",
  items: [
    {
      title: "Projekt i kod w jednych rękach",
      text: "Nic nie gubi się między projektantem a programistą, bo to ta sama osoba. Poprawka w projekcie to od razu poprawka w kodzie.",
    },
    {
      title: "Liczby zamiast przymiotników",
      text: "Nie piszę „szybka strona”, tylko pokazuję wynik Lighthouse i Core Web Vitals. W każdej realizacji, także na tej stronie.",
    },
    {
      title: "Mniej projektów, każdy do końca",
      text: "Przyjmuję 1–2 nowe projekty miesięcznie. Dzięki temu odpisuję szybko i nie przesuwam terminów.",
    },
  ],
};

export const ABOUT_TOOLS = {
  title: "Narzędzia",
  lead: "Dobieram technologię do tego, kto będzie potem pracował ze stroną, a nie do mody.",
  photoAlt: "Portret Daniela Kowalskiego z założonymi rękami, w białej koszuli",
  tools: ["Next.js", "React", "TypeScript", "WordPress", "Figma", "GSAP", "WebGL"],
  timelineTitle: "Po drodze",
  // TODO: uzupełnić lata (w projekcie [rok]).
  timeline: [
    { year: null, text: "Pierwsza strona dla klienta" },
    { year: null, text: "Start Lunaris web" },
    { year: "2024", text: "Strona wydarzenia AI Create 2024" },
    { year: null, text: "Strona wydarzenia Bielik Summit" },
    { year: "2026", text: "Nowa identyfikacja i strona Lunaris web" },
  ] as { year: string | null; text: string }[],
};
