"use client"
import dynamic from "next/dynamic";

// Dynamic imports to reduce initial bundle size
const Footer = dynamic(() => import("@/components/Footer/Footer"));
const Header = dynamic(() => import("@/components/Header/Header"));
const LandingPage = dynamic(
  () => import("@/components/LandingPage/LandingPage")
);
const Experience = dynamic(() => import("@/components/Experience/Experience"));
const Projects = dynamic(() => import("@/components/Projects/Projects"));
const SpotifyStatus = dynamic(
  () => import("@/components/SpotifyStatus/SpotifyStatus")
);
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} p-2 mx-auto max-w-4xl`}>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}
