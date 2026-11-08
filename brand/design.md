# Lunaris web — design system

Wersja 1.0, 7 listopada 2026. Zastępuje wersję 0.2 z 6 listopada.

Ten plik jest źródłem prawdy dla wszystkiego, co nosi nazwę Lunaris: strony lunarisweb.pl, banerów, reklam w social mediach, wizytówek, faktur, ofert i prezentacji. Zmiana koloru, kroju czy zasady zaczyna się tutaj, a dopiero potem trafia do kodu i szablonów.

**Jak z niego korzystać przy nowym projekcie:**

1. Przeczytaj sekcję 1 (idea i dziesięć reguł). To wystarcza, żeby nie zrobić nic sprzecznego z marką.
2. Weź tokeny z sekcji 4–7 albo gotowy kod z sekcji 18.
3. Otwórz rozdział swojego nośnika w sekcji 16 (strona, baner, social, wizytówka, druk, dokumenty).
4. Przed publikacją przejdź checklistę z sekcji 20.

---

## Spis treści

1. Idea i dziesięć reguł
2. Marka, przekaz i głos
3. Logo
4. Kolor
5. Typografia
6. Układ i siatka
7. Kształty, powierzchnie i ikony
8. Tło: poświata nocnego nieba
9. Ruch
10. Fotografia
11. Grafika: księżyc i fazy
12. Komponenty strony
13. Szablony stron
14. Wzorce sprzedażowe
15. Dostępność i wydajność
16. Nośniki: strona, banery, social, druk, dokumenty
17. Pliki i nazewnictwo
18. Kod
19. Czego nie robimy
20. Checklista przed publikacją
21. Zmiany względem wersji 0.2
22. Do decyzji

---

## 1. Idea i dziesięć reguł

### Idea: atlas księżyca

Lunaris znaczy „księżycowy”. Identyfikacja nie ilustruje kosmosu, tylko pracuje światłem, jak dawne atlasy księżyca: ciemna plansza, jedno źródło światła, precyzyjny podpis. Księżyc nie świeci sam, tylko pokazuje to, co oświetli słońce. Tak samo strona ma pokazać firmę klienta, a nie styl projektanta.

Wszystko powstaje z pięciu motywów:

| Motyw | Co to jest | Gdzie pracuje |
| --- | --- | --- |
| **Tarcza** | koło z logo | wszystko, co okrągłe, da się kliknąć: przyciski, chipy, tagi, przycisk menu |
| **Terminator** | linia między światłem a cieniem | kształt zalania przycisku, wejścia podglądu, przejść, masek obrazów |
| **Fazy** | 8 faz księżyca | etapy procesu, loader, podpis z dzisiejszą fazą, potwierdzenie wysłania (pełnia) |
| **Smugi** | kreski i kropki z logo | ruch i szybkość; tylko w logo i jego reakcji na najechanie |
| **Poświata** | miękkie światło na nocnym niebie | tło całej strony i statycznych materiałów na ciemnym tle |

**Jedna rzecz do zapamiętania:** księżyc w hero pokazuje dzisiejszą prawdziwą fazę, a potem światło przejmuje kursor. Wszystko wokół jest ciche i zdyscyplinowane.

### Dziesięć reguł

1. **Okrągłe = interaktywne, prostokątne = treść.** Przycisk, chip i tag są tarczą. Zdjęcie, nagranie, pole formularza i sekcja są planszą bez zaokrągleń.
2. **Jedynym kolorem marki jest światło.** Paleta to noc, powierzchnia księżyca i blask. Nie ma koloru akcentu.
3. **Dwa kroje o stałych rolach.** Brygada 1918 mówi (nagłówki, liczby, cytaty), Hanken Grotesk informuje (tekst, interfejs).
4. **Jeden efekt „wow” na materiał.** Na stronie to księżyc w hero. Na banerze to faza albo poświata. Nigdy kilka naraz.
5. **Liczby zamiast przymiotników.** „Lighthouse 98” zamiast „szybka strona”. Każdy materiał ma co najmniej jeden konkret.
6. **Jeden cel na materiał.** Strona, podstrona, baner i post kończą się jednym wezwaniem do działania.
7. **Pierwsza osoba.** „Projektuję”, „odpiszę”. Nigdy „my”, „nasz zespół”.
8. **Bez cieni, gwiazdek, mgławic i fioletu.** Głębię daje powierzchnia Morze na tle Noc.
9. **Polska typografia.** Polskie cudzysłowy, półpauzy, twarde spacje po jednoliterowych wyrazach.
10. **Dostępność to część projektu.** Kontrast co najmniej 4,5:1, widoczny fokus, ograniczony ruch obsłużony.

---

## 2. Marka, przekaz i głos

### Kim jest Lunaris

Niezależne studio jednej osoby. Daniel Kowalski projektuje i koduje sam, więc klient rozmawia z tym, kto robi pracę. Przyjmuje 1–2 nowe projekty miesięcznie.

| Element | Treść |
| --- | --- |
| Nazwa w identyfikacji | Lunaris web (znak „Lunaris”, dopisek „web”) |
| Nazwa firmy (faktury, stopka) | Lunaris Daniel Kowalski |
| Domena | lunarisweb.pl |
| Mail | kontakt@lunarisweb.pl |
| Telefon | +48 664 447 556 |
| Obszar | Katowice, Śląsk i cała Polska |

### Dla kogo, w kolejności ważności

1. Małe i średnie firmy usługowe: medycyna, motoryzacja, kancelarie, usługi lokalne.
2. Agencje i projektanci, którzy potrzebują front-endu z Figmy do kodu.
3. Wydarzenia i projekty technologiczne.

**Dla kogo nie:** sklepy z tysiącami produktów, najtańsza strona z szablonu, strona na wczoraj.

### Oferta: trzy filary

| Filar | Jedno zdanie |
| --- | --- |
| Strony internetowe | Kod od zera w Next.js albo WordPress, gdy klient chce sam edytować treści. |
| Identyfikacja wizualna | Logo, kolory i kroje, które działają tak samo na stronie, fakturze i w social mediach. |
| Front-end dla agencji | Z Figmy do kodu, z opieką techniczną po publikacji. |

### Wyróżniki, które da się udowodnić

- Projekt i kod w jednych rękach, bez pośredników.
- Dwie ścieżki techniczne: kod od zera albo WordPress.
- Wynik Lighthouse i Core Web Vitals pokazany w każdej realizacji.
- Komercyjne doświadczenie front-end developera i studia informatyczne na Politechnice Śląskiej.

### Hasła

| Rola | Hasło | Gdzie |
| --- | --- | --- |
| Hasło marki | Pokażmy Twoją firmę w pełni. | hero wersji „marka”, okładki, wizytówka, stopka, materiały wizerunkowe |
| Hasło sprzedażowe | Strony, które przynoszą zapytania firmom usługowym. | hero wersji „sprzedaż”, banery, reklamy |
| Hasło procesu | Od nowiu do pełni. | sekcja procesu, oferta PDF, case study |
| Hasło wyróżnika | Projekt i kod w jednych rękach. | podtytuły, posty, LinkedIn |

Hasło marki jest grą słów i buduje wizerunek, ale samo nie mówi, co klient dostaje. **Na materiałach sprzedażowych zawsze stoi obok niego konkret:** co, dla kogo, jaki dowód.

### Głos

- Pierwsza osoba liczby pojedynczej: „projektuję”, „odpiszę w ciągu 2 dni”.
- Krótkie zdania. Jedno zdanie = jedna myśl.
- Konkretne liczby zamiast przymiotników.
- Zwykłe słowa. Klient to przychodnia i laweta, nie startup.
- Spokojna pewność siebie. Bez wykrzykników, bez „!!!”, bez emoji w materiałach marki.

| Piszemy | Nie piszemy |
| --- | --- |
| Projektuję i koduję strony | Tworzymy innowacyjne rozwiązania |
| Strona ładuje się w 1,8 s | Błyskawicznie szybka strona |
| Odpiszę w ciągu 2 dni roboczych | Skontaktujemy się wkrótce |
| Umów rozmowę | Kliknij tutaj, Dowiedz się więcej → |
| Cena od 3 000 zł netto | Atrakcyjne ceny, Zapytaj o cenę |
| Dla firm usługowych ze Śląska | Dla każdego, kompleksowo |

### Mikrocopy

| Akcja | Przycisk | Potwierdzenie |
| --- | --- | --- |
| Wysłanie formularza | Wyślij zapytanie | Zapytanie wysłane. Odpiszę w ciągu [X] dni roboczych. |
| Rezerwacja rozmowy | Umów rozmowę | Rozmowa umówiona: [dzień, godzina]. Link do spotkania jest w mailu. |
| Darmowe sprawdzenie strony | Wyślij do sprawdzenia | Adres przyjęty. Wyniki wyślę w ciągu [X] dni roboczych. |
| Oferta PDF | Pobierz ofertę | — |
| Przejście do realizacji | Zobacz realizację | — |
| Szybki kontakt na telefonie | Zadzwoń / Napisz | — |

Komunikaty błędów mówią, co się stało i co zrobić, bez przepraszania:

- „Wpisz adres e-mail w formacie nazwa@firma.pl.”
- „Wybierz rodzaj projektu z listy.”
- „Zaznacz zgodę, żebym mógł odpisać na zapytanie.”
- „Nie udało się wysłać zapytania. Sprawdź połączenie i spróbuj ponownie albo napisz na kontakt@lunarisweb.pl.”
- 404: „Tej strony tu nie ma — jest w nowiu. Wróć na stronę główną albo zobacz realizacje.”

### Zasady pisma

