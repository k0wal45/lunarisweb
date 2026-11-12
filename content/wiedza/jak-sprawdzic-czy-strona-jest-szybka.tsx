// Wpis: „Jak sprawdzić, czy Twoja strona jest szybka” (kanwas: „Wpis /wiedza/[slug]”).
// Style treści: klasa `.prose` w app/globals.css. Teksty przez sierotki() (twarde spacje).

import Link from "next/link";
import type { ReactNode } from "react";
import DataTable from "@/components/DataTable";
import { sierotki } from "@/lib/sierotki";

export const TOC = [
  { id: "trzy-liczby", label: "Trzy liczby" },
  { id: "gdzie", label: "Gdzie to sprawdzić" },
  { id: "lighthouse", label: "Wynik Lighthouse" },
  { id: "przyczyny", label: "Co najczęściej spowalnia" },
  { id: "co-dalej", label: "Co zrobić dalej" },
];

const P = ({ children, className }: { children: string; className?: string }) => (
  <p className={className}>{sierotki(children)}</p>
);

const Li = ({ lead, children }: { lead?: string; children: string }) => (
  <li>
    {lead && <strong className="font-semibold">{sierotki(lead)} </strong>}
    {sierotki(children)}
  </li>
);

// próg „dobry” zielonym (Sukces)
const row = (k: string, good: string, mid: string, bad: string) =>
  [k, <span key="g" className="text-success">{good}</span>, mid, bad] as const;

const H2 = ({ id, children }: { id: string; children: ReactNode }) => <h2 id={id}>{children}</h2>;

