'use client';

// „Dziś na niebie: sierp ubywający, 13% tarczy”.
// Liczone w przeglądarce, żeby statycznie zbudowana strona nie pokazywała fazy z dnia buildu.
// Miejsce na tekst jest zarezerwowane (min-height), więc nie ma przesunięcia układu.
//
// Zmiana względem brand/moon: zamiast setState w useEffect (reguła react-hooks/set-state-in-effect)
// używamy useSyncExternalStore. Efekt ten sam: serwer i hydratacja renderują pusty tekst,
// zaraz potem React wstawia fazę z przeglądarki. Bez ostrzeżeń o hydratacji.

import { useSyncExternalStore } from 'react';
import { moonPhase } from '@/lib/moon';

const subscribe = () => () => {};
const getClientText = () => {
  const p = moonPhase();
  return `Dziś na niebie: ${p.name}, ${Math.round(p.illumination * 100)}% tarczy`;
};
const getServerText = () => '';

export default function MoonCaption({ className }: { className?: string }) {
  const text = useSyncExternalStore(subscribe, getClientText, getServerText);

  return (
    <p className={className} style={{ minHeight: '1.5em' }} aria-live="off">
      {text}
    </p>
  );
}
