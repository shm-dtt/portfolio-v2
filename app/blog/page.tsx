import React from "react";
import Link from "next/link";
import { posts } from "#site/content";
import { sortPosts } from "@/utils/util";
import { Metadata } from "next";

interface PostItems {
  slug: string;
  title: string;
  description?: string;
  date: string; // ISO date string
}

export const metadata: Metadata = {
  title: "Blogs - Soham Dutta",
  description: "All the interesting blogs that I have written.",
};

export default async function Blog() {
  // Sort posts by date (newest first)
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  // Group posts by year
  const groupedPosts = sortedPosts.reduce(
    (groups: Record<number, PostItems[]>, post) => {
      const year = new Date(post.date).getFullYear();
      if (!groups[year]) groups[year] = [];
      groups[year].push(post);
      return groups;
    },
    {},
  );

  // Sort years in descending order
  const sortedYears = Object.keys(groupedPosts)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="mb-32 mt-16">
      {sortedYears.map((year) => (
        <div key={year} className="flex items-start my-2">
          <div className="w-1/6">{year}</div>

          <div className="space-y-2 w-full">
            {groupedPosts[year].map((post) => {
              const formattedDate = new Date(post.date).toLocaleDateString(
                "en-IN",
                { day: "2-digit", month: "short" },
              );

              return (
                <div key={post.slug} className="w-full">
                  <Link
                    href={`/${post.slug}`}
                    className="flex items-end justify-between group hover:text-neutral-400 transition-colors duration-200"
                  >
                    <p className="flex-1 min-w-0">{post.title}</p>
                    <span className="text-sm whitespace-nowrap">
                      {formattedDate}
                    </span>
                  </Link>

                  <div className="border-t-[0.25px] w-full border-neutral-700 mt-2"></div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
