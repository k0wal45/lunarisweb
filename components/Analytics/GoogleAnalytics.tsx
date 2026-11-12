"use client";

// Google Analytics 4 tylko po zgodzie na statystyki (lib/consent.ts). Bez zgody nie ładuje się
// żaden skrypt Google i nic nie jest wysyłane („basic” Consent Mode v2). Cofnięcie zgody wyłącza
// pomiar i usuwa pliki _ga. Sygnały reklamowe i Google Signals są wyłączone na stałe.
// W `next dev` zdarzenia idą z debug_mode, więc widać je tylko w DebugView, nie w raportach.

import Script from "next/script";
import { useEffect } from "react";
import { GA_COOKIES, GA_ID, track } from "@/lib/analytics";
import { useConsent } from "@/lib/consent";

const DEV = process.env.NODE_ENV !== "production";

function removeGaCookies() {
  const host = location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const name of GA_COOKIES) {
    for (const d of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}

/** mail, telefon i linki do /kontakt: jedno nasłuchiwanie na całym dokumencie */
function onClick(e: MouseEvent) {
  const a = (e.target as Element | null)?.closest?.("a");
  if (!a) return;
  const href = a.getAttribute("href") ?? "";
  const location = window.location.pathname;
  if (href.startsWith("mailto:")) track("contact_click", { method: "email", link_location: location });
  else if (href.startsWith("tel:")) track("contact_click", { method: "phone", link_location: location });
  else if (href === "/kontakt" || href.startsWith("/kontakt#"))
    track("cta_click", { link_text: a.textContent?.trim().slice(0, 100), link_location: location });
}

export default function GoogleAnalytics() {
  const consent = useConsent();
  const granted = typeof consent === "object" && consent.analytics;

  useEffect(() => {
    if (!GA_ID || consent === "unknown") return;
    const w = window as unknown as Record<string, unknown>;
    w[`ga-disable-${GA_ID}`] = !granted;
    if (granted) {
      // ponowna zgoda w tej samej wizycie: skrypt już jest, wystarczy odblokować pomiar
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
      document.addEventListener("click", onClick);
      return () => document.removeEventListener("click", onClick);
    }
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
    removeGaCookies();
  }, [consent, granted]);

  if (!GA_ID || !granted) return null;

  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
gtag('js',new Date());
gtag('config','${GA_ID}',{allow_google_signals:false,allow_ad_personalization_signals:false${DEV ? ",debug_mode:true" : ""}});`}
      </Script>
      <Script
        id="ga-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
