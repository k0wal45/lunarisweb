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

// Podstrony jeszcze nie istnieją, więc nie pobieramy ich z wyprzedzeniem (unikamy 404 w konsoli).
// TODO: usunąć, gdy powstaną podstrony.
export const PREFETCH = false;

export const isCurrent = (pathname: string, match: string) =>
  pathname === match || pathname.startsWith(match + "/");
