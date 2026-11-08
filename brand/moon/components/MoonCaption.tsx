'use client';

// „Dziś na niebie: sierp ubywający, 13% tarczy”.
// Liczone w przeglądarce, żeby statycznie zbudowana strona nie pokazywała fazy z dnia buildu.
// Miejsce na tekst jest zarezerwowane (min-height), więc nie ma przesunięcia układu.

import { useEffect, useState } from 'react';
import { moonPhase } from '@/lib/moon';

export default function MoonCaption({ className }: { className?: string }) {
  const [text, setText] = useState('');

  useEffect(() => {
    const p = moonPhase();
    setText(`Dziś na niebie: ${p.name}, ${Math.round(p.illumination * 100)}% tarczy`);
  }, []);

  return (
    <p className={className} style={{ minHeight: '1.5em' }} aria-live="off">
      {text}
    </p>
  );
}
