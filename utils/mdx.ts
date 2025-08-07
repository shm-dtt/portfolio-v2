import fs from "fs";
import path from "path";

function calculateReadingTime(text: string, wordsPerMinute = 222): number {
  // Remove code blocks, import statements, and metadata from the word count
  const cleanedText = text
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/import[\s\S]*?from.*;/g, "") // Remove import statements
    .replace(/export const metadata = ({[\s\S]*?});/g, "") // Remove metadata
    .replace(/<.*?>/g, ""); // Remove HTML/JSX tags

  const wordCount = cleanedText.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}


function generateOGImageURL(title: string): string {
  // Use environment variable or fallback to localhost for development
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 
    (process.env.NODE_ENV === 'production' ? 'https://sohamdutta.in' : 'http://localhost:3000');
  return `${baseURL}/api/og?url=${encodeURIComponent(title)}`;
}


export async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "app/blogs");
  const entries = await fs.promises.readdir(postsDirectory, {
    withFileTypes: true,
  });

  const posts = entries
    .filter((entry) => entry.isDirectory() && entry.name !== "api")
    .map((dir) => {
      const fullPath = path.join(postsDirectory, dir.name, "page.mdx");
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Extract metadata from MDX file
      const metadataMatch = fileContents.match(
        /export const metadata = ({[\s\S]*?});/,
      );

      if (!metadataMatch) {
        throw new Error(`No metadata found in ${fullPath}`);
      }

      const metadata = eval(`(${metadataMatch[1]})`);

      // Calculate reading time based on the full content
      const readingTime = calculateReadingTime(fileContents);

      // Generate OG image URL if title exists
      const ogImageURL = metadata?.title 
        ? generateOGImageURL(metadata.title)
        : generateOGImageURL("Blog Post");

      console.log(ogImageURL);

      return {
        metadata,
        slug: dir.name,
        readingTime,
        ogImageURL,
      };
    });

  return posts;
}

/**
 * Gets reading time for a specific blog post by slug
 * @param slug The blog post slug
 * @returns Reading time in minutes
 */
export function getReadingTime(slug: string): number {
  try {
    const postPath = path.join(process.cwd(), "app/blogs", slug, "page.mdx");
    const fileContents = fs.readFileSync(postPath, "utf8");
    return calculateReadingTime(fileContents);
  } catch (error) {
    console.error(`Error calculating reading time for ${slug}:`, error);
    return 1; // Default fallback
  }
}