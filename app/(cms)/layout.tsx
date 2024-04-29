
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../(mainPage)/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lunaris Web - CMS",
  description: "Staff access only",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pl">
      <body className={`${montserrat.className}`}>
          {children}
      </body>
    </html>
  );
}
