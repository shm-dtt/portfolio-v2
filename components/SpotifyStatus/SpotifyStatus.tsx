"use client";

import React, { useEffect, useState } from "react";
import SpotifyLogo from "../../utils/logos/SpotifyLogo";
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
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center gap-2 w-full text-xs text-neutral-400">
      <SpotifyLogo width={14} />
      {!offline && (
        <p className="flex items-center">
          listening to.. {result.title} by {result.artist}
        </p>
      )}
      {offline && <p>..not listening</p>}
    </div>
  );
};

export default SpotifyStatus;
