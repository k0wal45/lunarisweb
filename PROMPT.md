# Prompt dla Claude Code: start nowej strony Lunaris web

> Jak użyć: utwórz pusty projekt przez `pnpm create next-app@latest . --ts --app --eslint` (na gałęzi `dev`), skopiuj folder `brand/` do katalogu głównego, uruchom Claude Code w tym katalogu i wklej wszystko poniżej linii.

---

Budujesz od zera nową stronę **Lunaris web** (lunarisweb.pl) — studio jednej osoby, Daniel Kowalski, projektuje i koduje strony dla firm usługowych. Projekt to świeży Next.js (App Router, TypeScript) na gałęzi `dev`.

**Menedżer paczek: wyłącznie pnpm.** Instalujesz przez `pnpm add` (zależności deweloperskie: `pnpm add -D`), skrypty uruchamiasz przez `pnpm <skrypt>`, jednorazowe narzędzia przez `pnpm dlx` zamiast `npx`. W repo ma być tylko `pnpm-lock.yaml`. Jeśli istnieje `package-lock.json` albo `yarn.lock`, usuń go razem z `node_modules` i zainstaluj ponownie przez `pnpm install`. W `package.json` ustaw pole `packageManager` na aktualną wersję pnpm (sprawdź ją przez `pnpm -v`).

## Źródła prawdy (przeczytaj, zanim napiszesz kod)

1. `brand/design.md` — design system v1.0. Obowiązuje w całości: kolory, kroje, siatka, ruch, mikrocopy, dostępność, wydajność.
2. `brand/lunaris.css` — działające tokeny i komponenty (przyciski z terminatorem, nawigacja, menu, poświata tła i inne). Przenieś je do projektu, nie wymyślaj ich od nowa.
3. `brand/moon/` — gotowy, sprawdzony księżyc: `lib/moon.ts`, `components/Moon.tsx`, `components/MoonCaption.tsx`.

**Jedno odstępstwo od design.md:** księżyc NIE jest shaderem WebGL (sekcje 11 i 18). Używamy rysowanego księżyca w SVG z `brand/moon/` — jest lżejszy i zgodny ze stylem glifów faz. Nie dodawaj three.js, OGL ani WebGL.

Jeśli coś w tych plikach jest sprzeczne albo niejasne, zatrzymaj się i zapytaj, zamiast zgadywać.

## Zakres tego zadania

Fundament projektu + **gotowa sekcja hero strony głównej z nawigacją i księżycem**. Nic więcej: pozostałe sekcje i podstrony powstaną w kolejnych zadaniach.

### 1. Biblioteki

Zainstaluj przez `pnpm add` aktualne stabilne wersje i nic ponad tę listę:

| Paczka | Po co | Teraz |
| --- | --- | --- |
| `gsap`, `@gsap/react` | sekcja procesu przypięta przy przewijaniu, później przejścia | tylko instalacja i plik `lib/gsap.ts`, który rejestruje `ScrollTrigger` po stronie klienta |
| `zod` | walidacja formularzy w Server Actions | tylko instalacja |
| `resend` | wysyłka zapytań z formularza | tylko instalacja + `.env.example` z `RESEND_API_KEY=` |
| `@marsidev/react-turnstile` | ochrona formularza (Cloudflare Turnstile) | tylko instalacja + `.env.example` z `NEXT_PUBLIC_TURNSTILE_SITE_KEY=` i `TURNSTILE_SECRET_KEY=` |
| `next-plausible` | analityka bez cookies | podłącz w `app/layout.tsx`, domena `lunarisweb.pl`, włączona tylko na produkcji |

Bez Tailwinda, bez bibliotek UI, bez Framer Motion, bez Lenis. Style: globalne klasy marki z `lunaris.css` + CSS Modules dla sekcji.

### 2. Struktura

```
app/
  layout.tsx            ← fonty, lang="pl", <div class="sky-bg">, Plausible
  page.tsx              ← na razie tylko <Hero />
  globals.css           ← @import tokenów i komponentów
  styles/
    tokens.css          ← :root z lunaris.css (kolory, pismo, układ, ruch)
    lunaris.css         ← komponenty i poświata z brand/lunaris.css
components/
  Nav/Nav.tsx, Nav.module.css         ← nawigacja + menu na telefonie
  Hero/Hero.tsx, Hero.module.css
  Moon.tsx, MoonCaption.tsx           ← skopiowane z brand/moon/components
  Logo.tsx                            ← znak zastępczy (patrz niżej)
lib/
  moon.ts                             ← z brand/moon/lib
  gsap.ts
  sierotki.ts                         ← twarde spacje (design.md, sekcja 2)
next.config.ts                        ← przekierowania 301 ze starych adresów
```

