// Link w tekście i w nawigacji (design.md, sekcje 9 i 12).
//   <TextLink href="/realizacje">Zobacz realizacje</TextLink>       — podkreślenie 1 px → 2 px
//   <TextLink variant="nav" href="/wiedza">Wiedza</TextLink>        — podkreślenie przy najechaniu i aria-current
//   <TextLink variant="menu" href="/o-mnie">O mnie</TextLink>       — duży link w menu na telefonie

import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { sierotki } from '@/lib/sierotki';

export const textLinkVariants = cva('decoration-1', {
  variants: {
    variant: {
      inline:
        'underline underline-offset-[0.2em] transition-[text-decoration-thickness] duration-(--dur-micro) ease-terminator hover:decoration-2',
      nav: 'text-ui no-underline underline-offset-[0.3em] hover:underline aria-[current=page]:underline',
      menu: 'block border-b border-edge py-2 font-display text-menu no-underline underline-offset-[0.15em] aria-[current=page]:underline',
    },
    weight: {
      regular: '',
      strong: 'font-semibold',
    },
    /** cel dotyku 44 px dla samodzielnych linków (sekcja 15) */
    target: {
      none: '',
      touch: 'inline-flex min-h-11 items-center',
    },
  },
  defaultVariants: { variant: 'inline', weight: 'regular', target: 'none' },
});

type TextLinkProps = VariantProps<typeof textLinkVariants> &
  Omit<ComponentPropsWithoutRef<typeof Link>, 'children'> & { children?: ReactNode };

export function TextLink({ variant, weight, target, className, children, ...rest }: TextLinkProps) {
  return (
    <Link className={cn(textLinkVariants({ variant, weight, target }), className)} {...rest}>
      {typeof children === 'string' ? sierotki(children) : children}
    </Link>
  );
}
