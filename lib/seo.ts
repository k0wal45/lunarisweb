// SEO: adres strony, wspólne metadane podstron i dane strukturalne (JSON-LD, schema.org).
//
// - `pageMeta()` — każda strona: tytuł (szablon „%s — Lunaris web” z app/layout.tsx), opis,
//   adres kanoniczny i pełne Open Graph z własnym `og:url` (scalanie metadanych w Next.js jest płytkie,
//   więc `openGraph` z layoutu nie może zawierać `url`).
// - `*Ld()` — obiekty JSON-LD; wstawia je components/JsonLd.

import type { Metadata } from "next";
import { COMPANY, MAIL, PHONE, SOCIAL } from "@/lib/site";
import type { FaqItem } from "@/lib/types";

export const SITE_URL = "https://lunarisweb.pl";
export const SITE_NAME = "Lunaris web";
export const SITE_LOCALE = "pl_PL";

export const SITE_DEFAULT = {
  title: "Lunaris web — strony internetowe dla firm",
  description:
    "Projektuję i koduję strony oraz identyfikacje dla firm. Przyjmuję 1-2 nowe projekty miesięcznie.",
} as const;

/** pełny adres z ścieżki: "/wiedza" → "https://lunarisweb.pl/wiedza" */
export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

type PageMetaInput = {
  /** bez „— Lunaris web”: dopisuje go szablon; `absolute` = tytuł bez szablonu (strona główna) */
  title: string;
  absolute?: boolean;
  description: string;
  path: string;
  type?: "website" | "article";
  /** ISO, tylko dla artykułów */
  publishedTime?: string | null;
  /** strona z własnym opengraph-image.tsx: true → obrazek z `${path}/opengraph-image` */
  ownImage?: boolean;
};

export function pageMeta({
  title,
  absolute = false,
  description,
  path,
  type = "website",
  publishedTime,
  ownImage = false,
}: PageMetaInput): Metadata {
  const fullTitle = absolute ? title : `${title} — ${SITE_NAME}`;
  const ogImage = ownImage ? `${path}/opengraph-image` : "/opengraph-image";
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      title: fullTitle,
      description,
      // podany wprost: własne `openGraph` strony nadpisuje obrazek dziedziczony z pliku w katalogu wyżej
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

// --- JSON-LD ---------------------------------------------------------------

const ORG_ID = `${SITE_URL}/#firma`;
const PERSON_ID = `${SITE_URL}/#daniel-kowalski`;

/** „2 500 zł” → 2500 */
const priceNumber = (price: string) => Number(price.replace(/[^\d]/g, ""));

/** firma (layout): nazwa, kontakt, adres, obszar działania, profile */
export function organizationLd(priceFrom: string | null) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: COMPANY.name,
    url: SITE_URL,
    logo: absoluteUrl("/svg/logo.svg"),
    image: absoluteUrl("/opengraph-image"),
    description: SITE_DEFAULT.description,
    email: MAIL,
    telephone: PHONE.label.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.street,
      postalCode: COMPANY.postalCode,
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.region,
      addressCountry: "PL",
    },
    areaServed: COMPANY.areaServed.map((name) => ({ "@type": "Place", name })),
    ...(priceFrom ? { priceRange: `od ${priceFrom}` } : {}),
    founder: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Daniel Kowalski",
      jobTitle: "Projektant i front-end developer",
      url: absoluteUrl("/o-mnie"),
    },
    sameAs: SOCIAL.map((s) => s.href),
  };
}

/** okruszki: pozycje bez `href` (np. „Usługi”) są pomijane; ostatnia = bieżąca strona, bez adresu */
export function breadcrumbLd(items: readonly { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: absoluteUrl(it.href) } : {}),
    })),
  };
}

export function serviceLd(s: {
  name: string;
  description: string;
  path: string;
  price: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    url: absoluteUrl(s.path),
    provider: { "@id": ORG_ID },
    areaServed: COMPANY.areaServed.map((name) => ({ "@type": "Place", name })),
    ...(s.price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "PLN",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: priceNumber(s.price),
              priceCurrency: "PLN",
              valueAddedTaxIncluded: false,
            },
          },
        }
      : {}),
  };
}

export function faqLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function articleLd(p: {
  title: string;
  description: string;
  path: string;
  date: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    url: absoluteUrl(p.path),
    mainEntityOfPage: absoluteUrl(p.path),
    image: absoluteUrl(`${p.path}/opengraph-image`),
    inLanguage: "pl-PL",
    author: { "@id": PERSON_ID, "@type": "Person", name: "Daniel Kowalski" },
    publisher: { "@id": ORG_ID },
    ...(p.date ? { datePublished: p.date } : {}),
  };
}
