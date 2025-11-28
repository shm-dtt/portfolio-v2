"use client";

import { Data } from "@/lib/siteConfig";
import Link from "next/link";
import { Gmail, XformerlyTwitter, GitHub, LinkedIn } from "@/components/icons/IconLibrary";

export default function Footer() {
  const socialLinks = [
    {
      name: "Email",
      url: Data.email,
      icon: <Gmail className="w-4 h-4 inline-block align-middle "/>,
    },
    {
      name: "GitHub",
      url: Data.links.github,
      icon: <GitHub className="w-4 h-4 inline-block align-middle "/>,
    },
    {
      name: "LinkedIn",
      url: Data.links.linkedin,
      icon: <LinkedIn className="w-4 h-4 inline-block align-middle "/>,
    },
    {
      name: "X",
      url: Data.links.twitter,
      icon: <XformerlyTwitter className="w-4 h-4 inline-block align-middle " />,
    },
  ];

  return (
    <footer className="flex flex-col justify-center m-4 gap-4 mt-24">
      <nav className="flex gap-4 text-xs">
        {socialLinks.map((platform) => (
          <Link
            key={platform.name}
            href={platform.url}
            target="_blank"
            className= "transition-colors hover:text-gray-300 flex flex-row items-center gap-1"
            aria-label={platform.name}
          >
            {platform.icon} {platform.name}
          </Link>
        ))}
      </nav>

      <hr className=" border-neutral-700"></hr>

      <section className="text-neutral-400 text-xs">
        <div>
          ({Data.version}) {Data.year}© {Data.firstName} {Data.lastName}
        </div>
      </section>
    </footer>
  );
}
