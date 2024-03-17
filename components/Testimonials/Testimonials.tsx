import { playfairDisplay } from "@/app/fonts/Fonts";
import React from "react";
import { testimonials } from "./data";
import Card from "./Card";

const Testimonials: React.FC = () => {
  return (
    <div className=" flex flex-col z-1">
      <div className="text-white text-center">
      <p
        className={`${playfairDisplay.className} lg:text-5xl text-3xl uppercase `}
      >
        Don't take my word for it
      </p>
      </div>
      <div className=" mx-4 mb-8">
        {testimonials.map((testimonial, i) => {
          return <Card key={`p_${i}`} {...testimonial} i={i} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
