import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soham Dutta • Full Stack Developer",
  description: "Full Stack Developer, Currently working at Nokia as an Intern in Bengaluru, India",
  openGraph:{
    title: "Soham Dutta • Full Stack Developer",
    description: "Full Stack Developer, Currently working at Nokia as an Intern in Bengaluru, India",
    type: "website",
    url: "https://portfolio-v2-xi-five.vercel.app/",
    images: [
      {
        url: "https://portfolio-v2-xi-five.vercel.app/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soham Dutta • Full Stack Developer",
        type: "image/jpeg",
      },
    ],

  },
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
