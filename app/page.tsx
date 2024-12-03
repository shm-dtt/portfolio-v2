"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

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
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = await import("locomotive-scroll").then(
        (module) => module.default,
      );
      const locomotiveScroll = new LocomotiveScroll();
      document.body.style.overflow = "visible";
      window.scrollTo(0, 0);
    })();
  }, []);

  return (
    <div className={`${inter.className} p-2 mx-auto max-w-4xl`}>
      <Header />
      <LandingPage />
      <Experience />
      <Projects />
      <SpotifyStatus />
      <Footer />
    </div>
  );
}
