"use client";
import { poppins } from "@/app/fonts/Fonts";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <div
        className={`p-4 flex justify-between items-end bg-light-black text-gray-300 ${poppins.className} lg:text-sm text-xs`}
      >
        <p className=" uppercase ">
          <span>Soham Dutta</span>
        </p>
        <p className=" flex uppercase gap-5 font-semibold">
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
            Resume
          </Link>
        </p>
      </div>
    </>
  );
};

export default Header;
