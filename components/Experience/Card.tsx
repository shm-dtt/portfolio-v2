import { inter } from "@/utils/fonts/Fonts";
import Link from "next/link";
import React from "react";

interface CardProps {
  company: string;
  position: string;
  duration: string;
  i: number;
  description: string;
  location: string;
  techUsed: string[];
  link: string;
}

const Card: React.FC<CardProps> = ({
  company,
  position,
  duration,
  description,
  location,
  techUsed,
  link,
  i,
}) => {
  return (
    <Link href={link} target="_blank">
      <div className="my-8 p-8 group hover:bg-neutral-900 rounded-lg">
        <div
          className={`${inter.className} flex flex-col lg:flex-row gap-6`}
        >
          <p className="opacity-55 flex justify-start lg:justify-end flex-1">
            {duration}
          </p>
          <div className=" flex-[2_2_0%] flex flex-col">
            <p className=" font-medium text-lg group-hover:underline">
              {position} • {company}
            </p>
            <p className=" text-sm opacity-50">{location}</p>
            <p className=" mt-4 text-sm">
            {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4 mb-8">
              {techUsed.map((tech, index) => (
                <p
                  key={index}
                  className="bg-neutral-700 text-white text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
