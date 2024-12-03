import { projects } from "@/utils/data/Data";
import React, { useState } from "react";
import Card from "./Card";

const Projects: React.FC = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col mb-24">
      <div className="text-white text-center">
        <p className="lg:text-4xl text-3xl font-bold">
          Projects
        </p>
      </div>
      <div className="mx-4 mb-32 mt-16">
        <div className="text-neutral-300 flex justify-between items-center uppercase text-xs mb-4">
          <p className="flex-1">Project</p>
          <p className="md:flex-1 flex-none md:block hidden">Technology</p>
          <p className="">Year</p>
        </div>
        {projects.map((project, i) => (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            isOpened={i === openedIndex}
            toggleCard={() => toggleCard(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
