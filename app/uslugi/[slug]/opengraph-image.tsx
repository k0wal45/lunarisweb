// Obrazek do udostępniania usługi: tytuł strony usługi i cena „od”.

import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/lib/og";
import { getService, SERVICE_LIST } from "@/lib/uslugi";

export const alt = "Usługa Lunaris web";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return SERVICE_LIST.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  return ogImage({
    eyebrow: s?.price ? `Usługi · od ${s.price} netto` : "Usługi",
    title: s?.title ?? "Usługi",
  });
}
