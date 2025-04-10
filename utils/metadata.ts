export function generateMetadata(
  title: string,
  description: string,
  date: string,
  path: string
) {
  const ogImage = `/api/og?title=${encodeURIComponent(title)}&date=${encodeURIComponent(date)}`;
  const blog_metadata = {
    title,
    description,
    alternates: {
      canonical: path,
    },
    date,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: path,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };

  return blog_metadata;
}
