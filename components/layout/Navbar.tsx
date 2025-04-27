"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Navbar component that displays navigation links and the current path name.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 *
 * @remarks
 * This component uses the `usePathname` hook to get the current path name and
 * highlights the active route. It also beautifies the path name for display.
 *
 * @function isActive
 * @param {string} route - The route to check against the current path name.
 * @returns {string} - Returns a CSS class name based on whether the route is active.
 *
 * @function beautifyPathname
 * @param {string} path - The path name to beautify.
 * @returns {string} - Returns a human-readable version of the path name.
 */
const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (route: string) =>
    pathname === route ? "text-white" : "text-neutral-400";

  const beautifyPathname = (path: string) => {
    if (path === "/") return "About";
    if (path.startsWith("/blogs/")) return "Blogs";
    return path
      .replace(/\//g, "") // Remove leading slash
      .split("-") // Split by dashes
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join words with spaces
  };

  return (
    <div>
      {/* <p className="text-2xl font-bold my-8">{beautifyPathname(pathname)}</p> */}
      <div className="flex justify-end" role="navigation">
        <nav className="flex gap-4">
          <Link
            href="/blogs"
            className={`${isActive("/blogs")}`}
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            className={`${isActive("/projects")}`}
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className={`${isActive("/experience")}`}
          >
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
