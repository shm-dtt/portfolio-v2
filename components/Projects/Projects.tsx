import { projects } from "@/app/data/Data";
import { inter, playfairDisplay } from "@/app/fonts/Fonts";
import React from "react";
import Card from "./Card";

const Projects: React.FC = () => {
  return (
    <div className=" flex flex-col">
      <div className="text-white text-center">
        <p
          className={`${playfairDisplay.className} lg:text-5xl text-4xl uppercase `}
        >
          Projects
        </p>
      </div>
      <div className={`mx-4 mb-32 mt-16 ${inter.className}`}>
        <div className="text-neutral-300 flex justify-between items-center uppercase text-xs mb-4">
          <p className="flex-1">Project</p>
          <p className="md:flex-1 flex-none">Technology</p>
          <p className="md:block hidden">Year</p>
        </div>
        {projects.map((project, i) => {
          return <Card key={`p_${i}`} {...project} i={i} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
