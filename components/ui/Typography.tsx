// Typografia marki (design.md, sekcja 5). Jeden komponent zamiast luźnych klas:
//   <Typography variant="display" tone="lit">Pokażmy Twoją firmę w pełni.</Typography>
//   <Typography variant="lead" tone="muted" as="div">…</Typography>
// Tekst podany jako string przechodzi przez sierotki() (twarde spacje, sekcja 2).

import { cva, type VariantProps } from "class-variance-authority";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  Ref,
} from "react";
import { cn } from "@/lib/cn";
import { sierotki } from "@/lib/sierotki";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      /** hasło marki w hero */
      display: "font-display text-display font-normal tracking-[-0.01em]",
      /** tytuł podstrony, CTA na końcu strony */
      h1: "font-display text-h1 font-normal tracking-[-0.01em]",
      /** nagłówek sekcji */
      h2: "font-display text-h2 font-normal tracking-[-0.01em]",
      /** nazwa realizacji, usługi, kroku procesu */
      item: "font-display text-item font-normal tracking-[-0.01em]",
      /** pytanie FAQ, cytat z opinii, obietnica */
      h3: "font-display text-h3 font-medium tracking-[-0.01em]",
      /** liczba w rzędzie dowodów: cyfry tabelaryczne */
      stat: "font-display text-stat font-normal tabular-nums",
      /** wstęp pod nagłówkiem */
      lead: "font-text text-lead max-w-[44ch]",
      body: "font-text text-body",
      /** przyciski, linki nawigacji, chipy */
      ui: "font-text text-ui font-medium",
      /** podpisy, etykiety, stopka, metadane */
      small: "font-text text-small font-medium",
    },
    tone: {
      default: "text-moon",
      muted: "text-ash",
      /** nagłówek oświetlony: gradient spadku światła; padding chroni ogonki i kreski pod linią */
      lit: "headline-lit pt-[0.08em] pb-[0.14em] -mt-[0.08em] -mb-[0.14em]",
      /** na jasnej planszy */
      dark: "text-night",
      inherit: "",
    },
  },
  defaultVariants: { variant: "body", tone: "default" },
});

type Variant = NonNullable<VariantProps<typeof typographyVariants>["variant"]>;

const DEFAULT_ELEMENT: Record<Variant, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  item: "h3",
  h3: "h3",
  stat: "span",
  lead: "p",
  body: "p",
  ui: "span",
  small: "p",
};

type TypographyProps<E extends ElementType> = VariantProps<
  typeof typographyVariants
> & {
  as?: E;
  ref?: Ref<HTMLElement>;
  children?: ReactNode;
  /** domyślnie true: sierotki() dla tekstu podanego jako string */
  nbsp?: boolean;
} & Omit<ComponentPropsWithoutRef<E>, "as" | "children" | "color">;

export function Typography<E extends ElementType = "p">({
  as,
  variant,
  tone,
  nbsp = true,
  className,
  children,
  ...rest
}: TypographyProps<E>) {
  const Tag: ElementType = as ?? DEFAULT_ELEMENT[variant ?? "body"];
  const content =
    nbsp && typeof children === "string" ? sierotki(children) : children;
  return (
    <Tag
      className={cn(typographyVariants({ variant, tone }), className)}
      {...rest}
    >
      {content}
    </Tag>
  );
}
