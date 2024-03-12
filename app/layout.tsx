import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soham Dutta - Full Stack Developer",
  description: "Portfolio of Soham Dutta",
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
      </body>
    </html>
  );
}
