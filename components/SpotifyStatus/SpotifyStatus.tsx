"use client";

import React, { useEffect, useState } from "react";
import SpotifyLogo from "./SpotifyLogo";
import getNowPlayingItem from "./SpotifyAPI";

interface SpotifyData {
  artist: string;
  isPlaying: boolean;
  title: string;
}

const SpotifyStatus: React.FC<{ initialData: SpotifyData | false }> = ({
  initialData,
}) => {
  const [offline, setOffline] = useState<boolean>(!initialData);
  const [result, setResult] = useState<SpotifyData | null>(
    initialData || null
  );

  useEffect(() => {
    // If initialData is null, don't wait 5 seconds for the first update
    if (!initialData) {
      getNowPlayingItem().then((result) => {
        if (result === false) {
          setOffline(true);
        } else {
          setResult(result);
          setOffline(false);
        }
      });
    }

    // Refresh data every 5 seconds
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
  }, [initialData]);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <SpotifyLogo
          width={14}
          height={14}
          color={!offline && result?.isPlaying ? "#25d865" : "#a3a3a3"}
        />
      </div>
      <div className="text-wrap text-xs text-neutral-400">
        {result ? (
          !offline && result.isPlaying ? (
            <p>
              ...listening to {result.title} by {result.artist}
            </p>
          ) : (
            <p>...not listening to anything</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SpotifyStatus;
