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
    src: "portfolioImg1.png",
  },
  {
    id: 2,
    src: "portfolioImg2.png",
  },
  {
    id: 3,
    src: "portfolioImg3.png",
  },
  {
    id: 4,
    src: "portfolioImg14.png",
  },
  {
    id: 5,
    src: "portfolioImg5.png",
  },
  {
    id: 6,
    src: "portfolioImg16.png",
  },
  {
    id: 7,
    src: "portfolioImg7.png",
  },
  {
    id: 8,
    src: "portfolioImg8.png",
  },
  {
    id: 9,
    src: "portfolioImg9.png",
  },
  {
    id: 10,
    src: "portfolioImg10.png",
  },
  {
    id: 11,
    src: "portfolioImg11.png",
  },
  {
    id: 12,
    src: "portfolioImg12.png",
  },
  {
    id: 13,
    src: "portfolioImg13.png",
  },
  {
    id: 14,
    src: "portfolioImg4.png",
  },
  {
    id: 15,
    src: "portfolioImg15.png",
  },
  {
    id: 16,
    src: "portfolioImg6.png",
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
      <Image width={150} height={100} className="w-full h-full object-cover" alt="" src={'/img/portfolioImages/' + sq.src} />
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