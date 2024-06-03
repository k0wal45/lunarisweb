'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";
import { IconType } from "react-icons";

const Services = ({content}: any) => {
  const [open, setOpen] = useState(content.list[0].id);

  return (
    <section className="flex flex-col gap-16 my-12 items-center justify-center p-4">
      <h4 className="text-5xl lg:text-6xl font-bold p-4">{content.title}</h4>
      <div className="flex flex-col lg:flex-row h-fit lg:h-[550px] w-full max-w-6xl mx-auto overflow-hidden">

        {content.list.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              icon={item.icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  icon: any;
  title: string;
  imgSrc: string;
  description: string;
}

const Panel = ({
  open,
  setOpen,
  id,
  icon,
  title,
  imgSrc,
  description,
}: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="lg:w-20 bg-white hover:bg-slate-100 transition-colors p-3 border-r-[2px] border-b-[2px] border-slate-200 flex flex-row-reverse lg:flex-col justify-between items-center gap-4 relative group rounded-xl"
        onClick={() => setOpen(id)}
      >
        <div className="hidden lg:block"></div>
        <p className="text-xl whitespace-nowrap lg:rotate-[-90deg] lg:tracking-widest">
          {title}
        </p>
        <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center lg:text-2xl">
          {icon}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative  flex items-end rounded-xl"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white lg:text-2xl"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};
