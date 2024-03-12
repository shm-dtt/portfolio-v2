"use client";
import {
  inter
} from "@/app/fonts/Fonts";
import { useEffect, useState } from "react";
import { Data } from "@/app/data/Data";

const Footer: React.FC = () => {
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone: Data.timeZone,
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
        className={`px-4 pb-4 flex justify-between items-end bg-light-black text-gray-300 ${inter.className} lg:text-sm text-xs`}
      >
        <p className=" text-left flex flex-col ">
          <span>© {Data.year}</span>
        </p>
        <p className=" text-right flex flex-col">
          <span>{Data.location}, {Data.country}</span>
          <span>{time} GMT{Data.gmtOffset}</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
