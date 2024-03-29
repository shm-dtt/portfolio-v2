import { inter, playfairDisplay } from "@/utils/fonts/Fonts";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 mx-4 h-screen">
      <div className="text-white text-center">
        <p
          className={`${playfairDisplay.className} lg:text-5xl text-4xl uppercase mb-8`}
        >
          About Me
        </p>
        <p className={`p-8 ${inter.className} mb-16`}>
          Hi. I am Soham. I am a Full Stack Developer from India with a passion
          for creating beautiful and functional web applications.
          <br />
          <br /> Currently pursuing a B.Tech. in Computer Science Engineering at
          Kalinga Institute of Industrial Technology, I have honed my skills in
          various programming languages and frameworks, including{" "}
          <span className=" font-bold">
            JavaScript, TypeScript, ReactJS, Java, Spring Boot, SQL
          </span>
          . My academic achievements, including a GPA of 9.35, reflect my
          dedication to excellence in my field.
          <br />
          <br />
          For more details, see my{" "}
          <Link
            href="https://drive.google.com/file/d/1-1-9ht1R1086T9KF3m0Ooy4swHL-NFPv/view"
            className="underline"
          >
            resume
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
