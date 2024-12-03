import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Soham Dutta • Full Stack Developer",
  description:
    "I am a Full Stack Developer, Currently working at Nokia as an Applied R&D Software Engineer in Bengaluru, India",
  openGraph: {
    title: "Soham Dutta • Full Stack Developer",
    description:
      "I am a Full Stack Developer, Currently working at Nokia as an Applied R&D Software Engineer in Bengaluru, India",
    type: "website",
    url: "https://sohamdutta.in/",
    images: [
      {
        url: "https://sohamdutta-portfolio.s3.ap-south-1.amazonaws.com/opengraph-image.jpg",
        secureUrl:
          "https://sohamdutta-portfolio.s3.ap-south-1.amazonaws.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soham Dutta • Full Stack Developer",
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
