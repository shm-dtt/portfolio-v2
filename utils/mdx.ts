import fs from "fs";
import path from "path";

/**
 * Retrieves all blog posts from the "app/blogs" directory.
 * 
 * This function reads the directory contents, filters out non-directory entries and the "api" directory,
 * and then reads the "page.mdx" file within each directory to extract metadata.
 * 
 * @returns {Promise<Array<{ metadata: any, slug: string }>>} A promise that resolves to an array of objects,
 * each containing the metadata and slug of a blog post.
 * 
 * @throws {Error} If no metadata is found in an MDX file.
 */
export async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "app/blogs");
  const entries = await fs.promises.readdir(postsDirectory, { withFileTypes: true });

  const posts = entries
    .filter((entry) => entry.isDirectory() && entry.name !== "api")
    .map((dir) => {
      const fullPath = path.join(postsDirectory, dir.name, "page.mdx");
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Extract metadata from MDX file
      // This is a simple regex approach - you might want to use a proper MDX parser
      const metadataMatch = fileContents.match(
        /export const metadata = ({[\s\S]*?});/,
      );

      if (!metadataMatch) {
        throw new Error(`No metadata found in ${fullPath}`);
      }

      const metadata = eval(`(${metadataMatch[1]})`);

      return {
        metadata,
        slug: dir.name,
      };
    });

  return posts;
}
