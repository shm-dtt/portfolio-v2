"use client";
import { useEffect, useState } from "react";
import { Data } from "@/utils/data/Data";

const Footer: React.FC = () => {
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone: Data.timeZone,
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  // Calculate initial time immediately
  const initialTime = new Date().toLocaleTimeString("en-US", timeOptions);

  const [time, setTime] = useState<string>(initialTime);

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString("en-US", timeOptions));
    };

    const intervalId = setInterval(updateTime, 1000); // Update every 10 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col justify-center mt-6 mb-4">
      <div className="p-4 flex md:justify-between md:flex-row md:items-center flex-col text-white gap-8">
        <div className="flex text-sm gap-8">
          <p className="flex flex-col gap-3">
            <span className="text-gray-400 text-xs uppercase">Version</span>
            <span>© {Data.year} ({Data.version})</span>
          </p>
          <p className="flex flex-col gap-3">
            <span className="text-gray-400 text-xs uppercase">Local Time</span>
            <span>
              {time} GMT{Data.gmtOffset}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
