// Hero strony głównej (design.md, sekcje 6, 13 i 14).
// Komponent serwerowy. Klienckie są tylko: HeroStage (nagłówek + księżyc, bo światło kursora
// prowadzi gradient tekstu) i MoonCaption (faza liczona w przeglądarce).

import Link from 'next/link';
import MoonCaption from '@/components/MoonCaption';
import { sierotki } from '@/lib/sierotki';
import HeroStage from './HeroStage';
import styles from './Hero.module.css';

// TODO: uzupełnić przed publikacją wersji „sprzedaż” (design.md, sekcja 20: brak pól w nawiasach).
const PROOF = {
  googleRating: '[X,X]',
  googleReviews: 6,
  lighthouse: '[XX]',
  sites: '[X]',
} as const;

export type HeroVariant = 'marka' | 'sprzedaz';

const CONTENT = {
  marka: {
    title: 'Pokażmy Twoją firmę w pełni.',
    lead: 'Projektuję i koduję strony oraz identyfikacje dla firm. Przyjmuję 1–2 nowe projekty miesięcznie.',
  },
  sprzedaz: {
    title: 'Strony, które przynoszą zapytania firmom usługowym',
    lead: 'Projektuję i koduję sam, więc od pierwszej rozmowy do publikacji masz jedną osobę. Katowice, Śląsk i cała Polska. Przyjmuję 1–2 nowe projekty miesięcznie.',
  },
} as const;

const PROOFS = [
  { value: PROOF.googleRating, label: `ocena w Google, ${PROOF.googleReviews} opinii` },
  { value: PROOF.lighthouse, label: 'średni wynik Lighthouse' },
  { value: PROOF.sites, label: 'stron dla firm' },
];

// Podstrony jeszcze nie istnieją. TODO: usunąć prefetch={false}, gdy powstaną.
const PREFETCH = false;

export default function Hero({ variant = 'marka' }: { variant?: HeroVariant }) {
  const c = CONTENT[variant];
  const sales = variant === 'sprzedaz';

  return (
    <section className={`${styles.hero} ${sales ? styles.sales : ''}`} aria-labelledby="hero-title">
      <HeroStage title={sierotki(c.title)} variant={variant}>
        <p className={`lead ${styles.lead}`}>{sierotki(c.lead)}</p>

        <div className={styles.ctas}>
          <Link href="/kontakt" prefetch={PREFETCH} className="btn btn--primary">
            Umów rozmowę
          </Link>
          {sales ? (
            <Link href="/#sprawdzenie" prefetch={PREFETCH} className="btn btn--secondary">
              {sierotki('Sprawdź moją stronę za darmo')}
            </Link>
          ) : (
            <Link href="/realizacje" prefetch={PREFETCH} className={`tlink ${styles.textLink}`}>
              Zobacz realizacje
            </Link>
          )}
        </div>

        {sales && (
          <ul className={styles.proofs}>
            {PROOFS.map((p) => (
              <li key={p.label}>
                <span className={styles.proofValue}>{p.value}</span>
                <span className={`small muted ${styles.proofLabel}`}>{sierotki(p.label)}</span>
              </li>
            ))}
          </ul>
        )}
      </HeroStage>

      <div className={`wrap ${styles.foot}`}>
        <MoonCaption className="small muted" />
      </div>
    </section>
  );
}
