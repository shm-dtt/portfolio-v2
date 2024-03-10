"use client";
import {
  poppins
} from "@/app/fonts/Fonts";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };

  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", timeOptions)
  );

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", timeOptions));
    }, 10000);
  });

  return (
    <>
      <div
        className={`px-4 pb-4 flex justify-between items-end bg-light-black text-gray-300 ${poppins.className} lg:text-sm text-xs`}
      >
        <p className=" text-left flex flex-col ">
          <span>© 2024</span>
        </p>
        <p className=" text-right flex flex-col">
          <span>Bangalore, India</span>
          <span>{time}</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
