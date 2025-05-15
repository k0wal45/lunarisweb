import Image from "next/image";
import BtnLink from "../reusable/btn-link";
import classes from "./hero.module.css";
import TyperWriter from "./TypeWriter/TypeWriter";
import AppearFromLeft from "../Animations/AppearFromLeft";

function Hero() {
  const heroText = [
    "Tworzę Strony Internetowe",
    3000,
    "Tworzę Logotypy",
    3000,
    "Tworzę Banery Reklamowe",
    3000,
  ];

  return (
    <section className="flex justify-center items-end min-h-screen max-w-screen relative overflow-hidden border-b-2 border-neutral-200 p-4 pb-0">
      <div className="text-start flex flex-col lg:flex-row lg:pb-0 pt-32 lg:pt-0 justify-center items-center gap-24">
        <div className="flex flex-col gap-4 max-w-md p-4 lg:p-0">
          <AppearFromLeft>
            <h1 className="text-5xl font-[800]">
              Strony internetowe w Katowicach
            </h1>
          </AppearFromLeft>

          <AppearFromLeft>
            <h2 className="text-xl">
              Projektuję nowoczesne i przejrzyste firmowe strony internetowe,
              które pomagają małym firmom z Katowic skutecznie komunikować się z
              klientami i zdobywać nowych odbiorców
            </h2>
          </AppearFromLeft>
          <AppearFromLeft>
            <BtnLink link="/kontakt">Skontaktuj się po darmową wycenę</BtnLink>
          </AppearFromLeft>
        </div>
        <div className={classes.circleContainer}>
          <Image
            src="/img/beztla.png"
            alt="Daniel Kowalski Zdjęcie"
            width={700}
            height={900}
            className="h-[30rem] lg:h-[90vh] lg:w-auto block z-30 object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
