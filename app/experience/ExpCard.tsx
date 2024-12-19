import Link from "next/link";
import React from "react";

interface CardProps {
  company: string;
  link: string;
  position: string;
  duration: string;
  description: string;
  techUsed: string[];
  i: number;
}

const Card: React.FC<CardProps> = ({
  company,
  link,
  position,
  duration,
  description,
  techUsed,
}) => {
  return (
    <div className="my-8 p-2 rounded-lg">
      <div className="flex flex-col gap-3">
        <p className=" text-sm opacity-40">{duration}</p>
        <div className=" flex-[2_2_0%] flex flex-col">
          <div className="flex gap-2">
            <div className=" flex flex-col gap-2">
              <p className="text-md my-underline">
                <Link href={link} target="_blank">
                  {position} • {company}
                </Link>
              </p>
              <p className="text-sm text-neutral-400 ">{description}</p>
              <div className="flex flex-wrap gap-2 mt-4 mb-8">
                {techUsed.map((tech, index) => (
                  <p
                    key={index}
                    className="bg-neutral-700 opacity-80 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
