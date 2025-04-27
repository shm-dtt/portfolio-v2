import { Data } from "@/utils/my-data";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="mx-4">
      <Navbar />
      <main className="flex flex-col my-4">
        <section className="flex flex-col z-1 py-8">
          <div className="flex flex-col gap-8">
            <p>Hi, I&apos;m {Data.firstName}.
              <br />
              A developer and designer residing in Bengaluru, passionate about
              crafting seamless, user-centric solutions and exceptional web
              experiences.
            </p>
            <p>
              I started my journey at{" "}
              <Link
                href={Data.currentCompanyLink}
                target="_blank"
                className="font-normal my-underline"
                aria-label={`Visit ${Data.currentCompany}`}
              >
                {Data.currentCompany}
              </Link>{" "}
              as an SDE Intern in 2023 and now work as an{" "}
              <span className="font-normal">{Data.position}</span>.
            </p>

            <p>
              Reach out to me via{" "}
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
