"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (route: string) =>
    pathname === route
      ? "text-neutral-500"
      : "decoration-neutral-500 underline";

  const beautifyPathname = (path: string) => {
    if (path === "/") return "About";
    return path
      .replace(/\//g, "") // Remove leading slash
      .split("-") // Split by dashes
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join words with spaces
  };

  return (
    <>
      <p className="p-4 text-2xl font-bold">{beautifyPathname(pathname)}</p>
      <div className="p-4 flex justify-end text-sm">
        <nav className="flex gap-4">
          <Link
            href="/projects"
            className={`hover:text-neutral-500 ${isActive("/projects")}`}
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className={`hover:text-neutral-500 ${isActive("/experience")}`}
          >
            Experience
          </Link>
          <Link href="/" className={`hover:text-neutral-500 ${isActive("/")}`}>
            About
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
