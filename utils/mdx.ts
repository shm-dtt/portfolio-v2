import fs from "fs";
import path from "path";

/**
 * Calculates reading time based on word count and reading speed
 * @param text The text content to calculate reading time for
 * @param wordsPerMinute Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes (rounded up)
 */
function calculateReadingTime(text: string, wordsPerMinute = 222): number {
  // Remove code blocks, import statements, and metadata from the word count
  const cleanedText = text
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/import[\s\S]*?from.*;/g, '') // Remove import statements
    .replace(/export const metadata = ({[\s\S]*?});/g, '') // Remove metadata
    .replace(/<.*?>/g, ''); // Remove HTML/JSX tags
    
  const wordCount = cleanedText.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Retrieves all blog posts from the "app/blogs" directory.
 *
 * This function reads the directory contents, filters out non-directory entries and the "api" directory,
 * and then reads the "page.mdx" file within each directory to extract metadata.
 *
 * @returns {Promise<Array<{ metadata: any, slug: string, readingTime: number }>>} A promise that resolves to an array of objects,
 * each containing the metadata, slug, and reading time of a blog post.
 *
 * @throws {Error} If no metadata is found in an MDX file.
 */
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

      return {
        metadata,
        slug: dir.name,
        readingTime,
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