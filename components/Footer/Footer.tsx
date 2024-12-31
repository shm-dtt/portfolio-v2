"use client";
import { useEffect, useState } from "react";
import { Data } from "@/utils/my-data";
import Link from "next/link";
import { HoverButton } from "../HoverButton/HoverButton";

/**
 * Footer component that displays social media links, current time, and other information.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 *
 * @returns {JSX.Element} The rendered footer component.
 *
 * @remarks
 * The component fetches the current time based on the specified time zone and updates it every 5 seconds.
 * It also displays social media links and some static information such as version, year, and author name.
 *
 * @dependencies
 * - `useState` and `useEffect` from React for state management and side effects.
 * - `Link` component for navigation.
 * - `HoverButton` component for displaying social media platform names.
 *
 * @remarks
 * The `Data` object is expected to contain the following properties:
 * - `timeZone`: The time zone string for formatting the time.
 * - `github`, `linkedin`, `twitter`, `dribbble`: URLs for social media profiles.
 * - `version`: The version of the portfolio.
 * - `year`: The current year.
 * - `firstName`, `lastName`: The author's first and last name.
 * - `gmtOffset`: The GMT offset string.
 */
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
        <div className="border-t-[0.25px] transition-all duration-700 ease-in-out w-full border-neutral-700"></div>
      </div>

      <nav className="flex gap-1 mb-20 text-sm">
        {socialLinks.map((platform, idx) => (
          <div key={platform.name} className="flex items-center">
            <Link
              href={platform.url}
              target="_blank"
              className="text-neutral-400 hover:text-white"
              aria-label={platform.name}
            >
              <HoverButton text={platform.name} />
            </Link>
            {idx < socialLinks.length - 1 && (
              <span className="text-neutral-400 text-xs mx-1">•</span>
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
