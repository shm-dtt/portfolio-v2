import React from "react";
import gsap from "gsap";

interface CardProps {
  name: string;
  i: number;
}

const Card: React.FC<CardProps> = ({ name, i }) => {
  const manageMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    i: number
  ) => {
    gsap.to(e.target, {
      backgroundColor: "#FFFFFF",
      duration: 0.2,
      color: "black",
    });
  };

  const manageMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    i: number
  ) => {
    gsap.to(e.target, {
      backgroundColor: "#121212",
      duration: 0.1,
      delay: 0.1,
      color: "white",
    });
  };

  return (
    <div
      className=" border-t-2 border-neutral-500 text-white py-2"
      onMouseEnter={(e) => {
        manageMouseEnter(e, i);
      }}
      onMouseLeave={(e) => {
        manageMouseLeave(e, i);
      }}
    >
      {name}
    </div>
  );
};

export default Card;
