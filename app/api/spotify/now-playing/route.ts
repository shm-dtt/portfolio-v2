import getNowPlayingItem from "@/components/SpotifyStatus/SpotifyAPI";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getNowPlayingItem();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
