import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { HoverButton } from "@/components/ui/hover-button";

interface CardProps {
  name: string;
  tech: string;
  i: number;
  description: string;
  link: string;
  techUsed: string[];
  year: number;
  isOpened: boolean;
  toggleCard: () => void;
}

const Card: React.FC<CardProps> = ({
  name,
  year,
  tech,
  techUsed,
  description,
  link,
  i,
  isOpened,
  toggleCard,
}) => {
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!detailsRef.current) return;

    // Animate details section when isOpened changes
    gsap.to(detailsRef.current, {
      height: isOpened ? "auto" : 0,
      opacity: isOpened ? 1 : 0,
      duration: 0.3,
      overflow: "hidden",
      ease: "power2.inOut",
    });
  }, [isOpened]);

  const manageMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "#d1d5db",
      duration: 0.2,
      color: "#121212",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    });
    gsap.to(e.currentTarget.querySelectorAll("p"), {
      color: "#121212",
      duration: 0.2,
    });
  };

  const manageMouseLeave = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "#121212",
      duration: 0.1,
      delay: 0.1,
      color: "#d1d5db",
      paddingLeft: "0px",
      paddingRight: "0px",
    });
    gsap.to(e.currentTarget.querySelectorAll("p"), {
      color: "#d1d5db",
      duration: 0.1,
      delay: 0.1,
    });
  };

  return (
    <>
      <div
        className="border-t-[1px] border-neutral-400 py-2 flex justify-between text-sm select-none cursor-pointer"
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        onClick={toggleCard}
      >
        <p className="flex-1">{name}</p>
        <p className="md:flex-1 flex-none md:block hidden">{tech}</p>
        <p className="">{year}</p>
      </div>
      <div ref={detailsRef} className="overflow-hidden h-0 opacity-0">
        <p className="pt-8 pb-4 md:w-5/6">{description}</p>
        <Link href={link} target="_blank">
          <button className="bg-[#d1d5db] text-black text-sm px-4 py-2 my-4 rounded-full">
            <HoverButton text="View Project" />
          </button>
        </Link>
        <div className="flex flex-wrap gap-2 mt-4 mb-8">
          {techUsed.map((tech, index) => (
            <div
              key={index}
              className="bg-neutral-700 opacity-80 text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
