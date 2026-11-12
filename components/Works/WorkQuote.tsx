// Studium: opinia klienta na jasnej planszy (`.plate-light`), cytat Brygadą.

import { Container } from "@/components/ui";
import { WORK_PAGE, type Work } from "@/lib/realizacje";
import { sierotki } from "@/lib/sierotki";

export default function WorkQuote({ quote }: { quote: Work["quote"] }) {
  if (!quote) return null;
  return (
    <section aria-label="Opinia klienta" className="pt-(--section)">
      <div className="bg-moon py-32 text-night [--focus:var(--color-night)]">
        <Container>
          <figure className="m-0 max-w-225">
            <blockquote className="m-0 font-display text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] leading-[1.3] font-medium">
              „{sierotki(quote.text)}”
            </blockquote>
            <figcaption className="mt-6 text-small font-medium text-ash-deep">
              {quote.author}
              {quote.sourceUrl && (
                <>
                  {" · "}
                  <a
                    href={quote.sourceUrl}
                    className="text-night underline decoration-1 underline-offset-[0.2em] hover:decoration-2"
                  >
                    {WORK_PAGE.quoteSource}
                  </a>
                </>
              )}
            </figcaption>
          </figure>
        </Container>
      </div>
    </section>
  );
}
