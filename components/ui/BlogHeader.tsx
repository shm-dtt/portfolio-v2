"use client"

import { ChevronLeft, Share } from "lucide-react";
import Link from "next/link";

interface BlogHeaderProps {
  title: string;
  date: string;
  link: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, date, link }) => {

  const handleShare = async () => {
    try {
      await navigator.share({
        title: title,
        text: "Check out this blog post by Soham Dutta",
        url: link,
      });
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  console.log(title);
  return (
    <div>
      <Link
        href="/blogs"
        className="my-8 flex flex-row text-sm items-center gap-2 text-neutral-400 hover:text-white"
      >
        <ChevronLeft size={16} /> Back
      </Link>

      <h1 className="font-bold text-3xl">{title}</h1>

      <hr className="my-4 border-neutral-600"></hr>
      <div className="flex flex-row items-center justify-between gap-1 text-sm text-neutral-400">
        <p>
          {new Date(date.split("-").reverse().join("-")).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "short",
              day: "numeric",
            }
          )}
        </p>
        {/* •
        <p>3min read</p> */}
        <button onClick={handleShare} className=" cursor-pointer flex flex-row text-sm items-center gap-2 text-neutral-400 hover:text-white">
        <Share size={16}/> Share
        </button>
      </div>

      <hr className="mt-4 mb-8 border-neutral-600"></hr>
    </div>
  );
};

export default BlogHeader;
