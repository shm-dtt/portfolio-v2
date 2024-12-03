import Link from "next/link";
import React from "react";

interface ExperienceDetail {
  position: string;
  duration: string;
  description: string;
  techUsed: string[];
}

interface CardProps {
  company: string;
  location: string;
  link: string;
  details: ExperienceDetail[];
  i: number;
}

const Card: React.FC<CardProps> = ({ company, location, link, details, i }) => {
  return (
    <div className="my-8 p-2 group rounded-lg">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col justify-start lg:items-end flex-1">
          <p className="relative text-md lg:text-right group">
            <Link
              href={link}
              target="_blank"
              className="relative after:content-[''] after:absolute after:h-[1.5px] after:left-0 after:bottom-0 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {company}
            </Link>
          </p>

          <p className=" text-sm opacity-55">{location}</p>
        </div>
        <div className=" flex-[2_2_0%] flex flex-col">
          {details.map((detail, index) => (
            <div key={index} className="flex gap-2">
              <p className=" text-xl">•</p>
              <div className=" flex flex-col gap-2">
                <p>{detail.position}</p>
                <p className=" text-sm opacity-55">{detail.duration}</p>
                <div className="md:w-4/5 text-sm">
                  <ul className="list-disc">
                    {detail.description
                      .split(".")
                      .filter((sentence) => sentence.trim() !== "") // Remove empty strings
                      .map((sentence, index) => (
                        <li key={index}>{sentence.trim()}.</li>
                      ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 mb-8">
                  {detail.techUsed.map((tech, index) => (
                    <p
                      key={index}
                      className="bg-neutral-700 text-white opacity-80 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
