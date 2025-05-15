import {
  FaChartLine,
  FaCheck,
  FaCode,
  FaCompass,
  FaDraftingCompass,
  FaPaintBrush,
  FaPallet,
  FaPencilRuler,
  FaSearch,
} from "react-icons/fa";

import { IoPhonePortraitOutline } from "react-icons/io5";

import { SiStackblitz } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";

export const stronyInternetowe = {
  slug: "strony-internetowe",
  hero: {
    title: "Strona internetowa dla Twojej firmy",
    text: "Stworzymy dla Ciebie stronę internetową, która wyróżni Twoją markę w sieci",
    list: [
      "Zwiększona widoczność i dostępność",
      "Profesjonalny wizerunek firmy w sieci",
      "Skuteczny sposób dotarcia do klienta",
    ],
  },
  services: {
    title: "Jakie strony internetowe tworzymy?",
    list: [
      {
        id: 0,
        title: "Spełniające oczekiwania",
        icon: <TbTargetArrow />,
        description:
          "Zależy mi na tym, aby produkt, który dostajesz spełniał twoje oczekiwania. Wprowadzam zmiany oraz proponuje zmiany, aby efekt końcowy był taki jak tego oczekujesz!",
      },
      {
        id: 1,
        title: "W pełni Responsywne",
        icon: <IoPhonePortraitOutline />,
        description:
          "Moje strony internetowe są w pełni responsywne, co oznacza, że doskonale wyglądają i działają na wszystkich urządzeniach, od komputerów po smartfony.",
      },
      {
        id: 2,
        title: "Intuicyjnie Zaprojektowane",
        icon: <FaCompass />,
        description:
          "Kładę duży nacisk na intuicyjność moich projektów, dzięki czemu nawigacja po stronie jest prosta i przyjemna dla każdego użytkownika.",
      },
      {
        id: 3,
        title: "Niezwykle Szybkie",
        icon: <SiStackblitz />,
        imgSrc:
          "https://images.unsplash.com/photo-1507235071172-438ca6950a8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Optymalizuje strony pod kątem szybkości ładowania, co przekłada się na lepsze doświadczenia użytkowników i wyższą pozycję w wynikach wyszukiwania.",
      },
      {
        id: 4,
        title: "Estetycznie Atrakcyjne",
        icon: <FaPallet />,
        description:
          "Dbam o atrakcyjny wygląd stron, tworząc nowoczesne i estetyczne projekty, które przyciągają uwagę i wyróżniają się na tle konkurencji.",
      },
    ],
  },
  offer: [
    {
      title: "Nowoczesna strona wizytówka",
      description: "Strona Wizerunkowa",
      items: [
        "Strona z jedną sekcją",
        "Formularz kontaktowy",
        "Optymalizacja SEO",
      ],
      price: 1500,
    },
    {
      title: "Strona firmowa z podstronami",
      description: "Strona Firmowa",
      items: [
        "3-5 podstron",
        "Możliwość wprowadzania zmian",
        "Formularz kontaktowy",
      ],
      price: 3000,
    },
    {
      title: "Strona z blogiem",
      description: "Własny blog",
      items: [
        "Własny blog na stronie",
        "3-7 podstron",
        "Panel zarządzania treścią",
      ],
      price: 4000,
    },
  ],
  step: [
    {
      icon: FaChartLine,
      title: "Rozmowa",
      description: "Analiza branży klienta, konkurencji i grupy docelowej",
      points: [
        "Rozmowa telefoniczna",
        "Rozeznanie potrzeb",
        "Wstępny zarys projektu",
      ],
    },
    {
      icon: FaPencilRuler,
      title: "Planowanie",
      description:
        "Definiowanie technologii i serwisów potrzebnych do działania projektu",
      points: [
        "Wybór technologii",
        "Dobranie serwisów",
        "Konsultacja z klientem",
      ],
    },
    {
      icon: FaCode,
      title: "Rozwój",
      description:
        "Tworzenie struktury strony, skryptów i wprowadzanie poprawek.",
      points: [
        "Zaprogramowanie projektu",
        "Testowanie i poprawki",
        "Wdrożenie produktu",
      ],
    },
  ],
};

