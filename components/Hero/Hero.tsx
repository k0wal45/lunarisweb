import { Button, TextLink, Typography } from "@/components/ui";
import HeroStage from "./HeroStage";

const CONTENT = {
  title: "Pokażmy Twoją firmę w pełni.",
  lead: "Projektuję i koduję strony oraz identyfikacje dla firm.",
} as const;

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative mt-30 flex lg:min-h-[calc(100svh-var(--nav-h))] flex-col overflow-x-clip"
    >
      <HeroStage title={CONTENT.title}>
        <Typography variant="lead" className="mt-6">
          {CONTENT.lead}
        </Typography>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href="/kontakt">Umów rozmowę</Button>

          <TextLink
            href="/realizacje"
            weight="strong"
            target="touch"
            className="text-ui"
          >
            Zobacz realizacje
          </TextLink>
        </div>
      </HeroStage>
    </section>
  );
}
