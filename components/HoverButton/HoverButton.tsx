"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

interface HoverButtonProps {
  text: string;
  href?: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({ text, href }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (href) router.push(href, { scroll: false });
  };

  const isActive = href === pathname;

  return (
    <span
      className={`group w-fit h-fit flex flex-col relative overflow-hidden cursor-pointer select-none ${
        isActive ? "opacity-70" : ""
      }`}
      onClick={handleClick}
    >
      {/* Sliding Text Effect */}
      <span className="transition-all duration-500 translate-y-0 group-hover:-translate-y-10">
        {text}
      </span>
      <span className="transition-all duration-500 translate-y-10 absolute group-hover:-translate-y-0">
        {text}
      </span>

      {/* Hover Underline Effect */}
      <span
        className={`absolute bottom-0 left-0 h-[1.5px] w-0 bg-white transition-all duration-300 group-hover:w-full ${
          isActive ? "opacity-70" : ""
        }`}
      ></span>
    </span>
  );
};

export default HoverButton;
