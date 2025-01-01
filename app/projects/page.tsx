"use client";
import { useState } from "react";
import Card from "@/app/projects/ProjCard";
import { projects } from "@/app/projects/info";
import Navbar from "@/components/Navbar/Navbar";

/**
 * The Projects component displays a list of project cards.
 * Each card can be toggled open or closed to reveal more details.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <Projects />
 *
 * @remarks
 * This component uses the `useState` hook to manage the state of the opened card.
 * It maps over a list of projects and renders a `Card` component for each project.
 * The `toggleCard` function is used to open or close a card based on its index.
 *
 * @function toggleCard
 * @param {number} index - The index of the card to toggle.
 */
const Projects: React.FC = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-4">
      <Navbar />
      <div className="flex flex-col mb-24">
        <div className="mb-32 mt-16">
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
