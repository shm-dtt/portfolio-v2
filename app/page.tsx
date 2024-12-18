import { Data } from "@/utils/data/Data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col mt-8 mb-4">
      <section className="flex flex-col z-1 p-4">
        <h1>Hi, I&apos;m {Data.firstName}.</h1>

        <div className="flex flex-col text-sm my-4 gap-8">
          <p>
            A developer and designer from Bengaluru, India, passionate about
            crafting seamless, user-centric solutions and exceptional web
            experiences.
          </p>

          <p>
            I earned my BTech degree in Computer Science from KIIT University in
            2024, and am currently working as a{" "}
            <span className="font-normal">
              {Data.position} at{" "}
              <Link
                href={Data.currentCompanyLink}
                target="_blank"
                className="font-normal my-underline"
                aria-label={`Visit ${Data.currentCompany}`}
              >
                {Data.currentCompany}
              </Link>
            </span>
            .
          </p>

          <p>
            For more information about me, feel free to check my{" "}
            <Link
              href="https://drive.google.com/file/d/1-1-9ht1R1086T9KF3m0Ooy4swHL-NFPv/view"
              target="_blank"
              className="my-underline"
              aria-label="View my resume"
            >
              resume
            </Link>{" "}
            or explore my{" "}
            <Link href="/experience" className="my-underline">
              professional background
            </Link>
            ,{" "}
            <Link href="/projects" className="my-underline">
              projects
            </Link>
            , and various social media profiles.
          </p>

          <address>
            Reach me at{" "}
            <Link
              href={`mailto:${Data.email}`}
              className="my-underline"
              aria-label={`Send an email to ${Data.email}`}
            >
              {Data.email}
            </Link>
          </address>
        </div>
      </section>
    </main>
  );
}
