import { playfairDisplay } from "@/utils/fonts/Fonts";
import React from "react";

const Experience: React.FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-white">
      <p
        className={`${playfairDisplay.className} lg:text-5xl text-3xl uppercase`}
      >
        Experience
      </p>
      
    </div>
  );
};

export default Experience;