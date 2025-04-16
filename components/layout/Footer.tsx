import { Data } from "@/utils/my-data";
import Link from "next/link";
import { HoverButton } from "@/components/ui/HoverButton";

export default async function Footer() {

  const socialLinks = [
    { name: "GitHub", url: Data.github },
    { name: "LinkedIn", url: Data.linkedin },
    { name: "X/Twitter", url: Data.twitter },
    { name: "Dribbble", url: Data.dribbble },
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

      <div className="flex justify-center">
        <div className="border-t-[0.25px] transition-all duration-700 ease-in-out w-full border-neutral-700"></div>
      </div>

      <section className="text-neutral-400 text-xs">
        <div>
          ({Data.version}) {Data.year}© {Data.firstName} {Data.lastName}
        </div>
      </section>
    </footer>
  );
}
