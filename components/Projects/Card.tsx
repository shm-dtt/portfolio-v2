import React from "react";
import gsap from "gsap";

interface CardProps {
  name: string;
  tech: string;
  i: number;
  year: number;
}

const Card: React.FC<CardProps> = ({ name, year, tech, i }) => {
  const manageMouseEnter = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    i: number
  ) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "#FFFFFF",
      duration: 0.2,
      color: "black",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    });
    gsap.to(e.currentTarget.querySelectorAll("p"), {
      // Select all <p> elements inside the div
      color: "black", // Change text color of <p> elements
      duration: 0.2,
    });
  };

  const manageMouseLeave = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    i: number
  ) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "#121212",
      duration: 0.1,
      delay: 0.1,
      color: "white",
      paddingLeft: "0px",
      paddingRight: "0px",
    });
    gsap.to(e.currentTarget.querySelectorAll("p"), {
      // Select all <p> elements inside the div
      color: "white", // Change text color of <p> elements
      duration: 0.1,
      delay: 0.1,
    });
  };

  return (
    <div
      className=" border-t-2 border-neutral-500 text-white py-2 flex justify-between text-sm"
      onMouseEnter={(e) => {
        manageMouseEnter(e, i);
      }}
      onMouseLeave={(e) => {
        manageMouseLeave(e, i);
      }}
    >
      <p className="flex-1">{name}</p>
      <p className="md:flex-1 flex-none md:block hidden">{tech}</p>
      <p className="">{year}</p>
    </div>
  );
};

export default Card;
