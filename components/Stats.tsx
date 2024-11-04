import Reveal from "./Animations/Reveal";

function Stats() {
  function obliczWiek(dataObecna: any) {
    const dataUrodzenia: any = new Date("2023-04-21");
    const roznicaCzasu = dataObecna - dataUrodzenia;
    const roznicaWiek = new Date(roznicaCzasu).getFullYear() - 1970;
    return roznicaWiek;
  }

  const dataObecna = new Date(); // Bieżąca data

  return (
    <section className="flex flex-col lg:flex-row gap-8 p-4 w-full border-b-2 border-base overflow-hidden">
      <div className="flex-1 p-4 flex flex-col gap-4 text-center lg:text-start lg:items-start items-center ">
        <h2 className="font-bold text-2xl">
          Wykonanych Komercyjnych Stron Internetowych
        </h2>
        <Reveal>
          <p className="text-6xl text-primary font-bold ml-4">9</p>
        </Reveal>
      </div>

      <div className="w-48 lg:w-0 lg:h-40 border-[1px] border-base m-auto"></div>

      <div className="flex-1 p-4 flex flex-col gap-4 text-center lg:text-start lg:items-start items-center">
        <h2 className="font-bold text-2xl ">Wykonanych Projektów dla firm</h2>
        <Reveal>
          <p className="text-6xl text-primary font-bold ml-4 pb-2">60+</p>
        </Reveal>
      </div>

      <div className=" w-48 lg:w-0 lg:h-40 border-[1px] border-base m-auto"></div>

      <div className="flex-1 p-4 flex flex-col gap-4 text-center lg:text-start lg:items-start items-center">
        <h2 className="font-bold text-2xl">Lata na Rynku</h2>
        <Reveal>
          <p className="text-6xl text-primary font-bold ml-4">
            {obliczWiek(dataObecna)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Stats;
