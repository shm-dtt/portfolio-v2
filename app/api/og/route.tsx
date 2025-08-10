import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { Data } from "@/utils/siteConfig";

export const runtime = "edge";

// Load fonts

const productSans = fetch(
  new URL("../../../assets/fonts/ProductSans-Medium.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

// Load image as array buffer
const image = fetch(
  new URL("../../../assets/images/og-blog.jpg", import.meta.url),
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontRegular = await productSans;
    const img = await image;
    // Convert image to base64 for background
    const imgBase64 = `data:image/jpeg;base64,${Buffer.from(img).toString(
      "base64",
    )}`;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div
          tw="flex flex-col w-full h-full p-12 text-white"
          style={{
            backgroundImage: `url(${imgBase64})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-xl uppercase tracking-tight">BLOG POST</div>
            <div tw="flex text-6xl pt-12">{heading}</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">
              {Data.links.github.replace(/^https?:\/\//, "")}
            </div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">
                {Data.links.portfolio.replace(/^https?:\/\//, "")}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Product Sans Medium",
            data: fontRegular,
            weight: 400,
            style: "normal",
          },
        ],
      },
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
