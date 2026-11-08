'use client';

// Nawigacja (design.md, sekcja 12): logo + 4 linki + „Kontakt” jako przycisk drugorzędny.
// Poniżej 960 px: przycisk-tarcza i menu pełnoekranowe na Noc.

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import Logo from '@/components/Logo';
import styles from './Nav.module.css';

const LINKS = [
  { href: '/realizacje', label: 'Realizacje', match: '/realizacje' },
  { href: '/uslugi/strony-internetowe', label: 'Usługi', match: '/uslugi' },
  { href: '/o-mnie', label: 'O mnie', match: '/o-mnie' },
  { href: '/wiedza', label: 'Wiedza', match: '/wiedza' },
] as const;

const CONTACT = { href: '/kontakt', label: 'Kontakt' } as const;
const MAIL = 'kontakt@lunarisweb.pl';
const PHONE = { href: 'tel:+48664447556', label: '+48 664 447 556' } as const;

const isCurrent = (pathname: string, match: string) =>
  pathname === match || pathname.startsWith(match + '/');

// Podstrony jeszcze nie istnieją, więc nie pobieramy ich z wyprzedzeniem (unikamy 404 w konsoli).
// TODO: usunąć prefetch={false}, gdy powstaną /realizacje, /uslugi, /o-mnie, /wiedza i /kontakt.
const PREFETCH = false;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    // fokus wraca na przycisk menu
    requestAnimationFrame(() => toggleRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = 'hidden';

    const focusables = () =>
      Array.from(menu?.querySelectorAll<HTMLElement>('a[href], button') ?? []);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      // fokus zostaje w menu, dopóki jest otwarte
      if (e.key === 'Tab') {
        const items = focusables();
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    // po poszerzeniu okna powyżej 960 px menu znika samo
    const wide = window.matchMedia('(min-width: 961px)');
    const onWide = () => wide.matches && setOpen(false);

    document.addEventListener('keydown', onKey);
    wide.addEventListener('change', onWide);
    return () => {
      root.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      wide.removeEventListener('change', onWide);
    };
  }, [open, close]);

  const onContact = pathname === CONTACT.href;

  return (
    <header className="wrap">
      <div className="nav">
        <Link href="/" className="brand" aria-label="Lunaris web — strona główna">
          <Logo />
          <span className="wordmark">
            Lunaris<span>web</span>
          </span>
        </Link>

        <nav aria-label="Główna" className="nav-links">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              prefetch={PREFETCH}
              className="plain"
              aria-current={isCurrent(pathname, l.match) ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={CONTACT.href}
            prefetch={PREFETCH}
            className={`btn ${onContact ? 'btn--primary' : 'btn--secondary'}`}
            aria-current={onContact ? 'page' : undefined}
          >
            {CONTACT.label}
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="disc nav-toggle"
          aria-label="Otwórz menu"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M5 9.5h14M5 14.5h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          id="menu"
          className={`menu ${styles.menu}`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className={styles.menuTop}>
            <Link href="/" className="brand" aria-label="Lunaris web — strona główna" onClick={close}>
              <Logo />
              <span className="wordmark">
                Lunaris<span>web</span>
              </span>
            </Link>
            <button type="button" className="disc" aria-label="Zamknij menu" onClick={close}>
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M6.5 6.5l11 11M17.5 6.5l-11 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>
          </div>

          <nav aria-label="Menu" className={styles.menuLinks}>
            {[...LINKS, { ...CONTACT, match: CONTACT.href }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                prefetch={PREFETCH}
                className="big"
                aria-current={isCurrent(pathname, l.match) ? 'page' : undefined}
                onClick={close}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className={styles.menuContact}>
            <a className="tlink" href={`mailto:${MAIL}`}>
              {MAIL}
            </a>
            <a className="tlink tnum" href={PHONE.href}>
              {PHONE.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
