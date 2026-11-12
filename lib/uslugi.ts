// Usługi: jedno źródło dla sekcji usług na stronie głównej (components/Services) i stron usług
// (/uslugi/[slug], components/ServicePage). Adresy i nazwy w nawigacji: lib/site.ts (SERVICES).
// Sekcje bez treści (puste tablice, null, brak klucza) nie są pokazywane.

import type { WorkCategory } from "@/lib/realizacje";
import { SERVICES } from "@/lib/site";
import type { FaqItem, TermItem } from "@/lib/types";

export type Service = {
  slug: string;
  /** nazwa w przełączniku usług i w okruszkach (z lib/site.ts) */
  label: string;
  href: string;

  /** karta na stronie głównej */
  card: {
    name: string;
    summary: string;
    scope: string[];
    forWhom: string;
  };

  /** kwota „od” netto; null = cena się nie wyświetla */
  price: string | null;

  /** strona usługi */
  title: string;
  lead: string;
  gets: TermItem[];
  /** zdanie pod nagłówkiem „Co dostajesz” */
  getsNote?: string;
  /** porównanie ścieżek; pierwsza kolumna = kryterium */
  paths?: { title: string; note: string; columns: string[]; rows: [string, string, string][] };
  priceFactors: TermItem[];
  /** zdanie pod nagłówkiem „Co wpływa na cenę” */
  priceNote?: string;
  /** kategoria realizacji pokazywanych na stronie usługi */
  works: WorkCategory;
  worksTitle: string;
  faqTitle: string;
  faq: FaqItem[];
  ctaTitle: string;
};

type ServiceContent = Omit<Service, "slug" | "label" | "href">;

