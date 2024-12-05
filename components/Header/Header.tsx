"use client";
import HoverButton from "@/components/HoverButton/HoverButton";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <div className="p-4 flex justify-end items-end text-white text-sm">
        <p className=" flex gap-5">
          <Link href="/">
            <HoverButton text="About" />
          </Link>
          <Link href="/experience">
            <HoverButton text="Experience" />
          </Link>
          <Link href="/projects">
            <HoverButton text="Projects" />
          </Link>
        </p>
      </div>
    </>
  );
};

export default Header;
