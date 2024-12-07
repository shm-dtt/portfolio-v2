import { Data } from "@/utils/data/Data";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col mt-8 mb-4">
      <div className="flex flex-col z-1 text-white p-4">
        <div>Hi, I&apos;m {Data.firstName}.</div>
        <div className="flex flex-col text-sm my-4 gap-8">
          <div>
            A developer and designer from Bengaluru, India, passionate about
            crafting seamless, user-centric solutions and exceptional web
            experiences.
          </div>
          <div>
            I earned my BTech degree in Computer Science from KIIT University in
            2024, and at present working as a {Data.position} at{" "}
            {
              <Link
                href={Data.currentCompanyLink}
                target="_blank"
                className="font-normal my-underline"
              >
                {Data.currentCompany}
              </Link>
            }
            .
          </div>
          <div>
            For more information about me, feel free to check my{" "}
            <Link
              href="https://drive.google.com/file/d/1-1-9ht1R1086T9KF3m0Ooy4swHL-NFPv/view"
              target="_blank"
              className="my-underline"
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
          </div>
          <div>
            Reach me at {" "}
            <Link href={`mailto:${Data.email}`} className="my-underline">
              {Data.email}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
