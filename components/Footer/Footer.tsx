"use client";

import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
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
    <div >
      
      <div className="grid grid-cols-2 gap-x-7 gap-y-7 md:grid-cols-12 md:gap-x-10 lg:gap-y-10">
        <div className="flex flex-col md:col-span-6 lg:col-span-6">
          <span className=" mb-3 flex border-b-[1.5px] pb-1 font-bold uppercase text-secondary-300">
            Navigation
          </span>
          <div className="flex flex-col gap-y-2 md:gap-y-1">
            <a href="/" className="w-fit">
              <span>Home</span>
            </a>
            <a href="#about" className="w-fit">
              <span>About</span>
            </a>
            <a href="#services" className="w-fit">
              <span>Services</span>
            </a>
            <a href="#works" className="w-fit">
              <span>Works</span>
            </a>
            <a href="#reviews" className="w-fit">
              <span>Reviews</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:col-span-6 lg:col-span-6">
          <span className=" mb-3 flex border-b-[1.5px] pb-1 font-bold uppercase text-secondary-300">
            Socials
          </span>
          <div className="flex flex-col gap-y-2 md:gap-y-1">
            <a
              target="_blank"
              href="mailto:shmdsgn@gmail.com"
              className="w-fit"
            >
              <span>Email</span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shm-dsgn/"
              className="w-fit"
            >
              <span>Linkedin</span>
            </a>
            <a
              target="_blank"
              href="https://github.com/shm-dsgn"
              className="w-fit"
            >
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-10 mt-14 items-end">
        <span className="order-last sm:order-first md:col-span-6 col-span-8 lg:col-span-6 font-bold text-[36px] leading-10">
          ©2024 <br /> SOHAM DUTTA
        </span>
        <div className="gap-x-3 md:col-span-3 col-span-4 mb-3 sm:mb-0 lg:col-span-3 flex flex-col">
          <span className="font-bold uppercase">Local time</span>
          <span className="font-medium text-secondary-100 uppercase">
            {time} GMT+5:30
          </span>
        </div>
        <div className="w-full md:col-span-3 lg:col-span-3 h-fit flex justify-end">
          <div>
            <button
              aria-label="Scroll to top"
              className="w-fit hidden p-10 hover:scale-90 duration-1000 ease-expo group md:flex flex-col relative items-center justify-center rounded-full overflow-hidden bg-slate-500"
            >
              <span className="absolute flex group-hover:-translate-y-20 transition-all ease-in-out-cubic duration-500 text-white">
                <ArrowUp size={28} weight="bold" />
              </span>
              <span className="absolute flex translate-y-20 group-hover:translate-y-0 transition-all ease-in-out-cubic duration-500 text-white">
                <ArrowUp size={28} weight="bold" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
