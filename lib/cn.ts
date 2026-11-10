// Łączenie klas: clsx (warunki) + tailwind-merge (późniejsza klasa wygrywa konflikt).
// tailwind-merge musi znać własne nazwy z @theme, inaczej np. `text-lead` (rozmiar)
// i `text-moon` (kolor) uznałby za ten sam konflikt i jedną z nich usunął.

import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: [
        'night', 'mare', 'edge', 'ash', 'ash-deep', 'moon', 'full', 'error', 'success',
        'plate', 'plate-line', 'moon-100', 'moon-200', 'moon-300', 'moon-400', 'moon-500',
      ],
      text: ['display', 'sales', 'h1', 'h2', 'item', 'h3', 'stat', 'menu', 'lead', 'body', 'ui', 'small'],
      font: ['display', 'text'],
      radius: ['disc'],
      ease: ['terminator'],
      breakpoint: ['sm', 'md', 'lg'],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
