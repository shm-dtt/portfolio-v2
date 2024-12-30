import SpotifyStatus from "@/components/SpotifyStatus/SpotifyStatus";
import { Data } from "@/utils/my-data";
import Link from "next/link";
import getNowPlayingItem from "@/components/SpotifyStatus/SpotifyAPI";
import Navbar from "@/components/Navbar/Navbar";

export default async function Home() {
  const initialData = await getNowPlayingItem();
  return (
    <>
      <Navbar />
      <main className="flex flex-col mb-4">
        <section className="flex flex-col z-1 p-4">
          <div className="flex flex-col my-4 gap-8">
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
                aria-label={`my mail ${Data.email}`}
              >
                my mail.
              </Link>
            </address>
          </div>
        </section>
        <section className="z-1 pt-4 px-4">
        <SpotifyStatus initialData={initialData} />
      </section>
      </main>
    </>
  );
}
