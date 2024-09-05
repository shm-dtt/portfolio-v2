"use client";
import { motion} from "framer-motion";
import { slideUp, textmask } from "./animation";
import { inter } from "@/utils/fonts/Fonts";

const phrases = ["Soham's", "Portfolio", "2024"];

const Preloader: React.FC = () => {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center fixed z-1000 bg-white"
    >
      <div className="flex flex-col">
        {phrases.map((phrase, i) => (
          <div key={i} className="text-black text-4xl font-semibold overflow-hidden">
            <motion.p custom={i} variants={textmask} initial="initial" animate={"enter"} className={inter.className}>{phrase}</motion.p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;