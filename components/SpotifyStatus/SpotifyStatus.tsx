"use client"

import React, { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";
import { inter } from "@/app/fonts/Fonts";
import SpotifyLogo from "./SpotifyLogo";
import Image from "next/image";

interface SpotifyData {
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

const SpotifyStatus: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
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
        if (result !== false) {
          setResult(result);
          setLoading(false);
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={` flex ${inter.className} justify-center `}>
      <div className="flex items-center rounded-md mx-4 bg-neutral-800 p-4 gap-4 text-white w-screen">
        {result.isPlaying ? (
          <>
            <Image
              src={result.albumImageUrl}
              width={48}
              height={48}
              alt="albumArt"
              className="rounded-md"
            />
            <div className="flex flex-col">
                <p className=" text-xs uppercase text-neutral-400 flex items-center gap-2 mb-2"><SpotifyLogo width={16}/>Currently Playing</p>
            <p className="text-sm">
            {result.title} <span className=" text-xs text-neutral-400">by</span>{" "}
            {result.artist}
            </p>
            </div>
          </>
        ) : (
          <>
            <SpotifyLogo width={20}/>
            <p>Currently Offline</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SpotifyStatus;
