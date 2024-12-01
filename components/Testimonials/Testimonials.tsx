import { testimonials } from "@/utils/data/Data";
import { inter } from "@/utils/fonts/Fonts";
import React from "react";
import Card from "./Card";

const Testimonials: React.FC = () => {
  return (
    <div className=" flex flex-col">
      <div className="text-white text-center">
        <p className={`${inter.className} lg:text-5xl text-4xl `}>
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
