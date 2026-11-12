// Strona 404: nieznany adres i notFound() w trasach (np. nieznany slug realizacji).
// Renderuje się w głównym layoucie, więc ma nawigację i stopkę. Treść w lib/not-found.ts.

import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import NotFoundHero from "@/components/NotFound/NotFoundHero";
import NotFoundLinks from "@/components/NotFound/NotFoundLinks";
import { NOT_FOUND } from "@/lib/not-found";

export const metadata: Metadata = NOT_FOUND.meta;

export default function NotFound() {
  return (
    <main id="tresc">
      <NotFoundHero />
      <NotFoundLinks />
      <CtaBand />
    </main>
  );
}
