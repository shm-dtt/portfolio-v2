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
        <p className=" uppercase">
          <span className=" lg:inline-block hidden">Soham Dutta</span>
          <Image
            src="/favicon.ico"
            alt="logo"
            width={24}
            height={24}
            className="inline-block lg:hidden"/>
        </p>
        <p className=" flex uppercase lg:gap-10 gap-5 font-medium">
          <Link href="https://github.com/shm-dsgn" target="_blank">
            Github
          </Link>
          <Link href="https://www.linkedin.com/in/shm-dsgn" target="_blank">
            Linkedin
          </Link>
          <Link
            href="https://drive.google.com/file/d/1-1-9ht1R1086T9KF3m0Ooy4swHL-NFPv/view"
            target="_blank"
          >
            Resume/CV
          </Link>
        </p>
      </div>
    </>
  );
};

export default Header;
