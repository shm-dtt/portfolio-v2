import { Data } from "@/utils/siteConfig";
import Link from "next/link";
import { HoverButton } from "@/components/ui/hover-button";

export default async function Footer() {
  const socialLinks = [
    { name: "Email", url: Data.email },
    { name: "GitHub", url: Data.links.github },
    { name: "LinkedIn", url: Data.links.linkedin },
    { name: "X/Twitter", url: Data.links.twitter },
    { name: "Dribbble", url: Data.links.dribbble },
  ];

  return (
    <footer className="flex flex-col justify-center m-4 gap-4 mt-24">
      <nav className="flex gap-1 text-sm">
        {socialLinks.map((platform, idx) => (
          <div key={platform.name} className="flex items-center">
            <Link
              href={platform.url}
              target="_blank"
              className="text-neutral-400 hover:text-white"
              aria-label={platform.name}
            >
              <HoverButton text={platform.name} />
            </Link>
            {idx < socialLinks.length - 1 && (
              <span className="text-neutral-400 text-xs mx-1">•</span>
            )}
          </div>
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
