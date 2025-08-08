import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";

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
  return (
    <div className="flex flex-col w-full h-full prose prose-invert dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">{post?.title}</h1>

      <MDXContent code={post?.body || ""} />

      {/* You can render the post content here once fetched */}
    </div>
  );
}
