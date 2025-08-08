import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import ShareButton from "@/components/ui/ShareButton";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import "@/styles/mdx.css";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const prm = await params;
  const slug = prm?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  })); 
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  if (!post) {
    return (
      <div className="flex flex-col w-full h-full items-center justify-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link
          href="/blog"
          className="my-8 flex flex-row text-sm items-center gap-2 text-neutral-400 hover:text-white"
        >
          <ChevronLeft size={16} /> Back
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full h-full prose prose-invert dark:prose-invert">
      <Link
        href="/blog"
        className="my-8 flex flex-row text-sm items-center gap-2 text-neutral-400 hover:text-white"
      >
        <ChevronLeft size={16} /> Back
      </Link>
    <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
    <p className="text-sm text-neutral-400 mt-0">{post.description}</p>
      <div className="flex flex-row items-center justify-between gap-1 text-sm text-neutral-400">
        <div className="flex flex-row items-center gap-2">
          <p>
            {new Date(post.date ?? "").toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
          •<p>{post.readingTime} min read</p>
        </div>
        <ShareButton title={post.title} link={post.slugAsParams} />
      </div>
      <hr className="mt-2 mb-8 border-neutral-600"></hr>
      <MDXContent code={post.body || ""} />
    </div>
  );
}
