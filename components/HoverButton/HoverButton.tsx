"use client";
import React from "react";

const HoverButton = ({ text }: { text: string }) => {
  return (
    <span className="group w-fit h-fit flex flex-col relative overflow-hidden cursor-pointer select-none">
      <span className="transition-all duration-500 translate-y-0 group-hover:-translate-y-10">
        {text}
      </span>
      <span className="transition-all duration-500 translate-y-10 absolute group-hover:-translate-y-0">
        {text}
      </span>
    </span>
  );
};

export default HoverButton;
