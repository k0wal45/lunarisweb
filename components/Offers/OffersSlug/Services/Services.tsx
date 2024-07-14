"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Services = ({ content }: { content: any }) => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < content.list.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden bg-neutral-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col lg:flex-row justify-between gap-4">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl max-w-2xl">
            {content.title}
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-primary p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftRight}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-primary p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftLeft}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {content.list.map((item: any, index: number) => (
            <Feature
              content={item}
              key={index}
              position={position}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  position: number;
  index: number;
  title: string;
  description: string;
  Icon: IconType;
}

const Feature = ({
  content,
  index,
  position,
}: {
  content: any;
  index: number;
  position: number;
}) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
        index % 2 ? "bg-primary text-white" : " bg-white"
      }`}
    >
      <div className="absolute right-2 top-2 text-7xl opacity-20">
        {content.icon}
      </div>
      <h3 className="mb-8 text-3xl font-bold">{content.title}</h3>
      <p>{content.description}</p>
    </motion.div>
  );
};

export default Services;
