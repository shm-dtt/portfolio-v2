import React from "react";

const HoverButton = ({ text }: { text: string }) => {
  return (
    <span className="group w-fit h-fit flex flex-col relative overflow-hidden">
      {/* Sliding Text Effect */}
      <span className="transition-all duration-500 translate-y-0 group-hover:-translate-y-10">
        {text}
      </span>
      <span className="transition-all duration-500 translate-y-10 absolute group-hover:-translate-y-0">
        {text}
      </span>
      
      {/* Hover Underline Effect */}
      <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
    </span>
  );
};

export default HoverButton;
