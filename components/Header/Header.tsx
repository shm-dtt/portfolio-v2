"use client";
import { inter } from "@/app/fonts/Fonts";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <div
        className={`p-4 flex justify-between items-center text-gray-300 ${inter.className} lg:text-sm text-xs`}
      >
        <Image src="/favicon.ico" alt="logo" width={24} height={24} />
        <p className=" flex uppercase lg:gap-10 gap-5 font-medium">
          <Link
            href="https://drive.google.com/file/d/1-1-9ht1R1086T9KF3m0Ooy4swHL-NFPv/view"
            target="_blank"
          >
            Resume
          </Link>
          <Link href="mailto:sohamdutta2001@gmail.com" target="_blank">
            Contact
          </Link>
        </p>
      </div>
    </>
  );
};

export default Header;
