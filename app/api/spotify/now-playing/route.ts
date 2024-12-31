import getNowPlayingItem from "@/components/SpotifyStatus/SpotifyAPI";
import { NextResponse } from "next/server";

/**
 * Handles the GET request to fetch the currently playing item from Spotify.
 *
 * @returns {Promise<NextResponse>} A promise that resolves to a JSON response containing the currently playing item data or an error message.
 *
 * @throws {Error} If there is an issue fetching the currently playing item, it returns a JSON response with an error message and a 500 status code.
 */
export async function GET() {
  try {
    const data = await getNowPlayingItem();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
