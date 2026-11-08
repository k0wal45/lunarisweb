'use client';

// Kliencka część hero: nagłówek oświetlony i księżyc.
// Ref nagłówka idzie do <Moon />, który ustawia --light-x / --light-y za kursorem.
// Lead, przyciski i dowody przychodzą jako children i zostają wyrenderowane na serwerze.

import { useRef, type ReactNode } from 'react';
import Moon from '@/components/Moon';
import type { HeroVariant } from './Hero';
import styles from './Hero.module.css';

type Props = {
  title: string;
  variant: HeroVariant;
  children: ReactNode;
};

export default function HeroStage({ title, variant, children }: Props) {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      {/* w kodzie przed tekstem: na telefonie księżyc stoi nad hasłem, na desktopie jest absolutny */}
      <div className={styles.moonBox}>
        <Moon className={styles.moon} lightTarget={headlineRef} />
      </div>

      <div className={`wrap ${styles.inner}`}>
        <div className="grid">
          <div className={styles.text}>
            <h1
              id="hero-title"
              ref={headlineRef}
              className={`headline-lit ${variant === 'sprzedaz' ? styles.titleSales : styles.titleBrand}`}
            >
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
