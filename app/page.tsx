import { Data } from "@/utils/data/Data";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col my-8">
      <div className="flex flex-col z-1 text-white p-4">
        <div>Hi, I&apos;m {Data.firstName}.</div>
        <div className="flex flex-col text-sm my-4 gap-8">
          <div>
            A developer and designer based in Bengaluru, India, dedicated to
            crafting pixel-perfect, seamless, and user-centric solutions.
            Passionate about building polished software and exceptional web
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
            For more information about me, feel free to explore my experiences,
            projects, and various social media profiles.
          </div>
        </div>

        <div className="flex mt-4">
          <Link href={Data.github} target="_blank">
            GitHub
          </Link>
          -
          <Link href={Data.linkedin} target="_blank">
            LinkedIn
          </Link>
          <Link href={Data.twitter} target="_blank">
            Twitter
          </Link>
        </div>
      </div>
    </div>
  );
}
