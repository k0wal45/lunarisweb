// Pasek CTA (design.md, sekcja 12: `.cta-band`): linia Krawędź, h2 w rozmiarze h1,
// przycisk główny po prawej; na końcu każdej podstrony.

import { Button, Container, Typography } from "@/components/ui";

type Props = {
  title?: string;
  cta?: string;
  href?: string;
};

export default function CtaBand({
  title = "Porozmawiajmy o Twoim projekcie.",
  cta = "Umów rozmowę",
  href = "/kontakt",
}: Props) {
  return (
    <Container
      as="section"
      aria-labelledby="cta-title"
      className="py-(--section)"
    >
      <div className="flex flex-wrap items-end justify-between gap-8 border-t border-edge pt-12">
        <Typography
          as="h2"
          id="cta-title"
          variant="h1"
          className="max-w-[16ch]"
        >
          {title}
        </Typography>
        <Button href={href}>{cta}</Button>
      </div>
    </Container>
  );
}
