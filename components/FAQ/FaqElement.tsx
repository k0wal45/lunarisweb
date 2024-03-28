'use client'
import React, { useState } from "react";

const FaqElement = ({ title, answer }: {title: string, answer: string}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="p-4 border-2 border-base rounded-xl " >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full text-start"
      >
        <p>{title}</p>
        <svg
          className="fill-primary shrink-0 ml-2 "
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-lg ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 p-4 border-l-2 py-2 my-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default FaqElement;