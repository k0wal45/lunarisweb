import { FaTools } from "react-icons/fa";
import WhyCard from "./WhyCard";
import { FaArrowsToDot, FaPerson } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";

function WhyUs() {
  return (
    <section className="my-0 mx-auto flex flex-col items-center text-center gap-8 w-full bg-primary bg-opacity-20  p-4 pt-12  lg:py-24 ">
      <h2 className="font-bold text-4xl lg:text-6xl">
        Czemu Powinieneś nas wybrać
      </h2>
      <p className="opacity-70 text-xl">
        Wybierz nas dla skutecznych strategii marketingowych oraz elastyczności
        dostosowanej do Twoich potrzeb.
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-start flex-wrap gap-12">
        <WhyCard
          heading="Realizacje pokrywają się z oczekiwaniami"
          text="Projekty w pełni dostosowane do Twoich wymagań i oczekiwań."
          icon={<TbTargetArrow />}
        />

        <WhyCard
          heading="Profesjonalne Umiejętności"
          text="Połączenie technicznych umiejętności z komunikacją, by osiągnąć idealny efekt."
          icon={<FaTools />}
        />

        <WhyCard
          heading="Wszystko w jednym miejscu"
          text="Grafika, strony internetowe i logotypy w 1 miejscu - wygoda i oszczędność czasu."
          icon={<FaArrowsToDot />}
        />

        <WhyCard
          heading="Jedna osoba od wszystkiego"
          text="Od kontaktu po realizację - całość projektu w rękach jednego specjalisty."
          icon={<FaPerson />}
        />
      </div>
    </section>
  );
}

export default WhyUs;
