"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AppearFromRight = ({ children }: any) => {
  const ref: any = useRef();

  const IsInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          x: 100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      animate={IsInView ? "visible" : "hidden"}
      transition={{ duration: 0.35, ease: "easeInOut", delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default AppearFromRight;
