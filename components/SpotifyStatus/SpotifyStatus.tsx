"use client";

import React, { useEffect, useState } from "react";
import SpotifyLogo from "./SpotifyLogo";

interface SpotifyData {
  artist: string;
  isPlaying: boolean;
  title: string;
}

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

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch('/api/spotify/now-playing');
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
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <SpotifyLogo
          width={14}
          height={14}
          color={!offline && result.isPlaying ? "#25d865" : "#a3a3a3"}
        />
      </div>
      <div className="text-wrap text-xs text-neutral-400">
        {!offline && result.isPlaying ? (
          <p>
            ...listening to {result.title} by {result.artist}
          </p>
        ) : (
          <p>...not listening to anything</p>
        )}
      </div>
    </div>
  );
};

export default SpotifyStatus;
