"use client";
import { Data } from "@/utils/data/Data";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const LandingPage: React.FC = () => {
  return (
    <div
      className=" flex flex-col mb-32"
    >
      <div className="flex flex-col z-1 text-white p-8">
        <div className="text-xl font-bold">
          I&apos;m {Data.firstName} {Data.lastName}.
        </div>
        <div className="mt-1">
          Full Stack Developer
        </div>
        <div className="opacity-70 mt-2">
          {Data.intro}
        </div>
        <div className="text-sm mt-8">
          Currently working as an {Data.position} at {Data.currentCompany}, living in {Data.location}, {Data.country}.
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
