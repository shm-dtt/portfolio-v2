import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soham Dutta - Full Stack Developer",
  description: "Full Stack Developer, Currently working at Nokia in Bengaluru, India",
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
