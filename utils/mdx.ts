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
      try {
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // First try the original format
        let metadataMatch = fileContents.match(
          /export const metadata = ({[\s\S]*?});/
        );

        if (metadataMatch) {
          const metadata = eval(`(${metadataMatch[1]})`);
          return {
            metadata,
            slug: dir.name,
          };
        }

        // If not found, try the generateMetadata format
        const genMetadataMatch = fileContents.match(
          /export const metadata = generateMetadata\(([\s\S]*?)\);/
        );

        if (genMetadataMatch) {
          // Extract parameters from function call
          const paramsText = genMetadataMatch[1];
          
          // Use regex to extract parameters while respecting string boundaries
          const params = [];
          let currentParam = '';
          let inString = false;
          let stringDelimiter = '';
          
          for (let i = 0; i < paramsText.length; i++) {
            const char = paramsText[i];
            
            if ((char === "'" || char === '"') && (i === 0 || paramsText[i-1] !== '\\')) {
              if (!inString) {
                inString = true;
                stringDelimiter = char;
              } else if (char === stringDelimiter) {
                inString = false;
              }
            }
            
            if (char === ',' && !inString) {
              params.push(currentParam.trim());
              currentParam = '';
            } else {
              currentParam += char;
            }
          }
          
          if (currentParam.trim()) {
            params.push(currentParam.trim());
          }
          
          // Clean up the extracted parameters (remove quotes)
          const cleanParams = params.map(p => {
            const trimmed = p.trim();
            if ((trimmed.startsWith("'") && trimmed.endsWith("'")) || 
                (trimmed.startsWith('"') && trimmed.endsWith('"'))) {
              return trimmed.slice(1, -1);
            }
            return trimmed;
          });
          
          // Create a metadata object based on the expected parameters
          // Assuming generateMetadata(title, description, date, path)
          if (cleanParams.length >= 3) {
            return {
              metadata: {
                title: cleanParams[0],
                date: cleanParams[2],
                alternates: {
                  canonical: cleanParams[3] || `/blogs/${dir.name}`,
                }
              },
              slug: dir.name,
            };
          }
        }
        
        // If we reach here, no valid metadata format was found
        throw new Error(`No metadata found in ${fullPath}`);
      } catch (error: any) {
        if (error.code === 'ENOENT') {
          console.error(`File not found: ${fullPath}`);
        } else {
          console.error(`Error processing ${fullPath}:`, error);
        }
        // Return a placeholder for this entry
        return {
          metadata: {
            title: dir.name,
            date: "Unknown date",
            alternates: {
              canonical: `/blogs/${dir.name}`,
            }
          },
          slug: dir.name,
        };
      }
    });

  return posts;
}