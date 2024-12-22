"use client";

import React, { useEffect, useState } from "react";
import SpotifyLogo from "./SpotifyLogo";
import getNowPlayingItem from "./SpotifyAPI";

interface SpotifyData {
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

const SpotifyStatus: React.FC = () => {
  const [offline, setOffline] = useState<boolean>(true);
  const [result, setResult] = useState<SpotifyData>({
    albumImageUrl: "",
    artist: "",
    isPlaying: false,
    songUrl: "",
    title: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      getNowPlayingItem().then((result) => {
        if (result === false) {
          setOffline(true);
        } else {
          setResult(result);
          setOffline(false);
        }
      });
    }, 5000);

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
      <div className=" text-wrap text-xs text-neutral-400">
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
