"use client";

import Image from "next/image";
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
    <div className="flex justify-center">
      <div className="flex items-center rounded-md mx-4 bg-neutral-800 p-4 gap-4  w-screen">
        {!offline && (
          <>
            <Image
              src={result.albumImageUrl}
              width={48}
              height={48}
              alt="albumArt"
              className="rounded-md"
            />
            <div className="flex flex-col">
              <div className=" text-xs uppercase text-neutral-400 flex items-center gap-2 mb-2">
                <SpotifyLogo width={16} />
                <p>
                  {result.isPlaying ? "Currently Playing" : "Currently Paused"}
                </p>
              </div>
              <p className="text-sm">
                {result.title}{" "}
                <span className=" text-xs text-neutral-400">by</span>{" "}
                {result.artist}
              </p>
            </div>
          </>
        )}
        {offline && (
          <>
            <SpotifyLogo width={20} />
            <p>Currently Offline</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SpotifyStatus;
