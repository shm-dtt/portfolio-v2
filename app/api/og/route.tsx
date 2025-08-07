import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const urlPath = searchParams.get("url");

    console.log(urlPath);

    return new ImageResponse(
      (
        <div>
          {urlPath}
        </div>
      )
    );
  } catch (e: any) {
    console.error("Error generating OG image:", e);
    return new Response("Failed to generate image", { status: 500 });
  }
}
