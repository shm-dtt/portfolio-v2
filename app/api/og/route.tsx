/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const hasTitle = searchParams.has("title");
  const title = hasTitle ? searchParams.get("title") : "Default Blog Title";

  const hasDate = searchParams.has("date");
  const date = hasDate ? searchParams.get("date") : "01/01/2000";

  const font_beto = await fetch(
    new URL("../../assets/BwBetoBold.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const font_gilroy = await fetch(
    new URL("../../assets/Gilroy-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const image = await fetch(
    new URL("../../assets/og-background.jpg", import.meta.url)
  ).then((res) => res.arrayBuffer());

  try {
    return new ImageResponse(
      (
        <div tw="flex">
          <img src={image} alt="OG Image" />
          <div tw="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-3xl font-bold p-8">
            <h1 style={{ fontFamily: "BwBetoBold" }}>{title}</h1>
            <h2 style={{ fontFamily: "Gilroy" }}>soham dutta.</h2>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "BwBetoBold",
            data: font_beto,
            style: "bold",
          },
          {
            name: "Gilroy",
            data: font_gilroy,
            style: "medium",
          }
        ],
      }
    );
  } catch (e) {
    console.log(e);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
