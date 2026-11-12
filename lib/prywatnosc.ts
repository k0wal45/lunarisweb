// Treść polityki prywatności (/polityka-prywatnosci) i baneru cookies.
// Podstawy: RODO (art. 13 — obowiązek informacyjny), Prawo komunikacji elektronicznej
// (art. 399 — pliki cookies, art. 398 — informacja handlowa e-mailem).
//
// TODO przed publikacją:
// - prawdziwe dane firmy w lib/site.ts (nazwa, adres, NIP, REGON),
// - HOSTING i MAIL_PROVIDER poniżej (nazwa dostawcy i kraj),
// - w Google Analytics: Administracja → Przechowywanie danych → 14 miesięcy,
//   Google Signals wyłączone, „Udostępnianie danych” odznaczone (zgodnie z treścią poniżej),
// - EFFECTIVE_DATE = dzień publikacji; treść najlepiej przejrzeć z prawnikiem.

import { GA_ID } from "@/lib/analytics";
import { COMPANY, MAIL, PHONE } from "@/lib/site";

export const EFFECTIVE_DATE = "12 listopada 2026";

/** null = opis ogólny („dostawca hostingu”) */
const HOSTING: string | null = null;
const MAIL_PROVIDER: string | null = null;

const HAS_GA = Boolean(GA_ID);
const HAS_PLAUSIBLE = Boolean(process.env.NEXT_PUBLIC_PLAUSIBLE_SRC);

export type PolicyTable = { columns: readonly string[]; rows: readonly [string, ...string[]][] };
export type PolicySection = {
  id: string;
  title: string;
  body?: readonly string[];
  list?: readonly string[];
  table?: PolicyTable;
  after?: readonly string[];
  /** przycisk „Ustawienia cookies” pod sekcją */
  settings?: boolean;
};

const hosting = HOSTING ? `hosting strony (${HOSTING})` : "dostawca hostingu strony";
const mailbox = MAIL_PROVIDER ? `skrzynka e-mail (${MAIL_PROVIDER})` : "dostawca skrzynki e-mail";

const COOKIE_ROWS: [string, ...string[]][] = [
  [
    "lw-consent",
    "Lunaris web",
    "Zapamiętuje Twój wybór w banerze cookies (pamięć przeglądarki).",
    "12 miesięcy",
    "Niezbędny",
  ],
  [
    "Cloudflare Turnstile",
    "Cloudflare",
    "Tylko na stronie Kontakt: sprawdza, czy formularz wysyła człowiek, a nie bot.",
    "Czas wizyty",
    "Niezbędny",
  ],
  ...(HAS_GA
    ? ([
        ["_ga", "Google", "Rozróżnia odwiedzających (losowy identyfikator).", "2 lata", "Statystyczny, za zgodą"],
        ["_ga_*", "Google", "Zapamiętuje stan bieżącej wizyty.", "2 lata", "Statystyczny, za zgodą"],
      ] as [string, ...string[]][])
    : []),
];

