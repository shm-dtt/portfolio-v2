"use client";
import { Data } from "@/lib/siteConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HoverButton } from "../ui/hover-button";

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  exactMatch?: boolean;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: "Resume", href: Data.links.resume, isExternal: true },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/", exactMatch: true },
  ];

  const isActive = (item: NavItem): boolean => {
    if (item.exactMatch) {
      return pathname === item.href;
    }
    return pathname.startsWith(item.href);
  };

  const getLinkClassName = (item: NavItem): string => {
    return isActive(item) ? "text-white" : "text-neutral-400";
  };

  return (
    <div>
      <nav className="flex justify-end gap-4" role="navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className={getLinkClassName(item)}
          >
            <HoverButton text={item.label} />
          </Link>
        ))}
      </nav>
      <hr className="mt-4 mb-8 border-neutral-700" />
    </div>
  );
};

export default Navbar;
