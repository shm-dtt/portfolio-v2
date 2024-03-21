import { playfairDisplay } from "@/app/fonts/Fonts";
import React from "react";
import { testimonials } from "@/app/data/Data";
import Card from "./Card";

const Testimonials: React.FC = () => {
  return (
    <div className=" flex flex-col">
      <div className="text-white text-center">
      <p
        className={`${playfairDisplay.className} lg:text-5xl text-4xl uppercase `}
      >
        Reviews
      </p>
      </div>
      <div className=" mx-4 mb-32">
        {testimonials.map((testimonial, i) => {
          return <Card key={`p_${i}`} {...testimonial} i={i} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
