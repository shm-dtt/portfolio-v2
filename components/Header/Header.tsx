"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  const isActive = (route: string) =>
    pathname === route ? "text-gray-400" : "decoration-gray-200 my-underline";

  return (
    <div className="p-4 flex justify-between items-end text-white text-sm">
      <p>{pathname}</p>
      <nav className="flex gap-5">
        <Link
          href="/projects"
          className={`hover:text-gray-200 ${isActive("/projects")}`}
        >
          Projects
        </Link>
        <Link
          href="/experience"
          className={`hover:text-gray-200 ${isActive("/experience")}`}
        >
          Experience
        </Link>
        <Link href="/" className={`hover:text-gray-200 ${isActive("/")}`}>
          About
        </Link>
      </nav>
    </div>
  );
};

export default Header;
