// Siatka strony (design.md, sekcja 6): rama o szerokości do 1440 px z marginesem
// clamp(20px, 5vw, 80px) i 12 kolumn z odstępem 24 px (16 px na telefonie).

import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

export const containerVariants = cva("mx-auto w-full max-w-(--page-max)", {
  variants: {
    size: {
      base: "px-(--page-margin) pt-14 pb-12 md:px-(--page-margin) md:pt-24 md:pb-24",
      stretch: "px-(--page-margin) pt-12 pb-14 md:pt-24",
      page: "px-(--page-margin)",
      none: "",
    },
  },
  defaultVariants: {
    size: "page",
  },
});

// "size" wyłączone z propsów elementu, żeby nie kolidowało z atrybutem HTML (np. <input size>)
type ContainerProps<E extends ElementType> = { as?: E } & VariantProps<
  typeof containerVariants
> &
  Omit<ComponentPropsWithoutRef<E>, "as" | "size">;

export function Container<E extends ElementType = "div">({
  as,
  size,
  className,
  ...rest
}: ContainerProps<E>) {
  const Tag: ElementType = as ?? "div";
  return (
    <Tag className={cn(containerVariants({ size }), className)} {...rest} />
  );
}

export const gridVariants = cva("grid grid-cols-12 gap-x-(--gutter)", {
  variants: {
    rows: {
      none: "",
      sm: "gap-y-6",
      md: "gap-y-12",
    },
  },
  defaultVariants: { rows: "none" },
});

type GridProps<E extends ElementType> = { as?: E } & VariantProps<
  typeof gridVariants
> &
  Omit<ComponentPropsWithoutRef<E>, "as">;

export function Grid<E extends ElementType = "div">({
  as,
  rows,
  className,
  ...rest
}: GridProps<E>) {
  const Tag: ElementType = as ?? "div";
  return <Tag className={cn(gridVariants({ rows }), className)} {...rest} />;
}
