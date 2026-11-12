// Proces „Od nowiu do pełni”: cztery etapy współpracy. Jedno źródło dla sekcji procesu na stronie głównej
// (components/Process) i etapów na stronach usług (components/ServicePage/ServiceProcess).

// faza, przy której oświetlona jest dana część tarczy (0–1): odwrotność illumination z lib/moon
const lit = (part: number) => Math.acos(1 - 2 * part) / (2 * Math.PI);

export type ProcessStep = {
  title: string;
  /** opis na stronie głównej */
  text: string;
  /** krótki opis na stronach usług */
  short: string;
  /** faza księżyca: 0 nów, 0,5 pełnia */
  fraction: number;
  /** nazwa fazy w podpisie dużego księżyca */
  phase: string;
};

export const PROCESS = {
  title: "Od nowiu do pełni",
  lead: "Cztery etapy, w których strona nabiera światła. Na każdym wiesz, co się dzieje i co będzie dalej.",
  autoplayInterval: 5000,
} as const;

// TODO: potwierdzić terminy i zakres etapów (wzorzec sprzedażowy 7: tylko sprawdzalne obietnice).
export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Rozmowa i wycena",
    text: "Rozmawiamy o firmie, celu strony i budżecie. Po rozmowie wysyłam wycenę z zakresem i terminem.",
    short: "Cel, zakres, budżet. Wycena z jedną ceną i terminem.",
    fraction: lit(0.25),
    phase: "sierp przybywający",
  },
  {
    title: "Projekt i prototyp",
    text: "Projektuję układ i wygląd. Klikasz w prototyp i zgłaszasz poprawki, zanim powstanie kod.",
    short: "Klikalny prototyp i dwie rundy poprawek.",
    fraction: lit(0.5),
    phase: "pierwsza kwadra",
  },
  {
    title: "Wdrożenie i publikacja",
    text: "Koduję stronę, podpinam domenę i analitykę. Przed publikacją sprawdzam Lighthouse i dostępność.",
    short: "Kod, testy szybkości i dostępności, start.",
    fraction: lit(0.75),
    phase: "garb przybywający",
  },
  {
    title: "Opieka i rozwój",
    text: "Po publikacji dbam o aktualizacje i kopie zapasowe. Stronę rozwijamy razem z firmą.",
    short: "Aktualizacje, kopie zapasowe, zmiany treści.",
    fraction: lit(1),
    phase: "pełnia",
  },
];
