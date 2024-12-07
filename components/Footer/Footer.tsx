"use client";
import { useEffect, useState } from "react";
import { Data } from "@/utils/data/Data";
import Link from "next/link";
import { HoverButton } from "../HoverButton/HoverButton";

const Footer: React.FC = () => {
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone: Data.timeZone,
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };

  // Calculate initial time immediately
  const initialTime = new Date().toLocaleTimeString("en-US", timeOptions);

  const [time, setTime] = useState<string>(initialTime);

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString("en-US", timeOptions));
    };

    const intervalId = setInterval(updateTime, 10000); // Update every 10 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  // Define social media platforms and their corresponding links
  const socialLinks = [
    { name: "GitHub", url: Data.github },
    { name: "LinkedIn", url: Data.linkedin },
    { name: "Twitter", url: Data.twitter },
    { name: "Dribbble", url: Data.dribbble },
  ];

  return (
    <div className="flex flex-col justify-center m-4 gap-4">
      <div className="border-t-[0.25px] border-gray-500 my-8"></div>
      <div className="flex gap-1 text-white mb-12 text-sm">
        {socialLinks.map((platform, idx) => (
          <div key={platform.name} className="flex items-center">
            <Link
              href={platform.url}
              target="_blank"
              className="hover:text-gray-400"
            >
              <HoverButton text={platform.name} />
            </Link>
            {idx < socialLinks.length - 1 && (
              <span className="text-gray-400 text-xs mx-1">•</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-gray-400 text-xs">
        <p>
          ({Data.version}) {Data.year}© {Data.firstName} {Data.lastName}.
        </p>
        <p>
          {time} UTC{Data.gmtOffset}
        </p>
      </div>
    </div>
  );
};

export default Footer;
