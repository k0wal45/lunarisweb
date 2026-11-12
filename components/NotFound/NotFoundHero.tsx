// Strona 404: etykieta, nagłówek, lead i przyciski po lewej, księżyc w nowiu po prawej
// (ta sama tarcza co w sekcji procesu, components/Process/PhaseMoon).

import PhaseMoon from "@/components/Process/PhaseMoon";
import { Button, Container, Grid, Typography } from "@/components/ui";
import { NOT_FOUND } from "@/lib/not-found";

export default function NotFoundHero() {
  return (
    <Container as="section" aria-labelledby="404-title" className="overflow-x-clip pt-30">
      <Grid rows="md" className="items-center">
        <div className="col-span-12 md:col-span-7">
          <Typography variant="small" tone="muted">
            {NOT_FOUND.label}
          </Typography>
          <Typography id="404-title" variant="h1" className="mt-6 max-w-[14ch]">
            {NOT_FOUND.title}
          </Typography>
          <Typography variant="lead" tone="muted" className="mt-8">
            {NOT_FOUND.lead}
          </Typography>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button href={NOT_FOUND.home.href}>{NOT_FOUND.home.label}</Button>
            <Button variant="secondary" href={NOT_FOUND.contact.href}>
              {NOT_FOUND.contact.label}
            </Button>
          </div>
        </div>

        <figure className="col-span-12 m-0 md:col-span-4 md:col-start-9">
          <PhaseMoon
            fraction={NOT_FOUND.moonFraction}
            className="mx-auto block aspect-square w-[56vw] max-w-xs md:w-full md:max-w-none"
          />
          <figcaption className="mt-6 text-center text-small text-ash">
            {NOT_FOUND.moonCaption}
          </figcaption>
        </figure>
      </Grid>
    </Container>
  );
}