- Wielka litera tylko na początku zdania i w nazwach własnych, także w przyciskach, menu i etykietach. Bez wersalików.
- Bez nadtytułów nad nagłówkami i bez wyróżniania jednego słowa kursywą czy kolorem.
- Wyrównanie do lewej, bez justowania. Linia tekstu do 64 znaków.
- Polskie cudzysłowy „ ” (wewnątrz ‚ ’). Półpauza w zakresach bez spacji (1–2, 2025–2026), półpauza ze spacjami jako myślnik.
- Twarde spacje po jednoliterowych wyrazach (a, i, o, u, w, z) i między liczbą a jednostką (16 px, 2 tygodnie). W kodzie robi to funkcja `sierotki()`, w materiałach graficznych sprawdzamy ręcznie.
- Liczby w cenach i tabelach: cyfry tabelaryczne. Tysiące oddziela spacja: 3 000 zł. Ułamki z przecinkiem: 2,5 s.

---

## 3. Logo

Zostaje obecne logo: księżyc z kraterami, cieniem po lewej stronie i smugami ruchu. Cień po lewej to faza przybywająca (garb przybywający, indeks 3), a smugi mówią o szybkości.

### Budowa

| Element | Znaczenie | Warstwa w pliku |
| --- | --- | --- |
| Tarcza z obwódką | księżyc, marka | `ksiezyc` (`path4`) |
| Cień po lewej, 4 tony | terminator, faza przybywająca | `wypelnienie` |
| Kratery | powierzchnia księżyca | `g40` |
| Ukośne smugi przez tarczę | ruch | `smugi` (`g16`) |
| Kreski i kropki po prawej | prędkość, szybkie strony | `smugi za ksiezycem` (`g23`) |
| Obwódka wokół elementów (halo) | oddziela smugi od tarczy | `obwod` (`g100`) |

### Wersje

| Plik | Tło | Uwagi |
| --- | --- | --- |
| `lunaris-logo-dark.svg` | Noc, Morze, ciemne zdjęcia | podstawowa wersja: linie Księżyc, halo Noc, szarości w chłodnej rampie |
| `lunaris-logo-light.svg` | białe, Księżyc, druk | linie Noc zamiast czystej czerni |
| `lunaris-mark.svg` | ciemne i jasne | sama tarcza bez smug: favicon, awatar, małe rozmiary |
| `logo.svg` (oryginał) | — | archiwum; nie używamy |

> Projekty na kanwasie Design używają tymczasowego znaku zastępczego (tarcza z garbem i trzema kreskami). Przed publikacją podmieniamy go na `lunaris-logo-dark.svg`.

### Znak słowny i układ

- „Lunaris” w Brygada 1918 Regular, `letter-spacing: -0.01em`; dopisek „web” w Hanken Grotesk Medium, 38% wysokości znaku słownego, na wspólnej linii bazowej, odstęp 0,25 em.
- Układ poziomy: logo po lewej, znak słowny po prawej, wyśrodkowany w pionie względem tarczy. Wysokość „L” = 40% średnicy tarczy, odstęp od końca kresek = ¼ średnicy.
- Układ pionowy (awatar, wizytówka, okładki, banery pionowe): logo nad znakiem słownym, wyśrodkowane.
- Pole ochronne: ¼ średnicy tarczy wokół całości, liczone od końców smug.
- Minimum: pełne logo 48 px wysokości (15 mm w druku). Poniżej tylko `lunaris-mark.svg`. Favicon 16 px sprawdzić na żywo, w razie potrzeby uproszczony do tarczy z dwoma kraterami.

| Nośnik | Wersja logo | Wysokość |
| --- | --- | --- |
| Nawigacja strony | pozioma + znak słowny | 40 px |
| Stopka strony | tarcza + gigantyczny znak słowny | znak 21vw (do 320 px) |
| Baner 300×250 | pozioma bez dopisku albo sama tarcza | 24–28 px |
| Baner 728×90, 320×50 | sama tarcza + „Lunaris” | 60% wysokości paska |
| Post 1080×1350 | pozioma, lewy górny róg | 56–64 px |
| Wizytówka (przód) | pionowa, wyśrodkowana | tarcza 18–22 mm |
| Faktura, oferta | pozioma, lewy górny róg | 12–15 mm |

**Nie wolno:** używać oryginału z białą obwódką na ciemnym tle, obracać logo, odwracać kierunku smug, kolorować kraterów, dodawać gradientów, cieni i gwiazdek, rozciągać tarczy względem smug, stawiać glifów faz obok logo.

### Kierunki rozwoju (na później)

1. **Szlif.** Ujednolicić grubości, zaokrąglenia i odstępy kresek, uprościć kontury cieni.
2. **Smugi alfabetem Morse’a.** 7 rzędów kresek i kropek zapisuje „LUNARIS”: L `·−··`, U `··−`, N `−·`, A `·−`, R `·−·`, I `··`, S `···`.
3. **Żywe logo.** Tarcza renderowana shaderem i oświetlana kursorem; kreski wydłużają się z prędkością przewijania.

---

## 4. Kolor

### Paleta podstawowa (tło Noc)

| Nazwa | Token | Hex | Rola | Kontrast na Noc |
| --- | --- | --- | --- | --- |
| Noc | `--color-night` | `#0E1320` | tło wszystkiego; granatowa czerń nocnego nieba | — |
| Morze | `--color-mare` | `#1B2232` | powierzchnie: pola, plansze, podglądy, nieoświetlona tarcza | — |
| Krawędź | `--color-edge` | `#2C3548` | wyłącznie linie dekoracyjne między pozycjami list | 1,5:1 |
| Popiół | `--color-ash` | `#8A94A8` | tekst drugorzędny, podpisy, obramowanie pól | 6,1:1 |
| Księżyc | `--color-moon` | `#E6E8EC` | tekst główny, przycisk główny, jasne plansze | 15,3:1 |
| Pełnia | `--color-full` | `#FFFFFF` | tylko blask: hover przycisku, najjaśniejszy punkt nagłówka i księżyca | 18,7:1 |

### Jasne plansze

Opinie, case studies, tył wizytówki, środek oferty PDF.

| Rola | Hex | Kontrast na Księżyc |
| --- | --- | --- |
| Tło | `#E6E8EC` (Księżyc) | — |
| Tekst | `#0E1320` (Noc) | 15,3:1 |
| Tekst drugorzędny | `#4A5468` (Popiół ciemny) | 6,2:1 |
| Powierzchnia | `#D9DCE2` | — |
| Linie | `#C3C8D1` | — |

### Rampa księżyca

Tony logo przesunięte w stronę granatu. Tylko w logo, renderach i ilustracjach, nigdy jako kolor tekstu ani tła.

| Token | Hex | W oryginale |
| --- | --- | --- |
| `--moon-100` | `#CDD2DB` | `#D3D3D3`, oświetlona powierzchnia |
| `--moon-200` | `#A3AABA` | `#ADADAD` |
| `--moon-300` | `#7A8396` | `#848484` |
| `--moon-400` | `#545D70` | `#5D5D5D` |
| `--moon-500` | `#262D3D` | `#2E2E2E`, kratery |

### Kolory funkcjonalne

Tylko w formularzach na tle Noc lub Morze: **Błąd** `#FF8A7A` (8,2:1) i **Sukces** `#7FD1A8` (10,3:1). Sukces może też oznaczać „dobry” próg w tabeli wyników. Nigdy jako dekoracja.

### Proporcje

| Kolor | Udział w kadrze | Uwagi |
| --- | --- | --- |
| Noc | 60–80% | tło |
| Morze | do 25% | plansze, pola |
| Księżyc | 8–15% | tekst, przycisk główny, jasne plansze |
| Popiół, Krawędź | reszta | podpisy, linie |
| Pełnia | poniżej 1% | tylko blask |

### Dozwolone gradienty

Są tylko dwa i oba są światłem, a nie dekoracją:

1. **Spadek światła** — radialny, od Pełni przez Księżyc do Popiołu, liczony od źródła światła. Tylko na nagłówku hero (`.headline-lit`) i na renderze księżyca. Najciemniejszy punkt tekstu nie schodzi poniżej Popiołu.
2. **Poświata nieba** — dwie miękkie plamy w tonach palety na tle Noc. Specyfikacja w sekcji 8.

Poza tym: żadnych innych odcieni, fioletów, „kosmicznych” gradientów, czystej czerni `#000` ani przezroczystych nakładek kolorowych na zdjęciach.

### Kolor w druku

- Plikiem źródłowym jest sRGB. Do druku drukarnia konwertuje profilem dla papieru (np. FOGRA39 dla powlekanego, FOGRA29 dla niepowlekanego). Zawsze zamawiamy proof, bo granatowa Noc łatwo wychodzi w druku jako szara albo fioletowa.
- Noc na dużych powierzchniach (przód wizytówki, okładka) drukujemy jako głęboką czerń z domieszką cyjanu, nie jako samą czerń K. Wartości ustalamy z drukarnią na proofie i dopisujemy tutaj.
- Drobny tekst (poniżej 9 pt) nie stoi na dużej powierzchni Noc, bo jasne litery na ciemnym druku łatwo się zalewają. Dane kontaktowe i drobne podpisy dajemy na jasnej stronie (np. na tyle wizytówki).
- Faktura i dokumenty: białe tło, tekst Noc, logo `lunaris-logo-light.svg`.

---

## 5. Typografia

| Rodzina | Rola | Dlaczego |
| --- | --- | --- |
| **Brygada 1918** | znak słowny, nagłówki, cytaty, duże liczby, nazwy realizacji i usług | Polski krój szeryfowy, cyfrowa rewitalizacja przedwojennej czcionki z 2018 r. Licencja OFL, Google Fonts. Klimat dawnego atlasu i zaufanie dla kancelarii i przychodni. |
| **Hanken Grotesk** | tekst, interfejs, przyciski, formularze, tabele, dane kontaktowe | Spokojny grotesk o okrągłych formach, z cyframi tabelarycznymi. OFL, Google Fonts. |

