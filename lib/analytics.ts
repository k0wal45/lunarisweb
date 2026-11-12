// Google Analytics 4: identyfikator i zdarzenia. Skrypt ładuje components/Analytics/GoogleAnalytics
// dopiero po zgodzie (lib/consent.ts); bez zgody track() nic nie robi.
//
// Zdarzenia (w GA4 oznacz `generate_lead` jako kluczowe zdarzenie / konwersję):
//   generate_lead  — wysłany formularz kontaktowy (project_type, budget)
//   contact_click  — kliknięcie maila albo telefonu (method: email | phone, link_location)
//   cta_click      — kliknięcie linku do /kontakt (link_text, link_location)
// Odsłony, przewijanie, kliknięcia wychodzące i pobrania plików zbiera „Pomiar zaawansowany” GA4
// (włączony domyślnie w ustawieniach strumienia danych); zmiany adresu w nawigacji Next.js
// liczą się jako odsłony dzięki opcji „zmiany strony na podstawie historii przeglądania”.

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** GA4 zapisuje dwa pliki: _ga i _ga_<ID bez „G-”> (po 2 lata) */
export const GA_COOKIES = GA_ID ? ["_ga", `_ga_${GA_ID.replace(/^G-/, "")}`] : [];

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

type EventName = "generate_lead" | "contact_click" | "cta_click";

export function track(name: EventName, params: Record<string, string | number | undefined> = {}) {
  window.gtag?.("event", name, params);
}
