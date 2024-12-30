import React from "react";
import { compareDesc, parse } from "date-fns";
import Link from "next/link";
import { getAllPosts } from "@/utils/mdx";
import Navbar from "@/components/Navbar/Navbar";

// Type definitions
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
  // This would typically come from your MDX loader or file system
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
      <div className="mx-4 mb-32 max-w-2xl">
        {sortedYears.map((year) => (
          <div key={year} className="mb-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-300">{year}</h2>
            </div>

            <div className="space-y-6">
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
                  <div
                    key={post.slug}
                    className="flex items-center justify-between group"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gray-200 hover:text-white transition-colors duration-200"
                    >
                      {post.metadata.title}
                    </Link>
                    <span className="text-gray-500 text-sm">
                      {formattedDate}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
