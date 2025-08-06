import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  weight: ["400", "500", "700"],
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Soham Dutta - Full Stack Developer",
  description:
    "I am a Full Stack Developer, Currently working at Nokia as an Applied R&D Software Engineer in Bengaluru, India",
  openGraph: {
    title: "Soham Dutta - Full Stack Developer",
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
        alt: "Soham Dutta - Full Stack Developer",
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
      <body
        className={`${inter.className} mx-auto my-12 max-w-2xl md:text-base text-sm`}
      >
        <div className="mx-4">
          <Navbar />
          {children}
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