Grubości w użyciu: Brygada 400 i 500, Hanken 400, 500 i 600. Bez kursywy, z wyjątkiem tytułów dzieł w tekście ciągłym.

### Skala ekranowa

Stopnie z klasycznej skali (14, 18, 21, 24, 36, 48, 72), powyżej 72 tylko hero.

| Token | Rozmiar | Krój | Interlinia | Grubość | Użycie |
| --- | --- | --- | --- | --- | --- |
| `--text-display` | 56 → 144 px | Brygada | 1,0 | 400 | hasło marki w hero |
| hasło sprzedażowe | 44 → 88 px | Brygada | 1,02 | 400 | hero wersji „sprzedaż” (dłuższe hasło, mniejszy stopień) |
| `--text-h1` | 44 → 72 px | Brygada | 1,05 | 400 | tytuł podstrony, CTA na końcu strony |
| `--text-h2` | 36 → 48 px | Brygada | 1,1 | 400 | nagłówek sekcji |
| nazwa pozycji | 36 px (28 px na telefonie) | Brygada | 1,1 | 400 | realizacja, usługa, krok procesu |
| `--text-h3` | 24 px | Brygada | 1,25 | 500 | pytanie FAQ, cytat z opinii, obietnica |
| liczba | 36–72 px | Brygada | 1,0 | 400 | wyniki, ceny; cyfry tabelaryczne |
| `--text-lead` | 21 px | Hanken | 1,5 | 400 | wstęp pod nagłówkiem |
| `--text-body` | 18 px | Hanken | 1,6 (artykuł 1,7) | 400 | tekst |
| UI | 16 px | Hanken | 1,0–1,5 | 500–600 | przyciski, linki nawigacji, chipy |
| `--text-small` | 14 px | Hanken | 1,5 | 500 | podpisy, etykiety pól, stopka, metadane |

### Skala w druku

| Element | Krój | Stopień |
| --- | --- | --- |
| Tytuł okładki oferty | Brygada 400 | 36–48 pt |
| Nagłówek sekcji w ofercie | Brygada 400 | 18–21 pt |
| „Faktura VAT nr …” | Brygada 400 | 21 pt |
| Tekst oferty | Hanken 400 | 10–11 pt / 15 pt |
| Dane w fakturze, tabele | Hanken 400, tabelaryczne | 9–10 pt |
| Imię na wizytówce | Brygada 400 | 11–12 pt |
| Dane na wizytówce | Hanken 400–500 | 7,5–8 pt, nigdy poniżej 7 pt |
| Ulotka: hasło / tekst | Brygada / Hanken | 28–40 pt / 9–10 pt |

### Skala w banerach i social media

Rozmiary podajemy w pikselach dla każdego formatu w sekcji 16. Zasada ogólna: hasło Brygadą zajmuje 10–14% krótszego boku (stopień kroju), tekst pomocniczy Hanken nie mniej niż 4% krótszego boku i nie mniej niż 11 px.

### Ładowanie fontów

- Next.js: `next/font/google`, `subsets: ['latin', 'latin-ext']`, `display: 'swap'`, preload tylko Brygady. Self-hosting zamiast linku do Google Fonts na produkcji.
- Projekty graficzne: instalujemy oba kroje z Google Fonts. Przed startem sprawdzamy ą ć ę ł ń ó ś ź ż i cudzysłowy „ ” w obu krojach.

---

## 6. Układ i siatka

### Strona

| Element | Wartość |
| --- | --- |
| Siatka | 12 kolumn, odstęp 24 px; na telefonie odstęp 16 px |
| Margines strony | `clamp(20px, 5vw, 80px)` |
| Maksymalna szerokość | 1440 px |
| Punkty przełamania | 640, 960, 1280 px |
| Odstępy (skala 4 px) | 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192 |
| Odstęp między sekcjami | 192 px na desktopie, 96 px na telefonie |
| Wysokość nawigacji | 96 px |

Treść jest wyrównana do lewej krawędzi siatki. Elementy wizualne (księżyc, podglądy) mogą wychodzić poza prawą krawędź ekranu; tekst nigdy.

**Typowe podziały kolumn:**

| Układ | Kolumny | Gdzie |
| --- | --- | --- |
| Hero | tekst 1–6 (marka) lub 1–7 (sprzedaż), księżyc po prawej poza krawędzią | strona główna |
| Split | etykieta 1–4, treść 6–12 | sekcje podstron, FAQ, case study |
| Zdjęcie + tekst | zdjęcie 1–5 lub 1–6, tekst 7–12 lub 8–12 | O mnie |
| Proces | księżyc 1–5 przypięty, kroki 7–12 | strona główna |
| Lista | nazwa 6/12, branża 3/12, wynik 3/12 | realizacje |

### Uniwersalna rama dla formatów graficznych

Dla banerów, postów, wizytówek i okładek używamy modułu liczonego z formatu:

**M = krótszy bok ÷ 24**

| Element | Wartość |
| --- | --- |
| Margines bezpieczny | 2 M (minimum 16 px, w druku minimum 4 mm od linii cięcia) |
| Odstęp między grupami | 2 M |
| Odstęp wewnątrz grupy | 1 M |
| Wysokość logo | 2–3 M |
| Hasło | stopień 2,5–3,5 M |
| Przycisk | wysokość 4 M, padding poziomy 2,5 M |

Kompozycja zawsze stoi na tej samej osi co hero: **tekst wyrównany do lewej krawędzi ramy, księżyc albo poświata po prawej, wychodzące poza kadr**. W formatach pionowych księżyc idzie na górę, tekst pod nim.

---

## 7. Kształty, powierzchnie i ikony

| Kształt | Token | Gdzie |
| --- | --- | --- |
| Tarcza (pełne zaokrąglenie) | `--radius-disc: 999px` | przyciski, chipy, tagi, przycisk menu, wybór budżetu |
| Plansza (bez zaokrąglenia) | `--radius-plate: 0` | obrazy, nagrania, pola formularza, sekcje, karty w social media |
| Terminator (łuk elipsy) | `clip-path: ellipse()` | zalanie przycisku, wejście podglądu, przejście między stronami |

- **Bez cieni.** Głębię daje Morze na tle Noc albo jasna plansza.
- **Linie 1 px** tylko tam, gdzie oddzielają pozycje listy, wiersze tabeli i sekcje (Krawędź na ciemnym, `#C3C8D1` na jasnym).
- **Bez siatki jednakowych kart.** Treść ma kształt swojej treści: listy z liniami, rzędy, splity.
- **Avatary i zdjęcia osób są prostokątne**, bo to treść, a nie przycisk. Wyjątek: awatar w social media, gdzie platforma sama przycina do koła; tam używamy `lunaris-mark`, nie zdjęcia.

### Ikony

- Tylko glify faz (sekcja 11) i proste ikony liniowe: obrys 1,5 px, zakończenia zaokrąglone, siatka 20 lub 24 px, kolor `currentColor`.
- Ikony w użyciu: menu (dwie kreski), zamknij (krzyżyk), plus w rozwijanym wierszu (obraca się o 45°), strzałka wyboru w liście.
- Punktory list „dla kogo”: pełna tarcza Księżyc (tak) i pusty okrąg Popiół (nie).
- Bez emoji i bez ikon kolorowych.

---

## 8. Tło: poświata nocnego nieba

Tło strony nie jest płaskie. Na stałej warstwie pod treścią leżą dwie bardzo delikatne plamy światła:

| Plama | Pozycja | Kolor | Rozmiar | Ruch |
| --- | --- | --- | --- | --- |
| Blask | prawy górny róg, poza ekranem | `rgba(205,210,219,.085)` → `rgba(122,131,150,.04)` → przezroczystość | 90 vmax | 60 s tam i z powrotem, przesunięcie do 16 vmax |
| Cień morza | lewy dolny róg, poza ekranem | `rgba(38,45,61,.85)` → `rgba(27,34,50,.45)` → przezroczystość | 90 vmax | 80 s tam i z powrotem, przesunięcie do 14 vmax |

Blask stoi po tej samej stronie co księżyc w hero, więc wygląda, jakby to on oświetlał stronę.

### Dlaczego nie szkodzi wydajności

- Animowany jest tylko `transform` na osobnej warstwie (`will-change: transform`), więc pracuje kompozytor GPU: bez przeliczania układu i bez przerysowywania.
- Gradient nie jest obrazem: nic się nie pobiera i nie może zostać elementem LCP. CLS się nie zmienia, bo warstwa jest `position: fixed` i nie zajmuje miejsca.
- Animacja działa tylko przy `min-width: 961px`, `pointer: fine` i bez ograniczonego ruchu. Telefon dostaje tę samą poświatę statycznie.
- `contain: strict` izoluje warstwę od reszty strony. Przy `forced-colors` warstwa znika.

### Zasady

- Tło `body` jest przezroczyste, kolor Noc ma `html`. Inaczej tło `body` zakryje poświatę.
- Jasne plansze i plansze Morze leżą na poświacie i ją zasłaniają — to zamierzone.
- Nie dodajemy trzeciej plamy, ziarna generowanego filtrem SVG ani blur: każde z nich kosztuje wydajność.
- Kontrast Popiołu w najjaśniejszym punkcie poświaty to około 5:1, więc tekst drugorzędny dalej spełnia 4,5:1. Jaśniejszej poświaty nie robimy.

### Poświata poza stroną

W banerach, postach, okładkach i na wizytówce poświata jest statyczna: ta sama plama blasku w prawym górnym rogu, wyrenderowana jako obraz albo gradient w pliku graficznym. W animowanych banerach i rolkach może się przesuwać tylko wtedy, gdy nie ma innego ruchu w kadrze.

---

## 9. Ruch

