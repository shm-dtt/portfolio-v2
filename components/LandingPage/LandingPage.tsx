"use client";
import React, { useState, useEffect, useRef } from "react";
import { greatVibes, playfairDisplay, ppMondwest } from "@/app/fonts/Fonts";
import { Data } from "@/app/data/Data";
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
    <motion.div ref={container} style={{opacity: scrollYProgress}} className=" flex flex-col h-screen items-center justify-center bg-light-black">
      <div className=" flex flex-col items-center justify-center z-1 pointer-events-none text-white lg:text-7xl md:text-6xl text-5xl text-center uppercase">
        <div>
          <span className={greatVibes.className}>{Data.firstName.charAt(0)}</span>
          <span className={playfairDisplay.className}>{Data.firstName.slice(1)}</span>
          &nbsp;
          <span className={greatVibes.className}>{Data.lastName.charAt(0)}</span>
          <span className={playfairDisplay.className}>{Data.lastName.slice(1)}</span>
        </div>
        <span className={playfairDisplay.className}>{Data.position_firstLine}</span>
        <span className={`${ppMondwest.className} lg:mt-4 mt-2`}>{Data.position_secondLine}</span>
        <span className={playfairDisplay.className}>
          CURRENTLY @&nbsp;{Data.currentCompany}
        </span>
        <span className={`${ppMondwest.className} lg:mt-4 mt-2`}>
          Based in {Data.location}
        </span>
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