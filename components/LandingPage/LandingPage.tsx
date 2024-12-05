import { Data } from "@/utils/data/Data";
import Link from "next/link";

const LandingPage: React.FC = () => {
  return (
    <div
      className=" flex flex-col mb-32"
    >
      <div className="flex flex-col z-1 text-white p-8">
        <div className="text-xl font-bold">
          I&apos;m {Data.firstName} {Data.lastName}.
        </div>
        <div className="mt-1">
          Full Stack Developer
        </div>
        <div className="opacity-70 mt-2">
          {Data.intro}
        </div>
        <div className="text-sm mt-8">
          Currently working as an {Data.position} at {Data.currentCompany}, living in {Data.location}, {Data.country}.
        </div>
        <div className="flex text-sm">
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
};

export default LandingPage;