// TODO: potwierdzić ceny, czasy etapów i opiekę miesięczną (w projekcie [CENA], [X dni], [X tygodnie]);
// uzupełnić cenę, czynniki ceny i pytania dla identyfikacji i front-endu (projekt ma układ tylko dla stron).
const CONTENT: Record<string, ServiceContent> = {
  "strony-internetowe": {
    card: {
      name: "Strony i aplikacje internetowe",
      summary: "Kod od zera w Next.js albo WordPress, gdy chcesz sam edytować treści.",
      scope: [
        "Projekt i kod w jednych rękach, bez pośredników",
        "Next.js albo WordPress: wybierasz, kto edytuje treści",
        "Aplikacje dla firmy: panele, rezerwacje, zarządzanie flotą",
        "Wynik Lighthouse i Core Web Vitals w raporcie po publikacji",
      ],
      forWhom: "Przychodnie, warsztaty, kancelarie i inne firmy usługowe.",
    },
    price: "2 500 zł",
    title: "Strony internetowe dla firm usługowych",
    lead: "Projektuję i koduję strony, które szybko się ładują, dobrze działają na telefonie i prowadzą do jednego celu: kontaktu z Tobą.",
    getsNote: "W każdej stronie, niezależnie od technologii.",
    gets: [
      { term: "Projekt", text: "Układ i wygląd każdej podstrony, najpierw jako klikalny prototyp." },
      { term: "Kod", text: "Wersja na telefon, tablet i komputer. Bez gotowego szablonu." },
      {
        term: "SEO techniczne",
        text: "Metadane i obrazy do udostępniania dla każdej podstrony, dane strukturalne firmy, przekierowania ze starych adresów.",
      },
      { term: "Szybkość", text: "Pomiar Lighthouse i Core Web Vitals przed publikacją. Wynik dostajesz na piśmie." },
      { term: "Dostępność", text: "Kontrast, obsługa klawiaturą i czytelne formularze według WCAG 2.2 AA." },
      { term: "Formalności", text: "Formularz z dwiema osobnymi zgodami i miejsce na politykę prywatności." },
      { term: "Start", text: "Publikacja pod Twoją domeną i krótka instrukcja obsługi." },
    ],
    paths: {
      title: "Dwie ścieżki",
      note: "Wybieramy razem na pierwszej rozmowie. Decyduje to, kto i jak często będzie zmieniał treści.",
      columns: ["Kryterium", "Strona kodowana od zera", "WordPress"],
      rows: [
        ["Technologia", "Next.js", "WordPress z własnym motywem"],
        ["Szybkość", "Najwyższa: strony generowane z góry", "Dobra, zależy od liczby wtyczek"],
        ["Edycja treści", "Zmiany robię ja w ramach opieki", "Sam, w panelu administracyjnym"],
        ["Utrzymanie", "Minimalne, bez aktualizacji wtyczek", "Regularne aktualizacje i kopie zapasowe"],
        ["Dla kogo", "Firmy, które rzadko zmieniają treść", "Firmy z aktualnościami lub blogiem"],
      ],
    },
    priceFactors: [
      { term: "Liczba podstron", text: "Każda podstrona to osobny projekt układu i treści." },
      { term: "Teksty i zdjęcia", text: "Mogę napisać teksty albo pomóc zorganizować sesję zdjęciową." },
      { term: "Integracje", text: "Rezerwacje, kalendarz, sklep, systemy rejestracji pacjentów." },
      { term: "Wersje językowe", text: "Każdy język to osobne treści, metadane i adresy." },
      { term: "Animacje", text: "Ruch tam, gdzie pomaga treści, a nie wszędzie." },
    ],
    works: "strony",
    worksTitle: "Strony, które zrobiłem",
    faqTitle: "Pytania o strony",
    faq: [
      {
        q: "Mam już stronę. Czy stracę pozycje w Google?",
        a: "Ustawiam przekierowania 301 ze wszystkich starych adresów na nowe, więc Google i klienci trafiają we właściwe miejsce.",
      },
      {
        q: "Czy sam będę mógł edytować treści?",
        a: "Tak, jeśli wybierzesz WordPress. Przy stronie kodowanej od zera zmiany robię w ramach opieki.",
      },
      {
        q: "Kto jest właścicielem strony?",
        a: "Ty. Domena i hosting są na Twoim koncie, a umowa przenosi prawa autorskie do projektu.",
      },
    ],
    ctaTitle: "Porozmawiajmy o Twojej stronie.",
  },

  "identyfikacja-wizualna": {
    card: {
      name: "Identyfikacja wizualna",
      summary: "Logo, kolory i kroje, które działają tak samo na stronie, fakturze i w social mediach.",
      scope: [
        "Logo w wersjach na ciemne i jasne tło",
        "Paleta kolorów i kroje pisma z zasadami użycia",
        "Wizytówka, szablony postów i dokumentów",
        "Banery reklamowe i inne formy reklamy",
      ],
      forWhom: "Firmy, które zaczynają albo porządkują swój wizerunek.",
    },
    price: null,
    title: "Identyfikacja wizualna dla firm usługowych",
    lead: "Logo, kolory i kroje, które działają tak samo na stronie, fakturze i w social mediach.",
    gets: [
      { term: "Logo", text: "Wersje na ciemne i jasne tło." },
      { term: "Kolory i kroje", text: "Paleta kolorów i kroje pisma z zasadami użycia." },
      { term: "Materiały", text: "Wizytówka, szablony postów i dokumentów." },
      { term: "Reklama", text: "Banery reklamowe i inne formy reklamy." },
    ],
    priceFactors: [],
    works: "identyfikacja",
    worksTitle: "Identyfikacje, które zrobiłem",
    faqTitle: "Pytania o identyfikację",
    faq: [],
    ctaTitle: "Porozmawiajmy o Twojej identyfikacji.",
  },

  "front-end-development": {
    card: {
      name: "Front-end development",
      summary: "Zróbmy razem aplikacje lub zatrudnij mnie jako pracownika w twojej firmie",
      scope: [
        "Next.js, React i TypeScript",
        "Praca w zespole jak i pojedynczo",
        "Core Web Vitals sprawdzone przed oddaniem",
        "Opieka techniczna po publikacji",
      ],
      forWhom: "Agencje i projektanci, którzy potrzebują kodu z Figmy.",
    },
    price: null,
    title: "Front-end development dla agencji i zespołów",
    lead: "Kod z Figmy w Next.js, React i TypeScript. Razem z Twoim zespołem albo samodzielnie.",
    gets: [
      { term: "Technologia", text: "Next.js, React i TypeScript." },
      { term: "Współpraca", text: "Praca w zespole jak i pojedynczo." },
      { term: "Szybkość", text: "Core Web Vitals sprawdzone przed oddaniem." },
      { term: "Opieka", text: "Opieka techniczna po publikacji." },
    ],
    priceFactors: [],
    works: "strony",
    worksTitle: "Projekty, które zakodowałem",
    faqTitle: "Pytania o współpracę",
    faq: [],
    ctaTitle: "Porozmawiajmy o Twoim projekcie.",
  },
};

/** usługi w kolejności z nawigacji */
export const SERVICE_LIST: Service[] = SERVICES.map((s) => {
  const slug = s.href.split("/").pop()!;
  return { slug, label: s.label, href: s.href, ...CONTENT[slug] };
});

export const getService = (slug: string) => SERVICE_LIST.find((s) => s.slug === slug);

/** cena „od” strony internetowej: Stats na stronie głównej */
export const WEBSITE_PRICE = CONTENT["strony-internetowe"].price;

/** wspólne teksty stron usług */
export const SERVICE_PAGE = {
  getsTitle: "Co dostajesz",
  priceTitle: "Co wpływa na cenę",
  priceLabel: "Cena",
  priceTerms: "netto, faktura VAT",
  cta: "Umów rozmowę",
  allWorks: "Wszystkie realizacje",
} as const;

/** sekcja usług na stronie głównej */
export const SERVICES_SECTION = {
  title: "Projekt i kod w jednych rękach.",
  lead: "Robię trzy rzeczy i robię je sam. Rozmawiasz z osobą, która projektuje i koduje Twój projekt.",
  more: "Zobacz zakres usługi",
} as const;
