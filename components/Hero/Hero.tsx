import { Button, TextLink, Typography } from "@/components/ui";
import { HERO } from "@/lib/home";
import HeroStage from "./HeroStage";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative mt-30 flex lg:min-h-[calc(100svh-var(--nav-h))] flex-col overflow-x-clip"
    >
      <HeroStage title={HERO.title}>
        <Typography variant="lead" className="mt-6">
          {HERO.lead}
        </Typography>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href={HERO.cta.href}>{HERO.cta.label}</Button>

          <TextLink
            href={HERO.more.href}
            weight="strong"
            target="touch"
            className="text-ui"
          >
            {HERO.more.label}
          </TextLink>
        </div>
      </HeroStage>
    </section>
  );
}
