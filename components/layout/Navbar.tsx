"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          <Link href="/blogs" className={`${isActive("/blogs")}`}>
            Blogs
          </Link>
          <Link href="/projects" className={`${isActive("/projects")}`}>
            Projects
          </Link>
          <Link href="/experience" className={`${isActive("/experience")}`}>
            Experience
          </Link>
          <Link
            href="https://drive.google.com/file/d/1-1-9ht1R1086T9KF3m0Ooy4swHL-NFPv/view"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isActive("/resume")}`}
          >
            Resume
          </Link>
          <Link href="/" className={`${isActive("/")}`}>
            About
          </Link>
        </nav>
      </div>
      <hr className="mt-4 mb-8 border-neutral-700"></hr>
    </div>
  );
};

export default Navbar;
