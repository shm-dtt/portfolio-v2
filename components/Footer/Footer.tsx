"use client";
import { inter } from "@/utils/fonts/Fonts";
import { useEffect, useState } from "react";
import { Data } from "@/utils/data/Data";
import Link from "next/link";
import VercelLogo from "../../utils/logos/VercelLogo";
import NextJsLogo from "../../utils/logos/NextJsLogo";
import HoverButton from "../HoverButton/HoverButton";

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
    <div className="flex flex-col justify-center mt-6">
      <div
        className={`p-4 ${inter.className} flex md:justify-between md:flex-row md:items-center flex-col text-white gap-8`}
      >
        <div className="flex text-sm gap-8">
          <p className="flex flex-col gap-3">
            <span className=" text-gray-400 text-xs uppercase">Version</span>
            <span>© {Data.year} Edition(v2)</span>
          </p>
          <p className="flex flex-col gap-3">
            <span className=" text-gray-400 text-xs uppercase">Local Time</span>
            <span>
              {time} GMT{Data.gmtOffset}
            </span>
          </p>
        </div>
        <div className="flex flex-col text-sm gap-3">
          <span className=" text-gray-400 text-xs uppercase">Other Socials & Links</span>
          <div className="flex gap-8">
            <Link href="https://shm-dsgn-v1.netlify.app/" target="_blank">
              <HoverButton text="Portfolio-2023(v1)" />
            </Link>
            <Link href="https://github.com/shm-dsgn" target="_blank">
              <HoverButton text="GitHub" />
            </Link>
            <Link href="https://www.linkedin.com/in/shm-dsgn" target="_blank">
              <HoverButton text="LinkedIn" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={` mx-4 my-6 text-white text-xs ${inter.className} inline-flex gap-2 items-center flex-row justify-center`}
      >
        Built with NextJs <NextJsLogo />
        and deployed in <VercelLogo />
      </div>
    </div>
  );
};

export default Footer;
