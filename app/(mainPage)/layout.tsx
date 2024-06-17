
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google'

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: 'Tworzenie Stron Internetowych - Katowice i Śląsk | Lunaris Web',
  description: 'Lunaris Web oferuje kompleksowe usługi tworzenia nowoczesnych, responsywnych i bezpiecznych stron internetowych. Specjalizujemy się w obsłudze klientów z Katowic i całego Śląska.',
  keywords: 'tworzenie stron internetowych, strony internetowe Katowice, strony internetowe Śląsk, responsywne strony, bezpieczne strony, Lunaris Web',
  authors: [{name: 'Daniel Kowalski', url: 'https://daniel-kowalski.com/'}],
  openGraph: {
    title: 'Profesjonalne Tworzenie Stron Internetowych - Katowice i Śląsk | Lunaris Web',
    description: 'Lunaris Web oferuje kompleksowe usługi tworzenia nowoczesnych, responsywnych i bezpiecznych stron internetowych. Specjalizujemy się w obsłudze klientów z Katowic i całego Śląska.',
    url: 'https://www.lunarisweb.com',
    type: 'website',
    locale: 'pl_PL',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@LunarisWeb',
    title: 'Profesjonalne Tworzenie Stron Internetowych - Katowice i Śląsk | Lunaris Web',
    description: 'Lunaris Web oferuje kompleksowe usługi tworzenia nowoczesnych, responsywnych i bezpiecznych stron internetowych. Specjalizujemy się w obsłudze klientów z Katowic i całego Śląska.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return ( 
    <html lang="pl">
      <body className={`${montserrat.className} bg-white text-black`}>
            <Navbar />
              {children}
            <Footer />
      </body>
      <GoogleAnalytics gaId={'G-LC4SHK59XE'}/>
    </html>
  );
}
