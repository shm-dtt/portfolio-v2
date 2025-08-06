import { Data } from "@/utils/my-data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col my-4">
      <section className="flex flex-col z-1 py-8">
        <div className="flex flex-col gap-8">
          <p>
            Hi, I&apos;m {Data.firstName}.
            <br />
            <br />
            Software engineer crafting clean UIs and smooth user experiences.
            passionate about building simple, useful products that solve
            everyday problems.
          </p>
          <p>
            Building internal tools and automation systems for large-scale
            pan-India telecom networks at{" "}
            <Link
              href={Data.currentCompanyLink}
              target="_blank"
              className="font-normal bg-blue-600"
              aria-label="Visit Nokia"
            >
              NOKIA
            </Link>
            .
          </p>

          <p>
            Comfortable across the stack — from designing thoughtful
            interfaces to building backend systems in Javascript, Spring-Boot
            and Python.
          </p>
        </div>
      </section>
    </main>
  );
}
