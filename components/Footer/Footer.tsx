"use client";
import { useEffect, useState } from "react";
import { Data } from "@/utils/data/Data";

const Footer: React.FC = () => {
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone: Data.timeZone,
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
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

  return (
    <div className="flex flex-col justify-center my-4 text-xs">
      <div className="border-t-[0.25px] border-gray-500 mx-4 my-8"></div>
      
      <div className="p-4 flex justify-between text-gray-400">
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
