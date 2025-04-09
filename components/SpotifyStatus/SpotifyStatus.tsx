"use client";

import React, { useEffect, useState, useRef} from "react";
import SpotifyLogo from "./SpotifyLogo";

interface SpotifyData {
  artist: string;
  isPlaying: boolean;
  title: string;
}

const SpotifyStatus: React.FC<{ 
  initialData: SpotifyData | false
}> = ({
  initialData,
}) => {
  const [offline, setOffline] = useState<boolean>(!initialData);
  const [result, setResult] = useState<SpotifyData>(
    initialData || {
      artist: "",
      isPlaying: false,
      title: "",
    },
  );
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  // Unified Effect for Resize and Overflow Handling
  useEffect(() => {
    const updateScrollBehavior = () => {
      if (textRef.current && containerRef.current) {
        const textWidth = textRef.current.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;
        const isOverflowing = textWidth > containerWidth;
        setShouldScroll(isOverflowing);

        if (isOverflowing) {
          const translateX = -(textWidth - containerWidth) - 15;
          textRef.current.style.transform = `translateX(${translateX}px)`;
        } else {
          textRef.current.style.transform = "translateX(0)";
        }
      }
    };

    updateScrollBehavior();
    window.addEventListener("resize", updateScrollBehavior);

    return () => window.removeEventListener("resize", updateScrollBehavior);
  }, [result]);

  // Polling Data Fetch
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch("/api/spotify/now-playing");
        const data = await response.json();

        if (!data || data.error) {
          setOffline(true);
        } else {
          setResult(data);
          setOffline(false);
        }
      } catch (error) {
        setOffline(true);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Hide component if offline or not playing, show fallback
  // if (offline || !result.isPlaying) {
  //   return fallback || null;
  // }

  const scrollingText =
    !offline && result.isPlaying
      ? `${result.title} by ${result.artist}`
      : "Sorry, not listening to Spotify right now. Check again later.";

  return (
    <div className="flex items-center gap-2">
      <div>
        <SpotifyLogo
          width={16}
          height={16}
          color={!offline && result.isPlaying ? "#25d865" : "#a3a3a3"}
        />
      </div>
      <div ref={containerRef} className="w-full inline-block overflow-hidden">
        <div
          ref={textRef}
          className={`text-xs text-neutral-400 whitespace-nowrap ${
            shouldScroll ? "marquee" : ""
          }`}
        >
          <span>{scrollingText}</span>
        </div>
      </div>
    </div>
  );
};

export default SpotifyStatus;
