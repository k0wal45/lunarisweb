import Image from "next/image";
import React from "react";

const ProjectInfo = ({
  data,
}: {
  data: { title: string; desc: string; image: string }[];
}) => {
  return (
    <section>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row odd:md:flex-row-reverse gap-24 items-center p-4 md:p-12"
        >
          <Image
            width={1000}
            height={1400}
            alt="Mockup strony internetowej"
            src={item.image}
            className="rounded-[2em] md:flex-1"
          />
          <div className="flex flex-col gap-8 flex-1 md:w-full">
            <h2 className="text-5xl ">{item.title}</h2>
            <p className="text-lg">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectInfo;
