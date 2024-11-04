import React from "react";
import FaqElement from "./FaqElement";

const data = [
  {
    title: "Ile kosztuje strona internetowa?",
    answer:
      "Za prostą stronę wizytówkę zapłacisz mniej więcej 2500 zł netto. Jeśli zdecydujesz się na bardziej rozbudowaną i unikalną wersję, koszt wyniesie Cię około 3000-6000 zł netto. Natomiast za zaawansowaną, unikalną stronę internetową stworzoną od podstaw, musisz liczyć się z wydatkiem rzędu 3000-10000 zł netto. Musisz jednak pamiętać, że koszt strony w głównej mierze zależy od funkcjonalności i wymagań jakie masz wobec niej",
  },
  {
    title: "Jaka jest cena logotypu?",
    answer:
      "Cena logotypu może się wachać w zależności czego oczekujesz. W przypadku prostego logotypu bez konieczności tworzenia skomplikowanych grafik i ilustracji to około 600-1200zł, natomaist jeżeli projekt wymaga skomplikowanych działań, cena będzie dostosowywana indywidualnie.",
  },
  {
    title: "Jaki jest koszt wykonania sklepu internetowego?",
    answer:
      "Niestety nie zajmuje się na ten moment tworzeniem sklepów internetowych",
  },
  {
    title: "Jakie są dodatkowe koszta związane ze stroną internetową?",
    answer:
      "Dodatkowymi kosztami będą faktury wystawiane przez dostawców usług niezbędnych do poprawnego działania stworzonej strony. Będzie to np. opłata za domenę oraz hosting.",
  },
  {
    title: "Czy mogę liczyć na fakturę VAT?",
    answer: "Oczywiście, że tak",
  },

  {
    title: "Czym się zajmuje?",
    answer:
      "Moja specjalność to tworzenie nowoczesnych stron internetowych w najnowszych technologiach, które zapewniają szybkość oraz wachlarz możliwości. Dodatkowo, projektuje logotypy, banery reklamowe, wizytówki, różnego rodzaju materiały promocyjne oraz tworzymy elementy graficzne. Moim celem jest dostarczanie kompleksowych rozwiązań, które pomogą w promocji Twojego biznesu",
  },
  {
    title: "Czy podpisuje umowy z klientami?",
    answer:
      "Jeśli klient wyrazi takie życzenie, jestem gotowy do podpisania umowy",
  },

  {
    title: "Ile trwa wykonanie strony?",
    answer:
      "Typowo, realizacja prostych wizytówek firmowych trwa około 7 dni. Natomiast wykonanie bardziej zaawansowanej strony internetowej może zająć więcej zależnie od wymagań co do danego projektu",
  },
];

function generateRandomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 12; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const FAQ = () => {
  return (
    <div className="p-4 flex-1 flex flex-col gap-4 w-full lg:max-w-[50rem]">
      {data.map((faq) => (
        <FaqElement
          title={faq.title}
          answer={faq.answer}
          key={generateRandomString()}
        />
      ))}
    </div>
  );
};

export default FAQ;
