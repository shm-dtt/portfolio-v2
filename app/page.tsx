import { Data } from "@/utils/my-data";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default async function Home() {
  return (
    <div className="mx-4">
      <Navbar />
      <main className="flex flex-col my-4">
        <section className="flex flex-col z-1 py-8">
          <div className="flex flex-col gap-8">
            <p>
              Hi, I&apos;m {Data.firstName}, a developer and designer residing
              in Bengaluru, passionate about crafting seamless, user-centric
              solutions and exceptional web experiences.
            </p>
            <p>
              I earned my BTech degree in Computer Science from KIIT University
              in 2024, joined{" "}
              <Link
                href={Data.currentCompanyLink}
                target="_blank"
                className="font-normal my-underline"
                aria-label={`Visit ${Data.currentCompany}`}
              >
                {Data.currentCompany}
              </Link>{" "}
              as a SDE Intern in 2023 and currently working as a{" "}
              <span className="font-normal">{Data.position}</span>.
            </p>

            <p>
              Feel free to check out my{" "}
              <Link
                href="https://drive.google.com/file/d/1-1-9ht1R1086T9KF3m0Ooy4swHL-NFPv/view"
                target="_blank"
                className="my-underline"
                aria-label="View my resume"
              >
                Resume
              </Link>.
            </p>
            <p>
              And reach out to me via{" "}
              <Link
                href={`mailto:${Data.email}`}
                className="my-underline"
                aria-label={`my mail ${Data.email}`}
              >
                email
              </Link>{" "}
              for any opportunities or collaborations.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
