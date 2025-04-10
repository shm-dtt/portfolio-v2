import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const hasTitle = searchParams.has("title");
  const title = hasTitle ? searchParams.get("title") : "Default Title";

  try {
    return new ImageResponse(<div>{title}</div>);
  } catch (e) {
    console.log(e);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
