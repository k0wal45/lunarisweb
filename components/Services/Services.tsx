// Usługi na stronie głównej (design.md: sekcja 2 „Oferta: trzy filary”, sekcja 12 „Split” i „Rozwijany wiersz”).
// Split: nagłówek w kolumnach 1–4 (przyklejony na desktopie), lista w 6–12.
// Każda usługa to <details> bez JS: nazwa, jedno zdanie i cena „od” na wierzchu (wzorzec sprzedażowy 4),
// po rozwinięciu zakres na planszy Morze. Najechanie zalewa wiersz terminatorem (styl .service-row w globals.css).

import { Container, Grid, PlusDisc, TextLink, Typography } from "@/components/ui";
import { PREFETCH } from "@/lib/site";
import { SERVICE_LIST, SERVICES_SECTION } from "@/lib/uslugi";

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

export default function Services() {
  return (
    <section aria-labelledby="uslugi-title">
      <Container size="base">
        <Grid rows="md">
          <div className="col-span-12 md:sticky md:top-[calc(var(--nav-h)+2rem)] md:col-span-4 md:self-start">
            <Typography id="uslugi-title" variant="h2">
              {SERVICES_SECTION.title}
            </Typography>
            <Typography
              variant="body"
              tone="muted"
              className="mt-6 max-w-[36ch]"
            >
              {SERVICES_SECTION.lead}
            </Typography>
          </div>

          <ul className="col-span-12 border-t border-edge md:col-span-7 md:col-start-6">
            {SERVICE_LIST.map((s) => (
              <li key={s.href} className="border-b border-edge">
                <details className="service-row group/row">
                  <summary className="terminator relative grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-x-6 px-4 py-6 md:px-6 md:py-8 [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0">
                      <Typography as="h3" variant="item">
                        {s.card.name}
                      </Typography>
                      <Typography
                        as="span"
                        variant="body"
                        tone="muted"
                        className="mt-2 block max-w-[48ch]"
                      >
                        {s.card.summary}
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
                      {s.card.scope.map((item) => (
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
                        {s.card.forWhom}
                      </Typography>
                      <TextLink
                        href={s.href}
                        prefetch={PREFETCH}
                        weight="strong"
                        target="touch"
                        className="text-ui"
                      >
                        {SERVICES_SECTION.more}
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
