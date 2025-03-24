"use client";

import React, { useEffect, useState, useRef } from "react";
import SpotifyLogo from "./SpotifyLogo";

interface SpotifyData {
  artist: string;
  isPlaying: boolean;
  title: string;
}

/**
 * SpotifyStatus component displays the current Spotify playing status.
 * It fetches the now-playing data from the Spotify API and updates the UI accordingly.
 * If the text overflows the container, it will scroll horizontally.
 *
 * @param {Object} props - The component props.
 * @param {SpotifyData | false} props.initialData - The initial data for the Spotify status.
 *
 * @returns {JSX.Element} The rendered component.
 */
const SpotifyStatus: React.FC<{ initialData: SpotifyData | false }> = ({
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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const scrollingText =
    !offline && result.isPlaying
      ? `...listening to ${result.title} by ${result.artist}`
      : "...not listening to anything";

  return (
    <div className="flex items-center">
      <div className="flex items-center mr-2">
        <SpotifyLogo
          width={14}
          height={14}
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
