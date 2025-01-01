import queryString from "query-string";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

// Cache structure to store the token and its expiration
let tokenCache = {
  access_token: null,
  expires_at: 0,
};

/**
 * Retrieves an access token for the Spotify API.
 *
 * This function first checks if there is a cached token that is still valid.
 * If a valid cached token is found, it returns the token.
 * Otherwise, it requests a new token from the Spotify API using the refresh token.
 * The new token is then cached with an expiration time.
 *
 * @returns {Promise<{ access_token: string }>} An object containing the access token.
 */
const getAccessToken = async () => {
  // Check if we have a cached token that's still valid
  if (
    tokenCache.access_token &&
    tokenCache.expires_at &&
    Date.now() < tokenCache.expires_at
  ) {
    return { access_token: tokenCache.access_token };
  }

  // If no valid token in cache, request a new one
  const concatenatedString = `${client_id}:${client_secret}`;
  const basic = Buffer.from(concatenatedString).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  const data = await response.json();

  // Cache the new token with expiration
  // Spotify tokens typically expire in 1 hour (3600 seconds)
  // We subtract 60 seconds as a buffer
  tokenCache = {
    access_token: data.access_token,
    expires_at: Date.now() + (data.expires_in - 60) * 1000,
  };

  return { access_token: data.access_token };
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      // Add cache control headers to prevent caching
      cache: "no-store",
      next: { revalidate: 0 },
    },
  );

  return response;
};

export default async function getNowPlayingItem() {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    return false;
  }

  const song = await response.json();
  const artist = song.item.artists[0].name;
  const isPlaying = song.is_playing;
  const title = song.item.name;

  return {
    artist,
    isPlaying,
    title,
  };
}
