'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "",
  },
  {
    id: 2,
    src: "",
  },
  {
    id: 3,
    src: "",
  },
  {
    id: 4,
    src: "",
  },
  {
    id: 5,
    src: "",
  },
  {
    id: 6,
    src: "",
  },
  {
    id: 7,
    src: "",
  },
  {
    id: 8,
    src: "",
  },
  {
    id: 9,
    src: "",
  },
  {
    id: 10,
    src: "",
  },
  {
    id: 11,
    src: "",
  },
  {
    id: 12,
    src: "",
  },
  {
    id: 13,
    src: "",
  },
  {
    id: 14,
    src: "",
  },
  {
    id: 15,
    src: "",
  },
  {
    id: 16,
    src: "",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
    >
      <Image width={300} height={200} className="w-full h-full object-cover" alt="" src={sq.src} />
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleGrid;