import type { Metadata, Viewport } from "next";
import { Brygada_1918, Hanken_Grotesk } from "next/font/google";
import PlausibleProvider from "next-plausible";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/cn";
import "./globals.css";

const brygada = Brygada_1918({
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-brygada",
});

// Preload tylko Brygady (design.md, sekcja 5).
const hanken = Hanken_Grotesk({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-hanken",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lunarisweb.pl"),
  title: "Lunaris web — strony internetowe dla firm",
  description:
    "Projektuję i koduję strony oraz identyfikacje dla firm. Przyjmuję 1-2 nowe projekty miesięcznie.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Lunaris web",
    url: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E1320",
  colorScheme: "dark",
};

// next-plausible 4 nie przyjmuje już domeny, tylko adres skryptu przypisanego do domeny
// lunarisweb.pl w panelu Plausible. Włączone wyłącznie w buildzie produkcyjnym.
const plausibleSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${brygada.variable} ${hanken.variable}`}>
      <body>
        <div className="sky-bg" aria-hidden="true" />
        <a
          href="#tresc"
          className={cn(
            buttonVariants(),
            "absolute top-2 left-(--page-margin) z-60 translate-y-[-200%] focus-visible:translate-y-0",
          )}
        >
          Przejdź do treści
        </a>
        <Nav />
        {children}
        <Footer />
        {plausibleSrc && (
          <PlausibleProvider
            src={plausibleSrc}
            enabled={process.env.NODE_ENV === "production"}
          />
        )}
      </body>
    </html>
  );
}
