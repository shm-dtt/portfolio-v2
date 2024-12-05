"use client";
import HoverButton from "@/components/HoverButton/HoverButton";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="p-4 flex justify-between items-end text-white text-sm">
      <p>{pathname}</p>
      <nav className="flex gap-5">
        <HoverButton text="Experience" href="/experience" />
        <HoverButton text="Projects" href="/projects" />
        <HoverButton text="About" href="/" />
      </nav>
    </div>
  );
};

export default Header;