Ruch, który nie odpowiada na działanie użytkownika, występuje w trzech miejscach:

1. **Wschód księżyca w hero** — raz, przy wejściu na stronę (1200 ms).
2. **Fazy w sekcji procesu** — sterowane przewijaniem (na kanwasie: najechaniem i kliknięciem), bo treść jest sekwencją.
3. **Poświata nieba** — bardzo wolny dryf tła, tylko desktop.

Wszystko inne odpowiada na akcję: najechanie, fokus, rozwinięcie, wysłanie. Sekcje nie wjeżdżają z dołu przy przewijaniu. Nie ma preloadera, karuzel ani przesuwanych pasków logotypów.

### Tokeny

| Token | Wartość | Użycie |
| --- | --- | --- |
| `--ease` / `--ease-terminator` | `cubic-bezier(0.65, 0, 0.35, 1)` | wszystkie przejścia |
| `--dur-micro` | 160 ms | podkreślenie linku, kolor listy, smugi logo |
| `--dur-phase` | 480 ms | zalanie przycisku, wejście podglądu, obrót plusa |
| `--dur-rise` | 1200 ms | wschód księżyca |
| dryf poświaty | 60 s i 80 s | tło |

### Interakcje w katalogu

| Element | Reakcja |
| --- | --- |
| Przycisk główny | tło zalewa Pełnia od lewej, krawędź w kształcie terminatora (480 ms); wciśnięcie `scale(0.98)` |
| Przycisk drugorzędny | terminator zalewa tło kolorem Księżyc, tekst zmienia się na Noc |
| Link w tekście | podkreślenie 1 px → 2 px (160 ms) |
| Logo w nawigacji | kreski wydłużają się o 20% (160 ms) |
| Lista realizacji | pozostałe pozycje gasną do Popiołu, podgląd 320 × 200 px wchodzi łukiem terminatora i płynie za kursorem z opóźnieniem 0,15 |
| Rozwijany wiersz | plus obraca się o 45° w krzyżyk |
| Krok procesu | aktywny w kolorze Księżyc, reszta w Popiele; duży księżyc zmienia fazę |
| Księżyc w hero | po wschodzie światło idzie za kursorem; na telefonie zmiana fazy przeciągnięciem palcem |

### Ograniczony ruch

Przy `prefers-reduced-motion: reduce`: brak wschodu (księżyc od razu w dzisiejszej fazie), brak podążania za kursorem, sekcja procesu jako statyczny rząd faz, zalania zastąpione natychmiastową zmianą koloru, brak dryfu tła i płynnego przewijania.

### Ruch w materiałach wideo i banerach

- Jeden ruch na kadr. Dozwolone: faza od nowiu do pełni (1,2 s), wschód księżyca, wolny dryf poświaty, zalanie przycisku terminatorem.
- Krzywa zawsze `--ease`. Bez odbić, sprężyn i obrotów.
- Animowany baner kończy się czytelną klatką statyczną z hasłem i CTA.

---

## 10. Fotografia

### Styl

- Jedno boczne źródło światła, połowa twarzy w cieniu — jak kwadra.
- Chłodny balans bieli, szare lub grafitowe tło, lekkie ziarno.
- Spokojny wyraz twarzy, bez uśmiechu „do stocka”.
- Biała koszula, ciemne spodnie, ewentualnie marynarka. Bez logotypów na ubraniu.

### Zdjęcia z obecnej sesji

| Plik | Opis | Ocena | Gdzie |
| --- | --- | --- | --- |
| `omnie-profil.jpg` | profil z zegarkiem, boczne światło | wzorcowe | O mnie na stronie głównej (wersja „marka”) |
| `omnie-siedzi.jpg` | siedzi na stołku, poważny, chłodne tło | wzorcowe | hero podstrony O mnie, skrót O mnie w wersji „sprzedaż” |
| `omnie-marynarka.jpg` | marynarka w kratę, siedzi | dobre | Kontakt, LinkedIn |
| `portret-chlodny.jpg` | ręce założone, po korekcji na chłodno | dobre | O mnie (narzędzia), oferta PDF |
| `autor.jpg` | wycięta twarz z `portret-chlodny.jpg`, 320 × 400 | dobre | podpis autora we wpisach |
| zdjęcie z uśmiechem (szare tło) | szczery uśmiech | tylko poza stroną | relacje, posty prywatne, nie hero |
| trzy zdjęcia na beżowym tle | ciepły balans | tylko po korekcji | profil Google, LinkedIn — zawsze po korekcji z przepisu poniżej |

### Przepis na korektę na chłodno

Dla zdjęć z ciepłym tłem, żeby pasowały do palety. Punkt wyjścia, który dopracowujemy okiem:

| Krok | Wartość |
| --- | --- |
| Nasycenie | −25 do −30% |
| Kanał czerwony | ×0,90 |
| Kanał zielony | ×0,97 |
| Kanał niebieski | ×1,05, cienie +4 |
| Kontrast | +6% |
| Ziarno | lekkie, 10–15 |

Po korekcji skóra ma wyglądać naturalnie. Jeśli robi się szara albo sina, cofamy nasycenie do −20%.

### Kadry i pliki

| Użycie | Proporcja | Szerokość pliku | Format |
| --- | --- | --- | --- |
| Portret na stronie | 4:5 | 1080–1200 px | JPEG 80–82 lub AVIF/WebP przez `next/image` |
| Podpis autora | 4:5 | 320 px | JPEG 84 |
| Post / karuzela | 4:5 | 1080 px | JPEG |
| Okładka LinkedIn, Facebook | wycinek z 4:5 albo zdjęcie poziome | jak format | JPEG |

- Każde zdjęcie na stronie ma opisowy tekst alternatywny, np. „Daniel Kowalski w białej koszuli, w bocznym świetle, na szarym tle”.
- Bez kolorowych nakładek, winiet, ramek i filtrów Instagrama.

### Realizacje

- Prawdziwe zrzuty i nagrania przewijania (6–10 s, bez dźwięku, w pętli) na planszy Morze.
- Bez ramek urządzeń z odbiciami.
- Obok każdego nagrania tekst opisujący, co na nim widać.

**Nie używamy:** zdjęć stockowych, grafik AI z kosmosem, gwiazd, mgławic, astronautów.

---

## 11. Grafika: księżyc i fazy

### Księżyc

- Na stronie: shader fragmentu na płótnie WebGL, bez three.js, ładowany po pierwszym renderze. Bez WebGL: tarcza SVG z dzisiejszą fazą.
- W druku, social media i banerach: statyczny render z tego samego shadera (PNG z przezroczystością, minimum 2000 × 2000 px).
- Zawsze po prawej stronie kompozycji, częściowo poza kadrem. Nigdy wyśrodkowany za tekstem.
- Nie dodajemy halo, poświaty wokół tarczy ani gwiazd.

### Fazy

8 płaskich glifów z funkcji `phasePath()` (sekcja 18). Kierunek jak na półkuli północnej. Glif = obrys tarczy w Popiele (4/100 grubości) + oświetlona część w kolorze Księżyc.

| Indeks | Faza | Gdzie |
| --- | --- | --- |
| 0 | nów | etap 1 procesu, strona 404 |
| 1 | sierp przybywający | loader |
| 2 | pierwsza kwadra | etap 2 procesu |
| 3 | garb przybywający | loader; tę fazę pokazuje logo |
| 4 | pełnia | etap 3 procesu, potwierdzenie wysłania formularza |
| 5 | garb ubywający | loader |
| 6 | ostatnia kwadra | etap 4 procesu |
| 7 | sierp ubywający | loader |

Gotowe ścieżki SVG (viewBox 0 0 100 100, r = 50):

```
nów              M50 0 A50 50 0 0 1 50 100 A50 50 0 0 0 50 0 Z   (pusta: tylko obrys)
pierwsza kwadra  M50 0 A50 50 0 0 1 50 100 A0 50 0 0 1 50 0 Z
pełnia           M50 0 A50 50 0 0 0 50 100 A50 50 0 0 0 50 0 Z
ostatnia kwadra  M50 0 A50 50 0 0 0 50 100 A0 50 0 0 0 50 0 Z
```

**Podpis z dzisiejszą fazą:** „Dziś na niebie: sierp ubywający, 13% tarczy”. Na stronie liczony na żywo; w materiałach statycznych nie używamy, bo szybko się dezaktualizuje.

---

## 12. Komponenty strony

Nazwy klas odpowiadają plikowi `lunaris.css`.

### Przyciski i elementy interaktywne

| Komponent | Klasa | Specyfikacja |
| --- | --- | --- |
| Przycisk główny | `.btn.btn--primary` | tarcza, tło Księżyc, tekst Noc, Hanken 16/600, wysokość 48 px, padding 24 px; zalanie Pełnią |
| Przycisk drugorzędny | `.btn.btn--secondary` | obrys 1 px Księżyc, tekst Księżyc; zalanie Księżycem, tekst na Noc |
| Przycisk na jasnej planszy | `.btn.btn--dark` | tło Noc, tekst Księżyc; zalanie Morzem |
| Przycisk ikonowy | `.disc` | 44 × 44 px, obrys Popiół; zawsze z `aria-label` |
| Chip (filtr, przełącznik) | `.chip`, `.chip.is-on` | 44 px wysokości, obrys Popiół; wybrany: tło Księżyc, tekst Noc; `aria-pressed` |
| Tag | `.tag` | 28 px, obrys Krawędź, tekst Popiół, 14 px; tylko opis, nie klik |
| Link w tekście | `.tlink` | podkreślenie 1 px, odsunięcie 0,2 em, hover 2 px |
| Fokus | `:focus-visible` | obrys 2 px Księżyc (na jasnym: Noc), odsunięcie 3 px |

Treść przycisku mówi, co się stanie. Bez strzałek. Na jednym ekranie najwyżej jeden przycisk główny i jeden drugorzędny.

