"use client";
import { useState } from "react";
import Card from "@/app/projects/ProjCard";
import { projects } from "@/utils/my-data";
import Navbar from "@/components/layout/Navbar";

const Projects: React.FC = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-4">
      <Navbar />
      <div className="flex flex-col">
        <div className="my-16">
          <div className="text-neutral-400 flex justify-between items-center uppercase text-xs mb-4">
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
    </div>
  );
};

export default Projects;
