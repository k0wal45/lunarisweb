'use client'
import { motion } from "framer-motion";


const PackageCard = ({content}: any) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-[38rem] w-80 shrink-0 overflow-hidden rounded-xl bg-primary [&:nth-child(3)]:bg-secondary [&:nth-child(2)]:bg-indigo-500 p-8"
    >
      <div className="relative z-20 text-white h-full flex flex-col items-start justify-between ">
        <p className="mb-3 block w-fit rounded-full bg-white/20 px-3 py-0.5 text-sm font-light text-white">
          {content.badge}
        </p>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-black text-5xl leading-[1.2]"
        >
          {content.cost}
        </motion.span>
        <p className="text-3xl font-black mb-6">
          {content.title}
        </p>
        <ul className=" flex flex-col gap-2 items-start justify-start mb-4">
          <li className="font-bold">Tworzenie strony internetowej</li>
          
            <ul className="flex flex-col items-start justify-start list-disc px-4">
              {
                content.strony.map(item => (
                  <li>{item}</li>
                ))
              }
            </ul>
          
          <li className="font-bold">Grafika Komputerowa</li>

          <ul className="flex flex-col items-start justify-start list-disc px-4">
            {
              content.grafika.map(item => (
                <li>{item}</li>
              ))
            }
          </ul>
        </ul>
        <button className="z-40 rounded border-2 border-white bg-white py-2 w-full text-center font-black  uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white ">
          Skontaktuj się Teraz
        </button>
      </div>
    
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="608"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.4,
            y: 20
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="50"
        cy="30"
        r="101.5"
        fill="#262626"
      />

      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: 3,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160"
        cy="195.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />

      <motion.circle
        variants={{
          hover: {
            scaleY: 0.4,
            y: -10,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="270"
        cy="364.5"
        r="101.5"
        fill="#262626"
      />
    </motion.svg>

    
  );
};

export default PackageCard;