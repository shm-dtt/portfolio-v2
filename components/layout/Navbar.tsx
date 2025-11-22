"use client";
import { Data } from "@/lib/siteConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HoverButton } from "../ui/hover-button";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (route: string) => {
    if (route === "/") {
      return pathname === "/" ? "text-white" : "text-neutral-400";
    }
    return pathname.startsWith(route) ? "text-white" : "text-neutral-400";
  };

  return (
    <div>
      <div className="flex justify-end" role="navigation">
        <nav className="flex gap-4">
          <Link
            href={Data.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={`${isActive("/resume")}`}
          >
            <HoverButton text="Resume" />
          </Link>
          <Link href="/experience" className={`${isActive("/experience")}`}>
            <HoverButton text="Experience" />
          </Link>
          <Link href="/projects" className={`${isActive("/projects")}`}>
            <HoverButton text="Projects" />
          </Link>
          <Link href="/blog" className={`${isActive("/blog")}`}>
            <HoverButton text="Blog" />
          </Link>
          <Link href="/" className={`${isActive("/")}`}>
            <HoverButton text="About" />
          </Link>
        </nav>
      </div>
      <hr className="mt-4 mb-8 border-neutral-700"></hr>
    </div>
  );
};

export default Navbar;
