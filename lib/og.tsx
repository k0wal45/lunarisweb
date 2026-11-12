// Obrazek do udostępniania (Open Graph, 1200×630) w kolorach marki: tło Noc, tarcza księżyca,
// nadtytuł Hanken Grotesk, tytuł Brygadą 1918. Wspólny dla app/opengraph-image.tsx i podstron.
// Kroje leżą w assets/fonts (TTF, licencja OFL), bo ImageResponse nie czyta WOFF2 z next/font.

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/seo";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const NIGHT = "#0E1320";
const MARE = "#1B2232";
const MOON = "#E6E8EC";
const MOON_100 = "#CDD2DB";
const ASH = "#8A94A8";
const MOON_300 = "#7A8396";

// odczyt na poziomie modułu (raz, przy buildzie): odczyt w funkcji to niebuforowane dane
// i obrazek generowałby się przy każdym żądaniu zamiast statycznie
const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));
const brygada = await font("Brygada1918-Regular.ttf");
const hanken = await font("HankenGrotesk-Medium.ttf");

export function ogImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  // długi tytuł mniejszym stopniem, żeby zmieścił się w trzech liniach
  const titleSize = title.length > 48 ? 64 : 80;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: `linear-gradient(120deg, ${NIGHT}, ${MARE})`,
          color: MOON,
          fontFamily: "Hanken Grotesk",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="47" fill={MARE} stroke={MOON} strokeWidth="2" />
            <path d="M50 3 A47 47 0 0 1 50 97 A33.234 47 0 0 1 50 3 Z" fill={MOON_100} />
            <circle cx="62" cy="34" r="6.5" fill={MOON_300} />
            <circle cx="67" cy="62" r="4.5" fill={MOON_300} />
          </svg>
          <span style={{ fontFamily: "Brygada 1918", fontSize: 40 }}>{SITE_NAME}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 960 }}>
          <span style={{ fontSize: 28, color: ASH }}>{eyebrow}</span>
          <span
            style={{
              fontFamily: "Brygada 1918",
              fontSize: titleSize,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Brygada 1918", data: brygada, style: "normal", weight: 400 },
        { name: "Hanken Grotesk", data: hanken, style: "normal", weight: 500 },
      ],
    },
  );
}
