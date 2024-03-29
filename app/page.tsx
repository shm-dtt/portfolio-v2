"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import LandingPage from "@/components/LandingPage/LandingPage";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader/Preloader";
import Testimonials from "@/components/Testimonials/Testimonials";
import SpotifyStatus from "@/components/SpotifyStatus/SpotifyStatus";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import About from "@/components/About/About";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {

          const LocomotiveScroll = await import('locomotive-scroll').then( (module) => module.default);
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            //document.body.style.cursor = 'default''
            document.body.style.overflow = 'visible';
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return <div>
    <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
    <Header/>
    <LandingPage />
    <About/>
    <Projects/>
    <Experience/>
    <Testimonials/>
    <SpotifyStatus/>
    <Footer/>
  </div>;
}
