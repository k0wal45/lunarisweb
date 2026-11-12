"use client";

// Lista wpisów z filtrem (kanwas: „Wiedza /wiedza”): pierwszy wpis wyróżniony z grafiką,
// pozostałe w wierszach z liniami. Filtr pokazuje się dopiero, gdy są wpisy obu rodzajów.

import Link from "next/link";
import { useState } from "react";
import { Chip, ChipGroup, Tag, Typography } from "@/components/ui";
import { cn } from "@/lib/cn";
import { POST_FILTERS, POST_KINDS, postHref, type PostKind } from "@/lib/wiedza-kinds";

/** wpis bez komponentu treści: tylko to, co da się przekazać z serwera do klienta */
export type PostSummary = {
  slug: string;
  kind: PostKind;
  title: string;
  desc: string;
  meta: string;
};

const TITLE_HOVER = "decoration-1 underline-offset-[0.12em] group-hover:underline";

export default function PostsList({ posts }: { posts: readonly PostSummary[] }) {
  const [filter, setFilter] = useState<PostKind | "all">("all");
  const list = posts.filter((p) => filter === "all" || p.kind === filter);
  const [feat, ...rest] = list;
  const showFilter = new Set(posts.map((p) => p.kind)).size > 1;

  return (
    <>
      {showFilter && (
        <ChipGroup label="Rodzaj wpisu" className="mb-12">
          {POST_FILTERS.map((f) => (
            <Chip key={f.value} pressed={filter === f.value} onClick={() => setFilter(f.value)}>
              {f.label}
            </Chip>
          ))}
        </ChipGroup>
      )}

      {feat && (
        <Link
          href={postHref(feat.slug)}
          className="group grid grid-cols-12 items-end gap-x-(--gutter) gap-y-6 border-b border-edge pb-12 text-moon no-underline"
        >
          {/* TODO: grafika wpisu; na razie plansza Morze z łukiem terminatora */}
          <span
            aria-hidden="true"
            className="col-span-12 aspect-video bg-mare [clip-path:ellipse(150%_150%_at_0%_50%)] md:col-span-7"
          />
          <span className="col-span-12 md:col-span-4 md:col-start-9">
            <Tag>{POST_KINDS[feat.kind]}</Tag>
            <Typography as="span" variant="h2" className={cn("mt-4 block", TITLE_HOVER)}>
              {feat.title}
            </Typography>
            <Typography as="span" tone="muted" className="mt-4 block">
              {feat.desc}
            </Typography>
            {feat.meta && (
              <span className="mt-6 block text-small font-medium text-ash tabular-nums">{feat.meta}</span>
            )}
          </span>
        </Link>
      )}

      {rest.length > 0 && (
        <ul>
          {rest.map((p) => (
            <li key={p.slug} className="border-b border-edge">
              <Link
                href={postHref(p.slug)}
                className="group grid grid-cols-1 items-baseline gap-x-6 gap-y-2 py-8 text-moon no-underline sm:grid-cols-[minmax(0,7fr)_minmax(0,3fr)_auto]"
              >
                <span className={cn("font-display text-[1.75rem] leading-[1.2]", TITLE_HOVER)}>
                  {p.title}
                </span>
                <span className="text-small font-medium text-ash tabular-nums">{p.meta}</span>
                <Tag>{POST_KINDS[p.kind]}</Tag>
                <Typography as="span" variant="ui" tone="muted">
                  {p.desc}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
