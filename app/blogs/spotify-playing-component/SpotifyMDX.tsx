
import getNowPlayingItem from "@/components/SpotifyStatus/SpotifyAPI";
import SpotifyStatus from "@/components/SpotifyStatus/SpotifyStatus";

export default async function SpotifyMDX() {
  const initialData = await getNowPlayingItem();
  
  return (
    <div>
      <SpotifyStatus 
        initialData={initialData}
      />
    </div>
  );
}