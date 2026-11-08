'use client';

// GSAP z ScrollTriggerem, rejestrowany tylko w przeglądarce.
// Importuj stąd zamiast z 'gsap', żeby wtyczki były zawsze zarejestrowane:
//   import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';
// Plik nie jest nigdzie importowany w hero, więc GSAP nie trafia do JS strony głównej.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export { gsap, ScrollTrigger, useGSAP };
