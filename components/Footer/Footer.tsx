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
    <footer className="flex flex-col justify-center m-4 gap-4">
      <div className="border-t-[0.25px] border-neutral-500"></div>

      <nav className="flex gap-1 mb-20 text-sm">
        {socialLinks.map((platform, idx) => (
          <div key={platform.name} className="flex items-center">
            <Link
              href={platform.url}
              target="_blank"
              className="hover:text-neutral-500"
              aria-label={platform.name}
            >
              <HoverButton text={platform.name} />
            </Link>
            {idx < socialLinks.length - 1 && (
              <span className="text-neutral-500 text-xs mx-1">•</span>
            )}
          </div>
        ))}
      </nav>

      <div className="flex justify-between text-neutral-500 text-xs">
        <p>
          ({Data.version}) {Data.year}© {Data.firstName} {Data.lastName}.
        </p>
        <p>
          {time} UTC{Data.gmtOffset}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
