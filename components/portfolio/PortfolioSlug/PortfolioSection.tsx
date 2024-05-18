'use client'

import { FiArrowUpRight } from "react-icons/fi";
import TextParallaxContent from "./ParalaxContent/ParalaxEffect";
import BtnLink from "@/components/reusable/btn-link";

export const TextParallaxContentExample = ({content, index}: any) => {
  return (
    <div className="bg-white" key={index}>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading={content.title}
        heading={content.header}
      >
        <ExampleContent 
          subtitle={content.subtitile}
          text={content.text}
          link={content.link}
        />
      </TextParallaxContent>
  
    </div>
  );
};

const ExampleContent = ({ text, link }: any) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Więcej informacji o projekcie możesz znaleźć tutaj
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        {text}
      </p>
      
      { link ? <BtnLink link="" >Sprawdź Stronę Tutaj</BtnLink> : '' }
    </div>
  </div>
);