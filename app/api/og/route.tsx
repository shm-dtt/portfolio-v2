import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    //api/og?title

    const { searchParams } = new URL(request.url);

    console.log(searchParams);

    // const hasTitle = searchParams.has("title");
    // const title = hasTitle
    //   ? searchParams.get("title")?.slice(0, 100)
    //   : "My portfolio";
    return new ImageResponse(<div>jcnjnc</div>);
  } catch (e: any) {
    return new Response("Failled to generate image", { status: 500 });
  }
}
