"use client";
import Reveal from "@/components/Animations/Reveal";
import BtnLink from "@/components/reusable/btn-link";
import anime from "animejs";
import { FaCheck } from "react-icons/fa";

const Hero = ({ content }: { content: any }) => {
  return (
    <section className="overflow-hidden px-8 py-24 pt-32 md:px-12 md:py-32 md:pt-48">
      <div className="relative mx-auto max-w-7xl">
        <div className="pointer-events-none relative z-10 gap-4 flex flex-col">
          <Reveal>
            <h1 className=" text-5xl font-black md:text-7xl my-2 max-w-4xl">
              {content.title}
            </h1>
          </Reveal>
          <Reveal>
            <ul className="flex flex-col gap-2 items-start justify-start text-xl">
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
          </Reveal>
          <Reveal>
            <p className=" max-w-xl text-xl text-neutral-800 pl-2 border-l-4 border-primary">
              {content.text}
            </p>
          </Reveal>
          <Reveal>
            <BtnLink link="/kontakt">Skontaktuj się ze mną</BtnLink>
          </Reveal>
        </div>
        <DotGrid />
      </div>
    </section>
  );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 23;

const DotGrid = () => {
  const handleDotClick = (e: any) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-300"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-400 to-slate-400 opacity-50 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="absolute hidden right-0 top-[50%] z-0 lg:grid max-w-[75%] -translate-y-[50%]"
    >
      {dots}
    </div>
  );
};

export default Hero;
