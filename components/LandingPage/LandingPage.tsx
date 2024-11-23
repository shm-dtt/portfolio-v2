"use client";
import React, { useState, useEffect, useRef } from "react";
import { inter, playfairDisplay } from "@/utils/fonts/Fonts";
import { Data } from "@/utils/data/Data";
import {motion, useScroll} from "framer-motion";

const LandingPage: React.FC = () => {
  const [windowsWidth, setWindowsWidth] = useState(0);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end 0.5", "start start"]
  })

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
    <motion.div ref={container} style={{opacity: scrollYProgress}} className=" flex flex-col h-screen mb-32 items-center justify-center">
      <div className={`${inter.className} flex flex-col z-1 pointer-events-none text-white px-12 py-12 gap-12`}>
        <div className="lg:text-7xl md:text-6xl text-5xl font-bold">
          I&apos;m {Data.firstName} {Data.lastName}.
        </div>
        <div className="lg:text-3xl md:text-3xl text-xl opacity-70 md:w-5/6">
          {Data.intro}
        </div>
        <div className="text-right lg:text-xl md:text-lg text-md">
          Currently working as an {Data.position} at {Data.currentCompany},<br/> living in {Data.location}, {Data.country}.
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