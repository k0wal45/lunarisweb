import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strony internetowe Katowice — Lunaris Web | Tworzenie stron",
  description:
    "Tworzę nowoczesne strony internetowe w Katowicach. Responsywne, szybkie i zoptymalizowane pod SEO. Darmowa wycena.",
  keywords:
    "tworzenie stron internetowych, strony internetowe Katowice, strony internetowe Śląsk, responsywne strony, bezpieczne strony, Lunaris Web",
  authors: [{ name: "Daniel Kowalski", url: "https://daniel-kowalski.com/" }],
  openGraph: {
    title:
      "Profesjonalne Tworzenie Stron Internetowych - Katowice i Śląsk | Lunaris Web",
    description:
      "Tworzę nowoczesne strony internetowe w Katowicach. Responsywne, szybkie i zoptymalizowane pod SEO. Darmowa wycena.",
    url: "https://www.lunarisweb.pl",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LunarisWeb",
    title:
      "Profesjonalne Tworzenie Stron Internetowych - Katowice i Śląsk | Lunaris Web",
    description:
      "Tworzę nowoczesne strony internetowe w Katowicach. Responsywne, szybkie i zoptymalizowane pod SEO. Darmowa wycena.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />
      </head>
      <body className={`${montserrat.className} bg-white text-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId={"G-LC4SHK59XE"} />
    </html>
  );
}

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lunaris Web",
  image:
    "https://www.lunarisweb.pl/_next/image?url=%2Fimg%2Flogo.png&w=96&q=75",
  description:
    "Tworzenie nowoczesnych stron internetowych i stron firmowych w Katowicach.",
  url: "https://lunarisweb.pl",
  telephone: "+48-664-447-556",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Szczecińska 20a",
    addressLocality: "Katowice",
    addressRegion: "śląskie",
    postalCode: "40-139",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.278630966331875,
    longitude: 19.011518087354396,
  },
  openingHours: ["Mo-Fr 09:00-17:00", "Sa-Su 10:00-14:00"],
  sameAs: [
    "https://www.facebook.com/LunarisWeb",
    "https://www.instagram.com/lunarisweb.pl/",
  ],
  priceRange: "PLN 1000–10000",
};
