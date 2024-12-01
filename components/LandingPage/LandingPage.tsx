"use client";
import React, { useState, useEffect, useRef } from "react";
import { inter } from "@/utils/fonts/Fonts";
import { Data } from "@/utils/data/Data";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import HoverButton from "../HoverButton/HoverButton";

const LandingPage: React.FC = () => {
  const [windowsWidth, setWindowsWidth] = useState(0);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end 0.75", "start start"],
  });

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);
  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return Array.from({ length: nbOfBlocks }).map((_, index) => {
      return (
        <div
          onMouseEnter={(e) => {
            colorize(e.target as HTMLElement); // Typecast the event target to HTMLElement
          }}
          key={index}
          className=" w-full h-[5vw]"
        ></div>
      );
    });
  };

  const colorize = (el: HTMLElement) => {
    el.style.backgroundColor = "white";
    el.style.mixBlendMode = "difference";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300);
  };

  return (
    <motion.div
      ref={container}
      style={{ opacity: scrollYProgress }}
      className=" flex flex-col h-screen mb-32 items-center justify-center"
    >
      <div
        className={`${inter.className} flex flex-col z-1 text-white px-12 py-12`}
      >
        <div className="lg:text-5xl md:text-4xl text-3xl font-bold">
          I&apos;m {Data.firstName} {Data.lastName}.
        </div>
        <div className="lg:text-2xl md:text-2xl text-xl mt-4 font-medium">
          Full Stack Developer
        </div>
        <div className="lg:text-xl md:text-lg text-md opacity-70 mt-8">
          {Data.intro}
        </div>
        <div className="lg:text-lg md:text-md text-sm mt-12">
          Currently working as an {Data.position} at {Data.currentCompany},
          <br /> living in {Data.location}, {Data.country}.
        </div>
      </div>
      <div className="flex h-full w-full overflow-hidden absolute">
        {windowsWidth > 0 &&
          [...Array(20)].map((_, index) => {
            return (
              <div key={"b_" + index} className="w-[5vw]">
                {getBlocks()}
              </div>
            );
          })}
      </div>
    </motion.div>
  );
};

export default LandingPage;