Alias `@/*` wskazuje katalog główny.

### 3. Fonty

`next/font/google`: **Brygada 1918** (400, 500) i **Hanken Grotesk** (400, 500, 600), `subsets: ['latin', 'latin-ext']`, `display: 'swap'`. Wystaw je jako zmienne CSS i podepnij pod `--font-display` i `--font-text` z tokenów. Preload tylko Brygady. Sprawdź, że ą ć ę ł ń ó ś ź ż i cudzysłowy „ ” renderują się w obu krojach.

### 4. Tło

W `layout.tsx` jako pierwszy element `<body>`: `<div className="sky-bg" aria-hidden="true" />`. Kolor Noc ma `html`, `body` jest przezroczyste (inaczej zakryje poświatę). Reguły poświaty skopiuj 1:1 z `lunaris.css` — animowany jest tylko `transform` i tylko na desktopie z myszą.

### 5. Nawigacja

Zgodnie z design.md (sekcja 12) i klasami `.nav`, `.brand`, `.wordmark`, `.nav-links`, `.menu`:

- Logo + znak słowny „Lunaris” z dopiskiem „web” po lewej; po najechaniu kreski logo wydłużają się o 20%.
- Linki: Realizacje (`/realizacje`), Usługi (`/uslugi/strony-internetowe`), O mnie (`/o-mnie`), Wiedza (`/wiedza`), oraz „Kontakt” (`/kontakt`) jako przycisk drugorzędny. Bieżąca strona: `aria-current="page"`.
- Poniżej 960 px: przycisk-tarcza z `aria-label="Otwórz menu"` i `aria-expanded`, menu pełnoekranowe na Noc, linki Brygadą 48 px, na dole mail i telefon. Zamykanie: przycisk, klawisz Escape, kliknięcie w link. Fokus wraca na przycisk menu.
- `components/Logo.tsx`: na razie znak zastępczy — SVG tarczy z garbem i trzema kreskami, dokładnie jak w `<svg class="brand">` z projektu (ścieżka `M20 2 A18 18 0 0 1 20 38 A12.728 18 0 0 1 20 2 Z`, kratery i smugi). Zostaw komentarz `TODO: podmienić na lunaris-logo-dark.svg`.

### 6. Hero

Komponent `<Hero variant="marka" | "sprzedaz" />`, domyślnie `"marka"`. Obie wersje mają ten sam układ i różnią się tylko treścią:

| | `marka` | `sprzedaz` |
| --- | --- | --- |
| `h1` | Pokażmy Twoją firmę w pełni. | Strony, które przynoszą zapytania firmom usługowym |
| Rozmiar `h1` | `--text-display` | `clamp(2.75rem, 1.6rem + 4.2vw, 5.5rem)`, max 15 znaków na linię |
| Lead | Projektuję i koduję strony oraz identyfikacje dla firm. Przyjmuję 1–2 nowe projekty miesięcznie. | Projektuję i koduję sam, więc od pierwszej rozmowy do publikacji masz jedną osobę. Katowice, Śląsk i cała Polska. Przyjmuję 1–2 nowe projekty miesięcznie. |
| Przycisk główny | Umów rozmowę → `/kontakt` | Umów rozmowę → `/kontakt` |
| Drugi krok | link „Zobacz realizacje” → `/realizacje` | przycisk drugorzędny „Sprawdź moją stronę za darmo” → `/#sprawdzenie` |
| Pod przyciskami | — | rząd 3 dowodów: `[X,X]` ocena w Google, 6 opinii / `[XX]` średni wynik Lighthouse / `[X]` stron dla firm (wartości w nawiasach zostaw jako stałe do uzupełnienia w jednym obiekcie na górze pliku) |
| Na dole | `<MoonCaption />` z glifem dzisiejszej fazy | jak w `marka` |

Wszystkie teksty przepuść przez `sierotki()`.

