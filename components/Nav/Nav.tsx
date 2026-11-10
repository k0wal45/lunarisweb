"use client";

// Nawigacja (design.md, sekcja 12): logo + 4 linki + „Kontakt” jako przycisk drugorzędny
// (na stronie Kontakt: główny). Poniżej 960 px: przycisk-tarcza i menu pełnoekranowe na Noc.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Logo, { Wordmark } from "@/components/Logo";
import { Button, Container, TextLink, textLinkVariants } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  CONTACT_LINK as CONTACT,
  isCurrent,
  MAIL,
  NAV_LINKS as LINKS,
  PHONE,
  PREFETCH,
  type NavLink,
} from "@/lib/site";
import { MenuServices, ServicesDropdown } from "./ServicesNav";

const BRAND = "group inline-flex items-center gap-3.5 text-moon no-underline";

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 9.5h14M5 14.5h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6.5 6.5l11 11M17.5 6.5l-11 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

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
    root.style.overflow = "hidden";

    const focusables = () =>
      Array.from(menu?.querySelectorAll<HTMLElement>("a[href], button") ?? []);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      // fokus zostaje w menu, dopóki jest otwarte
      if (e.key === "Tab") {
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
    const wide = window.matchMedia("(min-width: 961px)");
    const onWide = () => wide.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      root.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open, close]);

  // tło nawigacji pojawia się dopiero po przewinięciu poniżej 100 px
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      setScrolled(window.scrollY > 100);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const onContact = isCurrent(pathname, CONTACT.match);

  return (
    <>
      <Container className="fixed top-0 left-1/2 -translate-x-1/2 z-100">
        {/* gradientu nie da się płynnie przejść z transparent, więc tło to osobna warstwa z opacity */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-night to-mare rounded-b-[calc(var(--nav-h)/2)] border-edge border-b border-x",
            "transition-opacity duration-300 ease-out motion-reduce:transition-none",
            scrolled ? "opacity-100" : "opacity-0",
          )}
        />
        <div className="flex h-(--nav-h) items-center justify-between gap-6">
          <Link
            href="/"
            className={BRAND}
            aria-label="Lunaris web — strona główna"
          >
            <Logo />
            <Wordmark />
          </Link>

          <nav
            aria-label="Główna"
            className="hidden items-center gap-9 md:flex"
          >
            {LINKS.map((l) =>
              l.children ? (
                <ServicesDropdown
                  key={l.href}
                  label={l.label}
                  items={l.children}
                  pathname={pathname}
                  prefetch={PREFETCH}
                />
              ) : (
                <TextLink
                  key={l.href}
                  href={l.href}
                  prefetch={PREFETCH}
                  variant="nav"
                  aria-current={
                    isCurrent(pathname, l.match) ? "page" : undefined
                  }
                >
                  {l.label}
                </TextLink>
              ),
            )}
            <Button
              href={CONTACT.href}
              prefetch={PREFETCH}
              variant={onContact ? "primary" : "secondary"}
              aria-current={onContact ? "page" : undefined}
            >
              {CONTACT.label}
            </Button>
          </nav>

          <Button
            ref={toggleRef}
            variant="disc"
            size="icon"
            className="md:hidden"
            aria-label="Otwórz menu"
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </Button>
        </div>
      </Container>

      {/* menu poza kontenerem: jego transform zamyka fixed w pasku nawigacji zamiast w oknie */}
      {open && (
        <div
          ref={menuRef}
          id="menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-110 flex flex-col overflow-y-auto overscroll-contain bg-night px-(--page-margin) pt-6"
        >
          {/* pasek o wysokości nawigacji: 24 + 48 + 24 = 96 px */}
          <div className="mb-6 flex h-12 shrink-0 items-center justify-between gap-6">
            <Link
              href="/"
              className={BRAND}
              aria-label="Lunaris web — strona główna"
              onClick={close}
            >
              <Logo />
              <Wordmark />
            </Link>
            <Button
              variant="disc"
              size="icon"
              aria-label="Zamknij menu"
              onClick={close}
            >
              <CloseIcon />
            </Button>
          </div>

          <nav
            aria-label="Menu"
            className="flex shrink-0 flex-col border-t border-edge"
          >
            {[...LINKS, CONTACT].map((l: NavLink) =>
              l.children ? (
                <MenuServices
                  key={l.href}
                  label={l.label}
                  items={l.children}
                  pathname={pathname}
                  prefetch={PREFETCH}
                  onNavigate={close}
                />
              ) : (
                <TextLink
                  key={l.href}
                  href={l.href}
                  prefetch={PREFETCH}
                  variant="menu"
                  aria-current={
                    isCurrent(pathname, l.match) ? "page" : undefined
                  }
                  onClick={close}
                >
                  {l.label}
                </TextLink>
              ),
            )}
          </nav>

          <div className="mt-auto flex shrink-0 flex-col items-start gap-3 py-8">
            <a
              className={cn(textLinkVariants({ target: "touch" }))}
              href={`mailto:${MAIL}`}
            >
              {MAIL}
            </a>
            <a
              className={cn(
                textLinkVariants({ target: "touch" }),
                "tabular-nums",
              )}
              href={PHONE.href}
            >
              {PHONE.label}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
