// Rodzaje wpisów w dziale Wiedza. Osobny plik, bo używa go też lista po stronie klienta
// (components/Posts), a lib/wiedza.ts importuje treści wpisów.

export type PostKind = "art" | "lab";

export const POST_KINDS: Record<PostKind, string> = { art: "Artykuł", lab: "Lab" };

export const POST_FILTERS: { value: PostKind | "all"; label: string }[] = [
  { value: "all", label: "Wszystko" },
  { value: "art", label: "Artykuły" },
  { value: "lab", label: "Lab" },
];

export const postHref = (slug: string) => `/wiedza/${slug}`;
