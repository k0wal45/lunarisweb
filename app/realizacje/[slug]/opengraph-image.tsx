// Obrazek do udostępniania realizacji: nazwa projektu i zakres.

import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/lib/og";
import { getWork, WORKS } from "@/lib/realizacje";

export const alt = "Realizacja Lunaris web";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const work = getWork((await params).slug);
  return ogImage({
    eyebrow: work ? ["Realizacja", work.scope].join(" · ") : "Realizacja",
    title: work?.name ?? "Realizacje",
  });
}
