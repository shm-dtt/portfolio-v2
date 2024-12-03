"use client";
import { Data } from "@/utils/data/Data";
import Link from "next/link";
import { useEffect, useState } from "react";
import HoverButton from "../HoverButton/HoverButton";

const Footer: React.FC = () => {
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone: Data.timeZone,
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };

  const [time, setTime] = useState<string | null>(null); // Ensure null during initial render

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString("en-US", timeOptions));
    };

    updateTime(); // Set time initially
    const interval = setInterval(updateTime, 10000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col justify-center mt-6 mb-4">
      <div
        className="p-4 flex md:justify-between md:flex-row md:items-center flex-col text-white gap-8"
      >
        {/* Version & Time */}
        <div className="flex text-sm gap-8">
          <p className="flex flex-col gap-3">
            <span className=" text-gray-400 text-xs uppercase">Version</span>
            <span>© {Data.year} (v2.4)</span>
          </p>
          <p className="flex flex-col gap-3">
            <span className=" text-gray-400 text-xs uppercase">Local Time</span>
            <span>{time ? `${time} GMT${Data.gmtOffset}` : "Loading..."}</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col text-sm gap-3">
          <span className=" text-gray-400 text-xs uppercase">
            Other Socials & Links
          </span>
          <div className="flex gap-8 flex-wrap">
            <Link href={Data.portfolioV1} target="_blank">
              <HoverButton text="Folio '23" />
            </Link>
            <Link href={Data.github} target="_blank">
              <HoverButton text="GitHub" />
            </Link>
            <Link href={Data.linkedin} target="_blank">
              <HoverButton text="LinkedIn" />
            </Link>
            <Link href={Data.dribbble} target="_blank">
              <HoverButton text="Dribbble" />
            </Link>
            {/* <Link href={Data.twitter} target="_blank">
              <HoverButton text="Twitter" />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