export const PRIVACY_PAGE = {
  meta: {
    title: "Polityka prywatności",
    description:
      "Kto przetwarza Twoje dane na lunarisweb.pl, w jakim celu i jak długo, jakich plików cookies używa strona i jakie masz prawa.",
  },
  title: "Polityka prywatności",
  lead: `Obowiązuje od ${EFFECTIVE_DATE}. Piszę wprost: jakie dane zbieram, po co, komu je przekazuję i jak długo je trzymam.`,
  sections: [
    {
      id: "administrator",
      title: "Administrator danych",
      body: [
        `Administratorem Twoich danych osobowych jest ${COMPANY.name}, ${COMPANY.address}, NIP ${COMPANY.nip}, REGON ${COMPANY.regon} (dalej „ja”).`,
        `We wszystkich sprawach dotyczących danych napisz na ${MAIL} albo zadzwoń: ${PHONE.label}. Nie wyznaczyłem inspektora ochrony danych, bo przy tej skali działalności nie jest to wymagane.`,
      ],
    },
    {
      id: "cele",
      title: "Jakie dane, w jakim celu i jak długo",
      table: {
        columns: ["Cel", "Dane", "Podstawa prawna", "Jak długo"],
        rows: [
          [
            "Odpowiedź na zapytanie z formularza, maila lub telefonu i przygotowanie oferty",
            "Imię, e-mail, telefon (opcjonalnie), rodzaj projektu, budżet, treść wiadomości",
            "Art. 6 ust. 1 lit. b RODO (działania przed zawarciem umowy) i lit. f (prawnie uzasadniony interes: odpowiadanie na korespondencję)",
            "Do końca rozmów, a gdy nie dojdzie do współpracy — maksymalnie 12 miesięcy od ostatniego kontaktu",
          ],
          [
            "Realizacja umowy, jeśli zostaniesz klientem",
            "Dane kontaktowe i dane potrzebne do umowy",
            "Art. 6 ust. 1 lit. b RODO",
            "Przez czas umowy, potem do przedawnienia roszczeń (zwykle 6 lat)",
          ],
          [
            "Faktury i rozliczenia",
            "Dane z faktur",
            "Art. 6 ust. 1 lit. c RODO (obowiązki podatkowe)",
            "5 lat od końca roku, w którym minął termin płatności podatku",
          ],
          [
            "Wysyłka maili z nowymi tekstami z działu Wiedza",
            "Adres e-mail",
            "Art. 6 ust. 1 lit. a RODO (zgoda) i art. 398 Prawa komunikacji elektronicznej",
            "Do wycofania zgody",
          ],
          [
            "Ochrona formularza przed spamem i bezpieczeństwo strony",
            "Adres IP, informacje o przeglądarce, logi serwera",
            "Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes: bezpieczeństwo)",
            "Logi serwera — do 30 dni",
          ],
          ...(HAS_GA
            ? ([
                [
                  "Statystyki odwiedzin (Google Analytics)",
                  "Identyfikator z plików cookies, odwiedzone strony, przybliżona lokalizacja (kraj, miasto), urządzenie, źródło wejścia",
                  "Art. 6 ust. 1 lit. a RODO i art. 399 Prawa komunikacji elektronicznej (zgoda)",
                  "14 miesięcy, krócej po wycofaniu zgody",
                ],
              ] as [string, ...string[]][])
            : []),
        ],
      },
      after: [
        "Podanie danych jest dobrowolne, ale bez adresu e-mail albo telefonu nie mogę odpowiedzieć na zapytanie. Nie podejmuję wobec Ciebie decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu.",
      ],
    },
    {
      id: "cookies",
      title: "Pliki cookies i pamięć przeglądarki",
      body: [
        "Pliki cookies to małe pliki zapisywane w przeglądarce. Niezbędne zapisuję bez pytania, bo bez nich strona nie zadziała tak, jak oczekujesz (art. 399 ust. 3 Prawa komunikacji elektronicznej). Na pozostałe potrzebuję Twojej zgody, którą wyrażasz w banerze przy pierwszej wizycie.",
        HAS_GA
          ? "Zgoda jest dobrowolna. Bez niej strona działa tak samo, a skrypt Google Analytics w ogóle się nie wczytuje. Zgodę możesz wycofać w każdej chwili przyciskiem „Ustawienia cookies” poniżej albo w stopce. Wycofanie nie wpływa na zgodność z prawem pomiaru sprzed wycofania."
          : "Strona nie używa plików cookies, które wymagałyby Twojej zgody.",
      ],
      table: { columns: ["Nazwa", "Dostawca", "Cel", "Ważność", "Rodzaj"], rows: COOKIE_ROWS },
      after: [
        "Pliki cookies możesz też usunąć albo zablokować w ustawieniach przeglądarki. Zablokowanie niezbędnych może sprawić, że baner będzie pokazywał się przy każdej wizycie.",
      ],
      settings: HAS_GA,
    },
    ...(HAS_GA || HAS_PLAUSIBLE
      ? [
          {
            id: "statystyki",
            title: "Statystyki odwiedzin",
            body: [
              ...(HAS_GA
                ? [
                    "Za Twoją zgodą korzystam z Google Analytics 4 dostarczanego przez Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irlandia). Widzę zbiorcze raporty: ile osób odwiedza stronę, skąd przychodzi, które podstrony czyta i ile osób wysłało formularz. Nie widzę, kim jesteś.",
                    "Ustawiłem Google Analytics tak, żeby zbierał jak najmniej: Google Analytics 4 nie zapisuje adresów IP, sygnały Google (łączenie z kontem Google) i personalizacja reklam są wyłączone, a dane nie są używane do reklam. Dane mogą trafić do Google LLC w USA na podstawie decyzji Komisji Europejskiej o adekwatności ochrony (EU-US Data Privacy Framework). Więcej: policies.google.com/privacy.",
                  ]
                : []),
              ...(HAS_PLAUSIBLE
                ? [
                    "Ruch mierzę też narzędziem Plausible Analytics (Plausible Insights OÜ, Estonia). Nie zapisuje ono niczego w przeglądarce i nie zbiera danych pozwalających Cię zidentyfikować, więc działa bez zgody.",
                  ]
                : []),
            ],
          },
        ]
      : []),
    {
      id: "odbiorcy",
      title: "Komu przekazuję dane",
      body: [
        "Nie sprzedaję danych. Przekazuję je tylko firmom, które pomagają mi prowadzić stronę i działalność, w zakresie potrzebnym do ich usługi i na podstawie umów powierzenia:",
      ],
      list: [
        `${hosting[0].toUpperCase()}${hosting.slice(1)},`,
        "Resend, Inc. (USA) — wysyłka wiadomości z formularza na moją skrzynkę,",
        "Cloudflare, Inc. (USA) — ochrona formularza przed spamem (Turnstile),",
        `${mailbox[0].toUpperCase()}${mailbox.slice(1)},`,
        ...(HAS_GA ? ["Google Ireland Limited i Google LLC — statystyki (tylko za zgodą),"] : []),
        "biuro rachunkowe — jeśli zostaniesz klientem i wystawię fakturę.",
      ],
      after: [
        "Firmy z USA przetwarzają dane na podstawie decyzji o adekwatności (EU-US Data Privacy Framework) albo standardowych klauzul umownych zatwierdzonych przez Komisję Europejską. Kopię zabezpieczeń możesz dostać, pisząc do mnie.",
      ],
    },
    {
      id: "prawa",
      title: "Twoje prawa",
      body: ["Masz prawo:"],
      list: [
        "dostępu do swoich danych i otrzymania ich kopii (art. 15 RODO),",
        "sprostowania danych (art. 16),",
        "usunięcia danych (art. 17),",
        "ograniczenia przetwarzania (art. 18),",
        "przeniesienia danych (art. 20),",
        "sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie (art. 21),",
        "wycofania zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania przed jej wycofaniem,",
        "wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl).",
      ],
      after: [`Żeby skorzystać z praw, napisz na ${MAIL}. Odpowiem bez zbędnej zwłoki, najpóźniej w ciągu miesiąca.`],
    },
    {
      id: "zmiany",
      title: "Zmiany polityki",
      body: [
        `Gdy zmienię narzędzia albo sposób przetwarzania danych, zaktualizuję tę stronę i datę na górze. Jeśli zmiana dotyczy plików cookies wymagających zgody, baner zapyta Cię ponownie. Obecna wersja obowiązuje od ${EFFECTIVE_DATE}.`,
      ],
    },
  ] satisfies PolicySection[],
} as const;
