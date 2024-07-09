"use client";

import TextParallaxContent from "./ParalaxContent/ParalaxEffect";
import BtnLink from "@/components/reusable/btn-link";

export const TextParallaxContentExample = ({ content, index }: any) => {
  return (
    <div className="bg-white" key={index}>
      <TextParallaxContent
        imgUrl={content.image}
        subheading={content.title}
        heading={content.header}
      >
        <ExampleContent
          subtitle={content.subtitile}
          text={content.text}
          link={content.link}
          index={index}
        />
      </TextParallaxContent>
    </div>
  );
};

const ExampleContent = ({ text, link, index }: any) => (
  <div
    key={index}
    className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12"
  >
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Więcej informacji o projekcie możesz znaleźć tutaj
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">{text}</p>

      {link ? <BtnLink link={link}>Sprawdź Stronę Tutaj</BtnLink> : ""}
    </div>
  </div>
);
