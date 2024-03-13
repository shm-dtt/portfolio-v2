import { playfairDisplay, inter } from "@/app/fonts/Fonts";
import Link from "next/link";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-light-black text-white">
      <p
        className={`${playfairDisplay.className} lg:text-4xl text-3xl uppercase`}
      >
        Contacts
      </p>
      <div className={`${inter.className} flex justify-around w-screen my-6`}>
        <Link href="mailto:sohamdutta2001@gmail.com">
          sohamdutta2001@gmail.com
        </Link>
        <Link href="tel:+919339855194">(+91) 933-985-5194</Link>
      </div>
    </div>
  );
};

export default Contact;
