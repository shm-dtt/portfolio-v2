"use client";

import { Data } from "@/lib/siteConfig";
import Link from "next/link";
import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Email",
      url: Data.email,
      icon: <EnvelopeIcon className="w-5 h-5" weight="fill" />,
      hoverColor: "hover:text-green-400",
    },
    {
      name: "GitHub",
      url: Data.links.github,
      icon: <GithubLogoIcon className="w-5 h-5" weight="fill" />,
      hoverColor: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      url: Data.links.linkedin,
      icon: <LinkedinLogoIcon className="w-5 h-5" weight="fill" />,
      hoverColor: "hover:text-[#0077b5]",
    },
    {
      name: "X",
      url: Data.links.twitter,
      icon: <XLogoIcon className="w-5 h-5" />,
      hoverColor: "hover:text-[#1DA1F2]",
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
            className={` transition-colors ${platform.hoverColor} flex flex-row items-center gap-1`}
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
