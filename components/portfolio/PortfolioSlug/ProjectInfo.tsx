import Image from "next/image";
import React from "react";

const ProjectInfo = ({
  data,
}: {
  data: { title: string; desc: string; image: string }[];
}) => {
  return (
    <section className="max-w-[100vw] overflow-hidden mx-auto">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:grid md:grid-cols-2 gap-24 items-center p-4 md:p-12"
        >
          {index % 2 === 1 ? (
            <>
              <div className="flex flex-col gap-8 flex-1 w-full">
                <h2 className="text-5xl ">{item.title}</h2>
                <p className="text-lg max-w-2xl">{item.desc}</p>
              </div>
              <Image
                width={800}
                height={100}
                alt="Mockup strony internetowej"
                src={item.image}
                className="rounded-[2em] flex-1 w-fit"
              />
            </>
          ) : (
            <>
              <Image
                width={800}
                height={100}
                alt="Mockup strony internetowej"
                src={item.image}
                className="rounded-[2em] flex-1 w-fit"
              />
              <div className="flex flex-col gap-8 flex-1 w-full">
                <h2 className="text-5xl ">{item.title}</h2>
                <p className="text-lg max-w-2xl">{item.desc}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProjectInfo;