export const grafikaKomputerowa = {
  slug: "grafika-komputerowa",
  hero: {
    title: "Wizytówki czy Banery Reklamowe z Twoją firmą",
    text: "Jeśli potrzebujesz grafiki która pomoże twojemy biznesowi, zgłoś się do mnie",
    list: [
      "Zwiększona świadomość społeczeństwa o twojej firmie",
      "Profesjonalny wizerunek firmy w przestrzeni publicznej",
      "Skuteczny sposób dotarcia do klienta",
    ],
  },
  services: {
    title: "Co może pomóc ci osiągnąć twoje cele?",
    list: [
      {
        id: 1,
        title: "Twoje własne wizytówki",
        icon: <IoPhonePortraitOutline />,
        description:
          "Wizytówki są nieodzownym narzędziem w świecie biznesu. Ułatwiają nawiązywanie kontaktów, przekazując kluczowe informacje w kompaktowej formie.",
      },
      {
        id: 2,
        title: "Banery Reklamowe",
        icon: <FaCompass />,
        description:
          "Baner reklamowy zwiększa widoczność firmy, przyciągając uwagę wyrazistymi grafikami i hasłami. Promuje produkty lub usługi, przekazując kluczowe informacje. ",
      },
      {
        id: 3,
        title: "Ulotki Informacyjne",
        icon: <SiStackblitz />,
        description:
          "Ulotki wzmacniają wizerunek marki, promują produkty lub usługi, przekazując kluczowe informacje i wspierają kampanie promocyjne, zwiększając zasięg działań marketingowych.",
      },
      {
        id: 4,
        title: "Inne materiały graficzne",
        icon: <FaPallet />,
        description:
          "Materiały graficzne, które mogą pomóc firmie, to między innymi plakaty, broszury, katalogi, infografiki, reklamy internetowe czy opakowania produktów. ",
      },
    ],
  },
  offer: [
    {
      title: "Ulotka lub plakat",
      description: "Prosty i skuteczny projekt reklamowy.",
      items: ["Projekt w PDF i JPG", "Gotowe do druku", "Projekt jednostronny"],
      price: 300,
    },
    {
      title: "Wizytówka",
      description: "Prosta wizytówka firmowa.",
      items: [
        "Dopasowany do platformy",
        "Estetyczny wygląd",
        "Szybkie wykonanie",
      ],
      price: 250,
    },
    {
      title: "Zestaw grafik reklamowych",
      description: "Pakiet grafik do kampanii lub strony.",
      items: ["Spójna stylistyka", "Dostosowane do platformy"],
      price: 700,
    },
  ],
  step: [
    {
      icon: FaChartLine,
      title: "Konsultacja",
      description:
        "Analiza potrzeb klienta i oczekiwań względem projektu graficznego.",
      points: ["Rozmowa wstępna", "Określenie celów", "Zarys projektu"],
    },
    {
      icon: FaPencilRuler,
      title: "Projektowanie",
      description: "Tworzenie wstępnych szkiców i koncepcji graficznych.",
      points: ["Szkice koncepcyjne", "Wybór kolorystyki", "Prace graficzne"],
    },
    {
      icon: FaPaintBrush,
      title: "Realizacja",
      description:
        "Wykonanie finalnych grafik zgodnie z zaakceptowanym projektem.",
      points: [
        "Prezentacja projektów",
        "Korekta na życzenie klienta",
        "Dostarczenie finalnych plików",
      ],
    },
  ],
};

export const logotypy = {
  slug: "logotypy",
  hero: {
    title: "Twój pierwszy krok w budowaniu twojej marki",
    text: "Wyróżnij swoją firmę na tle konkurencji i zainwestuj w profesjonalny wizerunek firmy",
    list: [
      "Profesjonalny wizerunek firmy",
      "Odzwierciedlenie charakteru i wartości firmy",
      "Przyciągnięcie uwagi klienta",
    ],
  },
  services: {
    title: "Czym charakteryzują się nasze logotypy",
    list: [
      {
        id: 1,
        title: "Projektowanie od podstaw",
        icon: <IoPhonePortraitOutline />,
        description:
          "Tworzymy unikalne projekty logotypów, uwzględniając zarówno estetykę, jak i czytelność, aby zapewnić, że Twoja marka będzie wyróżniać się na rynku.",
      },
      {
        id: 2,
        title: "Dostosowanie do różnych mediów",
        icon: <FaCompass />,
        description:
          "Projektujemy logotypy, które są skalowalne i wyglądają doskonale zarówno na ekranie komputera, jak i na materiałach drukowanych, zapewniając spójny wizerunek marki.",
      },
      {
        id: 3,
        title: "Korekty i dopasowania",
        icon: <SiStackblitz />,
        description:
          "Jesteśmy otwarci na Twoje sugestie i oferujemy możliwość wprowadzania poprawek, aby finalny logotyp idealnie odzwierciedlał Twoją wizję.",
      },
    ],
  },
  offer: [
    {
      title: "Logo na start",
      description: "Logo oparte na typografii (tekstowe)",
      items: ["2 projekt do wyboru", "2 rundy poprawek", "Szybka realizacja"],
      price: 500,
    },
    {
      title: "Logo z koncepcją",
      description: "Przemyślana identyfikacja marki.",
      items: ["2 propozycje logo", "4 rundy poprawek", "Kolorystyka + fonty"],
      price: 800,
    },
    {
      title: "Logo z księgą znaku",
      description: "Dla firm dbających o spójność wizualną.",
      items: [
        "Logo + księga znaku",
        "3 propozycje koncepcyjne",
        "Wersje na ciemnym tle",
      ],
      price: 2000,
    },
  ],
  step: [
    {
      icon: FaSearch,
      title: "Analiza",
      description:
        "Zrozumienie marki, jej wartości i docelowej grupy odbiorców.",
      points: ["Badanie rynku", "Analiza konkurencji", "Rozmowa z klientem"],
    },
    {
      icon: FaDraftingCompass,
      title: "Koncepcja",
      description: "Tworzenie różnych wersji koncepcyjnych logotypu.",
      points: ["Szkice wstępne", "Wybór stylu", "Prezentacja wersji klientowi"],
    },
    {
      icon: FaCheck,
      title: "Wykonanie",
      description:
        "Tworzenie finalnej wersji logotypu i dostosowanie do różnych mediów.",
      points: [
        "Projektowanie w programie graficznym",
        "Wprowadzanie potrzebnych zmian",
        "Dostarczenie finalnych plików",
      ],
    },
  ],
};

export const fullOffersData = [stronyInternetowe, grafikaKomputerowa, logotypy];
