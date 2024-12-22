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

  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString("en-US", timeOptions));
    };

    updateTime();
    const interval = setInterval(updateTime, 5000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { name: "GitHub", url: Data.github },
    { name: "LinkedIn", url: Data.linkedin },
    { name: "Twitter", url: Data.twitter },
    { name: "Dribbble", url: Data.dribbble },
  ];

  return (
    <footer className="flex flex-col justify-center m-4 gap-4">
      <div className="flex justify-center">
        <div
          className="border-t-[0.25px] transition-all duration-700 ease-in-out w-full border-neutral-400"
        ></div>
      </div>

      <nav className="flex gap-1 mb-20 text-sm">
        {socialLinks.map((platform, idx) => (
          <div key={platform.name} className="flex items-center">
            <Link
              href={platform.url}
              target="_blank"
              className="hover:text-neutral-400 "
              aria-label={platform.name}
            >
              <HoverButton text={platform.name} />
            </Link>
            {idx < socialLinks.length - 1 && (
              <span className="text-neutral-400  text-xs mx-1">•</span>
            )}
          </div>
        ))}
      </nav>

      <div
        className={`flex justify-between text-neutral-400 text-xs transition-opacity duration-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
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
