"use client";

// Przycisk „Ustawienia cookies”: otwiera baner zgody ponownie (stopka, polityka prywatności).
// Bez skonfigurowanego GA nie ma ustawień do zmiany, więc przycisku nie ma.

import { GA_ID } from "@/lib/analytics";
import { COOKIE_BANNER, openConsentSettings } from "@/lib/consent";

export default function CookieSettingsButton({ className }: { className?: string }) {
  if (!GA_ID) return null;
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      {COOKIE_BANNER.settings}
    </button>
  );
}
