"use client";
import HoverButton from "@/components/HoverButton/HoverButton";
import { Data } from "@/utils/data/Data";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <div
        className="p-4 flex justify-between items-center text-white lg:text-sm text-xs"
      >
        <Image src="/favicon.ico" alt="logo" width={24} height={24} />
        <p className=" flex uppercase lg:gap-10 gap-5 font-medium">
          <Link
            href="https://drive.google.com/file/d/1-1-9ht1R1086T9KF3m0Ooy4swHL-NFPv/view"
            target="_blank"
          >
            <HoverButton text="Resume" />
          </Link>
          <Link href={`mailto:${Data.email}`} target="_blank">
            <HoverButton text="Contact" />
          </Link>
        </p>
      </div>
    </>
  );
};

export default Header;
