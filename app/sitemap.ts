// sitemap.xml: strony stałe + usługi, realizacje i wpisy z lib/. Nowa realizacja albo wpis
// trafia tu sama, bo lista jest budowana z tych samych danych co strony.

import type { MetadataRoute } from "next";
import { workHref, WORKS } from "@/lib/realizacje";
import { absoluteUrl } from "@/lib/seo";
import { SERVICE_LIST } from "@/lib/uslugi";
import { POSTS } from "@/lib/wiedza";
import { postHref } from "@/lib/wiedza-kinds";

type Entry = MetadataRoute.Sitemap[number];

const page = (path: string, priority: number, lastModified?: string | null): Entry => ({
  url: absoluteUrl(path),
  priority,
  ...(lastModified ? { lastModified } : {}),
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    page("/", 1),
    ...SERVICE_LIST.map((s) => page(s.href, 0.9)),
    page("/realizacje", 0.8),
    ...WORKS.map((w) => page(workHref(w.slug), 0.7)),
    page("/o-mnie", 0.6),
    page("/kontakt", 0.8),
    page("/wiedza", 0.6),
    ...POSTS.map((p) => page(postHref(p.slug), 0.6, p.date)),
    page("/polityka-prywatnosci", 0.1),
  ];
}