### Nawigacja i struktura

| Komponent | Klasa | Specyfikacja |
| --- | --- | --- |
| Nawigacja | `.nav` | 96 px, logo z „Lunaris web” po lewej, 4 linki Hanken 16 px, „Kontakt” jako przycisk drugorzędny (na stronie Kontakt: główny); bieżąca strona podkreślona (`aria-current="page"`) |
| Menu na telefonie | `.menu` | poniżej 960 px; pełny ekran na Noc, linki Brygada 48 px oddzielone liniami, mail i telefon na dole |
| Okruszki | `.crumbs` | 14 px, Popiół, separator „/” |
| Nagłówek podstrony | `.page-head` | okruszki, h1 (do 18 znaków na linię), lead w Popiele |
| Nagłówek sekcji | `.sec-head` | h2 po lewej, opis albo przycisk po prawej, wyrównane do dołu |
| Split | `.split > .side + .main` | etykieta 1–4, treść 6–12 |
| Pasek CTA | `.cta-band` | linia Krawędź, h2 w rozmiarze h1, przycisk główny po prawej; na końcu każdej podstrony |
| Stopka | `.footer`, `.giant`, `.foot-row` | tarcza + „Lunaris” na całą szerokość, pod linią: pełna nazwa firmy, NIP, adres, polityka prywatności, Instagram |
| Pasek szybkiego kontaktu | `.mbar` | tylko poniżej 960 px: przyklejony na dole, „Zadzwoń” (drugorzędny) i „Napisz” (główny), tło Noc, linia Krawędź u góry |

### Treść

| Komponent | Klasa | Specyfikacja |
| --- | --- | --- |
| Lista z liniami | `.lines` | linia Krawędź nad listą i pod każdą pozycją |
| Pozycja realizacji | `.work-item`, `.port`, `.res` | nazwa Brygada 36 px, branża 14 px Popiół, opcjonalnie wynik Brygada 36 px po prawej |
| Rozwijany wiersz | `details.row` | pytanie Brygada 24/500 lub nazwa usługi 36 px, plus w tarczy; odpowiedź Popiół do 60 znaków |
| Metryczka | `.meta` | 4 kolumny (2 na telefonie), etykieta 14 px Popiół, wartość 18 px |
| Duże liczby | `.nums`, `.num` | 3 kolumny, liczba Brygada 48–72 px tabelaryczna, opis 14 px |
| Proces | `.phases` | 4 kolumny z glifami 44 px, numer i nazwa Brygada 24 px, opis 16 px Popiół |
| Tabela | `.tbl` w `.tbl-box` | linie Krawędź, nagłówek 14 px Popiół, przewijanie poziome na wąskim ekranie |
| Artykuł | `.prose` | 64 znaki, 18/1,7, h2 36 px, h3 24 px, cytat Brygada 28 px, ramka `.note` na Morzu |
| Plansza | `.plate` | Morze, 16:10, podpis 14 px w lewym dolnym rogu |
| Zdjęcie | `.photo` | prostokąt, tło Morze do czasu załadowania |
| Jasna plansza | `.plate-light` | Księżyc, tekst Noc, linie `#C3C8D1`; opinie i case studies |
| Opinia | — | cytat Brygada 24 px (wyróżniona: 28–44 px), pod nim imię, firma i link do Google, 14 px |

### Formularze

| Element | Specyfikacja |
| --- | --- |
| Pole | `.field`: plansza Morze (w ramce Morze: Noc), obrys 1 px Popiół, wysokość 52 px, tekst 18 px |
| Etykieta | nad polem, Hanken 14/500 Księżyc, dopisek „(opcjonalnie)” w Popiele; nigdy tylko placeholder |
| Błąd | pod polem w kolorze Błąd, z instrukcją naprawy; obrys pola na Błąd; `aria-invalid` i `aria-describedby` |
| Wybór budżetu | tarcze 44 px jako radio; wybrana: tło Księżyc |
| Zgody | dwie osobne: obowiązkowa na kontakt w sprawie zapytania i nieobowiązkowa marketingowa; checkbox 22 px |
| Potwierdzenie | `.sent`: plansza Morze, glif pełni 56 px, „Zapytanie wysłane.” Brygada 36 px |

**Pola formularza zapytania:** imię, e-mail, rodzaj projektu (lista), wiadomość; opcjonalnie telefon i budżet (do 3 000 zł / 3 000–6 000 zł / 6 000–10 000 zł / powyżej 10 000 zł — do potwierdzenia).

**Formularz darmowego sprawdzenia:** adres strony, e-mail, zgoda. Nic więcej.

---

## 13. Szablony stron

Projekty referencyjne leżą na kanwasie „Lunaris web — strona główna i podstrony”.

### Strona główna: dwa tryby

| | Tryb „marka” (wersja 1) | Tryb „sprzedaż” (wersja 2) |
| --- | --- | --- |
| Cel | wrażenie, wizerunek, portfolio, konkursy | zapytania od firm usługowych |
| Hero | „Pokażmy Twoją firmę w pełni.”, duży księżyc | „Strony, które przynoszą zapytania firmom usługowym”, mniejszy księżyc, rząd dowodów pod CTA |
| Drugi przycisk | Zobacz realizacje | Sprawdź moją stronę za darmo |
| Realizacje | lista z podglądem za kursorem | lista z wynikiem liczbowym |
| Kolejność | hero, zaufanie, realizacje, usługi, proces, o mnie, opinie, FAQ, wiedza, kontakt | hero z dowodami, wyniki, dla kogo, usługi z cenami, opinie, darmowe sprawdzenie, proces + obietnice, o mnie, FAQ, kontakt |

Obie wersje używają tych samych tokenów i komponentów. Wybór jest w sekcji 22.

### Podstrony

| Szablon | Adres | Sekcje w kolejności | CTA |
| --- | --- | --- | --- |
| Realizacje | `/realizacje` | nagłówek, filtr (Wszystkie, Strony, Identyfikacja, Wydarzenia), lista z licznikiem, zdanie dla niezdecydowanych | Umów rozmowę |
| Realizacja | `/realizacje/[slug]` | nagłówek z metryczką, nagranie z opisem, problem, rozwiązanie + zrzuty, efekt w liczbach, opinia na jasnej planszy, następna realizacja | Umów rozmowę |
| Usługa | `/uslugi/[slug]` | przełącznik usług (chipy), nagłówek z ceną „od”, co dostajesz, dwie ścieżki (tabela), proces, co wpływa na cenę, realizacje z tej usługi, FAQ | Umów rozmowę |
| Wiedza | `/wiedza` | nagłówek, filtr (Wszystko, Artykuły, Lab), wyróżniony wpis, lista | Umów rozmowę |
| Wpis | `/wiedza/[slug]` | nagłówek z autorem, spis treści przypięty po lewej, artykuł, notka o autorze, czytaj dalej | Umów rozmowę / sprawdzenie strony |
| O mnie | `/o-mnie` | nagłówek, zdjęcie + wstęp + metryczka, skąd nazwa, jak pracuję, narzędzia + oś czasu | Umów rozmowę |
| Kontakt | `/kontakt` | nagłówek, kanały + kalendarz + zdjęcie + dane firmy po lewej, formularz po prawej, co będzie dalej (1–3) | Wyślij zapytanie |
| Strona lokalna | `/strony-internetowe-katowice`, `/strony-internetowe-slask` | jak Usługa, z lokalnymi realizacjami i opiniami | Umów rozmowę |
| 404 | — | glif nowiu, komunikat z sekcji 2, dwa linki | Wróć na stronę główną |

Stare adresy (`/portfolio`, `/blog`, `/omnie`, `/uslugi/logotypy`, `/portfolio/merkury-medica`) przekierowujemy 301.

---

## 14. Wzorce sprzedażowe

Strona i reklamy mają przynosić zapytania. Te wzorce obowiązują na każdym materiale sprzedażowym:

1. **Jeden cel.** Każda strona i każda reklama kończy się jednym wezwaniem: „Umów rozmowę”, „Wyślij zapytanie” albo „Sprawdź moją stronę”.
2. **Dowód w pierwszym ekranie.** Ocena w Google, wynik Lighthouse albo liczba realizacji stoi tuż pod przyciskiem, a nie na dole strony.
3. **Konkret obok hasła.** Co, dla kogo, gdzie. Hasło marki samo nie sprzedaje.
4. **Cena na wierzchu.** Kwota „od” widoczna bez klikania, netto, z jedną liczbą (nie przedziałem).
5. **Niski próg.** Obok „Umów rozmowę” zawsze jest łatwiejszy krok: darmowe sprawdzenie strony albo mail.
6. **Dla kogo nie.** Krótka lista tych, z którymi nie pracujesz, buduje zaufanie i filtruje zapytania.
7. **Obietnice, które da się sprawdzić.** Termin w umowie, poprawki w cenie, prawa autorskie i konta po stronie klienta. Piszemy tylko te, których dotrzymujemy.
8. **Czas odpowiedzi.** „Odpiszę w ciągu [X] dni roboczych” przy każdym formularzu.
9. **Szybki kontakt na telefonie.** Pasek „Zadzwoń / Napisz” na wszystkich stronach poniżej 960 px.
10. **Mierzymy.** Plausible albo Umami bez cookies. Cele: kliknięcie „Umów rozmowę”, wysłanie formularza, kliknięcie w telefon, wysłanie sprawdzenia strony. W reklamach: parametry UTM w każdym linku.

**Czego nie robimy dla sprzedaży:** wyskakujących okienek, liczników „zostały 2 miejsca”, fałszywych opinii, przekreślonych cen, czatów, które otwierają się same.

---

## 15. Dostępność i wydajność

### Dostępność (WCAG 2.2 AA)

