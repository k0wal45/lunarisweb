"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Circle = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const translateX = useTransform(scrollYProgress, [0, 1], ["-32rem", "32rem"]);

  return (
    <motion.div
      ref={targetRef}
      style={{ translateX }}
      className={`absolute size-[50rem] -bottom-72 bg-neutral-900 rounded-full grid place-items-center`}
    >
      <div className="size-[30rem] bg-neutral-800 rounded-full"></div>
    </motion.div>
  );
};

export default Circle;
