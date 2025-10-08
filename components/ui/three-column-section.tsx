import Link from "next/link";
import { useMemo } from "react";
import { projects } from "@/lib/siteConfig";
import { posts } from "#site/content";
import { ArrowUpRight } from "lucide-react";

export default function ThreeColumnSection() {
  const featuredProjects = useMemo(() => projects.slice(1, 3), []);
  
  const writingContent = useMemo(() => 
    posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 2),
    []
  );

  return (
    <div className="relative overflow-x-auto py-8 beautiful-scrollbar">
      <div className="grid grid-cols-3 gap-6 min-w-xl">
        {/* Building Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-neutral-400 text-sm">Building</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Link
                href={projects[0].link}
                target="_blank"
                className="my-underline"
              >
                {projects[0].name}
              </Link>
              <p className="text-neutral-400 text-sm mt-1">
                {projects[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Projects Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-neutral-400 text-sm">Projects</h2>
          <div className="flex flex-col gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="flex flex-col gap-2">
                <Link
                  href={project.link}
                  target="_blank"
                  className="my-underline inline-flex items-center gap-1"
                >
                  {project.name}
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
                <p className="text-neutral-400 text-sm mt-1">
                  {project.description}
                </p>
              </div>
            ))}
            <Link
              href="/projects"
              className="my-underline inline-flex items-center gap-1"
            > 
              All Projects <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Writing Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-neutral-400 text-sm">Recent Blogs</h2>
          <div className="flex flex-col gap-6">
            {writingContent.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <Link
                  href={item.slug}
                  className="my-underline"
                >
                  {item.title}
                </Link>
                <p className="text-neutral-400 text-sm mt-1">{item.description}</p>
              </div>
            ))}
            <Link
              href="/blog"
              className="my-underline inline-flex items-center gap-1"
            >
              All Blogs <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
