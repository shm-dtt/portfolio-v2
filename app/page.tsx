import { Data } from "@/lib/siteConfig";
import Link from "next/link";
import TwoColumnSection from "@/components/ui/two-column-section";
import { Newsreader } from "next/font/google";
import ProjectsClient from "@/app/projects/ProjectsClient";
import {
  React,
  Nextjs,
  TypeScript,
  Spring,
  Python,
  Java,
} from "@/components/icons/IconLibrary";
const newsreader = Newsreader({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  weight: ["500"],
  style: ["italic"],
  fallback: ["Arial", "sans-serif"],
});
export default function Home() {
  const iconClassName = "w-4 h-4 inline-block align-middle ";

  return (
    <main className="flex flex-col my-4">
      <section className="flex flex-col z-1 py-6">
        <div className="flex flex-col gap-8">
          <p>
            Hi, I&apos;m {Data.firstName}.
            <br />
            <br />
            <span className={`${newsreader.className} italic text-[16px]`}>
              Crafting clean UIs and smooth user experiences.
            </span>
            <br />
            <span>
              Passionate about building simple, useful products that solve
              everyday problems.
            </span>
          </p>
          <p>
            Working with data and AI, serving personalized shopping experience to millions of customers at {" "}
            <Link
              href={Data.currentCompanyLink}
              target="_blank"
              className="font-normal text-[#009FE0]"
              aria-label="Visit Albertsons"
            >
              {Data.currentCompany}
            </Link>
          </p>

          <p>
            Comfortable across the stack - from designing interfaces using React{" "}
            <React className={iconClassName} />, Next.js{" "}
            <Nextjs className={iconClassName} /> to building backend systems in
            Typescript <TypeScript className={iconClassName} />, Python{" "}
            <Python className={iconClassName} />, Java{" "}
            <Java className={iconClassName} /> and Spring-Boot{" "}
            <Spring className={iconClassName} />
          </p>
        </div>
      </section>
      <TwoColumnSection/>
    </main>
  );
}
