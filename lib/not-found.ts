// Treść strony 404 (app/not-found.tsx). Motyw: nów — na tej stronie nic nie świeci.

export const NOT_FOUND = {
  meta: {
    title: "Nie ma takiej strony — Lunaris web",
    description: "Ta strona nie istnieje albo zmieniła adres.",
  },
  label: "Błąd 404",
  title: "Nie tego szukasz",
  lead: "Ta strona nie istnieje albo zmieniła adres. Wróć na stronę główną albo wybierz jedną z poniższych.",
  /** faza księżyca: tuż po nowiu, cienki sierp (0 = nów, 0,5 = pełnia) */
  moonFraction: 0.04,
  moonCaption: "Tuż po nowiu: prawie cała tarcza w cieniu",
  home: { href: "/", label: "Strona główna" },
  contact: { href: "/kontakt", label: "Napisz do mnie" },
  linksTitle: "Może tego szukasz",
  links: [
    {
      href: "/realizacje",
      title: "Realizacje",
      aside: "strony i identyfikacje z wynikami",
    },
    {
      href: "/uslugi/strony-internetowe",
      title: "Usługi",
      aside: "zakres, ceny i proces",
    },
    { href: "/o-mnie", title: "O mnie", aside: "kto robi Twoją stronę" },
    { href: "/wiedza", title: "Wiedza", aside: "teksty o stronach dla firm" },
  ],
} as const;
