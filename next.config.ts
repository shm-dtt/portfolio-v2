import type { NextConfig } from "next";
import { Data } from "@/lib/siteConfig";

const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  import("velite").then((m) => m.build({ watch: isDev, clean: !isDev }));
}

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "i.scdn.co",
  //       port: "",
  //       pathname: "/image/**",
  //     },
  //   ],
  // },
  redirects: async () => {
    return [
      {
        source: "/resume",
        destination: Data.links.resume,
        permanent: true,
      },
      {
        source: "/contact",
        destination: Data.email,
        permanent: true,
      },
    ];
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    // mdxRs: true,
    viewTransition: true,
  },
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
};

export default nextConfig;
