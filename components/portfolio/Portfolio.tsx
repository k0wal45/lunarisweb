import PortfolioGrid from "./PortfolioGrid";

const Portfolio = () => {
  return (
    <section
      className="
      relative p-4 lg:m-12
      flex flex-col items-center justify-center gap-8
    "
    >
      <div className="flex flex-col gap-8 items-center justify-center lg:w-1/2 text-center">
        <h5 className="text-3xl lg:text-6xl font-bold">
          Sprawdź moje Portfolio!
        </h5>
        <p>
          Zapraszam do zapoznania się z moją wcześniejszą pracą i eksplorowania
          projektów, nad którymi miałem przyjemność pracować. Odkryj różnorodne
          strony internetowe oraz materiały reklamowe, które udało mi się
          stworzyć wspólnie z naszymi klientami.
        </p>
      </div>

      <PortfolioGrid />
    </section>
  );
};

export default Portfolio;
