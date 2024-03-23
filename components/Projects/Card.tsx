import React from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

interface CardProps {
  name: string;
  tech: string;
  i: number;
  year: number;
  isOpened: boolean;
  toggleCard: () => void;
}

const Card: React.FC<CardProps> = ({ name, year, tech, i, isOpened, toggleCard }) => {
  const manageMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "#FFFFFF",
      duration: 0.2,
      color: "black",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    });
    gsap.to(e.currentTarget.querySelectorAll("p"), {
      color: "black",
      duration: 0.2,
    });
  };

  const manageMouseLeave = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "#121212",
      duration: 0.1,
      delay: 0.1,
      color: "white",
      paddingLeft: "0px",
      paddingRight: "0px",
    });
    gsap.to(e.currentTarget.querySelectorAll("p"), {
      color: "white",
      duration: 0.1,
      delay: 0.1,
    });
  };

  return (
    <>
      <div
        className=" border-t-2 border-neutral-500 text-white py-2 flex justify-between text-sm select-none cursor-pointer"
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        onClick={toggleCard}
      >
        <p className="flex-1">{name}</p>
        <p className="md:flex-1 flex-none md:block hidden">{tech}</p>
        <p className="">{year}</p>
      </div>
      <motion.div
          className=" bg-red-400"
          initial={{ opacity: 0, height: 0 }}
          animate={isOpened ? { opacity: 1, height: "20rem" } : { opacity: 0, height: "0" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
        </motion.div>
    </>
  );
};

export default Card;

