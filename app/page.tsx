import { Data } from "@/utils/data/Data";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col my-8">
      <div className="flex flex-col z-1 text-stone-300 p-4">
        <div className="text-xl font-bold">
          I&apos;m {Data.firstName} {Data.lastName}.
        </div>
        <div className="mt-1">Full Stack Developer</div>
        <div className="text-sm my-4">
          <div className="my-2">{Data.intro}</div>
          <div className="my-8">
            I earned my BTech degree in Computer Science from KIIT University in
            2024, and at present working as a {Data.position} at{" "}
            {
              <Link
                href={Data.currentCompanyLink}
                className="text-[#005aff] font-normal my-underline"
              >
                {Data.currentCompany}
              </Link>
            }
            .
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