- [ ] Kontrast tekstu co najmniej 4,5:1, duży tekst (24 px+) co najmniej 3:1. Wszystkie pary z sekcji 4 to spełniają.
- [ ] Widoczny fokus na każdym elemencie interaktywnym: 2 px, odsunięcie 3 px.
- [ ] Cała strona obsługiwana klawiaturą; podgląd realizacji ma odpowiednik bez kursora (fokus, nagranie na telefonie).
- [ ] Cele dotyku co najmniej 44 × 44 px.
- [ ] `prefers-reduced-motion` i `forced-colors` obsłużone.
- [ ] Księżyc i dekoracje mają `aria-hidden="true"`; dzisiejsza faza jest w tekście podpisu.
- [ ] Nagrania z opisem w tekście obok, bez dźwięku.
- [ ] Hierarchia nagłówków bez przeskoków, jeden `h1` na stronę.
- [ ] Formularze: etykiety, `aria-invalid`, błędy połączone z polem, `role="status"` przy potwierdzeniu.
- [ ] Język strony `lang="pl"`.

### Budżet wydajności

| Wskaźnik (telefon) | Cel |
| --- | --- |
| LCP | poniżej 2,5 s |
| INP | poniżej 200 ms |
| CLS | poniżej 0,1 |
| Lighthouse wydajność | 90+ na każdej podstronie |
| JS na start (bez shadera) | jak najmniej; shader ładowany po pierwszym renderze |

- Animujemy tylko `transform` i `opacity` (oraz `clip-path` na małych elementach).
- Obrazy przez `next/image`, wymiary zawsze podane, AVIF/WebP.
- Fonty self-hosted, dwa kroje, preload tylko Brygady.
- Na słabych urządzeniach i przy ograniczonym ruchu księżyc to statyczny obraz.
- Wynik Lighthouse strony Lunaris pokazujemy w jej własnym case study.

---

## 16. Nośniki

### 16.1 Strona i podstrony

Sekcje 6, 12, 13 i 14. Obrazy OG: 1200 × 630 px, generowane per podstrona przez `next/og`: tło Noc z poświatą, tytuł strony Brygadą 64–72 px w lewej części, `lunaris-mark` w prawym dolnym rogu. Fonty przekazane jako `ArrayBuffer`.

### 16.2 Banery reklamowe (sieć reklamowa Google i podobne)

**Zawartość, zawsze w tej kolejności i nic ponad to:**

1. Hasło, do 6 słów (Brygada, Księżyc).
2. Dowód albo oferta w jednym krótkim wierszu (Hanken, Popiół lub Księżyc).
3. Przycisk-tarcza z CTA (Księżyc, tekst Noc).
4. Logo.
5. Księżyc lub poświata po prawej, wychodzące poza kadr.

**Przykładowe zestawy treści:**

| Hasło | Dowód / oferta | CTA |
| --- | --- | --- |
| Strona, która przynosi zapytania. | Projekt i kod w jednych rękach. | Umów rozmowę |
| Czy Twoja strona jest szybka? | Sprawdzę ją za darmo. | Sprawdź stronę |
| Pokażmy Twoją firmę w pełni. | Strony dla firm usługowych ze Śląska. | Zobacz realizacje |
| Strona od [CENA] zł netto. | Lighthouse [XX]. Termin w umowie. | Umów rozmowę |

**Formaty i układ:**

| Format (px) | Nazwa | Układ | Hasło | Logo |
| --- | --- | --- | --- | --- |
| 300 × 250 | średni prostokąt | tekst lewa ⅔, księżyc prawy górny róg poza kadrem, CTA na dole | 26–30 px | tarcza 24 px w lewym górnym rogu |
| 336 × 280 | duży prostokąt | jak 300 × 250 | 28–32 px | tarcza 26 px |
| 300 × 600 | półstronicowy | księżyc u góry (60% szerokości, poza prawą krawędzią), pod nim hasło, dowód, CTA, logo na dole | 36–40 px | pozioma 28 px |
| 160 × 600 | wieżowiec | księżyc u góry, hasło w 3–4 liniach, CTA, logo | 22–24 px | sama tarcza 28 px |
| 728 × 90 | leaderboard | logo, hasło w jednej linii, CTA po prawej; księżyc przycięty przy prawej krawędzi | 24 px | tarcza + „Lunaris” 40 px |
| 970 × 250 | billboard | jak hero: tekst lewa połowa, księżyc prawa połowa | 40–48 px | pozioma 32 px |
| 320 × 50 | baner mobilny | tarcza, hasło (jedna linia, do 4 słów), CTA | 16–18 px | tarcza 28 px |
| 320 × 100 | duży baner mobilny | jak 320 × 50 plus wiersz dowodu | 20 px | tarcza 32 px |

**Technika:**

- Limit wagi w sieci reklamowej Google to 150 KB na plik (obraz i HTML5). Księżyc jako zoptymalizowany PNG/WebP albo rysowany w SVG.
- Animacja najwyżej 30 s łącznie, potem stoi klatka końcowa z hasłem i CTA. Jeden ruch: faza od nowiu do pełni albo wschód księżyca.
- Cały baner jest klikalny, ale przycisk i tak jest widoczny.
- Ramka 1 px Krawędź dookoła, żeby ciemny baner nie zlewał się z ciemną stroną wydawcy.
- Responsywne reklamy displayowe Google: dostarczamy logo kwadratowe (`lunaris-mark` na Noc, 1200 × 1200), logo poziome (1200 × 300), obraz 1,91:1 (1200 × 628) i 1:1 (1200 × 1200) z księżycem i poświatą, bez tekstu na obrazie. Teksty nagłówków i opisów piszemy według tabeli treści powyżej.
- Specyfikacje platform się zmieniają, więc przed produkcją sprawdzamy aktualne wymagania w Google Ads.

### 16.3 Reklamy w social media (Meta, LinkedIn)

| Format | Wymiar | Zastosowanie | Uwagi |
| --- | --- | --- | --- |
| Pionowy feed | 1080 × 1350 (4:5) | podstawowa reklama Facebook i Instagram | najwięcej miejsca w feedzie na telefonie |
| Kwadrat | 1080 × 1080 | zapasowy | — |
| Stories i Reels | 1080 × 1920 (9:16) | wideo i obraz pełnoekranowy | wolne od tekstu ok. 14% u góry (ok. 270 px) i ok. 35% u dołu (ok. 670 px) w Reels; w Stories ok. 14% u góry i u dołu |
| LinkedIn pojedynczy obraz | 1200 × 627 | reklama dla agencji i firm | układ jak hero |
| LinkedIn kwadrat | 1200 × 1200 | — | — |

- Strefy bezpieczne przed produkcją sprawdzamy w podglądzie Menedżera reklam, bo interfejs aplikacji się zmienia.
- Tekstu na obrazie jak najmniej: hasło i ewentualnie jedna liczba. Reszta w treści reklamy.
- Treść reklamy: pierwsze zdanie = konkret („Robię strony dla firm usługowych ze Śląska.”), drugie = dowód, trzecie = CTA. Bez emoji.
- Wideo: 6–15 s. Pierwsza sekunda: księżyc wschodzi; potem nagranie przewijania realizacji na planszy Morze; klatka końcowa z hasłem, CTA i logo. Napisy zawsze wypalone albo dodane, bo większość ogląda bez dźwięku.

### 16.4 Posty i karuzele (organiczne)

- Format 1080 × 1350. Margines 90 px (2 M). Logo poziome 56 px w lewym górnym rogu albo `lunaris-mark` 48 px w prawym dolnym.
- **Karuzela realizacji:** 1) okładka Noc z poświatą, nazwa projektu Brygada 96–120 px, branża 32 px Popiół; 2–5) zrzuty i nagrania na planszach Morze z jednym zdaniem opisu; 6) wynik w liczbach (Brygada 160 px); 7) CTA „Umów rozmowę” + adres strony.
- **Post wiedzy:** jasna plansza (Księżyc), pytanie Brygadą, odpowiedź w 3 krótkich punktach, link do wpisu w opisie.
- **Post o mnie:** zdjęcie z sesji w kadrze 4:5, bez tekstu na zdjęciu albo z jednym zdaniem na pasku Noc u dołu.
- Awatar: `lunaris-mark` na Noc, tarcza zajmuje 70% koła.

### 16.5 Okładki profili

| Profil | Wymiar pliku | Układ |
| --- | --- | --- |
| Facebook | 1640 × 624 (bezpieczny środek ok. 1340 × 512) | hasło marki po lewej, księżyc po prawej; ważne elementy z dala od lewego dolnego rogu, gdzie wchodzi awatar |
| LinkedIn firma | 1128 × 191 | poświata, „Projekt i kod w jednych rękach.” po lewej, adres strony po prawej |
| LinkedIn osobisty | 1584 × 396 | jak firma; lewa ⅓ pusta pod zdjęcie profilowe |
| Profil Google Firmy | logo: `lunaris-mark` na Noc, kwadrat; okładka 16:9 | okładka: render księżyca z hasłem marki; zdjęcia realizacji na planszach |

Wymiary okładek sprawdzamy przed eksportem, bo platformy zmieniają przycięcia.

### 16.6 Wizytówka

| Parametr | Wartość |
| --- | --- |
| Format netto | 90 × 50 mm |
| Spad | 3 mm z każdej strony (plik 96 × 56 mm) |
| Margines bezpieczny | 4 mm od linii cięcia |
| Rozdzielczość | wektor; obrazy 300 dpi |
| Papier | matowy, 350–400 g |
| Uszlachetnienie | srebrna folia na kreskach i obwódce tarczy (opcja, sekcja 22) |

