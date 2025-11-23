import Link from "next/link";
import { useMemo } from "react";
import { BUILDING } from "@/lib/siteConfig";
import { posts } from "#site/content";

export default function TwoColumnSection() {
  const writingContent = useMemo(
    () =>
      posts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 2),
    []
  );

  return (
    <div className="py-4">
      <div className="grid grid-cols-2 gap-6">
        {/* Building Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-neutral-400 text-sm">Building.</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Link
                href={BUILDING.link}
                target="_blank"
                className="my-underline"
              >
                {BUILDING.name}
              </Link>
              <p className="text-neutral-400 text-sm mt-1">
                {BUILDING.description}
              </p>
              {/* <Image
                src="/image.png"
                alt="Wallendar"
                width={100}
                height={100}
                className="w-full h-auto rounded-md mb-2"
              /> */}
            </div>
          </div>
        </div>

        {/* Writing Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-neutral-400 text-sm">Writing.</h2>
          <div className="flex flex-col gap-6">
            {writingContent.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <Link href={item.slug} className="my-underline">
                  {item.title}
                </Link>
                <p className="text-neutral-400 text-sm mt-1">
                  {item.description}
                </p>
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <Link
                href="/blog"
                className="my-underline inline-flex items-center gap-1"
              >
                All Blogs
              </Link>
              <p className="text-neutral-400 text-sm mt-1">
                Infrequent thoughts on coding, design, and life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
