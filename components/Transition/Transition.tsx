"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const variants = {
  initial: {
    clipPath:
      "polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 0%)",
  },
  animate: {
    clipPath:
      "polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 100% 100%, 100% 0%)",
  },
};
const Transition = ({ open }: { open: boolean }) => {
  return (
    <motion.div
      initial="initial"
      animate={open ? "animate" : "initial"}
      variants={variants}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-full h-full z-[100] bg-white grid place-items-center"
    >
      <Image
        src="/img/logo.png"
        alt="Logo Lunaris Web"
        width={200}
        height={200}
      />
    </motion.div>
  );
};

export default Transition;
