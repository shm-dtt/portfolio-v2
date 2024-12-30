import React from "react";
import { compareDesc, parse } from "date-fns";
import Link from "next/link";
import { getAllPosts } from "@/utils/mdx";
import Navbar from "@/components/Navbar/Navbar";

interface BlogMetadata {
  title: string;
  date: string;
  alternates: {
    canonical: string;
  };
}

interface BlogPost {
  metadata: BlogMetadata;
  slug: string;
}

export default async function Blog() {
  const posts: BlogPost[] = await getAllPosts();

  // Sort posts by date and group by year
  const groupedPosts = posts.reduce(
    (groups: Record<number, BlogPost[]>, post) => {
      const date = parse(post.metadata.date, "dd/MM/yyyy", new Date());
      const year = date.getFullYear();

      if (!groups[year]) {
        groups[year] = [];
      }

      groups[year].push(post);
      return groups;
    },
    {},
  );

  // Sort years in descending order
  const sortedYears = Object.keys(groupedPosts)
    .map(Number)
    .sort((a, b) => b - a);

  // For each year, sort posts in descending order
  sortedYears.forEach((year) => {
    groupedPosts[year].sort((a, b) => {
      const dateA = parse(a.metadata.date, "dd/MM/yyyy", new Date());
      const dateB = parse(b.metadata.date, "dd/MM/yyyy", new Date());
      return compareDesc(dateA, dateB);
    });
  });

  return (
    <>
      <Navbar />
      <div className="mx-4 mb-32 mt-16">
        {sortedYears.map((year) => (
          <div key={year} className="flex my-2">
            <div className="w-1/6 text-neutral-400">{year}</div>

            <div className="space-y-2 w-full" key={year}>
              {groupedPosts[year].map((post) => {
                const date = parse(
                  post.metadata.date,
                  "dd/MM/yyyy",
                  new Date(),
                );
                const formattedDate = date.toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "2-digit",
                });

                return (
                  <>
                    <Link
                      key={post.slug}
                      href={`/blogs/${post.slug}`}
                      className="flex items-center justify-between group text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      <p>{post.metadata.title}</p>
                      <span className="text-sm">{formattedDate}</span>
                    </Link>
                    <div className="border-t-[0.25px] w-full border-neutral-700"></div>
                  </>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
