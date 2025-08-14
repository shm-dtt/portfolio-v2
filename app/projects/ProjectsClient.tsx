"use client";

import { useState } from "react";
import Card from "@/components/ui/project-tile";
import { projects } from "@/lib/siteConfig";

export default function ProjectsClient() {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
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
  );
}
