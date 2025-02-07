"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { aiCreate2024, merkuryMedica, oktechLaweta, werva } from "./fullData";
import OnClickCard from "./OnClickCard";

const cards = [aiCreate2024, werva, oktechLaweta, merkuryMedica];

type Card = {
  id: number;
  title: string;
  text: string;
  link: string;
  className: string;
  image: string;
  slugPage: any;
};

const PortfolioGrid = () => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: any) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 m-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`
          ${card.className}
          ${
            selected?.id === card.id
              ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
              : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
          }
        `}
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={`${card.className} relative ${selected?.id === card.id ? "m-4" : ""}`}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <Placeholder
              classname={selected?.id === card.id ? "opacity-0 scale-0" : ""}
              card={card}
            />
          </motion.div>
        </div>
      ))}

      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-white opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const Placeholder = ({
  card,
  classname,
}: {
  card: Card;
  classname: string;
}) => {
  return (
    <Image
      width={1300}
      height={1000}
      src={"/img/" + card.image}
      alt=""
      className={`${classname} top-0 left-0 w-full h-72 rounded-xl object-cover object-right-top bg-white`}
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative h-full px-8 pb-4 z-[70] rounded-lg"
      >
        <OnClickCard selected={selected} />

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.6,
          }}
          className="absolute inset-0 h-full w-full bg-black opacity-60 z-[-1] rounded-lg"
        />
        {selected ? (
          <Image
            width={800}
            height={700}
            src={selected?.slugPage[0].image}
            alt=""
            className="absolute top-0 left-0 w-full h-full z-[-2] object-cover rounded-lg"
          />
        ) : (
          ""
        )}
      </motion.div>
    </div>
  );
};

export default PortfolioGrid;
