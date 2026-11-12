// Domyślny obrazek do udostępniania dla całej strony (podstrony bez własnego dziedziczą go).

import { HERO } from "@/lib/home";
import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/lib/og";
import { SITE_DEFAULT } from "@/lib/seo";

export const alt = SITE_DEFAULT.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage({ eyebrow: "Strony internetowe i identyfikacje dla firm", title: HERO.title });
}
