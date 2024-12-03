"use client";
import { useEffect } from "react";
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

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = await import("locomotive-scroll").then(
        (module) => module.default
      );
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className=" p-2 mx-auto max-w-4xl">
      <Header />
      <LandingPage />
      <Experience />
      <Projects />
      <SpotifyStatus />
      <Footer />
    </div>
  );
}
