// utils/mdx.ts
import fs from "fs";
import path from "path";

export async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "app/blog");
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

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