export default function Body() {
  return (
    <>
      <P>
        Strona, która ładuje się kilka sekund, traci klientów, zanim ci zobaczą ofertę. Google też to widzi: szybkość i stabilność strony są częścią sygnałów, którymi ocenia jakość wyników wyszukiwania. Dobra wiadomość: nie trzeba być programistą, żeby to sprawdzić.
      </P>

      <H2 id="trzy-liczby">Trzy liczby</H2>
      <P>
        Google mierzy szybkość stron trzema wskaźnikami, które razem nazywa Core Web Vitals, po polsku podstawowymi wskaźnikami internetowymi.
      </P>
      <h3>LCP: kiedy widać główną treść</h3>
      <P>
        Largest Contentful Paint to czas, po którym na ekranie pojawia się największy element: zwykle zdjęcie w nagłówku albo duży tytuł. To najbliższa odpowiedź na pytanie „po ilu sekundach klient widzi stronę”.
      </P>
      <h3>INP: jak szybko strona reaguje</h3>
      <P>
        Interaction to Next Paint mierzy, ile czasu mija od kliknięcia, dotknięcia albo naciśnięcia klawisza do momentu, w którym strona pokaże reakcję. Od marca 2024 roku zastępuje starszy wskaźnik FID.
      </P>
      <h3>CLS: czy treść skacze</h3>
      <P>
        Cumulative Layout Shift opisuje, jak bardzo elementy przesuwają się podczas ładowania. Znasz to: chcesz kliknąć „Zadzwoń”, a w ostatniej chwili wskakuje baner i klikasz coś innego.
      </P>

      <DataTable
        caption="Progi Google dla 75% wizyt na stronie"
        columns={["Wskaźnik", "Dobry", "Do poprawy", "Słaby"]}
        className="tabular-nums"
        rows={[
          row("LCP", "do 2,5 s", "2,5–4 s", "powyżej 4 s"),
          row("INP", "do 200 ms", "200–500 ms", "powyżej 500 ms"),
          row("CLS", "do 0,1", "0,1–0,25", "powyżej 0,25"),
        ]}
      />

      <H2 id="gdzie">Gdzie to sprawdzić</H2>
      <h3>PageSpeed Insights</h3>
      <p>
        Wejdź na <code>pagespeed.web.dev</code>
        {sierotki(
          ", wpisz adres strony i poczekaj kilkanaście sekund. Domyślnie zobaczysz wyniki dla telefonu i od nich warto zacząć, bo większość klientów lokalnych firm wchodzi z komórki.",
        )}
      </p>
      <P>
        Raport ma dwie części. Górna pokazuje dane od prawdziwych użytkowników Chrome z ostatnich 28 dni. Dolna to test laboratoryjny Lighthouse, wykonany jednorazowo na symulowanym, wolniejszym telefonie.
      </P>
      <P className="note">
        Mała strona z niewielkim ruchem może nie mieć danych od użytkowników. Wtedy zostaje test laboratoryjny: jest mniej dokładny, ale dobrze pokazuje, co poprawić.
      </P>
      <h3>Google Search Console</h3>
      <P>
        Jeśli masz dostęp do Search Console, otwórz raport podstawowych wskaźników internetowych. Pokazuje on wyniki dla całej witryny, pogrupowane według podobnych adresów, więc od razu widać, które podstrony mają problem.
      </P>
      <h3>{sierotki("Lighthouse w przeglądarce")}</h3>
      <P>
        W Chrome naciśnij F12, wybierz kartę Lighthouse i uruchom test. Wynik zależy od Twojego komputera i łącza, więc traktuj go jako podpowiedź, a nie wyrok.
      </P>

      <H2 id="lighthouse">Wynik Lighthouse to nie wszystko</H2>
      <P>
        Liczba od 0 do 100 w kółku jest łatwa do pokazania, ale to wynik testu laboratoryjnego. Potrafi się różnić o kilka punktów między kolejnymi pomiarami. Do oceny w wyszukiwarce Google używa danych od prawdziwych użytkowników, czyli górnej części raportu.
      </P>
      <blockquote>
        {sierotki("Cel nie brzmi „100 punktów”. Cel brzmi: trzy zielone wskaźniki na telefonie.")}
      </blockquote>

      <H2 id="przyczyny">Co najczęściej spowalnia stronę</H2>
      <ul>
        <Li lead="Za duże zdjęcia.">
          Zdjęcie prosto z aparatu waży kilka megabajtów. Na stronie wystarczy kilkaset kilobajtów w formacie WebP lub AVIF, w wymiarach dopasowanych do ekranu.
        </Li>
        <Li lead="Za dużo skryptów.">
          Czat, kilka pikseli reklamowych, slider i dziesięć wtyczek: każda rzecz dokłada czas, zanim strona zareaguje na kliknięcie.
        </Li>
        <Li lead="Obrazy i banery bez zarezerwowanego miejsca.">
          Gdy przeglądarka nie zna wymiarów elementu, treść przeskakuje po jego wczytaniu. Stąd wysoki CLS.
        </Li>
        <Li lead="Fonty z wielu źródeł.">
          Każdy krój i każda grubość to osobny plik. Dwa kroje dobrze załadowane wystarczą.
        </Li>
        <Li lead="Wolny serwer.">
          Najtańszy hosting potrafi odpowiadać dłużej, niż trwa całe ładowanie dobrze zrobionej strony.
        </Li>
      </ul>

      <H2 id="co-dalej">Co zrobić dalej</H2>
      <ol>
        <Li>
          Sprawdź stronę główną i podstronę, na którą trafia najwięcej klientów, w PageSpeed Insights na telefonie.
        </Li>
        <Li>
          Zapisz trzy liczby: LCP, INP i CLS, oraz to, czy pochodzą od użytkowników, czy z testu.
        </Li>
        <Li>
          Przewiń do sekcji „Diagnostyka”: znajdziesz tam listę konkretnych problemów, od najważniejszych.
        </Li>
      </ol>
      <p>
        {sierotki("Jeśli wyniki są czerwone, a lista wygląda jak szyfr, ")}
        <Link href="/kontakt">napisz do mnie</Link>
        {sierotki(
          ". Powiem, co da się poprawić w obecnej stronie, a kiedy taniej będzie zbudować nową.",
        )}
      </p>
    </>
  );
}
