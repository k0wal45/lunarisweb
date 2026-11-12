// manifest.webmanifest: nazwa, kolory i ikony przy dodaniu strony do ekranu początkowego.
// Ikony PNG generuje scripts/generate-icons.mjs.

import type { MetadataRoute } from "next";
import { SITE_DEFAULT, SITE_NAME } from "@/lib/seo";

const NIGHT = "#0E1320";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_DEFAULT.title,
    short_name: SITE_NAME,
    description: SITE_DEFAULT.description,
    lang: "pl",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: NIGHT,
    theme_color: NIGHT,
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { src: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
      {
        src: "/icons/icon-maskable-512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
  };
}
