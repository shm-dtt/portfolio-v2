
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { getReadingTime } from "@/utils/mdx";
import ShareButton from "./ShareButton";

interface BlogHeaderProps {
  title: string;
  date: string;
  link: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, date, link }) => {
  return (
    <div>
      <Link
        href="/blogs"
        className="my-8 flex flex-row text-sm items-center gap-2 text-neutral-400 hover:text-white"
      >
        <ChevronLeft size={16} /> Back
      </Link>

      <h1 className="font-bold text-3xl mb-6">{title}</h1>

      <div className="flex flex-row items-center justify-between gap-1 text-sm text-neutral-400">
        <div className="flex flex-row items-center gap-2">
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
          •<p>{getReadingTime(link.replace("/blogs/", ""))} min read</p>
        </div>
        <ShareButton title={title} link={link} />
      </div>

      <hr className="mt-4 mb-8 border-neutral-600"></hr>
    </div>
  );
};

export default BlogHeader;
