import { inter } from "@/utils/fonts/Fonts";
import React from "react";
import { experience } from "@/utils/data/Data";
import Card from "./Card";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white mx-4 mb-32">
      <p
        className={`${inter.className} lg:text-5xl text-4xl font-bold`}
      >
        Experiences
      </p>
      <br/>
      <div>
      {experience.map((exp, i) => (
          <Card
            key={`p_${i}`}
            i={i}
            {...exp}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;