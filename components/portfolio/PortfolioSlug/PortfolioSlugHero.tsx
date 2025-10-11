"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PortfolioSlugHero({
  title,
  name,
  images,
  color,
}: {
  title: string;
  name: string;
  images: [string, string, string];
  color: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Detect mobile
  const isMobile =
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false;

  // Parallax only on desktop
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -40 : -350]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 80 : -500]);

  return (
    <header
      ref={ref}
      className="relative flex flex-col items-center justify-start overflow-hidden pt-40 pb-20 min-h-screen"
    >
      {/* Tekst hero */}
      <div className="relative z-10 max-w-5xl px-6 text-center flex items-center flex-col gap-8">
        <p
          className={`text-lg text-gray-600 px-4 bg-${color} w-fit rounded-full`}
        >
          {name}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Strona internetowa i materiały reklamowe dla branży budowniczo
          usługowej
        </h1>
      </div>

      {/* Zdjęcia z efektem parallax */}
      <div className="absolute bottom-0 w-full flex justify-center gap-12 lg:translate-y-2/3">
        <motion.img
          src={images[0]}
          alt="Projekt strony 1"
          style={{ y: y1 }}
          className="w-1/2 lg:w-1/3 object-cover rounded-2xl shadow-lg "
        />
        <motion.img
          src={images[1]}
          alt="Projekt strony 2"
          style={{ y: y2 }}
          className="w-1/2 lg:w-1/3 object-cover rounded-2xl shadow-lg"
        />
        <motion.img
          src={images[2]}
          alt="Projekt strony 3"
          style={{ y: y1 }}
          className="w-1/3 lg:w-1/3 hidden lg:block object-cover rounded-2xl shadow-lg"
        />
      </div>
    </header>
  );
}
