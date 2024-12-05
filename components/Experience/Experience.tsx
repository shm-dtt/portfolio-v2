import { experience } from "@/utils/data/Data";
import React from "react";
import Card from "./Card";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white mx-4 mb-32">
      <p className="lg:text-4xl text-3xl font-bold">Experiences</p>
      <br />
      <div>
        {experience.map((exp, i) => (
          <Card key={`p_${i}`} i={i} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
