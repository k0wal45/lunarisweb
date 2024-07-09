import { FaCheck } from "react-icons/fa";
import BtnLink from "@/components/reusable/btn-link";
import AppearFromLeft from "@/components/Animations/AppearFromLeft";

const Hero = ({ content }: any) => {
  return (
    <section className="grid lg:grid-cols-5 gap-12  min-h-screen w-full relative bg-neutral-700">
      <div className="flex flex-col items-start justify-center gap-8 p-4 pt-32 lg:pt-12 w-full lg:pl-24 col-span-2 z-20 text-white">
        <AppearFromLeft>
          <h1 className="text-6xl font-bold w-full ">{content.title}</h1>
        </AppearFromLeft>
        <AppearFromLeft>
          <p className="text-xl font-semibold pl-4 border-l-4 border-primary max-w-lg">
            {content.text}
          </p>
        </AppearFromLeft>
        <AppearFromLeft>
          <ul className="flex flex-col gap-2 items-start justify-start text-lg">
            {content.list.map((reason: any) => (
              <li
                className="flex items-center justify-start gap-4"
                key={reason}
              >
                <p className="text-primary">
                  <FaCheck />
                </p>
                {reason}
              </li>
            ))}
          </ul>
        </AppearFromLeft>
        <AppearFromLeft>
          <BtnLink link="/kontakt">Skontaktuj się już teraz</BtnLink>
          <p className="text-lg font-bold">
            Nie czekaj zrób krok w przód już dziś
          </p>
        </AppearFromLeft>
      </div>

      <video
        className="w-full h-full object-cover absolute top-0 left-0 brightness-50"
        autoPlay
        muted
        loop
      >
        <source src={"/video/" + content.img} type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
