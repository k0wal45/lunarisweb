// Usługi na stronie głównej (design.md: sekcja 2 „Oferta: trzy filary”, sekcja 12 „Split” i „Rozwijany wiersz”).
// Split: nagłówek w kolumnach 1–4 (przyklejony na desktopie), lista w 6–12.
// Każda usługa to <details> bez JS: nazwa, jedno zdanie i cena „od” na wierzchu (wzorzec sprzedażowy 4),
// po rozwinięciu zakres na planszy Morze. Najechanie zalewa wiersz terminatorem (styl .service-row w globals.css).

import { Container, Grid, TextLink, Typography } from "@/components/ui";

type Service = {
  name: string;
  /** jedno zdanie z design.md, sekcja 2 */
  summary: string;
  /** kwota „od” netto; null = jeszcze nie ustalona, wtedy cena się nie wyświetla */
  price: string | null;
  scope: string[];
  forWhom: string;
  href: string;
};

// TODO: uzupełnić ceny „od” dla identyfikacji i front-endu oraz potwierdzić zakresy,
// zanim sekcja trafi na produkcję (wzorce sprzedażowe 4 i 7: cena na wierzchu, tylko sprawdzalne obietnice).
const SERVICES: Service[] = [
  {
    name: "Strony i aplikacje internetowe",
    summary:
      "Kod od zera w Next.js albo WordPress, gdy chcesz sam edytować treści.",
    price: "2 500 zł",
    scope: [
      "Projekt i kod w jednych rękach, bez pośredników",
      "Next.js albo WordPress: wybierasz, kto edytuje treści",
      "Aplikacje dla firmy: panele, rezerwacje, zarządzanie flotą",
      "Wynik Lighthouse i Core Web Vitals w raporcie po publikacji",
    ],
    forWhom: "Przychodnie, warsztaty, kancelarie i inne firmy usługowe.",
    href: "/uslugi/strony-internetowe",
  },
  {
    name: "Identyfikacja wizualna",
    summary:
      "Logo, kolory i kroje, które działają tak samo na stronie, fakturze i w social mediach.",
    price: null,
    scope: [
      "Logo w wersjach na ciemne i jasne tło",
      "Paleta kolorów i kroje pisma z zasadami użycia",
      "Wizytówka, szablony postów i dokumentów",
      "Banery reklamowe i inne formy reklamy",
    ],
    forWhom: "Firmy, które zaczynają albo porządkują swój wizerunek.",
    href: "/uslugi/identyfikacja-wizualna",
  },
  {
    name: "Front-end development",
    summary:
      "Zróbmy razem aplikacje lub zatrudnij mnie jako pracownika w twojej firmie",
    price: null,
    scope: [
      "Next.js, React i TypeScript",
      "Praca w zespole jak i pojedynczo",
      "Core Web Vitals sprawdzone przed oddaniem",
      "Opieka techniczna po publikacji",
    ],
    forWhom: "Agencje i projektanci, którzy potrzebują kodu z Figmy.",
    href: "/uslugi/front-end-development",
  },
];

function Price({ price, className }: { price: string; className?: string }) {
  return (
    <span className={className}>
      <span className="block font-display text-stat whitespace-nowrap tabular-nums">
        od {price}
      </span>
      <span className="block text-small text-ash">netto</span>
    </span>
  );
}

function PlusDisc() {
  return (
    <span
      aria-hidden="true"
      className="flex size-11 shrink-0 items-center justify-center rounded-disc border border-ash transition-colors duration-(--dur-micro) ease-terminator group-hover/row:border-moon"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        focusable="false"
        className="transition-transform duration-(--dur-phase) ease-terminator group-open/row:rotate-45"
      >
        <path
          d="M8 2.5v11M2.5 8h11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

export default function Services() {
  return (
    <section aria-labelledby="uslugi-title">
      <Container size="base">
        <Grid rows="md">
          <div className="col-span-12 md:sticky md:top-[calc(var(--nav-h)+2rem)] md:col-span-4 md:self-start">
            <Typography id="uslugi-title" variant="h2">
              Projekt i kod w jednych rękach.
            </Typography>
            <Typography
              variant="body"
              tone="muted"
              className="mt-6 max-w-[36ch]"
            >
              Robię trzy rzeczy i robię je sam. Rozmawiasz z osobą, która
              projektuje i koduje Twój projekt.
            </Typography>
          </div>

          <ul className="col-span-12 border-t border-edge md:col-span-7 md:col-start-6">
            {SERVICES.map((s) => (
              <li key={s.href} className="border-b border-edge">
                <details className="service-row group/row">
                  <summary className="terminator relative grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-x-6 px-4 py-6 md:px-6 md:py-8 [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0">
                      <Typography as="h3" variant="item">
                        {s.name}
                      </Typography>
                      <Typography
                        as="span"
                        variant="body"
                        tone="muted"
                        className="mt-2 block max-w-[48ch]"
                      >
                        {s.summary}
                      </Typography>
                      {s.price && (
                        <Price
                          price={s.price}
                          className="mt-4 block sm:hidden"
                        />
                      )}
                    </span>
                    <span className="flex items-center gap-6 self-start sm:self-center">
                      {s.price && (
                        <Price
                          price={s.price}
                          className="hidden text-right sm:block"
                        />
                      )}
                      <PlusDisc />
                    </span>
                  </summary>

                  <div className="bg-mare px-4 pb-8 md:px-6">
                    <ul className="border-t border-edge">
                      {s.scope.map((item) => (
                        <li key={item} className="border-b border-edge py-3">
                          <Typography as="span" variant="body">
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
                      <Typography
                        variant="small"
                        tone="muted"
                        className="max-w-[44ch]"
                      >
                        {s.forWhom}
                      </Typography>
                      <TextLink
                        href={s.href}
                        prefetch={false}
                        weight="strong"
                        target="touch"
                        className="text-ui"
                      >
                        Zobacz zakres usługi
                      </TextLink>
                    </div>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </Grid>
      </Container>
    </section>
  );
}
