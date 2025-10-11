import UnderlineOnHover from "@/components/Animations/UnderlineOnHover";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";

const ProjectGlance = ({
  desc,
  images,
  website,
}: {
  desc: string;
  images: [string, string];
  website?: string | undefined;
}) => {
  return (
    <section className="px-4 py-24 border-b-2 border-solid border-neutral-100">
      <h2 className="text-4xl md:text-6xl font-bold mx-auto text-center">
        Projekt w skrócie
      </h2>
      <p className="text-lg text-neutral-600 mt-8 text-center px-4 max-w-5xl mx-auto">
        {desc}
      </p>

      {website ? (
        <div className="w-fit mx-auto mt-6">
          <UnderlineOnHover color="black">
            <Link
              href={website}
              target="_blank"
              className="flex items-center gap-3 w-fit p-2 group active:scale-95 duration-100"
            >
              Sprawdź stronę{" "}
              <TfiArrowTopRight className="group-hover:rotate-45 transition-transform duration-200" />
            </Link>
          </UnderlineOnHover>
        </div>
      ) : (
        ""
      )}

      {/* image */}

      <div className="relative w-full md:h-[80vh] mt-24 grid md:grid-cols-2 md:grid-rows-2 gap-8">
        <div className="grid place-items-center p-8 rounded-[2rem] bg-neutral-100 w-full h-full row-span-2">
          {/* iphone mockup */}
          {website ? (
            <div className="relative grid-place-items-center rounded-[3.5em] border-8 border-solid border-neutral-500 w-72 aspect-[9/18] shadow-xl overflow-hidden">
              {/* island */}
              <div className="absolute top-4 left-1/2 w-20 py-[10px] bg-neutral-500 rounded-full -translate-x-1/2"></div>
              <Image
                width={1920}
                height={1080}
                alt=""
                src={images[0]}
                className="h-full object-cover"
              />
            </div>
          ) : (
            <div className=""></div>
          )}
        </div>

        <Image
          width={1920}
          height={1080}
          alt=""
          src={images[0]}
          className="h-full rounded-3xl object-cover object-top"
        />
        <Image
          width={1920}
          height={1080}
          alt=""
          src={images[0]}
          className="h-full rounded-3xl object-cover object-top"
        />
      </div>
    </section>
  );
};

export default ProjectGlance;