- **Przód:** Noc z poświatą w prawym górnym rogu, logo pionowe `lunaris-logo-dark.svg` wyśrodkowane (tarcza 18–22 mm), pod nim nic.
- **Tył:** Księżyc. Lewy górny róg: imię i nazwisko Brygada 11–12 pt (Noc), pod nim rola Hanken 8 pt (Popiół ciemny): „Projektuję i koduję strony”. Lewy dolny róg: telefon, mail, lunarisweb.pl, Hanken 7,5–8 pt, cyfry tabelaryczne. Prawy dolny róg: `lunaris-mark` 6 mm.
- Bez kodu QR, chyba że prowadzi do kalendarza rezerwacji; wtedy 14 mm, prawy dolny róg zamiast znaku.

### 16.7 Druk reklamowy

| Materiał | Format | Układ |
| --- | --- | --- |
| Ulotka | A5 (148 × 210 mm) lub DL (99 × 210 mm), spad 3 mm | przód: Noc, księżyc u góry poza kadrem, hasło sprzedażowe, jeden dowód, CTA z adresem; tył: jasna plansza, 3 usługi z cenami „od”, proces w 4 glifach, kontakt |
| Plakat | A3 / B2 | jak przód ulotki; hasło Brygadą zajmuje ⅓ szerokości |
| Roll-up | 85 × 200 cm | księżyc u góry, hasło na wysokości 120–160 cm (wzrok), dolne 30 cm bez treści (zasłaniają je stopy i stoisko) |
| Naklejka, gadżet | dowolny | `lunaris-mark` na Noc albo logo pionowe |

### 16.8 Dokumenty

| Materiał | Specyfikacja |
| --- | --- |
| Faktura | A4, białe tło, `lunaris-logo-light.svg` ze znakiem słownym w lewym górnym rogu (12–15 mm). „Faktura VAT nr …” Brygada 21 pt, dane Hanken 9–10 pt, tabela z liniami Popiół ciemny, kwoty tabelaryczne do prawej. W stopce: Lunaris Daniel Kowalski, NIP, adres, rachunek. |
| Oferta i wycena (PDF) | Okładka: Noc z poświatą i renderem księżyca, tytuł Brygada 36–48 pt, nazwa klienta. Środek na białym tle: kontekst, zakres, etapy „Od nowiu do pełni” z glifami, cena i warunki (jedna kwota, netto), obietnice, następny krok z przyciskiem-linkiem „Umów rozmowę”. |
| Prezentacja studia | 16:9, slajdy tytułowe na Noc, treściowe na Księżyc; jeden komunikat na slajd; realizacje jako zrzuty na planszach. |
| Umowa | Biała, logo jasne w nagłówku, Hanken 10 pt, bez dekoracji. |
| Stopka maila | Tekst: imię i nazwisko (pogrubione), „Lunaris web”, telefon, strona. `lunaris-mark` jako PNG 32 px (64 px dla ekranów retina). Bez banerów i cytatów. |

---

## 17. Pliki i nazewnictwo

### Struktura folderu marki

```
lunaris-brand/
  design.md                    ← ten plik
  logo/
    lunaris-logo-dark.svg
    lunaris-logo-light.svg
    lunaris-mark.svg
    png/                       ← eksporty 64, 128, 256, 512, 1024 px
  fonts/                       ← Brygada 1918, Hanken Grotesk (OFL)
  code/
    lunaris.css                ← tokeny i komponenty
    moon.ts                    ← moonPhase(), phasePath()
    moon.frag                  ← shader księżyca
  renders/
    moon-full.png, moon-q1.png, moon-gibbous.png …   ← statyczne rendery 2000 px
    sky-glow-1080x1350.png …                         ← poświata pod formaty
  photos/
    raw/                       ← oryginały z sesji
    web/                       ← po korekcji i kadrowaniu
  templates/
    banner/  social/  print/  docs/
  archive/
    logo.svg                   ← oryginał
```

### Nazwy plików

`lunaris_[nośnik]_[format]_[temat]_[wersja].[rozszerzenie]`, małymi literami, bez polskich znaków i spacji.

Przykłady: `lunaris_banner_300x250_sprawdzenie_v1.png`, `lunaris_post_1080x1350_merkury-medica_v2.jpg`, `lunaris_wizytowka_90x50_tyl_druk.pdf`.

### Eksport

| Nośnik | Format |
| --- | --- |
| Strona | SVG dla logo i glifów, AVIF/WebP dla zdjęć |
| Banery | PNG / JPEG / WebP do 150 KB lub HTML5 |
| Social | JPEG 1080 px (sRGB), wideo MP4 H.264 |
| Druk | PDF/X z 3 mm spadu, fonty osadzone |
| Dokumenty | PDF z osadzonymi fontami |

---

## 18. Kod

### Tokeny CSS

Pełny plik to `lunaris.css`. Rdzeń, który przenosimy do każdego projektu:

```css
:root {
  /* kolor */
  --color-night: #0E1320;      /* Noc */
  --color-mare: #1B2232;       /* Morze */
  --color-edge: #2C3548;       /* Krawędź: tylko linie */
  --color-ash: #8A94A8;        /* Popiół */
  --color-ash-deep: #4A5468;   /* Popiół ciemny: jasne plansze */
  --color-moon: #E6E8EC;       /* Księżyc */
  --color-full: #FFFFFF;       /* Pełnia: tylko blask */
  --color-error: #FF8A7A;
  --color-success: #7FD1A8;

  /* rampa księżyca: tylko logo i grafika */
  --moon-100: #CDD2DB; --moon-200: #A3AABA; --moon-300: #7A8396;
  --moon-400: #545D70; --moon-500: #262D3D;

  /* role */
  --bg: var(--color-night);
  --surface: var(--color-mare);
  --text: var(--color-moon);
  --text-muted: var(--color-ash);
  --line: var(--color-edge);
  --focus: var(--color-moon);

  /* pismo */
  --font-display: "Brygada 1918", Georgia, "Times New Roman", serif;
  --font-text: "Hanken Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif;
  --text-display: clamp(3.5rem, 1.5rem + 8vw, 9rem);
  --text-h1: clamp(2.75rem, 1.9rem + 3.6vw, 4.5rem);
  --text-h2: clamp(2.25rem, 1.8rem + 1.9vw, 3rem);
  --text-h3: 1.5rem;
  --text-lead: 1.3125rem;
  --text-body: 1.125rem;
  --text-small: 0.875rem;

  /* układ */
  --page-max: 90rem;
  --page-margin: clamp(1.25rem, 5vw, 5rem);
  --gutter: 1.5rem;
  --section: 12rem;

  /* kształt */
  --radius-disc: 999px;
  --radius-plate: 0;

  /* ruch */
  --ease: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-micro: 160ms;
  --dur-phase: 480ms;
  --dur-rise: 1200ms;

  color-scheme: dark;
}
@media (max-width: 640px) { :root { --gutter: 1rem; --section: 6rem; } }
@media (prefers-reduced-motion: reduce) { :root { --dur-phase: 0ms; --dur-micro: 0ms; --dur-rise: 0ms; } }

html { background: var(--color-night); }
body { background: transparent; color: var(--color-moon); font-family: var(--font-text); }

/* jasna plansza */
.plate-light {
  --text: var(--color-night); --text-muted: var(--color-ash-deep);
  --line: #C3C8D1; --focus: var(--color-night);
  background: var(--color-moon); color: var(--color-night);
}
```

### Tło: poświata

```css
/* <div class="sky-bg" aria-hidden="true"></div> jako pierwszy element strony */
.sky-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none; overflow: hidden; contain: strict; }
.sky-bg::before, .sky-bg::after { content: ""; position: absolute; width: 90vmax; height: 90vmax; border-radius: 50%; }
.sky-bg::before { top: -42vmax; right: -32vmax;
  background: radial-gradient(closest-side, rgba(205,210,219,.085), rgba(122,131,150,.04) 50%, rgba(14,19,32,0) 100%); }
.sky-bg::after { bottom: -48vmax; left: -36vmax;
  background: radial-gradient(closest-side, rgba(38,45,61,.85), rgba(27,34,50,.45) 55%, rgba(14,19,32,0) 100%); }
@media (min-width: 961px) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .sky-bg::before { will-change: transform; animation: sky-a 60s var(--ease) infinite alternate; }
  .sky-bg::after  { will-change: transform; animation: sky-b 80s var(--ease) infinite alternate; }
}
@keyframes sky-a { to { transform: translate3d(-16vmax, 12vmax, 0); } }
@keyframes sky-b { to { transform: translate3d(14vmax, -10vmax, 0); } }
@media (forced-colors: active) { .sky-bg { display: none; } }
```

### Nagłówek oświetlony i przycisk z terminatorem

```css
.headline-lit {
  background: radial-gradient(70vmax circle at var(--light-x, 85%) var(--light-y, 35%),
    var(--color-full), var(--color-moon) 35%, var(--color-ash) 85%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
@media (forced-colors: active) { .headline-lit { background: none; color: CanvasText; } }

.btn { position: relative; isolation: isolate; overflow: hidden; border-radius: var(--radius-disc); }
.btn::before {
  content: ""; position: absolute; inset: 0; z-index: -1;
  clip-path: ellipse(0% 120% at 0% 50%);
  transition: clip-path var(--dur-phase) var(--ease);
}
.btn:hover::before, .btn:focus-visible::before { clip-path: ellipse(160% 160% at 0% 50%); }
.btn--primary { background: var(--color-moon); color: var(--color-night); }
.btn--primary::before { background: var(--color-full); }
```

### Tokeny dla narzędzi graficznych

