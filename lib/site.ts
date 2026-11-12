// Mapa strony i dane firmy: jedno źródło dla nawigacji (components/Nav) i stopki (components/Footer).
// Adresy odpowiadają folderom w app/ (design.md, sekcje 2 i 12).

export type SiteLink = { href: string; label: string };

export const SERVICES = [
  { href: "/uslugi/strony-internetowe", label: "Strony internetowe" },
  { href: "/uslugi/identyfikacja-wizualna", label: "Identyfikacja wizualna" },
  { href: "/uslugi/front-end-development", label: "Front-end development" },
] as const satisfies readonly SiteLink[];

// pozycja z `children` to podmenu: na desktopie lista rozwijana, na telefonie rozwijany wiersz
export type NavLink = SiteLink & {
  match: string;
  children?: readonly SiteLink[];
};

export const NAV_LINKS: readonly NavLink[] = [
  { href: "/realizacje", label: "Realizacje", match: "/realizacje" },
  {
    href: "/uslugi/strony-internetowe",
    label: "Usługi",
    match: "/uslugi",
    children: SERVICES,
  },
  { href: "/o-mnie", label: "O mnie", match: "/o-mnie" },
  { href: "/wiedza", label: "Wiedza", match: "/wiedza" },
];

export const CONTACT_LINK = {
  href: "/kontakt",
  label: "Kontakt",
  match: "/kontakt",
} as const satisfies NavLink;

export const LEGAL_LINKS = [
  { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
] as const satisfies readonly SiteLink[];

export const MAIL = "kontakt@lunarisweb.pl";
export const PHONE = {
  href: "tel:+48664447556",
  label: "+48 664 447 556",
} as const;

// TODO: uzupełnić prawdziwe dane z CEIDG (NIP, REGON, adres) i adres profilu na Instagramie.
export const COMPANY = {
  name: "Lunaris Daniel Kowalski",
  nip: "000-000-00-00",
  regon: "000000000",
  address: "ul. Przykładowa 1, 40-000 Katowice",
  area: "Katowice, Śląsk i cała Polska",
} as const;

export const SOCIAL = [
  { href: "https://www.instagram.com/lunarisweb", label: "Instagram" },
] as const satisfies readonly SiteLink[];

// TODO: potwierdzić czas odpowiedzi i długość rozmowy (w projekcie oznaczone jako [X]).
export const REPLY_TIME = "2 dni roboczych";
export const CALL_LENGTH = "30 minut";

// Formularz zapytania (design.md, sekcja 12: formularze). Wartości trafiają do maila.
export const PROJECT_TYPES = [
  { value: "strona", label: "Strona internetowa" },
  { value: "identyfikacja", label: "Identyfikacja wizualna" },
  { value: "agencja", label: "Front-end dla agencji" },
  { value: "opieka", label: "Opieka nad istniejącą stroną" },
  { value: "inne", label: "Coś innego" },
] as const;

export const BUDGETS = [
  { value: "do-3000", label: "do 3 000 zł" },
  { value: "3000-6000", label: "3 000–6 000 zł" },
  { value: "6000-10000", label: "6 000–10 000 zł" },
  { value: "od-10000", label: "powyżej 10 000 zł" },
] as const;

// Podstrony jeszcze nie istnieją, więc nie pobieramy ich z wyprzedzeniem (unikamy 404 w konsoli).
// TODO: usunąć, gdy powstaną podstrony.
export const PREFETCH = false;

export const isCurrent = (pathname: string, match: string) =>
  pathname === match || pathname.startsWith(match + "/");
