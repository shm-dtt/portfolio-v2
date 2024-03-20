import { playfairDisplay, inter } from "@/app/fonts/Fonts";
import Link from "next/link";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-white mb-8">
      <p
        className={`${playfairDisplay.className} lg:text-5xl text-3xl uppercase`}
      >
        Contact
      </p>
      <div
        className={`${inter.className} flex justify-around w-screen my-6`}
      >
        {/* Add conatct form here */}

        <div className="flex flex-col items-center">
          <p className=" text-gray-400 text-md">or directly email me at</p>
          <Link href="mailto:sohamdutta2001@gmail.com" className=" underline text-lg">
            sohamdutta2001@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
