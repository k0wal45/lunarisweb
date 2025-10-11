import {
  SiAdobephotoshop,
  SiElementor,
  SiInkscape,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import { PortfolioPage } from "@/utils/interface";

export const oktech: PortfolioPage = {
  id: 1,
  title: "Oktech Klimatyzacje",
  name: "oktech-klimatyzacje",
  color: "blue-500",
  techstack: [],
  className: "col-span-1",
  imagesHero: [
    "/img/oktech/thumbnail.png",
    "/img/oktech/thumbnail.png",
    "/img/oktech/thumbnail.png",
  ],
  desc: "Zaprojektowałem przejrzystą, statyczną stronę wizytówkę dla firmy HDS Zwyżka, specjalizującej się w usługach transportu HDS, wynajmu zwyżek, montażu i serwisu klimatyzacji oraz wynajmu autolawet. Strona zawiera czytelny układ z sekcjami przedstawiającymi pełen zakres usług, informacje o firmie oraz galerię zdjęć z realizacjami. Intuicyjna nawigacja i estetyczny design sprawiają, że użytkownicy mogą łatwo znaleźć potrzebne informacje. Strona została zoptymalizowana pod kątem szybkości ładowania, co zapewnia płynne doświadczenie przeglądania. Dzięki tej stronie firma może skutecznie prezentować swoją ofertę i budować profesjonalny wizerunek w sieci.",
  imagesGlance: [
    "/img/oktech/thumbnail.png",
    "/img/oktech/thumbnail.png",
    "/img/oktech/thumbnail.png",
  ],
  data: [
    {
      title: "Strona Internetowa",
      desc: "Zaprojektowałem przejrzystą, statyczną stronę wizytówkę dla firmy HDS Zwyżka, specjalizującej się w usługach transportu HDS, wynajmu zwyżek, montażu i serwisu klimatyzacji oraz wynajmu autolawet. Strona zawiera czytelny układ z sekcjami przedstawiającymi pełen zakres usług, informacje o firmie oraz galerię zdjęć z realizacjami. Intuicyjna nawigacja i estetyczny design sprawiają, że użytkownicy mogą łatwo znaleźć potrzebne informacje. Strona została zoptymalizowana pod kątem szybkości ładowania, co zapewnia płynne doświadczenie przeglądania. Dzięki tej stronie firma może skutecznie prezentować swoją ofertę i budować profesjonalny wizerunek w sieci.",
      image: "/img/oktech/thumbnail.png",
    },
  ],
};

// reszta obiektów byłaby analogicznie przepisana
export const GetFullPortfolioData = () => {
  const data = [oktech];
  return data;
};
