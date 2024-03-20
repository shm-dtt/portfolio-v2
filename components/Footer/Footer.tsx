"use client";
import { inter } from "@/app/fonts/Fonts";
import { useEffect, useState } from "react";
import { Data } from "@/app/data/Data";
import Link from "next/link";
import VercelLogo from "./VercelLogo";
import NextJsLogo from "./NextJsLogo";

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
    <div className="flex flex-col justify-center">
      <div
        className={`p-4 ${inter.className} flex md:justify-between md:flex-row flex-col text-white gap-8`}
      >
        <div className="flex text-sm gap-8">
          <p className="flex flex-col gap-3">
            <span className=" text-gray-400 text-xs uppercase">Version</span>
            <span>© {Data.year} Edition</span>
          </p>
          <p className="flex flex-col gap-3">
            <span className=" text-gray-400 text-xs uppercase">Local Time</span>
            <span>
              {time} GMT{Data.gmtOffset}
            </span>
          </p>
        </div>
        <div className="flex flex-col text-sm gap-3">
          <span className=" text-gray-400 text-xs uppercase">Other Links</span>
          <div className="flex gap-4">
            <Link href="https://shm-dsgn-v1.netlify.app/" target="_blank">
              Portfolio-v1
            </Link>
            <Link href="https://www.reddit.com/user/shm_dsgn/" target="_blank">
              Reddit
            </Link>
            <Link
              href="https://discordapp.com/users/486019185017880596"
              target="_blank"
            >
              Discord
            </Link>
            <Link
              href="https://drive.google.com/file/d/1-1-9ht1R1086T9KF3m0Ooy4swHL-NFPv/view"
              target="_blank"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
      <div
        className={` my-6 text-gray-500 text-xs ${inter.className} inline-flex gap-2 items-center flex-row justify-center`}
      >
        Built with NextJs <NextJsLogo/>
        and deployed in <VercelLogo/>
      </div>
    </div>
  );
};

export default Footer;
