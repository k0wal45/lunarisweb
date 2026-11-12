// Zgoda na pliki cookies (art. 399 Prawa komunikacji elektronicznej, art. 7 RODO).
// Jedyna kategoria wymagająca zgody to statystyki (Google Analytics). Wybór zapisujemy
// w localStorage — to zapis niezbędny do zapamiętania decyzji, więc nie wymaga zgody.
// Po CONSENT_MAX_AGE albo zmianie CONSENT_VERSION baner pyta ponownie.
//
// Komponenty czytają stan przez useConsent(); zapis przez setConsent() powiadamia wszystkich
// słuchaczy (baner, Google Analytics, przycisk „Ustawienia cookies” w stopce).

import { useSyncExternalStore } from "react";

/** teksty baneru; szczegóły w polityce prywatności (lib/prywatnosc.ts) */
export const COOKIE_BANNER = {
  title: "Pliki cookies",
  text:
    "Strona zapisuje w przeglądarce tylko to, co niezbędne do działania. Za Twoją zgodą włączę też Google Analytics: zapisuje pliki cookies, żeby liczyć odwiedziny i sprawdzać, które treści są przydatne. Dane trafiają do Google, także poza Europejski Obszar Gospodarczy. Zgodę możesz w każdej chwili wycofać w „Ustawieniach cookies” w stopce.",
  policyLink: "Szczegóły w polityce prywatności.",
  accept: "Zgadzam się",
  reject: "Nie zgadzam się",
  statusOn: "Obecnie: statystyki włączone.",
  statusOff: "Obecnie: statystyki wyłączone.",
  settings: "Ustawienia cookies",
} as const;


/** zmień, gdy dojdzie nowe narzędzie albo cel: wszyscy zostaną zapytani ponownie */
export const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE = 365 * 24 * 60 * 60 * 1000; // 12 miesięcy
const KEY = "lw-consent";
const OPEN_EVENT = "lw-consent-open";
const CHANGE_EVENT = "lw-consent-change";

export type ConsentChoice = { analytics: boolean };
/** "pending" = brak decyzji (pokaż baner); "unknown" = render na serwerze */
export type ConsentState = ConsentChoice | "pending" | "unknown";

type Stored = ConsentChoice & { v: number; at: number };

let cached: { raw: string | null; state: ConsentState } | null = null;

function read(): ConsentState {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(KEY);
  } catch {
    return "pending";
  }
  if (cached && cached.raw === raw) return cached.state;
  let state: ConsentState = "pending";
  try {
    const s = raw ? (JSON.parse(raw) as Stored) : null;
    if (s && s.v === CONSENT_VERSION && Date.now() - s.at < CONSENT_MAX_AGE) {
      state = { analytics: s.analytics === true };
    }
  } catch {}
  cached = { raw, state };
  return state;
}

function subscribe(cb: () => void) {
  window.addEventListener(CHANGE_EVENT, cb);
  window.addEventListener("storage", cb); // decyzja z innej karty
  return () => {
    window.removeEventListener(CHANGE_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

export function useConsent(): ConsentState {
  return useSyncExternalStore(subscribe, read, () => "unknown");
}

export function setConsent(choice: ConsentChoice) {
  const stored: Stored = { ...choice, v: CONSENT_VERSION, at: Date.now() };
  try {
    localStorage.setItem(KEY, JSON.stringify(stored));
  } catch {}
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** otwiera baner ponownie (link „Ustawienia cookies” w stopce i w polityce prywatności) */
export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onConsentOpen(cb: () => void) {
  window.addEventListener(OPEN_EVENT, cb);
  return () => window.removeEventListener(OPEN_EVENT, cb);
}
