"use client";
import HoverButton from "@/components/HoverButton/HoverButton";

const Header: React.FC = () => {
  return (
    <div className="p-4 flex justify-end items-end text-white text-sm">
      <nav className="flex gap-5">
        <HoverButton text="About" href="/" />
        <HoverButton text="Experience" href="/experience" />
        <HoverButton text="Projects" href="/projects" />
      </nav>
    </div>
  );
};

export default Header;