```json
{
  "color": {
    "night": "#0E1320", "mare": "#1B2232", "edge": "#2C3548", "ash": "#8A94A8",
    "ashDeep": "#4A5468", "moon": "#E6E8EC", "full": "#FFFFFF",
    "error": "#FF8A7A", "success": "#7FD1A8",
    "plateLightSurface": "#D9DCE2", "plateLightLine": "#C3C8D1",
    "moon100": "#CDD2DB", "moon200": "#A3AABA", "moon300": "#7A8396", "moon400": "#545D70", "moon500": "#262D3D"
  },
  "font": { "display": "Brygada 1918", "text": "Hanken Grotesk" },
  "radius": { "disc": 999, "plate": 0 },
  "space": [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192],
  "motion": { "ease": [0.65, 0, 0.35, 1], "micro": 160, "phase": 480, "rise": 1200 }
}
```

### Dzisiejsza faza i glify faz

Przybliżenie średnim miesiącem synodycznym, dokładność około jednego dnia. Test: 6 listopada 2026 zwraca indeks 7 (sierp ubywający, 13% tarczy).

```ts
const SYNODIC = 29.530588853;                      // dni
const REF_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14); // nów 6.01.2000

export const PHASE_NAMES = [
  'nów', 'sierp przybywający', 'pierwsza kwadra', 'garb przybywający',
  'pełnia', 'garb ubywający', 'ostatnia kwadra', 'sierp ubywający',
] as const;

export function moonPhase(date = new Date()) {
  const days = (date.getTime() - REF_NEW_MOON) / 86_400_000;
  const age = ((days % SYNODIC) + SYNODIC) % SYNODIC;
  const fraction = age / SYNODIC;                          // 0 nów, 0.5 pełnia
  const illumination = (1 - Math.cos(2 * Math.PI * fraction)) / 2;
  const index = Math.round(fraction * 8) % 8;
  return { age, fraction, illumination, index, name: PHASE_NAMES[index] };
}

// Ścieżka SVG oświetlonej części tarczy dla dowolnej fazy (półkula północna).
export function phasePath(fraction: number, r = 50, cx = 50, cy = 50) {
  const waxing = fraction < 0.5;
  const k = (1 - Math.cos(2 * Math.PI * fraction)) / 2;
  const rx = r * Math.abs(1 - 2 * k);
  const outer = waxing ? 1 : 0;
  const inner = waxing ? (k < 0.5 ? 0 : 1) : (k < 0.5 ? 1 : 0);
  return `M${cx} ${cy - r} A${r} ${r} 0 0 ${outer} ${cx} ${cy + r} ` +
         `A${rx} ${r} 0 0 ${inner} ${cx} ${cy - r} Z`;
}
```

### Shader księżyca

Kula liczona w shaderze fragmentu na kwadratowym płótnie, bez three.js. Kierunek światła z dzisiejszej fazy: `vec3(sin(2πf), 0, -cos(2πf))`; po wschodzie z pozycji kursora względem środka tarczy: `normalize(vec3(x, -y, 0.6))`, wygładzany współczynnikiem 0,08 na klatkę. Płótno w rozdzielczości `min(devicePixelRatio, 2)`.

```glsl
precision highp float;
uniform vec3 uLight;        // kierunek słońca
uniform float uEarthshine;  // 0.05–0.08: światło popielate (na stronie 0.07)
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x),
             mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}

void main() {
  vec2 p = (vUv - 0.5) * 2.0;
  float r2 = dot(p, p);
  float edge = 1.0 - smoothstep(0.985, 1.0, r2);
  vec3 n = vec3(p, sqrt(max(1.0 - r2, 0.0)));
  float maria = noise(n.xy * 3.0 + 1.7) * 0.6 + noise(n.xy * 9.0) * 0.4;
  vec3 albedo = mix(vec3(0.90, 0.91, 0.925), vec3(0.55, 0.58, 0.64),
                    smoothstep(0.45, 0.75, maria));
  float lit = max(dot(n, normalize(uLight)), 0.0);
  vec3 ash = vec3(0.54, 0.58, 0.66) * uEarthshine;
  gl_FragColor = vec4((albedo * lit + ash) * edge, edge);
}
```

Statyczne rendery do druku i social media eksportujemy z tego samego shadera (np. faza 0,375 jak w logo, pełnia, pierwsza kwadra) w 2000 × 2000 px z przezroczystym tłem.

### Next.js: gdzie co leży

| Plik | Zawartość |
| --- | --- |
| `app/styles/tokens.css` | `:root` z tokenami |
| `app/styles/lunaris.css` | komponenty z sekcji 12, poświata |
| `lib/moon.ts` | `moonPhase()`, `phasePath()` |
| `components/Moon.tsx` | płótno z shaderem, ładowane dynamicznie (`ssr: false`) po pierwszym renderze |
| `lib/sierotki.ts` | twarde spacje w treściach przy buildzie |
| `app/[...]/opengraph-image.tsx` | obrazy OG przez `next/og` |

---

## 19. Czego nie robimy

- Gwiazdek, mgławic, fioletowych gradientów, astronautów, rakiet.
- Kolorów spoza palety, cieni, czystej czerni, kolorowych nakładek na zdjęciach.
- Wersalików, nadtytułów nad każdym nagłówkiem, wyróżniania jednego słowa w nagłówku.
- Numeracji tam, gdzie treść nie jest sekwencją.
- Siatki jednakowych kart, zaokrąglonych prostokątów jako kart.
- Animacji wejścia sekcji, długiego preloadera, automatycznych karuzel, przesuwanych pasków logotypów.
- Więcej niż jednego efektu „wow” na materiał.
- Strzałek doklejanych do przycisków, „Kliknij tutaj”, „Dowiedz się więcej”.
- Zdjęć stockowych i grafik AI.
- Mówienia „my”.
- Obietnic, których nie da się sprawdzić, liczników presji, fałszywych opinii.

---

## 20. Checklista przed publikacją

Dla każdego materiału: strony, banera, posta, druku, dokumentu.

**Marka**

- [ ] Kolory tylko z palety; Pełnia tylko jako blask.
- [ ] Dwa kroje w swoich rolach.
- [ ] Logo w dobrej wersji (ciemne/jasne), z polem ochronnym, nie mniejsze niż minimum.
- [ ] Okrągłe tylko to, co interaktywne.
- [ ] Jeden efekt, reszta cicha.

**Treść**

- [ ] Pierwsza osoba.
- [ ] Jest konkret: co, dla kogo, jaka liczba.
- [ ] Jeden cel i jedno CTA z czasownikiem.
- [ ] Polskie cudzysłowy, półpauzy, twarde spacje, brak literówek.
- [ ] Brak pól w nawiasach kwadratowych.

**Technika**

- [ ] Kontrast co najmniej 4,5:1.
- [ ] Strona: Lighthouse 90+, LCP < 2,5 s, CLS < 0,1, reduced motion sprawdzony.
- [ ] Baner: waga do 150 KB, animacja do 30 s, klatka końcowa czytelna.
- [ ] Social: strefy bezpieczne sprawdzone w podglądzie platformy.
- [ ] Druk: spad 3 mm, margines 4 mm, fonty osadzone, proof koloru.
- [ ] Linki z parametrami UTM, cele w analityce ustawione.

---

## 21. Zmiany względem wersji 0.2

| Było w 0.2 | Jest w 1.0 | Dlaczego |
| --- | --- | --- |
| Tło: płaska Noc | Noc z poświatą nieba (dwie plamy, wolny dryf na desktopie) | tło jest ciekawsze, a nie kosztuje wydajności |
| Dwa ruchy niezależne od użytkownika | Trzy: wschód, fazy w procesie, dryf poświaty | doszło tło |
| Jeden gradient (spadek światła) | Dwa: spadek światła i poświata | jak wyżej |
| Cztery motywy | Pięć: doszła poświata | jak wyżej |
| Strona główna w jednej wersji | Dwa tryby: „marka” i „sprzedaż” | ocena sprzedażowa strony |
| Brak wzorców sprzedażowych | Sekcja 14: dowód w pierwszym ekranie, cena na wierzchu, niski próg, „dla kogo nie”, obietnice, pasek kontaktu, pomiar | strona ma przynosić zapytania |
| Komponenty opisane ogólnie | Katalog z nazwami klas z `lunaris.css` | jeden plik CSS dla wszystkich podstron |
| Szkielety czterech sekcji | Szablony wszystkich podstron | zaprojektowane podstrony |
| Fotografia: zasady ogólne | Ocena zdjęć z sesji i przepis na korektę na chłodno | ciepłe zdjęcia odstawały od palety |
| Materiały: tabela | Nośniki z wymiarami: banery, social, okładki, wizytówka ze spadem, druk, dokumenty | design.md ma działać jako baza dla każdego projektu |
| Brak uniwersalnej siatki dla grafik | Moduł M = krótszy bok ÷ 24 | spójne proporcje w każdym formacie |
| Brak struktury plików | Folder marki i nazewnictwo plików | porządek przy kolejnych projektach |

---

## 22. Do decyzji

- [ ] Która wersja strony głównej idzie na start: „marka” czy „sprzedaż”. Rekomendacja: „sprzedaż” jako strona główna, „marka” jako wzór dla case study i materiałów wizerunkowych.
- [ ] Ceny „od” dla trzech filarów i opieki miesięcznej.
- [ ] Czas odpowiedzi na zapytanie i na darmowe sprawdzenie strony.
- [ ] Przedziały budżetu w formularzu.
- [ ] Obietnice: czy na pewno dwie rundy poprawek, termin w umowie i przeniesienie praw autorskich.
- [ ] Narzędzie do kalendarza rezerwacji (np. Cal.com).
- [ ] Wartości druku dla Noc po proofie u drukarni.
- [ ] Kierunek rozwoju logo: szlif, smugi alfabetem Morse’a albo żywe logo.
- [ ] Favicon 16 px z `lunaris-mark.svg` sprawdzony na żywo.
- [ ] Wizytówka: srebrna folia czy druk cyfrowy.
- [ ] Strony lokalne „Katowice” i „Śląsk” do zaprojektowania na wzór szablonu Usługi.
