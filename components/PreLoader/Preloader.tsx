'use client'
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import FrozenRoute from "../HOC/FrezeRoute";

const PreLoader = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const path =  usePathname()
  return (
    <AnimatePresence      
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div 
        key={path}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 20}}
        
        
        className="w-full min-h-screen"
      >
        {/* <FrozenRoute> */}
          {children}
        {/* </FrozenRoute> */}
      </motion.div>
    </AnimatePresence>

  )
}

export default PreLoader