**Układ (desktop):** siatka 12 kolumn z `lunaris.css`. Tekst w kolumnach 1–6 (`sprzedaz`: 1–7), wyrównany do lewej. Księżyc po prawej: `position: absolute`, środek w pionie, szerokość `min(54vw, 860px)` (`sprzedaz`: `min(42vw, 640px)`), wychodzi poza prawą krawędź ekranu o `clamp(80px, 12vw, 220px)`. Sekcja ma `overflow: hidden`, tekst nigdy nie wychodzi poza ekran.

**Układ (poniżej 960 px):** księżyc nad hasłem, w przepływie dokumentu, 80% szerokości, przycięty przy prawej krawędzi. Bez poziomego przewijania strony przy 360 px.

**Nagłówek oświetlony:** klasa `.headline-lit` z design.md (gradient spadku światła z `--light-x` / `--light-y`) i obsługa `forced-colors`. Ref nagłówka przekaż do `<Moon lightTarget={...} />`, żeby światło kursora prowadziło też gradient tekstu. Najciemniejszy punkt tekstu nie schodzi poniżej Popiołu.

**Księżyc:** `<Moon />` z `brand/moon` bez zmian w logice. Ma `aria-hidden`, a dzisiejsza faza jest w tekście `<MoonCaption />`. Hero jest komponentem klienckim tylko tam, gdzie to konieczne — najlepiej mały kliencki wrapper wokół nagłówka i księżyca, reszta hero renderowana na serwerze.

**Ruch:** tylko wschód księżyca (jest w `Moon.tsx`) i reakcje na najechanie. Bez animacji wejścia tekstu, bez preloadera. Przy `prefers-reduced-motion` wszystko stoi.

### 7. Pomocnicze

- `lib/sierotki.ts`: zamienia spację po jednoliterowych wyrazach (a, i, o, u, w, z — także wielką literą) i między liczbą a jednostką (px, zł, %, s, ms, dni, tygodnie, min) na twardą spację ` `. Z testem jednostkowym w Vitest albo zwykłym `node:test` (bez instalowania ciężkiego frameworka, jeśli wystarczy `node:test`).
- `next.config.ts`: przekierowania stałe (`permanent: true`) `/portfolio` → `/realizacje`, `/portfolio/:slug` → `/realizacje/:slug`, `/blog` → `/wiedza`, `/blog/:slug` → `/wiedza/:slug`, `/omnie` → `/o-mnie`, `/uslugi/logotypy` → `/uslugi/identyfikacja-wizualna`. Jeden kanoniczny adres bez „www”.
- `app/layout.tsx`: `metadata` z tytułem „Lunaris web — strony internetowe dla firm”, opisem zgodnym z hero, `metadataBase: new URL('https://lunarisweb.pl')`, `themeColor` `#0E1320`, `lang="pl"`.

## Kryteria odbioru

Zanim powiesz, że skończyłeś, sprawdź i pokaż wyniki:

1. `pnpm build` i `pnpm lint` bez błędów i ostrzeżeń, TypeScript w trybie `strict`.
2. Brak ostrzeżeń o hydratacji w konsoli przeglądarki.
3. Zrzuty ekranu hero (Playwright, jeśli jest dostępny) w obu wariantach przy 1440 × 900 i 390 × 844. Obejrzyj je i popraw, jeśli tekst nachodzi na księżyc albo coś wychodzi poza ekran.
4. Lighthouse na telefonie dla `/` (build produkcyjny, `pnpm start`; Lighthouse przez `pnpm dlx lighthouse`): wydajność ≥ 95, dostępność 100, CLS = 0, LCP < 2,5 s. Podaj liczby.
5. Klawiatura: Tab przechodzi przez logo, linki, przyciski, menu; fokus widoczny (2 px, odsunięcie 3 px).
6. Kontrast każdej pary tekst/tło ≥ 4,5:1 (wartości z design.md, sekcja 4).
7. `prefers-reduced-motion: reduce` (emulacja w DevTools): księżyc od razu w dzisiejszej fazie, brak dryfu tła, brak zalań przycisków.
8. W całym kodzie tylko kolory z palety design.md, żadnych cieni, czystej czerni ani zaokrągleń poza tarczami.

Na koniec napisz krótko: co powstało, jakie biblioteki są zainstalowane i po co, wyniki z kryteriów odbioru i listę rzeczy do uzupełnienia (wartości w nawiasach, logo). Zrób commit na gałęzi `dev` z opisem „Fundament projektu i sekcja hero”. Nie pushuj i nie ruszaj gałęzi `main` ani `wersja-1`.
