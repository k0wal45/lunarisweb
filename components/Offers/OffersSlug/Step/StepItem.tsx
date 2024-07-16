import React from "react";
import { IconType } from "react-icons";

interface StepProps {
  content: {
    icon: IconType;
    title: string;
    description: string;
    points: string[];
  };
  index: number;
}

const StepItem = ({ content, index }: StepProps) => {
  const { icon: Icon, title, description, points } = content;

  return (
    <div className="flex w-[25rem] flex-col items-start justify-between text-white gap-6 p-6 relative overflow-hidden border-[1px] border-neutral-900  bg-neutral-800 rounded-xl shadow-xl z-30 group">
      <div className="group-hover:scale-[1.05] origin-left transition-transform duration-200 z-10 px-2 py-[2px] whitespace-nowrap font-bold border-[2px] border-white rounded-full">
        Krok {index}
      </div>

      <Icon className="group-hover:scale-[1.05] origin-left transition-transform duration-200 z-10 text-7xl" />
      <h2 className="group-hover:scale-110 origin-left transition-transform duration-200 z-10 text-3xl font-bold">
        {title}
      </h2>
      <p className="group-hover:scale-[1.05] origin-left transition-transform duration-200 z-10 text-xl">
        {description}
      </p>
      <ul className="group-hover:scale-[1.05] origin-left transition-transform duration-200 z-10 list-inside text-left">
        {points.map((point, index) => (
          <li
            key={index}
            className="group-hover:scale-[1.05] origin-left transition-transform duration-200 z-10 flex items-center gap-4"
          >
            <div className="size-2 rounded-full bg-accent"></div>
            {point}
          </li>
        ))}
      </ul>

      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute -bottom-12 -right-12 text-9xl text-neutral-900 group-hover:text-violet-400 group-hover:rotate-12 scale-[2.4] origin-bottom-right group-hover:scale-[2.3] transition-transform duration-300" />
    </div>
  );
};

export default StepItem;
