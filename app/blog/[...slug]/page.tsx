import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import ShareButton from "@/components/ui/share-button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import "@/styles/mdx.css";
import { HoverButton } from "@/components/ui/hover-button";
import NotFound from "@/app/not-found";
import { Metadata } from "next";
import { Data } from "@/lib/siteConfig";
import ScrollToTop from "@/components/ui/scroll-to-top";
import FloatingTocButton from "@/components/ui/table-of-contents";

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

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post?.title,
    description: post?.description,
    authors: {
      name: Data.fullName,
    },
    openGraph: {
      title: post?.title,
      description: post?.description,
      type: "article",
      url: post?.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post?.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description: post?.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
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
    return <NotFound homeLink="/blog" />;
  }
  return (
    <>
    <div className="flex flex-col w-full h-full prose prose-invert dark:prose-invert">
      <Link
        href="/blog"
        className="my-8 flex flex-row text-sm items-center gap-2 text-neutral-400 hover:text-white no-underline"
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
          •<p>{post.metadata.readingTime+1} min read</p>
        </div>
        <ShareButton title={post.title} link={post.slugAsParams} />
      </div>
      <hr className="mt-2 mb-8 border-neutral-600"></hr>
      <MDXContent code={post.body || ""} components={{ HoverButton }} />
    </div>
    <ScrollToTop/>
    <FloatingTocButton/>
    </>
  );
}
