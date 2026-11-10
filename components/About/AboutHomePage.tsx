import Image from "next/image";
import { Container, TextLink, Typography } from "../ui";
import portrait from "@/public/img/daniel-kowalski.jpg";

// TODO: uzupełnić treść — wiersze 2 i 3 są kopią pierwszego
const FACTS = [
  { label: "Projekt i kod", value: "w jednych rękach" },
  { label: "Projekt i kod", value: "w jednych rękach" },
  { label: "Projekt i kod", value: "w jednych rękach" },
];

const AboutHomePage = () => {
  return (
    <Container
      size="base"
      className="gap-12 md:gap-24 flex flex-col md:flex-row items-center"
    >
      <Image
        src={portrait}
        alt="Daniel Kowalski"
        placeholder="blur"
        // Image is w-full up to max-w-125 (500px)
        sizes="(min-width: 540px) 500px, 100vw"
        className="w-full h-auto max-w-125 object-cover"
      />
      <div className="flex flex-col gap-8 max-w-2xl">
        <Typography variant="h2">
          Rozmawiasz z osobą, która robi pracę.
        </Typography>
        <Typography variant="body" className="lg:max-w-2/3">
          Nazywam się Daniel Kowalski. Projektuję i koduję sam, więc od
          pierwszej rozmowy do publikacji masz jedną osobę i jeden numer
          telefonu.
        </Typography>
        <Typography variant="ui" tone="muted" className="lg:max-w-2/3">
          Mam komercyjne doświadczenie jako front-end developer i studiuję
          informatykę na Politechnice Śląskiej. Dlatego biorę mniej projektów
          naraz i każdy prowadzę do końca.
        </Typography>

        <dl className="flex flex-col w-full">
          {FACTS.map(({ label, value }, i) => (
            <div
              key={i}
              className="border-y border-edge flex flex-col sm:flex-row justify-between p-4"
            >
              <Typography as="dt" variant="body" tone="muted">
                {label}
              </Typography>
              <Typography as="dd" variant="body">
                {value}
              </Typography>
            </div>
          ))}
        </dl>
        <TextLink
          href="/o-mnie"
          weight="strong"
          target="touch"
          className="text-ui"
        >
          Więcej o mnie
        </TextLink>
      </div>
    </Container>
  );
};

export default AboutHomePage;
