import React from "react";
import { FaChartLine, FaCode, FaPencilRuler } from "react-icons/fa";
import StepItem from "./StepItem";
import Circle from "./Circle";

const Step = ({ content }: { content: any }) => {
  return (
    <section className="w-full bg-neutral-800 p-4 py-12 md:py-24 md:p-12 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto z-30">
        <h4 className="text-5xl font-bold">Proste 3 kroki</h4>
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center mt-12 w-full gap-8 z-20">
        {content.map((step: any, index: number) => (
          <StepItem key={index} index={index + 1} content={step} />
        ))}
      </div>
      <Circle />
    </section>
  );
};

export default Step;
