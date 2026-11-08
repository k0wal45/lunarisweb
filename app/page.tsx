import Hero, { type HeroVariant } from '@/components/Hero/Hero';

// Która wersja idzie na start, jest jeszcze do decyzji (design.md, sekcja 22).
const HOME_HERO: HeroVariant = 'marka';

export default function Home() {
  return (
    <main id="tresc">
      <Hero variant={HOME_HERO} />
    </main>
  );
}
