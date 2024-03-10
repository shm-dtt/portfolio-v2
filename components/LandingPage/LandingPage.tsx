"use client";
import React, { useState, useEffect } from "react";
import { greatVibes, playfairDisplay, ppMondwest } from "../../app/fonts/Fonts";

const LandingPage: React.FC = () => {
  const [windowsWidth, setWindowsWidth] = useState(0);

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
    <div className=" flex flex-col h-screen items-center justify-center bg-light-black">
      <div className=" flex flex-col items-center justify-center relative top-12 z-1 pointer-events-none text-primary-gray lg:text-7xl md:text-5xl text-4xl text-center">
        <div>
          <span className={greatVibes.className}>S</span>
          <span className={playfairDisplay.className}>OHAM</span>
          &nbsp;
          <span className={greatVibes.className}>D</span>
          <span className={playfairDisplay.className}>UTTA</span>
        </div>
        <span className={playfairDisplay.className}>FULL STACK</span>
        <span className={`${ppMondwest.className} mt-2`}>☼ DEVELOPER ☀</span>
        <span className={playfairDisplay.className}>
          CURRENTLY @&nbsp;NOKIA
        </span>
        <span className={`${ppMondwest.className} mt-2`}>
          BASED IN BANGALORE
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
    </div>
  );
};

export default LandingPage;
