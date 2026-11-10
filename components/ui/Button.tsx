// Przyciski-tarcze (design.md, sekcje 7, 9 i 12). Z `href` renderuje next/link, bez — <button>.
//   <Button href="/kontakt">Umów rozmowę</Button>
//   <Button variant="secondary" href="/#sprawdzenie">Sprawdź moją stronę za darmo</Button>
//   <Button variant="disc" size="icon" aria-label="Otwórz menu">…</Button>
// Zalanie terminatorem: utility `terminator` + kolor w --terminator-fill.

import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ReactNode, Ref } from "react";
import { cn } from "@/lib/cn";
import { sierotki } from "@/lib/sierotki";

export const buttonVariants = cva(
  [
    "terminator relative inline-flex shrink-0 cursor-pointer items-center justify-center w-fit",
    "rounded-disc font-text font-semibold leading-none whitespace-nowrap no-underline select-none",
    "transition-[transform,color,border-color] duration-(--dur-phase) ease-terminator",
    "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        /** tło Księżyc, tekst Noc; zalanie Pełnią */
        primary: "bg-moon text-night [--terminator-fill:var(--color-full)]",
        /** obrys 1 px Księżyc; zalanie Księżycem, tekst na Noc */
        secondary:
          "border border-moon bg-transparent text-moon [--terminator-fill:var(--color-moon)] hover:text-night focus-visible:text-night",
        /** na jasnej planszy: tło Noc, tekst Księżyc; zalanie Morzem */
        dark: "bg-night text-moon [--terminator-fill:var(--color-mare)] [--focus:var(--color-night)]",
        /** przycisk ikonowy: obrys Popiół, przy najechaniu Księżyc; zawsze z aria-label */
        disc: "border border-ash bg-transparent text-moon duration-(--dur-micro) hover:border-moon",
      },
      size: {
        md: "h-12 px-6 text-ui",
        sm: "h-11 px-[18px] text-ui",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonBase = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: ReactNode;
};

type ButtonAsLink = ButtonBase &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    ref?: Ref<HTMLAnchorElement>;
  };

type ButtonAsButton = ButtonBase &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
    ref?: Ref<HTMLButtonElement>;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const content = typeof children === "string" ? sierotki(children) : children;

  if (rest.href !== undefined) {
    return (
      <Link
        className={classes}
        {...(rest as Omit<ButtonAsLink, keyof ButtonBase>)}
      >
        {content}
      </Link>
    );
  }
  const { type = "button", ...buttonRest } = rest as Omit<
    ButtonAsButton,
    keyof ButtonBase
  >;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
