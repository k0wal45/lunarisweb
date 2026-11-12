"use client";

// Baner zgody na pliki cookies. Zgodnie z art. 399 PKE i wytycznymi EROD:
// - pokazuje się przed włączeniem statystyk, nic nie jest zaznaczone z góry,
// - „Nie zgadzam się” jest tak samo widoczne i łatwe jak „Zgadzam się” (ten sam wygląd przycisków),
// - nie blokuje strony (bez „ściany cookies”), informuje o celu, odbiorcy i przekazaniu poza EOG,
// - wraca z linku „Ustawienia cookies” w stopce, żeby zgodę dało się wycofać równie łatwo.
// Bez skonfigurowanego GA (NEXT_PUBLIC_GA_ID) nie ma o co pytać, więc baneru nie ma.

import { useEffect, useRef, useState } from "react";
import { Button, TextLink, Typography } from "@/components/ui";
import { GA_ID } from "@/lib/analytics";
import { COOKIE_BANNER, onConsentOpen, setConsent, useConsent } from "@/lib/consent";

export default function CookieBanner() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);
  const headingRef = useRef<HTMLElement>(null);

  useEffect(
    () =>
      onConsentOpen(() => {
        setReopened(true);
        requestAnimationFrame(() => headingRef.current?.focus());
      }),
    [],
  );

  if (!GA_ID || consent === "unknown" || (consent !== "pending" && !reopened)) return null;

  const choose = (analytics: boolean) => {
    setConsent({ analytics });
    setReopened(false);
  };

  return (
    <section
      aria-labelledby="cookies-title"
      className="fixed inset-x-(--page-margin) bottom-4 z-50 flex flex-col gap-5 border border-edge bg-mare p-6 shadow-[0_8px_32px_rgb(0_0_0/0.4)] md:right-auto md:bottom-6 md:max-w-[34rem] md:p-8"
    >
      <Typography
        ref={headingRef}
        tabIndex={-1}
        as="h2"
        variant="h3"
        className="outline-none"
        id="cookies-title"
      >
        {COOKIE_BANNER.title}
      </Typography>
      <Typography variant="small" tone="muted" as="p">
        {COOKIE_BANNER.text}{" "}
        <TextLink href="/polityka-prywatnosci#cookies" className="text-small">
          {COOKIE_BANNER.policyLink}
        </TextLink>
      </Typography>
      {typeof consent === "object" && (
        <Typography variant="small" as="p" className="font-medium">
          {consent.analytics ? COOKIE_BANNER.statusOn : COOKIE_BANNER.statusOff}
        </Typography>
      )}
      <div className="flex flex-wrap gap-3">
        <Button variant="secondary" size="sm" onClick={() => choose(true)}>
          {COOKIE_BANNER.accept}
        </Button>
        <Button variant="secondary" size="sm" onClick={() => choose(false)}>
          {COOKIE_BANNER.reject}
        </Button>
      </div>
    </section>
  );
}
